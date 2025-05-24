// Helper functions (fetchWithTimeout, toNativeNumeral - আগের মতোই ফাইলের শুরুতে থাকবে)
async function fetchWithTimeout(resource, options = {}, timeout = 8000) { /*...*/ }
function toNativeNumeral(numStr, lang) { /*...*/ }

const translations = { /* ... */ };
const countryToLangMap = { /* ... */ };
const langToLocaleMap = { /* ... */ };
const supportedLanguages = Object.keys(translations);

let currentLang = 'bn'; // ডিফল্ট ভাষা
let userTimeZone = 'Etc/UTC'; // ডিফল্ট টাইমজোন
let userLocale = 'bn-BD'; // ডিফল্ট লোকাল
let currentTheme = 'dark';

// DOM Elements
const backgroundMusic = document.getElementById('backgroundMusic');
// ... (অন্যান্য এলিমেন্ট অপরিবর্তিত)
const currentTimeEl = document.getElementById('currentTime');
const currentDateEl = document.getElementById('currentDate');
const currentHijriDateEl = document.getElementById('currentHijriDate');
const greetingMessageEl = document.getElementById('greetingMessage');
const eidVideoEl = document.getElementById('eidVideo');
const languageSelector = document.getElementById('languageSelector');
// ... (বাকি সব)
const userNameInput = document.getElementById('userNameInput');
const generateButton = document.getElementById('generateButton');
const statusMessageDiv = document.getElementById('statusMessage');
const musicToggleButton = document.getElementById('musicToggleButton');
const musicIconPlay = document.getElementById('musicIconPlay');
const musicIconPause = document.getElementById('musicIconPause');
const themeToggleButton = document.getElementById('themeToggleButton');
const themeIconDark = document.getElementById('themeIconDark');
const themeIconLight = document.getElementById('themeIconLight');


let timeOffset = 0;
let initialTimeSynced = false;
let musicPlayAttemptedOnInteraction = false;
let canAutoplayAudio = false;

const hijriMonthsData = {
    'bn': ["মহররম", "সফর", "রবিউল আউয়াল", "রবিউস সানি", "জমাদিউল আউয়াল", "জমাদিউস সানি", "রজব", "শাবান", "রমজান", "শাওয়াল", "জ্বিলকদ", "জ্বিলহজ্জ"],
    'en': ["Muharram", "Safar", "Rabi' al-awwal", "Rabi' al-thani", "Jumada al-awwal", "Jumada al-thani", "Rajab", "Sha'ban", "Ramadan", "Shawwal", "Dhu al-Qi'dah", "Dhu al-Hijjah"],
    'ar': ["محرم", "صفر", "ربيع الأول", "ربيع الثاني", "جمادى الأولى", "جمادى الآخرة", "رجب", "شعبان", "رمضان", "شوال", "ذو القعدة", "ذو الحجة"],
    'es': ["Muharram", "Safar", "Rabi' al-awwal", "Rabi' al-thani", "Jumada al-awwal", "Jumada al-thani", "Rajab", "Sha'ban", "Ramadán", "Shawwal", "Dhu ul-Qi'dah", "Dhu ul-Hiyya"]
};


function getTranslation(key, params = {}) { /* ... আগের মতোই ... */
    let text;
    if (translations[currentLang] && typeof translations[currentLang][key] !== 'undefined') {
        text = translations[currentLang][key];
    } else if (translations['en'] && typeof translations['en'][key] !== 'undefined') {
        text = translations['en'][key];
    } else {
        text = key;
    }
    for (const param in params) {
        text = text.replace(`{${param}}`, params[param]);
    }
    return text;
}

function applyTranslations() { /* ... আগের মতোই ... */
    document.querySelectorAll('[data-lang-key]').forEach(element => {
        const key = element.getAttribute('data-lang-key');
        const translatedText = getTranslation(key);
        if (element.tagName === 'INPUT' && element.hasAttribute('placeholder')) {
            element.placeholder = translatedText;
        } else {
            element.textContent = translatedText;
        }
    });
    document.title = getTranslation('pageTitle');
    if (musicToggleButton && backgroundMusic) {
        musicToggleButton.setAttribute('aria-label', backgroundMusic.paused ? getTranslation('toggleMusicPlay') : getTranslation('toggleMusicPause'));
    }
    if (themeToggleButton) {
        themeToggleButton.setAttribute('aria-label', currentTheme === 'dark' ? getTranslation('themeLight') : getTranslation('themeDark'));
    }
}

