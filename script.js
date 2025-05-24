// --- Helper Functions (Defined at the very top) ---
async function fetchWithTimeout(resource, options = {}, timeout = 8000) {
    const controller = new AbortController();
    const id = setTimeout(() => {
        controller.abort();
        console.warn(`Fetch to ${resource} timed out after ${timeout}ms`);
    }, timeout);

    try {
        const response = await fetch(resource, { ...options, signal: controller.signal });
        clearTimeout(id);
        return response;
    } catch (error) {
        clearTimeout(id);
        console.error(`Fetch error for ${resource}:`, error.name, error.message);
        throw error;
    }
}

function toNativeNumeral(numStr, lang) {
    if (lang === 'bn') {
        const bengaliDigits = ['০', '১', '২', '৩', '৪', '৫', '৬', '৭', '৮', '৯'];
        return String(numStr).split('').map(digit => /\d/.test(digit) ? bengaliDigits[parseInt(digit)] : digit).join('');
    } else if (lang === 'ar') {
        const arabicDigits = ['٠', '١', '٢', '٣', '٤', '٥', '٦', '٧', '٨', '٩'];
        return String(numStr).split('').map(digit => /\d/.test(digit) ? arabicDigits[parseInt(digit)] : digit).join('');
    }
    return String(numStr);
}

// --- Global Constants and Variables ---
const translations = { /* ... আপনার সম্পূর্ণ translations অবজেক্ট ... */ };
const countryToLangMap = { /* ... */ };
const langToLocaleMap = { /* ... */ };
const supportedLanguages = Object.keys(translations);
const hijriMonthsData = { /* ... আপনার সম্পূর্ণ hijriMonthsData অবজেক্ট ... */ };

let currentLang = 'bn';
let userTimeZone = 'Etc/UTC';
let userLocale = 'bn-BD';
let currentTheme = 'dark';
let timeOffset = 0;
let initialTimeSynced = false;
let musicPlayAttemptedOnInteraction = false;
let canAutoplayAudio = false;
let statusTimeout;


// --- DOM Element Selectors (Ensure these are correct) ---
const backgroundMusic = document.getElementById('backgroundMusic');
const userNameInput = document.getElementById('userNameInput');
const generateButton = document.getElementById('generateButton');
const statusMessageDiv = document.getElementById('statusMessage');
const currentTimeEl = document.getElementById('currentTime');
const currentDateEl = document.getElementById('currentDate');
const currentHijriDateEl = document.getElementById('currentHijriDate');
const greetingMessageEl = document.getElementById('greetingMessage');
const eidVideoEl = document.getElementById('eidVideo');
const languageSelector = document.getElementById('languageSelector');
const musicToggleButton = document.getElementById('musicToggleButton');
const musicIconPlay = document.getElementById('musicIconPlay');
const musicIconPause = document.getElementById('musicIconPause');
const themeToggleButton = document.getElementById('themeToggleButton');
const themeIconDark = document.getElementById('themeIconDark');
const themeIconLight = document.getElementById('themeIconLight');


// --- Core Application Functions (Defined before window.onload) ---

function getTranslation(key, params = {}) { /* ... আগের মতোই ... */ }
function applyTranslations() { /* ... আগের মতোই ... */ }
async function determineLanguageAndLocation() { /* ... আগের মতোই ... */ }
async function fetchCorrectTime() { /* ... আগের মতোই ... */ }
function initializeDateTimeDisplay() { /* ... আগের মতোই ... */ }
function determineEidName(hijriMonth, hijriDay) { /* ... আগের মতোই ... */ }
function updateGreetingMessageWithEid() { /* ... আগের মতোই ... */ }
function updateTimeDate() { /* ... আগের মতোই, toNativeNumeral এর ভ্যালিডেশন সহ ... */ }
function updateMusicButton() { /* ... আগের মতোই ... */ }
function attemptMusicPlay(interactionType = "user_interaction") { /* ... আগের মতোই ... */ }
function toggleMusic() { /* ... আগের মতোই ... */ }
function handleFirstUserInteractionForMedia(event) { /* ... আগের মতোই ... */ }

function setLanguage(langCode) {
    if (supportedLanguages.includes(langCode) && currentLang !== langCode) {
        currentLang = langCode;
        userLocale = langToLocaleMap[currentLang] || (currentLang === 'bn' ? 'bn-BD' : 'en-US');
        localStorage.setItem('preferredLang', currentLang);
        document.documentElement.lang = currentLang;
        if (document.body) document.body.lang = currentLang;
        if (languageSelector) languageSelector.value = currentLang;
        applyTranslations();
        updateGreetingMessageWithEid();
        updateTimeDate();
    }
}

function setTheme(themeName) {
    localStorage.setItem('preferredTheme', themeName);
    if (document.body) document.body.setAttribute('data-theme', themeName);
    currentTheme = themeName;
    if (themeIconDark && themeIconLight && themeToggleButton) {
        if (themeName === 'dark') {
            themeIconDark.style.display = 'inline';
            themeIconLight.style.display = 'none';
            themeToggleButton.setAttribute('aria-label', getTranslation('themeLight'));
        } else {
            themeIconDark.style.display = 'none';
            themeIconLight.style.display = 'inline';
            themeToggleButton.setAttribute('aria-label', getTranslation('themeDark'));
        }
    }
}

