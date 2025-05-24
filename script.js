// Helper functions (fetchWithTimeout, toNativeNumeral - ফাইলের শুরুতে থাকবে)
async function fetchWithTimeout(resource, options = {}, timeout = 8000) { /*...*/ }
function toNativeNumeral(numStr, lang) { /*...*/ }

// Global constants and variables
const translations = {
    'bn': {
        'pageTitle': 'ঈদ মোবারক!',
        'greetingMessage': 'ঈদ মোবারক!',
        'greetingMessageFrom': '{name} এর পক্ষ থেকে, ঈদ মোবারক!',
        'yourNameLabel': 'আপনার নাম লিখুন:',
        'namePlaceholder': 'এখানে আপনার নাম দিন',
        'shareButtonText': 'WhatsApp এ শেয়ার করুন',
        'shareLinkManualText': 'এই লিঙ্কটি বন্ধুদের সাথে শেয়ার করুন (যদি অটো-শেয়ার কাজ না করে):',
        'copyButtonText': 'কপি করুন',
        'eidWishesFooter': 'সবাইকে ঈদের আন্তরিক শুভেচ্ছা!',
        'timeLabel': 'সময়',
        'dateLabel': 'তারিখ',
        'hijriDateLabel': 'ইসলামী তারিখ',
        'hijriYearSuffix': 'হিজরি',
        'statusEnterName': 'অনুগ্রহ করে আপনার নাম লিখুন।',
        'statusShareOptions': 'শুভেচ্ছা শেয়ার করার জন্য অপশন দেখানো হয়েছে!',
        'statusShareError': 'শেয়ার অপশন কাজ করেনি/বাতিল হয়েছে। লিঙ্ক কপি করুন।',
        'statusNoAutoShare': 'আপনার ব্রাউজার অটো-শেয়ার সাপোর্ট করে না। লিঙ্ক কপি করুন।',
        'statusLinkCopied': 'লিঙ্ক সফলভাবে কপি করা হয়েছে!',
        'statusLinkCopiedFallback': 'লিঙ্ক কপি করা হয়েছে (ফলব্যাক)!',
        'statusCopyError': 'দুঃখিত, লিঙ্ক কপি করা যায়নি। নিজে কপি করে নিন।',
        'hijriDateLoading': 'ইসলামী তারিখ পরীক্ষা করা হচ্ছে...',
        'hijriDateError': 'ইসলামী তারিখ রূপান্তরে ত্রুটি।',
        'hijriCalcError': 'হিজরি মাস গণনায় ত্রুটি।',
        'hijriNotLoaded': 'ইসলামী ক্যালকুলেটর লোড হয়নি.',
        'musicPlayError': 'মিউজিক প্লে করা যায়নি। ডিভাইস সাউন্ড চেক করুন।',
        'pageTitleEid': '{eidName} {year} এর শুভেচ্ছা!',
        'greetingMessageEid': '{eidName} {year}!',
        'greetingMessageFromEid': '{name} এর পক্ষ থেকে, {eidName} {year}!',
        'eidAlFitr': 'ঈদুল ফিতর',
        'eidAlAdha': 'ঈদুল আযহা',
        'eidMubarakGeneric': 'ঈদ মোবারক',
        'languageLabel': 'ভাষা',
        'themeDark': 'ডার্ক থিম',
        'themeLight': 'লাইট থিম',
        'toggleMusicPlay': 'মিউজিক প্লে করুন',
        'toggleMusicPause': 'মিউজিক বন্ধ করুন'
    },
    'en': { /* ... English translations ... */
        'pageTitle': 'Eid Mubarak!',
        'greetingMessage': 'Eid Mubarak!',
        'greetingMessageFrom': 'Eid Mubarak from {name}!',
        'yourNameLabel': 'Enter your name:',
        'namePlaceholder': 'Enter your name here',
        'shareButtonText': 'Share on WhatsApp',
        'shareLinkManualText': 'Share this link with friends (if auto-share doesn\'t work):',
        'copyButtonText': 'Copy',
        'eidWishesFooter': 'Eid greetings to everyone!',
        'timeLabel': 'Time',
        'dateLabel': 'Date',
        'hijriDateLabel': 'Islamic Date',
        'hijriYearSuffix': 'AH',
        // Add all other keys from 'bn' here for completeness, even if they are the same as key
        'statusEnterName': 'Please enter your name.',
        'statusShareOptions': 'Share options are shown!',
        'statusShareError': 'Share option failed/cancelled. Please copy the link.',
        'statusNoAutoShare': 'Your browser does not support auto-share. Please copy the link.',
        'statusLinkCopied': 'Link copied successfully!',
        'statusLinkCopiedFallback': 'Link copied (fallback)!',
        'statusCopyError': 'Sorry, could not copy the link. Please copy it manually.',
        'hijriDateLoading': 'Checking Islamic date...',
        'hijriDateError': 'Error in Islamic date conversion.',
        'hijriCalcError': 'Error in Hijri month calculation.',
        'hijriNotLoaded': 'Islamic calendar not loaded.',
        'musicPlayError': 'Could not play music. Check device sound.',
        'pageTitleEid': '{eidName} {year} Greetings!',
        'greetingMessageEid': '{eidName} {year}!',
        'greetingMessageFromEid': 'From {name}, {eidName} {year}!',
        'eidAlFitr': 'Eid al-Fitr',
        'eidAlAdha': 'Eid al-Adha',
        'eidMubarakGeneric': 'Eid Mubarak',
        'languageLabel': 'Language',
        'themeDark': 'Dark Theme',
        'themeLight': 'Light Theme',
        'toggleMusicPlay': 'Play Music',
        'toggleMusicPause': 'Pause Music'
    },
    'ar': { /* ... Arabic translations ... */
        'pageTitle': 'عيد مبارك!',
        'greetingMessage': 'عيد مبارك!',
        'greetingMessageFrom': 'عيد مبارك من {name}!',
        'yourNameLabel': 'أدخل اسمك:',
        'namePlaceholder': 'أدخل اسمك هنا',
        'shareButtonText': 'شارك على WhatsApp',
        'shareLinkManualText': 'شارك هذا الرابط مع الأصدقاء (إذا لم تعمل المشاركة التلقائية):',
        'copyButtonText': 'نسخ',
        'eidWishesFooter': 'تهاني العيد للجميع!',
        'timeLabel': 'الوقت',
        'dateLabel': 'التاريخ',
        'hijriDateLabel': 'التاريخ الهجري',
        'hijriYearSuffix': 'هـ',
        'statusEnterName': 'الرجاء إدخال اسمك.',
        'statusLinkCopied': 'تم نسخ الرابط بنجاح!',
        'hijriDateLoading': 'جاري التحقق من التاريخ الهجري...',
        'pageTitleEid': 'تهاني {eidName} {year}!',
        'greetingMessageEid': '{eidName} {year}!',
        'greetingMessageFromEid': 'من {name}, {eidName} {year}!',
        'eidAlFitr': 'عيد الفطر',
        'eidAlAdha': 'عيد الأضحى',
        'eidMubarakGeneric': 'عيد مبارك',
        'languageLabel': 'اللغة',
        'themeDark': 'الوضع الداكن',
        'themeLight': 'الوضع الفاتح',
        'toggleMusicPlay': 'تشغيل الموسيقى',
        'toggleMusicPause': 'إيقاف الموسيقى'
    },
    'es': { /* ... Spanish translations ... */
        'pageTitle': '¡Eid Mubarak!',
        'greetingMessage': '¡Eid Mubarak!',
        'greetingMessageFrom': '¡Eid Mubarak de parte de {name}!',
        'yourNameLabel': 'Introduce tu nombre:',
        'namePlaceholder': 'Introduce tu nombre aquí',
        'shareButtonText': 'Compartir en WhatsApp',
        'copyButtonText': 'Copiar',
        'eidWishesFooter': '¡Saludos de Eid para todos!',
        'timeLabel': 'Hora',
        'dateLabel': 'Fecha',
        'hijriDateLabel': 'Fecha Islámica',
        'hijriYearSuffix': 'H',
        'pageTitleEid': '¡Saludos de {eidName} {year}!',
        'greetingMessageEid': '¡{eidName} {year}!',
        'greetingMessageFromEid': '¡De parte de {name}, {eidName} {year}!',
        'eidAlFitr': 'Eid al-Fitr',
        'eidAlAdha': 'Eid al-Adha',
        'eidMubarakGeneric': 'Eid Mubarak',
        'languageLabel': 'Idioma',
        'themeDark': 'Tema Oscuro',
        'themeLight': 'Tema Claro',
        'toggleMusicPlay': 'Reproducir Música',
        'toggleMusicPause': 'Pausar Música'
    }
};
const countryToLangMap = { /* ... */ };
const langToLocaleMap = { /* ... */ };
const supportedLanguages = Object.keys(translations);