async function determineLanguageAndLocation() {
    // fallback values before API calls
    currentLang = localStorage.getItem('preferredLang') || (navigator.language || 'bn-BD').split('-')[0] || 'bn';
    if (!supportedLanguages.includes(currentLang)) currentLang = 'bn';
    userLocale = langToLocaleMap[currentLang] || 'bn-BD';
    userTimeZone = Intl.DateTimeFormat().resolvedOptions().timeZone || 'Etc/UTC';

    document.documentElement.lang = currentLang;
    if (document.body) document.body.lang = currentLang;
    if (languageSelector) languageSelector.value = currentLang;
    applyTranslations(); // Apply initial translations with defaults

    const urlParams = new URLSearchParams(window.location.search);
    const langParam = urlParams.get('lang');
    if (langParam && supportedLanguages.includes(langParam)) {
        currentLang = langParam;
    } else {
        const savedLang = localStorage.getItem('preferredLang');
        if (savedLang && supportedLanguages.includes(savedLang)) {
            currentLang = savedLang;
        }
    }
    // Update lang again if params/storage override navigator
    if (languageSelector) languageSelector.value = currentLang;
    document.documentElement.lang = currentLang;
    if (document.body) document.body.lang = currentLang;
    userLocale = langToLocaleMap[currentLang] || (currentLang === 'bn' ? 'bn-BD' : 'en-US');


    try {
        const response = await fetchWithTimeout('https://ip-api.com/json/?fields=status,message,timezone,countryCode', { cache: 'no-store' });
        if (!response.ok) throw new Error(`IP API HTTP error! status: ${response.status} ${response.statusText}`);
        const data = await response.json();
        if (data.status === 'success') {
            if (data.countryCode && !langParam && !localStorage.getItem('preferredLang')) { // Only use IP for lang if no explicit choice
                const langFromCountry = countryToLangMap[data.countryCode];
                if (langFromCountry && supportedLanguages.includes(langFromCountry)) {
                    currentLang = langFromCountry;
                }
            }
            if (data.timezone) {
                userTimeZone = data.timezone;
            }
        } else {
            console.warn('Failed to get country/timezone from IP API. Message:', data.message);
        }
    } catch (error) {
        console.error("Error fetching user geolocation data from IP API:", error.name, error.message);
        // userTimeZone remains browser's or Etc/UTC
    }

    // Final update of lang and locale after IP API potentially changed currentLang
    document.documentElement.lang = currentLang;
    if (document.body) document.body.lang = currentLang;
    if (languageSelector) languageSelector.value = currentLang;
    userLocale = langToLocaleMap[currentLang] || (currentLang === 'bn' ? 'bn-BD' : 'en-US');

    console.log(`Final App language: ${currentLang}, Locale: ${userLocale}, Timezone: ${userTimeZone}`);
    applyTranslations(); // Apply translations again with final determined values
}


async function fetchCorrectTime() {
    let success = false;
    console.log(`Attempting to fetch time for timezone: ${userTimeZone}`);
    try {
        const response = await fetchWithTimeout(`https://worldtimeapi.org/api/timezone/${userTimeZone}`, { cache: 'no-store' });
        if (response.ok) {
            const data = await response.json();
            const serverTime = new Date(data.utc_datetime);
            const clientTimeAtFetch = new Date();
            timeOffset = serverTime.getTime() - clientTimeAtFetch.getTime();
            initialTimeSynced = true;
            success = true;
            console.log(`Time synced using WorldTimeAPI. Offset: ${timeOffset} ms.`);
        } else {
            let errorText = ""; try { errorText = await response.text(); } catch (e) {}
            console.error(`WorldTimeAPI HTTP error! Status: ${response.status} for timezone: ${userTimeZone}. Response: ${errorText}`);
        }
    } catch (error) {
        console.error("Failed to fetch correct time from WorldTimeAPI:", error.name, error.message);
    }
    if (!success) {
        console.warn("Using local device time as fallback. Ensure device clock is accurate.");
        timeOffset = 0;
        initialTimeSynced = false;
    }
    // updateTimeDate(); // This will be called by initializeDateTimeDisplay or onload flow
    return success;
}

