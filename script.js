// script.js

// ... (আগের সব কোড অপরিবর্তিত) ...

function attemptMusicPlay(interactionType = "user_interaction") {
    return new Promise((resolve, reject) => {
        if (backgroundMusic && backgroundMusic.paused) {
            const playPromise = backgroundMusic.play();
            if (playPromise !== undefined) {
                playPromise.then(() => {
                    musicPlayAttemptedOnInteraction = true;
                    canAutoplayAudio = true;
                    updateMusicButton();
                    if (interactionType === "user_interaction") {
                        document.body.removeEventListener('click', handleFirstUserInteractionForMedia);
                        document.body.removeEventListener('touchstart', handleFirstUserInteractionForMedia);
                    }
                    resolve(true); // মিউজিক প্লে সফল
                }).catch(error => {
                    console.warn(`Music play failed (${interactionType}):`, error.name, error.message);
                    updateMusicButton();
                    if (error.name === 'NotAllowedError' && interactionType !== "user_interaction") {
                        document.body.addEventListener('click', handleFirstUserInteractionForMedia, { once: true });
                        document.body.addEventListener('touchstart', handleFirstUserInteractionForMedia, { once: true });
                    }
                    reject(error); // মিউজিক প্লে ব্যর্থ
                });
            } else {
                // play() did not return a promise
                updateMusicButton();
                console.warn("backgroundMusic.play() did not return a promise.");
                reject(new Error("play() did not return a promise."));
            }
        } else if (backgroundMusic && !backgroundMusic.paused) {
            // console.log("Music already playing.");
            resolve(true); // মিউজিক আগে থেকেই চলছে
        } else if (!backgroundMusic) {
            console.error("Background music element not found during attemptMusicPlay.");
            reject(new Error("Background music element not found."));
        } else {
            // মিউজিক আছে, কিন্তু paused নয় এবং playing ও নয় (অসম্ভব অবস্থা) অথবা paused এবং কোনো কারণে উপরের কন্ডিশন ম্যাচ করেনি।
            // console.log("Music exists but is not paused, or another condition not met for playing.");
            resolve(false); // কোনো অ্যাকশন নেওয়া হয়নি
        }
    });
}

// ... (বাকি সব কোড অপরিবর্তিত) ...

window.onload = async function() {
    console.log("Window.onload started");
    if (document.body) {
        const savedTheme = localStorage.getItem('preferredTheme');
        setTheme(savedTheme && (savedTheme === 'light' || savedTheme === 'dark') ? savedTheme : 'dark');
    }

    await determineLanguageAndLocation();
    await fetchCorrectTime();
    initializeDateTimeDisplay();
    updateGreetingMessageWithEid();

    if (eidVideoEl) {
        eidVideoEl.muted = true;
        const videoPlayPromise = eidVideoEl.play(); // এটি একটি Promise রিটার্ন করে
        if (videoPlayPromise !== undefined) {
            videoPlayPromise.catch(error => { // .catch() এখানে কল করা হচ্ছে Promise এর ওপর
                console.warn("Video autoplay was prevented:", error.name, error.message);
                if (!musicPlayAttemptedOnInteraction) {
                     document.body.addEventListener('click', handleFirstUserInteractionForMedia, { once: true });
                     document.body.addEventListener('touchstart', handleFirstUserInteractionForMedia, { once: true });
                }
            });
        }
        eidVideoEl.onerror = function() { /* ... */ };
    }

    if (backgroundMusic) {
        updateMusicButton();
        // attemptMusicPlay এখন সবসময় একটি Promise রিটার্ন করে
        attemptMusicPlay("initial_autoplay_attempt")
            .then(played => {
                if(played) console.log("Initial music autoplay attempt successful or already playing.");
                // else console.log("Initial music autoplay attempt did not play music (e.g. already playing or no action needed).");
            })
            .catch(err => {
                // console.warn("Initial music autoplay attempt failed and was caught:", err.message);
                // এরর হ্যান্ডলিং (যেমন ইউজার ইন্টার‍্যাকশন লিসেনার যোগ করা) attemptMusicPlay এর ভেতরেই হচ্ছে
            });
        backgroundMusic.onplay = updateMusicButton;
        backgroundMusic.onpause = updateMusicButton;
        backgroundMusic.onended = () => { if (!backgroundMusic.loop) { updateMusicButton(); }};
        backgroundMusic.onerror = function() { /* ... */ };
    }

    // ... (বাকি ইভেন্ট লিসেনার এবং কোড অপরিবর্তিত) ...
    console.log("Window.onload finished");
};

// ... (generateAndShareLink ফাংশনের ভেতরে attemptMusicPlay এর ব্যবহারও ঠিক আছে, কারণ এটি Promise রিটার্ন করে)
async function generateAndShareLink() {
    // ... ( আগের কোড )
    if (backgroundMusic && backgroundMusic.paused) { // শুধু paused হলেই প্লে করার চেষ্টা করা হবে
        let playedOnShare = false;
        if (!musicPlayAttemptedOnInteraction) {
            playedOnShare = await attemptMusicPlay("user_interaction").catch(err => {console.warn("Music play on share (first time) failed:", err); return false;});
        } else if (canAutoplayAudio) { // যদি আগে অনুমতি পেয়ে থাকে
            playedOnShare = await attemptMusicPlay("implicit_permission").catch(err => {console.warn("Music play on share (implicit) failed:", err); return false;});
        }
        if (playedOnShare) console.log("Music played/resumed on share action.");
    }
    // ... (বাকি কোড)
}

// ... (অন্যান্য সব ফাংশন অপরিবর্তিত)