let currentLang = 'bn'; // Default language
let userTimeZone = 'Etc/UTC';
let userLocale = 'bn-BD';
let currentTheme = 'dark';

// DOM Elements (অপরিবর্তিত)
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


let timeOffset = 0;
let initialTimeSynced = false;
let musicPlayAttemptedOnInteraction = false;
let canAutoplayAudio = false;

const hijriMonthsData = { /* ... */ };

// --- Functions ---

function getTranslation(key, params = {}) {
    let text;
    // Ensure translations for currentLang exist, or fallback to 'en', then to key
    if (translations[currentLang] && typeof translations[currentLang][key] !== 'undefined') {
        text = translations[currentLang][key];
    } else if (translations['en'] && typeof translations['en'][key] !== 'undefined') {
        console.warn(`Translation key '${key}' not found for language '${currentLang}'. Using English fallback.`);
        text = translations['en'][key];
    } else {
        console.error(`Translation key '${key}' not found for language '${currentLang}' and no English fallback. Using key as text.`);
        text = key; // Fallback to the key itself
    }

    for (const param in params) {
        text = text.replace(`{${param}}`, params[param]);
    }
    return text;
}

function applyTranslations() {
    console.log("Applying translations for lang:", currentLang); // ডিবাগিং
    document.querySelectorAll('[data-lang-key]').forEach(element => {
        const key = element.getAttribute('data-lang-key');
        const translatedText = getTranslation(key); // getTranslation এখন আরও সতর্ক
        // console.log(`Translating key '${key}' to '${translatedText}'`); // ডিবাগিং
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
    // Set initial defaults before any async operations
    let langFromStorage = localStorage.getItem('preferredLang');
    let langFromNavigator = (navigator.language || navigator.userLanguage || 'bn-BD').split('-')[0];

    currentLang = langFromStorage || langFromNavigator;
    if (!supportedLanguages.includes(currentLang)) {
        currentLang = 'bn'; // Final fallback
    }

    userLocale = langToLocaleMap[currentLang] || (currentLang === 'bn' ? 'bn-BD' : 'en-US');
    userTimeZone = Intl.DateTimeFormat().resolvedOptions().timeZone || 'Etc/UTC';

    document.documentElement.lang = currentLang;
    if (document.body) document.body.lang = currentLang;
    if (languageSelector) languageSelector.value = currentLang;
    applyTranslations(); // First application with best guess

    const urlParams = new URLSearchParams(window.location.search);
    const langParam = urlParams.get('lang');

    if (langParam && supportedLanguages.includes(langParam)) {
        currentLang = langParam; // URL param has highest priority
    }
    // If lang changed by URL param, update everything
    if (languageSelector && languageSelector.value !== currentLang) languageSelector.value = currentLang;
    document.documentElement.lang = currentLang;
    if (document.body) document.body.lang = currentLang;
    userLocale = langToLocaleMap[currentLang] || (currentLang === 'bn' ? 'bn-BD' : 'en-US');


    // Fetch IP based location data
    try {
        const response = await fetchWithTimeout('https://ip-api.com/json/?fields=status,message,timezone,countryCode', { cache: 'no-store' });
        if (!response.ok) throw new Error(`IP API HTTP error! status: ${response.status} ${response.statusText}`);
        const data = await response.json();
        if (data.status === 'success') {
            if (data.countryCode && !langParam && !langFromStorage) { // Only use IP for lang if no explicit user choice
                const langFromCountry = countryToLangMap[data.countryCode];
                if (langFromCountry && supportedLanguages.includes(langFromCountry)) {
                    currentLang = langFromCountry;
                }
            }
            if (data.timezone) {
                userTimeZone = data.timezone; // Override browser/default timezone if IP API provides one
            }
        } else {
            console.warn('Failed to get country/timezone from IP API. Message:', data.message);
        }
    } catch (error) {
        console.error("Error fetching user geolocation data from IP API:", error.name, error.message);
    }

    // Final update of lang and locale after IP API potentially changed currentLang
    document.documentElement.lang = currentLang;
    if (document.body) document.body.lang = currentLang;
    if (languageSelector && languageSelector.value !== currentLang) languageSelector.value = currentLang;
    userLocale = langToLocaleMap[currentLang] || (currentLang === 'bn' ? 'bn-BD' : 'en-US');

    console.log(`Final determined settings - Lang: ${currentLang}, Locale: ${userLocale}, Timezone: ${userTimeZone}`);
    applyTranslations(); // Apply translations again with final determined values
}

// fetchCorrectTime, initializeDateTimeDisplay, determineEidName, updateGreetingMessageWithEid, updateTimeDate - আগের মতো
// ... (এই ফাংশনগুলোর কোড আগের উত্তরে যেমন ছিল, তেমনই থাকবে, শুধু updateTimeDate এর ভেতরে toNativeNumeral কল করার আগে ভ্যালু undefined কিনা চেক করতে হবে)

function updateTimeDate() {
    if (!currentLang || !hijriMonthsData[currentLang]) {
        // console.warn(`updateTimeDate: currentLang ('${currentLang}') is not ready or invalid for hijriMonthsData.`);
        // ... ( আগের মত গ্রেগরিয়ান তারিখ সময় দেখানোর কোড ) ...
        const clientNowBasic = new Date();
        const correctedNowBasic = new Date(clientNowBasic.getTime() + timeOffset);
        const timeOptionsBasic = { hour: 'numeric', minute: '2-digit', second: '2-digit', hour12: true };
        if(userTimeZone && userTimeZone !== 'Etc/Unknown') timeOptionsBasic.timeZone = userTimeZone;

        if (currentTimeEl) currentTimeEl.textContent = `${getTranslation('timeLabel')}: ${correctedNowBasic.toLocaleTimeString(userLocale, timeOptionsBasic)}`;

        const dateOptionsBasic = { day: 'numeric', month: 'long', year: 'numeric' };
        if(userTimeZone && userTimeZone !== 'Etc/Unknown') dateOptionsBasic.timeZone = userTimeZone;

        if (currentDateEl) currentDateEl.textContent = `${getTranslation('dateLabel')}: ${correctedNowBasic.toLocaleDateString(userLocale, dateOptionsBasic)}`;
        if (currentHijriDateEl) currentHijriDateEl.textContent = getTranslation('hijriDateLoading');
        return;
    }

    const clientNow = new Date();
    const correctedNow = new Date(clientNow.getTime() + timeOffset);

    const timeOptions = { hour: 'numeric', minute: '2-digit', second: '2-digit', hour12: true };
    if (userTimeZone && userTimeZone !== 'Etc/Unknown' && userTimeZone !== 'Etc/UTC') {
        try { new Date().toLocaleTimeString('en-US', {timeZone: userTimeZone}); timeOptions.timeZone = userTimeZone; }
        catch (e) { console.warn(`Invalid timezone '${userTimeZone}' for time formatting. Using local.`);}
    }
    // ... (বাকি সময় ও তারিখ ফরম্যাটিং আগের মত) ...
    let timeString;
    try { timeString = correctedNow.toLocaleTimeString(userLocale, timeOptions); }
    catch (e) { delete timeOptions.timeZone; try { timeString = correctedNow.toLocaleTimeString(userLocale, timeOptions); } catch (e2) { console.error(`Fallback time formatting also failed. Error: ${e2.message}`); timeString = "N/A"; } }
    if (currentTimeEl) currentTimeEl.textContent = `${getTranslation('timeLabel')}: ${timeString}`;

    const dateOptions = { day: 'numeric', month: 'long', year: 'numeric' };
     if (userTimeZone && userTimeZone !== 'Etc/Unknown' && userTimeZone !== 'Etc/UTC') {
        try { new Date().toLocaleDateString('en-US', {timeZone: userTimeZone}); dateOptions.timeZone = userTimeZone; }
        catch (e) { console.warn(`Invalid timezone '${userTimeZone}' for date formatting. Using local.`);}
    }
    let dateString;
    try { dateString = correctedNow.toLocaleDateString(userLocale, dateOptions); }
    catch (e) { delete dateOptions.timeZone; try { dateString = correctedNow.toLocaleDateString(userLocale, dateOptions); } catch (e2) { console.error(`Fallback date formatting also failed. Error: ${e2.message}`); dateString = "N/A"; } }
    if (currentDateEl) currentDateEl.textContent = `${getTranslation('dateLabel')}: ${dateString}`;


    if (currentHijriDateEl) {
        if (typeof HijriDate !== 'undefined' && HijriDate.JS && typeof HijriDate.JS.convert === 'function') {
            try {
                const hijriInstance = HijriDate.JS.convert(correctedNow);
                if (hijriInstance && typeof hijriInstance.getDate === 'function' && typeof hijriInstance.getMonth === 'function' && typeof hijriInstance.getFullYear === 'function') {
                    const dayVal = hijriInstance.getDate();
                    const yearVal = hijriInstance.getFullYear();

                    // toNativeNumeral কল করার আগে ভ্যালু চেক
                    const hijriDay = (typeof dayVal !== 'undefined' && dayVal !== null) ? toNativeNumeral(dayVal, currentLang) : 'undefined';
                    const hijriYear = (typeof yearVal !== 'undefined' && yearVal !== null) ? toNativeNumeral(yearVal, currentLang) : 'undefined';

                    const hijriMonthIndex = hijriInstance.getMonth() - 1;
                    const currentValidHijriMonths = hijriMonthsData[currentLang] || hijriMonthsData['en'];

                    if (currentValidHijriMonths && hijriMonthIndex >= 0 && hijriMonthIndex < currentValidHijriMonths.length && hijriDay !== 'undefined' && hijriYear !== 'undefined') {
                        const hijriMonthName = currentValidHijriMonths[hijriMonthIndex];
                        currentHijriDateEl.textContent = `${getTranslation('hijriDateLabel')}: ${hijriDay} ${hijriMonthName}, ${hijriYear} ${getTranslation('hijriYearSuffix')}`;
                    } else {
                        console.error("Invalid Hijri data:", {dayVal, yearVal, hijriMonthIndex, currentLang});
                        currentHijriDateEl.textContent = getTranslation('hijriCalcError');
                    }
                } else {
                    currentHijriDateEl.textContent = getTranslation('hijriCalcError');
                }
            } catch (e) {
                currentHijriDateEl.textContent = getTranslation('hijriDateError');
            }
        } else {
            currentHijriDateEl.textContent = getTranslation('hijriNotLoaded');
        }
    }
}

// বাকি সব ফাংশন (updateMusicButton থেকে copyLink পর্যন্ত) আগের উত্তরে যেমন ছিল, তেমনই থাকবে।

window.onload = async function() {
    console.log("Window onload sequence started.");

    if (document.body) {
      const savedTheme = localStorage.getItem('preferredTheme');
      setTheme(savedTheme && (savedTheme === 'light' || savedTheme === 'dark') ? savedTheme : 'dark');
    }

    await determineLanguageAndLocation(); // This now applies translations
    await fetchCorrectTime();
    initializeDateTimeDisplay(); // Calls updateTimeDate
    updateGreetingMessageWithEid(); // Uses translations and potentially Hijri date

    // ... (মিডিয়া প্লেব্যাক এবং অন্যান্য ইভেন্ট লিসেনার আগের মতো)
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
        updateMusicButton();
        attemptMusicPlay("initial_autoplay_attempt").catch(err => { /* Error handled in func */ });
        backgroundMusic.onplay = updateMusicButton;
        backgroundMusic.onpause = updateMusicButton;
        backgroundMusic.onended = () => { if (!backgroundMusic.loop) { updateMusicButton(); }};
        backgroundMusic.onerror = function() { console.error("Error with background music: " + (backgroundMusic.error ? backgroundMusic.error.message : 'Unknown error')); showStatusMessage('musicPlayError', 'error');}
    }

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

    if (generateButton && userNameInput) {
        generateButton.disabled = true;
        userNameInput.addEventListener('input', function() {
            generateButton.disabled = userNameInput.value.trim() === "";
        });
    }

    if (typeof startFireworks === 'function' && typeof animateFireworks === 'function') {
        startFireworks();
        animateFireworks();
    } else {
        console.error("Fireworks functions not loaded correctly.");
    }
    console.log("Window onload sequence finished.");
};
// ফাংশনগুলো অপরিবর্তিত:
// fetchCorrectTime, initializeDateTimeDisplay, determineEidName, updateGreetingMessageWithEid,
// updateMusicButton, attemptMusicPlay, toggleMusic, handleFirstUserInteractionForMedia,
// setLanguage, setTheme, toggleTheme, showStatusMessage, generateAndShareLink, showManualLink, copyLink
// শুধু ensure `toNativeNumeral` is called with valid inputs inside `updateTimeDate`