function initializeDateTimeDisplay() { /* ... আগের মতোই ... */
    if(!currentTimeEl || !currentDateEl || !currentHijriDateEl){ console.error("Date/Time elements not found for initialization."); return; }
    updateTimeDate(); // Call once immediately
    setInterval(updateTimeDate,1000);
}

function determineEidName(hijriMonth, hijriDay) { /* ... আগের মতোই ... */
    if (hijriMonth === 10 && hijriDay >= 1 && hijriDay <= 3) { return getTranslation('eidAlFitr'); }
    if (hijriMonth === 12 && hijriDay >= 9 && hijriDay <= 13) { return getTranslation('eidAlAdha'); }
    return null;
}

function updateGreetingMessageWithEid() { /* ... আগের মতোই ... */
    if (!greetingMessageEl) { return; }
    const clientNow = new Date();
    const correctedNow = new Date(clientNow.getTime() + timeOffset);
    const currentGregorianYear = correctedNow.getFullYear();
    let eidName = null;

    if (typeof HijriDate !== 'undefined' && HijriDate.JS && typeof HijriDate.JS.convert === 'function') {
        try {
            const hijriInstance = HijriDate.JS.convert(correctedNow);
            if (hijriInstance && typeof hijriInstance.getMonth === 'function') {
                const hijriMonth = hijriInstance.getMonth();
                const hijriDay = hijriInstance.getDate();
                eidName = determineEidName(hijriMonth, hijriDay);
            }
        } catch (e) { console.error("Error determining Eid name from Hijri date:", e); }
    }

    const urlParams = new URLSearchParams(window.location.search);
    const sharerNameParam = urlParams.get('name');
    let finalGreetingMessage;
    let finalPageTitle;

    if (eidName) {
        const yearText = toNativeNumeral(currentGregorianYear, currentLang);
        if (sharerNameParam) {
            finalGreetingMessage = getTranslation('greetingMessageFromEid', { name: decodeURIComponent(sharerNameParam), eidName: eidName, year: yearText });
        } else {
            finalGreetingMessage = getTranslation('greetingMessageEid', { eidName: eidName, year: yearText });
        }
        finalPageTitle = getTranslation('pageTitleEid', { eidName: eidName, year: yearText });
    } else {
        if (sharerNameParam) {
            finalGreetingMessage = getTranslation('greetingMessageFrom', { name: decodeURIComponent(sharerNameParam) });
        } else {
            finalGreetingMessage = getTranslation('greetingMessage');
        }
        finalPageTitle = getTranslation('pageTitle');
    }
    greetingMessageEl.textContent = finalGreetingMessage;
    document.title = finalPageTitle;
    greetingMessageEl.style.animation = 'none';
    greetingMessageEl.offsetHeight;
    greetingMessageEl.style.animation = null;
}