function toggleTheme() {
    const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
    setTheme(newTheme);
}

function showStatusMessage(messageKey, type = 'info', duration = 3000, params = {}) { /* ... আগের মতোই ... */ }
async function generateAndShareLink() { /* ... আগের মতোই ... */ }
function showManualLink(link) { /* ... আগের মতোই ... */ }
function copyLink() { /* ... আগের মতোই ... */ }


// --- Window Onload Event ---
window.onload = async function() {
    console.log("Window.onload started");
    // Ensure body exists before setting theme
    if (document.body) {
        const savedTheme = localStorage.getItem('preferredTheme');
        // setTheme ফাংশনটি এখন এর উপরে ডিফাইন করা আছে
        setTheme(savedTheme && (savedTheme === 'light' || savedTheme === 'dark') ? savedTheme : 'dark');
    } else {
        console.error("document.body not found on window.onload start");
    }

    await determineLanguageAndLocation();
    await fetchCorrectTime();
    initializeDateTimeDisplay();
    updateGreetingMessageWithEid();

    // ... (বাকি মিডিয়া প্লেব্যাক, ইভেন্ট লিসেনার, ফায়ারওয়ার্কস আগের window.onload এর মতোই)
        if (eidVideoEl) {
        eidVideoEl.muted = true;
        const videoPlayPromise = eidVideoEl.play();
        if (videoPlayPromise !== undefined) {
            videoPlayPromise.catch(error => {
                console.warn("Video autoplay was prevented:", error.name, error.message);
                if (!musicPlayAttemptedOnInteraction) {
                     document.body.addEventListener('click', handleFirstUserInteractionForMedia, { once: true });
                     document.body.addEventListener('touchstart', handleFirstUserInteractionForMedia, { once: true });
                }
            });
        }
        eidVideoEl.onerror = function() { console.error("Error loading video: " + (eidVideoEl.error ? eidVideoEl.error.message : 'Unknown error')); };
    }

    if (backgroundMusic) {
        updateMusicButton(); // Set initial button state
        attemptMusicPlay("initial_autoplay_attempt").catch(err => { /* Error handled in func */ });
        backgroundMusic.onplay = updateMusicButton;
        backgroundMusic.onpause = updateMusicButton;
        backgroundMusic.onended = () => { if (!backgroundMusic.loop) { updateMusicButton(); }};
        backgroundMusic.onerror = function() { console.error("Error with background music: " + (backgroundMusic.error ? backgroundMusic.error.message : 'Unknown error')); showStatusMessage('musicPlayError', 'error');}
    }

    // Event listeners for controls
    if (languageSelector) {
        languageSelector.addEventListener('change', (event) => {
            setLanguage(event.target.value);
        });
    }
    if (musicToggleButton) {
        musicToggleButton.addEventListener('click', toggleMusic);
    }
    if (themeToggleButton) {
        themeToggleButton.addEventListener('click', toggleTheme);
    }

    // Input field and generate button logic
    if (generateButton && userNameInput) {
        generateButton.disabled = true;
        userNameInput.addEventListener('input', function() {
            generateButton.disabled = userNameInput.value.trim() === "";
        });
    }

    // Fireworks
    if (typeof startFireworks === 'function' && typeof animateFireworks === 'function') {
        startFireworks();
        animateFireworks();
    } else {
        console.error("Fireworks functions not loaded correctly.");
    }
    console.log("Window.onload finished");
};

// --- `getTranslation`, `applyTranslations`, `determineLanguageAndLocation`, etc. ফাংশনগুলোর সম্পূর্ণ কোড এখানে যোগ করতে হবে ---
// --- (আগের উত্তর থেকে এই ফাংশনগুলোর কোড কপি করে এখানে পেস্ট করুন) ---
// আমি শুধু ফাংশনের নামগুলো নিচে আবার উল্লেখ করছি যাতে ক্রম ঠিক থাকে:
/*
function getTranslation(key, params = {}) { ... }
function applyTranslations() { ... }
async function determineLanguageAndLocation() { ... }
async function fetchCorrectTime() { ... }
function initializeDateTimeDisplay() { ... }
function determineEidName(hijriMonth, hijriDay) { ... }
function updateGreetingMessageWithEid() { ... }
function updateTimeDate() { ... }
function updateMusicButton() { ... }
function attemptMusicPlay(interactionType = "user_interaction") { ... }
function toggleMusic() { ... }
function handleFirstUserInteractionForMedia(event) { ... }
// setLanguage(), setTheme(), toggleTheme() - এগুলো window.onload এর আগে ডিফাইন করা হয়েছে।
function showStatusMessage(messageKey, type = 'info', duration = 3000, params = {}) { ... }
async function generateAndShareLink() { ... }
function showManualLink(link) { ... }
function copyLink() { ... }
*/
