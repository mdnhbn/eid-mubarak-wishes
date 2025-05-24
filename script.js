// --- Main Application Logic (মাল্টি-ল্যাঙ্গুয়েজ এবং অন্যান্য) ---
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
        'musicPlayError': 'মিউজিক প্লে করা যায়নি। ডিভাইস সাউন্ড চেক করুন.',
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
    'en': {
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
    'ar': {
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
    'es': {
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

const countryToLangMap = { 'SA': 'ar', 'AE': 'ar', 'EG': 'ar', 'KW': 'ar', 'QA': 'ar', 'OM': 'ar', 'BH': 'ar', 'BD': 'bn', 'IN': 'en', 'PK': 'en', 'US': 'en', 'GB': 'en', 'CA': 'en', 'AU': 'en', 'ES': 'es', 'MX': 'es', 'AR': 'es', 'CO': 'es', };
const langToLocaleMap = { 'bn': 'bn-BD', 'en': 'en-US', 'ar': 'ar-SA', 'es': 'es-ES', };
const supportedLanguages = Object.keys(translations);

let currentLang = 'bn';
let userTimeZone = 'Etc/UTC';
let userLocale = 'bn-BD';
let currentTheme = 'dark';

const backgroundMusic = document.getElementById('backgroundMusic');
const userNameInput = document.getElementById('userNameInput');
const generateButton = document.getElementById('generateButton');
const statusMessageDiv = document.getElementById('statusMessage');
let statusTimeout;

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
let canAutoplayAudio = false; // Flag to check if audio autoplay is likely possible

const hijriMonthsData = { 'bn': ["মহররম", "সফর", "রবিউল আউয়াল", "রবিউস সানি", "জমাদিউল আউয়াল", "জমাদিউস সানি", "রজব", "শাবান", "রমজান", "শাওয়াল", "জ্বিলকদ", "জ্বিলহজ্জ"], 'en': ["Muharram", "Safar", "Rabi' al-awwal", "Rabi' al-thani", "Jumada al-awwal", "Jumada al-thani", "Rajab", "Sha'ban", "Ramadan", "Shawwal", "Dhu al-Qi'dah", "Dhu al-Hijjah"], 'ar': ["محرم", "صفر", "ربيع الأول", "ربيع الثاني", "جمادى الأولى", "جمادى الآخرة", "رجب", "شعبان", "رمضان", "شوال", "ذو القعدة", "ذو الحجة"], 'es': ["Muharram", "Safar", "Rabi' al-awwal", "Rabi' al-thani", "Jumada al-awwal", "Jumada al-thani", "Rajab", "Sha'ban", "Ramadán", "Shawwal", "Dhu ul-Qi'dah", "Dhu ul-Hiyya"] };

function getTranslation(key, params = {}) {
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

function applyTranslations() {
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

// (বাকি ফাংশনগুলো যেমন toNativeNumeral, fetchWithTimeout, determineLanguageAndLocation, fetchCorrectTime, initializeDateTimeDisplay, determineEidName, updateGreetingMessageWithEid, updateTimeDate আগের মতোই থাকবে)
// ... (আগের কোডের মাঝের অংশ অপরিবর্তিত) ...
async function determineLanguageAndLocation() {
    const urlParams = new URLSearchParams(window.location.search);
    const langParam = urlParams.get('lang');
    const savedLang = localStorage.getItem('preferredLang');
    let detectedLang = null;
    let userCountryCode = null;
    let fetchedTimeZoneFromAPI = false;

    if (langParam && supportedLanguages.includes(langParam)) { detectedLang = langParam; }
    else if (savedLang && supportedLanguages.includes(savedLang)) { detectedLang = savedLang; }

    try {
        const response = await fetchWithTimeout('https://ip-api.com/json/?fields=status,message,timezone,countryCode', { cache: 'no-store' });
        if (!response.ok) throw new Error(`IP API HTTP error! status: ${response.status}`);
        const data = await response.json();
        if (data.status === 'success') {
            if (data.countryCode) { userCountryCode = data.countryCode; if (!detectedLang && countryToLangMap[userCountryCode] && supportedLanguages.includes(countryToLangMap[userCountryCode])) { detectedLang = countryToLangMap[userCountryCode]; } }
            if (data.timezone) { userTimeZone = data.timezone; fetchedTimeZoneFromAPI = true; }
        }
    } catch (error) { console.error("Error fetching user geolocation data from IP API:", error.name, error.message); }

    if (!fetchedTimeZoneFromAPI) {
        try {
            const browserTimezone = Intl.DateTimeFormat().resolvedOptions().timeZone;
            if (browserTimezone && typeof browserTimezone === 'string' && browserTimezone.length > 0) { userTimeZone = browserTimezone; }
            else { userTimeZone = 'Etc/UTC'; }
        } catch (e) { console.error("Error getting timezone from browser Intl API:", e); userTimeZone = 'Etc/UTC'; }
    }

    if (!detectedLang) { let browserLangFull = (navigator.languages && navigator.languages[0]) || navigator.language || 'bn-BD'; let browserLangShort = browserLangFull.split('-')[0].toLowerCase(); if (supportedLanguages.includes(browserLangShort)) { detectedLang = browserLangShort; } }
    currentLang = detectedLang || 'bn';
    userLocale = langToLocaleMap[currentLang] || (currentLang === 'bn' ? 'bn-BD' : 'en-US');
    document.documentElement.lang = currentLang;
    if (document.body) document.body.lang = currentLang;
    if (languageSelector) languageSelector.value = currentLang;
    applyTranslations();
}

async function fetchCorrectTime() {
    let finalTimeZone = userTimeZone; let success = false;
    try {
        const response = await fetchWithTimeout(`https://worldtimeapi.org/api/timezone/${finalTimeZone}`, { cache: 'no-store' });
        if (response.ok) {
            const data = await response.json(); const serverTime = new Date(data.utc_datetime); const clientTimeAtFetch = new Date();
            timeOffset = serverTime.getTime() - clientTimeAtFetch.getTime(); initialTimeSynced = true;
            success = true;
        } else { let errorText = ""; try { errorText = await response.text(); } catch (e) {} console.error(`WorldTimeAPI HTTP error! Status: ${response.status} for timezone: ${finalTimeZone}. Response: ${errorText}`); }
    } catch (error) { console.error("Failed to fetch correct time from WorldTimeAPI:", error.name, error.message); }
    if (!success) { timeOffset = 0; initialTimeSynced = false; }
    updateTimeDate(); return success;
}

function initializeDateTimeDisplay() {
    if(!currentTimeEl || !currentDateEl || !currentHijriDateEl){ console.error("Date/Time elements not found for initialization."); return; }
    updateTimeDate();
    setInterval(updateTimeDate,1000);
}

function determineEidName(hijriMonth, hijriDay) {
    if (hijriMonth === 10 && hijriDay >= 1 && hijriDay <= 3) { return getTranslation('eidAlFitr'); }
    if (hijriMonth === 12 && hijriDay >= 9 && hijriDay <= 13) { return getTranslation('eidAlAdha'); }
    return null;
}
function updateGreetingMessageWithEid() {
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
    const clientNow = new Date(); const correctedNow = new Date(clientNow.getTime() + timeOffset);
    const timeOptions = { hour: 'numeric', minute: '2-digit', second: '2-digit', hour12: true };
    if (userTimeZone && userTimeZone !== 'Etc/Unknown') { timeOptions.timeZone = userTimeZone; }

    let timeString;
    try { timeString = correctedNow.toLocaleTimeString(userLocale, timeOptions); }
    catch (e) { delete timeOptions.timeZone; try { timeString = correctedNow.toLocaleTimeString(userLocale, timeOptions); } catch (e2) { console.error(`Fallback time formatting also failed. Error: ${e2.message}`); timeString = "N/A"; } }
    if (currentTimeEl) currentTimeEl.textContent = `${getTranslation('timeLabel')}: ${timeString}`;

    const dateOptions = { day: 'numeric', month: 'long', year: 'numeric' };
    if (userTimeZone && userTimeZone !== 'Etc/Unknown') { dateOptions.timeZone = userTimeZone; }
    let dateString;
    try { dateString = correctedNow.toLocaleDateString(userLocale, dateOptions); }
    catch (e) { delete dateOptions.timeZone; try { dateString = correctedNow.toLocaleDateString(userLocale, dateOptions); } catch (e2) { console.error(`Fallback date formatting also failed. Error: ${e2.message}`); dateString = "N/A"; } }
    if (currentDateEl) currentDateEl.textContent = `${getTranslation('dateLabel')}: ${dateString}`;

    if (currentHijriDateEl) {
        if (typeof HijriDate !== 'undefined' && HijriDate.JS && typeof HijriDate.JS.convert === 'function') {
            try {
                const hijriInstance = HijriDate.JS.convert(correctedNow);
                if (hijriInstance && typeof hijriInstance.getDate === 'function') {
                    const hijriDay = toNativeNumeral(hijriInstance.getDate(), currentLang);
                    const hijriMonthIndex = hijriInstance.getMonth() - 1;
                    const currentHijriMonths = hijriMonthsData[currentLang] || hijriMonthsData['en'];
                    if (hijriMonthIndex >= 0 && hijriMonthIndex < currentHijriMonths.length) {
                        const hijriMonthName = currentHijriMonths[hijriMonthIndex];
                        const hijriYear = toNativeNumeral(hijriInstance.getFullYear(), currentLang);
                        currentHijriDateEl.textContent = `${getTranslation('hijriDateLabel')}: ${hijriDay} ${hijriMonthName}, ${hijriYear} ${getTranslation('hijriYearSuffix')}`;
                    } else { currentHijriDateEl.textContent = getTranslation('hijriCalcError'); }
                } else { currentHijriDateEl.textContent = getTranslation('hijriCalcError'); }
            } catch (e) { currentHijriDateEl.textContent = getTranslation('hijriDateError'); console.error("Error updating Hijri date:", e); }
        } else { currentHijriDateEl.textContent = getTranslation('hijriNotLoaded'); }
    }
}
function updateMusicButton() {
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

function attemptMusicPlay(interactionType = "user_interaction") {
    return new Promise((resolve, reject) => {
        if (backgroundMusic && backgroundMusic.paused) {
            const playPromise = backgroundMusic.play();
            if (playPromise !== undefined) {
                playPromise.then(() => {
                    musicPlayAttemptedOnInteraction = true;
                    canAutoplayAudio = true; // Successfully played, so future autoplays might work
                    updateMusicButton();
                    // Remove interaction listeners ONLY if play was due to direct interaction
                    if (interactionType === "user_interaction") {
                        document.body.removeEventListener('click', handleFirstUserInteractionForMedia);
                        document.body.removeEventListener('touchstart', handleFirstUserInteractionForMedia);
                    }
                    resolve(true);
                }).catch(error => {
                    console.warn(`Music play failed (${interactionType}):`, error.name, error.message);
                    updateMusicButton();
                    if (error.name === 'NotAllowedError' && interactionType !== "user_interaction") {
                        // Autoplay failed, add listeners for first user interaction
                        document.body.addEventListener('click', handleFirstUserInteractionForMedia, { once: true });
                        document.body.addEventListener('touchstart', handleFirstUserInteractionForMedia, { once: true });
                    }
                    reject(error);
                });
            } else {
                // play() didn't return a promise (older browser or unusual case)
                updateMusicButton(); // Still try to update button
                reject(new Error("play() did not return a promise."));
            }
        } else if (backgroundMusic && !backgroundMusic.paused) {
            resolve(true); // Already playing
        } else if (!backgroundMusic) {
            reject(new Error("Background music element not found."));
        } else {
            resolve(false); // Paused, but no action taken by this call.
        }
    });
}

function toggleMusic() {
    if (!backgroundMusic) return;
    if (backgroundMusic.paused) {
        attemptMusicPlay("user_interaction").catch(err => console.warn("Toggle music play failed:", err));
    } else {
        backgroundMusic.pause();
    }
    // updateMusicButton(); // attemptMusicPlay and pause event will handle this
}

function handleFirstUserInteractionForMedia(event) {
    if (!musicPlayAttemptedOnInteraction) { // Only attempt if not already tried
        attemptMusicPlay("user_interaction").catch(err => console.warn("First interaction music play failed:", err));
    }
    if (eidVideoEl && eidVideoEl.paused) {
        eidVideoEl.play().catch(e => console.warn("Video play failed on interaction:", e));
    }
}

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

window.onload = async function() {
    if (document.body) {
      const savedTheme = localStorage.getItem('preferredTheme');
      if (savedTheme && (savedTheme === 'light' || savedTheme === 'dark')) {
          setTheme(savedTheme);
      } else {
          setTheme('dark');
      }
      if (!document.body.lang) document.body.lang = currentLang;
    }

    await determineLanguageAndLocation();
    await fetchCorrectTime();
    updateGreetingMessageWithEid();

    // Video Autoplay (muted)
    if (eidVideoEl) {
        eidVideoEl.muted = true; // Ensure video is muted for autoplay
        const videoPlayPromise = eidVideoEl.play();
        if (videoPlayPromise !== undefined) {
            videoPlayPromise.catch(error => {
                console.warn("Video autoplay was prevented:", error.name, error.message);
                // If video autoplay fails, and audio hasn't been interacted with, set up interaction listener
                if (!musicPlayAttemptedOnInteraction) {
                     document.body.addEventListener('click', handleFirstUserInteractionForMedia, { once: true });
                     document.body.addEventListener('touchstart', handleFirstUserInteractionForMedia, { once: true });
                }
            });
        }
        eidVideoEl.onerror = function() { console.error("Error loading video."); };
    }

    // Audio Autoplay Attempt (best effort)
    if (backgroundMusic) {
        updateMusicButton(); // Set initial button state

        // Try to play audio. This might be blocked by the browser.
        attemptMusicPlay("initial_autoplay_attempt").catch(err => {
            // If initial autoplay fails, the 'NotAllowedError' case inside attemptMusicPlay
            // should have already set up the user interaction listeners.
            // console.log("Initial audio autoplay attempt was blocked or failed silently earlier.");
        });

        backgroundMusic.onplay = updateMusicButton;
        backgroundMusic.onpause = updateMusicButton;
        backgroundMusic.onended = () => { // If you want it to loop and button to reset
            if (backgroundMusic.loop) {
                // updateMusicButton(); // It will replay and trigger 'onplay'
            } else {
                updateMusicButton(); // Reset to 'play' icon if not looping
            }
        };

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

    initializeDateTimeDisplay();
};

// (showStatusMessage, generateAndShareLink, showManualLink, copyLink ফাংশনগুলো আগের মতোই থাকবে)
// ... (আগের কোডের শেষের অংশ অপরিবর্তিত) ...
function showStatusMessage(messageKey, type = 'info', duration = 3000, params = {}) { if (!statusMessageDiv) return; clearTimeout(statusTimeout); statusMessageDiv.textContent = getTranslation(messageKey, params); statusMessageDiv.className = ''; statusMessageDiv.classList.add(type); statusMessageDiv.style.display = 'block'; setTimeout(() => { statusMessageDiv.style.opacity = '1'; }, 10); statusTimeout = setTimeout(() => { statusMessageDiv.style.opacity = '0'; setTimeout(() => { statusMessageDiv.style.display = 'none'; }, 500); }, duration); }
async function generateAndShareLink() { if (!userNameInput || !generateButton) return; const userName = userNameInput.value.trim(); if (userName === "") { showStatusMessage("statusEnterName", "error"); return; }
    // Ensure music is playing or attempt to play it on share
    if (backgroundMusic && backgroundMusic.paused && !musicPlayAttemptedOnInteraction) {
        await attemptMusicPlay("user_interaction").catch(err => console.warn("Music play on share failed:", err));
    } else if (backgroundMusic && backgroundMusic.paused && musicPlayAttemptedOnInteraction && canAutoplayAudio) {
        // If user previously allowed play, try again without needing interaction listener
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