function updateTimeDate() {
    // Ensure currentLang is valid before proceeding, especially for hijriMonthsData
    if (!currentLang || !hijriMonthsData[currentLang]) {
        // console.warn(`updateTimeDate: currentLang ('${currentLang}') is not ready or invalid for hijriMonthsData. Postponing Hijri update.`);
        // Update Gregorian time/date only if Hijri part is not ready
        const clientNowBasic = new Date();
        const correctedNowBasic = new Date(clientNowBasic.getTime() + timeOffset);
        const timeOptionsBasic = { hour: 'numeric', minute: '2-digit', second: '2-digit', hour12: true, timeZone: userTimeZone };
        if (currentTimeEl) currentTimeEl.textContent = `${getTranslation('timeLabel')}: ${correctedNowBasic.toLocaleTimeString(userLocale, timeOptionsBasic)}`;
        const dateOptionsBasic = { day: 'numeric', month: 'long', year: 'numeric', timeZone: userTimeZone };
        if (currentDateEl) currentDateEl.textContent = `${getTranslation('dateLabel')}: ${correctedNowBasic.toLocaleDateString(userLocale, dateOptionsBasic)}`;
        if (currentHijriDateEl) currentHijriDateEl.textContent = getTranslation('hijriDateLoading'); // Show loading for Hijri
        return; // Exit early if lang setup not complete for Hijri
    }

    const clientNow = new Date();
    const correctedNow = new Date(clientNow.getTime() + timeOffset);

    const timeOptions = { hour: 'numeric', minute: '2-digit', second: '2-digit', hour12: true };
    if (userTimeZone && userTimeZone !== 'Etc/Unknown' && userTimeZone !== 'Etc/UTC') { // Avoid Etc/UTC if it's a fallback
        try {
            // Test if timezone is valid for toLocaleTimeString
            new Date().toLocaleTimeString('en-US', {timeZone: userTimeZone});
            timeOptions.timeZone = userTimeZone;
        } catch (e) {
            console.warn(`Invalid timezone '${userTimeZone}' for time formatting. Using local.`);
            // userTimeZone remains, but won't be used in options here if invalid
        }
    }

    let timeString;
    try {
        timeString = correctedNow.toLocaleTimeString(userLocale, timeOptions);
    } catch (e) {
        delete timeOptions.timeZone; // Remove potentially problematic TZ
        try { timeString = correctedNow.toLocaleTimeString(userLocale, timeOptions); }
        catch (e2) { console.error(`Fallback time formatting also failed. Error: ${e2.message}`); timeString = "N/A"; }
    }
    if (currentTimeEl) currentTimeEl.textContent = `${getTranslation('timeLabel')}: ${timeString}`;

    const dateOptions = { day: 'numeric', month: 'long', year: 'numeric' };
     if (userTimeZone && userTimeZone !== 'Etc/Unknown' && userTimeZone !== 'Etc/UTC') {
        try {
            new Date().toLocaleDateString('en-US', {timeZone: userTimeZone});
            dateOptions.timeZone = userTimeZone;
        } catch (e) {
            console.warn(`Invalid timezone '${userTimeZone}' for date formatting. Using local.`);
        }
    }
    let dateString;
    try {
        dateString = correctedNow.toLocaleDateString(userLocale, dateOptions);
    } catch (e) {
        delete dateOptions.timeZone;
        try { dateString = correctedNow.toLocaleDateString(userLocale, dateOptions); }
        catch (e2) { console.error(`Fallback date formatting also failed. Error: ${e2.message}`); dateString = "N/A"; }
    }
    if (currentDateEl) currentDateEl.textContent = `${getTranslation('dateLabel')}: ${dateString}`;

    if (currentHijriDateEl) {
        if (typeof HijriDate !== 'undefined' && HijriDate.JS && typeof HijriDate.JS.convert === 'function') {
            try {
                const hijriInstance = HijriDate.JS.convert(correctedNow);
                if (hijriInstance && typeof hijriInstance.getDate === 'function' && typeof hijriInstance.getMonth === 'function') {
                    const hijriDay = toNativeNumeral(hijriInstance.getDate(), currentLang);
                    const hijriMonthIndex = hijriInstance.getMonth() - 1; // Hijri.JS month is 1-indexed
                    
                    const currentValidHijriMonths = hijriMonthsData[currentLang] || hijriMonthsData['en']; // Ensure fallback

                    if (currentValidHijriMonths && hijriMonthIndex >= 0 && hijriMonthIndex < currentValidHijriMonths.length) {
                        const hijriMonthName = currentValidHijriMonths[hijriMonthIndex];
                        const hijriYear = toNativeNumeral(hijriInstance.getFullYear(), currentLang);
                        currentHijriDateEl.textContent = `${getTranslation('hijriDateLabel')}: ${hijriDay} ${hijriMonthName}, ${hijriYear} ${getTranslation('hijriYearSuffix')}`;
                    } else {
                        console.error("Invalid Hijri month index or month data unavailable:", hijriMonthIndex, "Lang:", currentLang);
                        currentHijriDateEl.textContent = getTranslation('hijriCalcError');
                    }
                } else {
                    console.error("HijriDate conversion returned invalid object or methods missing.");
                    currentHijriDateEl.textContent = getTranslation('hijriCalcError');
                }
            } catch (e) {
                console.error("Error updating Hijri date:", e);
                currentHijriDateEl.textContent = getTranslation('hijriDateError');
            }
        } else {
            currentHijriDateEl.textContent = getTranslation('hijriNotLoaded');
        }
    }
}


// updateMusicButton, attemptMusicPlay, toggleMusic, handleFirstUserInteractionForMedia - আগের মতোই
// setLanguage, setTheme, toggleTheme - আগের মতোই
function updateMusicButton() { /* ... আগের মতোই ... */
    if (!musicToggleButton || !musicIconPlay || !musicIconPause || !backgroundMusic) return;
    if (backgroundMusic.paused) {
        musicIconPlay.style.display = 'inline';
        musicIconPause.style.display = 'none';
        musicToggleButton.setAttribute('aria-label', getTranslation('toggleMusicPlay'));
    } else {
        musicIconPlay.style.display = 'none';
        musicIconPause.style.display = 'inline';
        musicToggleButton.setAttribute('aria-label', getTranslation('toggleMusicPause'));
    }
}

function attemptMusicPlay(interactionType = "user_interaction") { /* ... আগের মতোই ... */
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
                    resolve(true);
                }).catch(error => {
                    console.warn(`Music play failed (${interactionType}):`, error.name, error.message);
                    updateMusicButton();
                    if (error.name === 'NotAllowedError' && interactionType !== "user_interaction") {
                        document.body.addEventListener('click', handleFirstUserInteractionForMedia, { once: true });
                        document.body.addEventListener('touchstart', handleFirstUserInteractionForMedia, { once: true });
                    }
                    reject(error);
                });
            } else {
                updateMusicButton();
                reject(new Error("play() did not return a promise."));
            }
        } else if (backgroundMusic && !backgroundMusic.paused) {
            resolve(true);
        } else if (!backgroundMusic) {
            reject(new Error("Background music element not found."));
        } else {
            resolve(false);
        }
    });
}

function toggleMusic() { /* ... আগের মতোই ... */
    if (!backgroundMusic) return;
    if (backgroundMusic.paused) {
        attemptMusicPlay("user_interaction").catch(err => console.warn("Toggle music play failed:", err));
    } else {
        backgroundMusic.pause();
    }
}

function handleFirstUserInteractionForMedia(event) { /* ... আগের মতোই ... */
    if (!musicPlayAttemptedOnInteraction) {
        attemptMusicPlay("user_interaction").catch(err => console.warn("First interaction music play failed:", err));
    }
    if (eidVideoEl && eidVideoEl.paused) {
        eidVideoEl.play().catch(e => console.warn("Video play failed on interaction:", e));
    }
}

function setLanguage(langCode) { /* ... আগের মতোই ... */
    if (supportedLanguages.includes(langCode) && currentLang !== langCode) {
        currentLang = langCode;
        userLocale = langToLocaleMap[currentLang] || (currentLang === 'bn' ? 'bn-BD' : 'en-US');
        localStorage.setItem('preferredLang', currentLang);
        document.documentElement.lang = currentLang;
        if (document.body) document.body.lang = currentLang;
        if (languageSelector) languageSelector.value = currentLang;
        applyTranslations();
        updateGreetingMessageWithEid();
        updateTimeDate(); // Call updateTimeDate after language change to reflect new lang in Hijri
    }
}

function setTheme(themeName) { /* ... আগের মতোই ... */
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

function toggleTheme() { /* ... আগের মতোই ... */
    const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
    setTheme(newTheme);
}


window.onload = async function() {
    console.log("Window onload sequence started.");

    // Set theme first
    if (document.body) {
      const savedTheme = localStorage.getItem('preferredTheme');
      if (savedTheme && (savedTheme === 'light' || savedTheme === 'dark')) {
          setTheme(savedTheme);
      } else {
          setTheme('dark'); // Default to dark
      }
    }

    // Determine language and location, this will also apply initial translations
    await determineLanguageAndLocation();

    // Fetch correct time
    await fetchCorrectTime();

    // Initialize date/time display which calls updateTimeDate
    initializeDateTimeDisplay();

    // Update greeting message (might depend on Hijri date which depends on time)
    updateGreetingMessageWithEid();


    // Media playback attempts
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
        eidVideoEl.onerror = function() { console.error("Error loading video: " + eidVideoEl.error.message); };
    }

    if (backgroundMusic) {
        updateMusicButton(); // Set initial button state
        attemptMusicPlay("initial_autoplay_attempt").catch(err => { /* Error handled in func */ });
        backgroundMusic.onplay = updateMusicButton;
        backgroundMusic.onpause = updateMusicButton;
        backgroundMusic.onended = () => { if (!backgroundMusic.loop) { updateMusicButton(); }};
        backgroundMusic.onerror = function() { console.error("Error with background music: " + backgroundMusic.error.message); showStatusMessage('musicPlayError', 'error');}
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
    console.log("Window onload sequence finished.");
};

// showStatusMessage, generateAndShareLink, showManualLink, copyLink - আগের মতোই
function showStatusMessage(messageKey, type = 'info', duration = 3000, params = {}) { /* ... */ }
async function generateAndShareLink() { /* ... */ }
function showManualLink(link) { /* ... */ }
function copyLink() { /* ... */ }
// নিচের ফাংশনগুলো আগের মতই থাকবে
function showStatusMessage(messageKey, type = 'info', duration = 3000, params = {}) { if (!statusMessageDiv) return; clearTimeout(statusTimeout); statusMessageDiv.textContent = getTranslation(messageKey, params); statusMessageDiv.className = ''; statusMessageDiv.classList.add(type); statusMessageDiv.style.display = 'block'; setTimeout(() => { statusMessageDiv.style.opacity = '1'; }, 10); statusTimeout = setTimeout(() => { statusMessageDiv.style.opacity = '0'; setTimeout(() => { statusMessageDiv.style.display = 'none'; }, 500); }, duration); }
async function generateAndShareLink() { if (!userNameInput || !generateButton) return; const userName = userNameInput.value.trim(); if (userName === "") { showStatusMessage("statusEnterName", "error"); return; }
    if (backgroundMusic && backgroundMusic.paused && !musicPlayAttemptedOnInteraction) {
        await attemptMusicPlay("user_interaction").catch(err => console.warn("Music play on share failed:", err));
    } else if (backgroundMusic && backgroundMusic.paused && musicPlayAttemptedOnInteraction && canAutoplayAudio) {
         await attemptMusicPlay("implicit_permission").catch(err => console.warn("Music play on share (implicit) failed:", err));
    }

    const currentUrl = new URL(window.location.href); currentUrl.searchParams.set('name', userName); const newLink = currentUrl.toString(); const sharerNameForMessage = decodeURIComponent(userName);
    const clientNow = new Date(); const correctedNow = new Date(clientNow.getTime() + timeOffset); const currentGregorianYear = correctedNow.getFullYear(); let eidName = null;
    if (typeof HijriDate !== 'undefined' && HijriDate.JS && typeof HijriDate.JS.convert === 'function') { try { const hijriInstance = HijriDate.JS.convert(correctedNow); if (hijriInstance && typeof hijriInstance.getMonth === 'function') { eidName = determineEidName(hijriInstance.getMonth(), hijriInstance.getDate()); } } catch(e){console.error("Error determining Eid for share link:", e);} }

    let shareTextBase;
    if (eidName) {
        shareTextBase = getTranslation('greetingMessageFromEid', {name: sharerNameForMessage, eidName: eidName, year: toNativeNumeral(currentGregorianYear, currentLang)});
    } else {
        shareTextBase = getTranslation('greetingMessageFrom', {name: sharerNameForMessage});
    }
    const shareText = `${shareTextBase} ${newLink}`;

    if (navigator.share) { try { await navigator.share({ title: document.title, text: shareText, url: newLink }); showStatusMessage('statusShareOptions', 'success', 1000); if(document.getElementById('generatedLinkContainer')) document.getElementById('generatedLinkContainer').style.display = 'none'; } catch (error) { console.error("Error during navigator.share:", error); showManualLink(newLink); showStatusMessage('statusShareError', 'info', 4000); } } else { showManualLink(newLink); showStatusMessage('statusNoAutoShare', 'info', 4000); } userNameInput.value = ''; generateButton.disabled = true; }
function showManualLink(link) { const linkContainer = document.getElementById('generatedLinkContainer'); const sharableLinkInput = document.getElementById('sharableLink'); if (!linkContainer || !sharableLinkInput) return; sharableLinkInput.value = link; linkContainer.style.display = 'block'; }
function copyLink() { const sharableLinkInput = document.getElementById('sharableLink'); if (!sharableLinkInput) return; sharableLinkInput.select(); sharableLinkInput.setSelectionRange(0, 99999); try { navigator.clipboard.writeText(sharableLinkInput.value) .then(() => { showStatusMessage("statusLinkCopied", "success"); }) .catch(err => { console.error("Clipboard API copy failed:", err); if(document.execCommand('copy')) { showStatusMessage("statusLinkCopiedFallback", "success"); } else { showStatusMessage("statusCopyError", "error", 4000); } }); } catch (err) { console.error("Clipboard API not available or other error:", err); if(document.execCommand('copy')) { showStatusMessage("statusLinkCopiedFallback", "success"); } else { showStatusMessage("statusCopyError", "error", 4000); } } }
