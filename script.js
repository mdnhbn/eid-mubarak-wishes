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
    }
};

const countryToLangMap = { 'SA': 'ar', 'AE': 'ar', 'EG': 'ar', 'KW': 'ar', 'QA': 'ar', 'OM': 'ar', 'BH': 'ar', 'BD': 'bn', 'IN': 'en', 'PK': 'en', 'US': 'en', 'GB': 'en', 'CA': 'en', 'AU': 'en', 'ES': 'es', 'MX': 'es', 'AR': 'es', 'CO': 'es', };
const langToLocaleMap = { 'bn': 'bn-BD', 'en': 'en-US', 'ar': 'ar-SA', 'es': 'es-ES', };
const supportedLanguages = Object.keys(translations);

let currentLang = 'bn';
let userTimeZone = 'Etc/UTC';
let userLocale = 'bn-BD';

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

let timeOffset = 0;
let initialTimeSynced = false;
let musicPlayAttemptedOnInteraction = false;

const hijriMonthsData = { 'bn': ["মহররম", "সফর", "রবিউল আউয়াল", "রবিউস সানি", "জমাদিউল আউয়াল", "জমাদিউস সানি", "রজব", "শাবান", "রমজান", "শাওয়াল", "জ্বিলকদ", "জ্বিলহজ্জ"], 'en': ["Muharram", "Safar", "Rabi' al-awwal", "Rabi' al-thani", "Jumada al-awwal", "Jumada al-thani", "Rajab", "Sha'ban", "Ramadan", "Shawwal", "Dhu al-Qi'dah", "Dhu al-Hijjah"], 'ar': ["محرم", "صفر", "ربيع الأول", "ربيع الثاني", "جمادى الأولى", "جمادى الآخرة", "رجب", "شعبان", "رمضان", "شوال", "ذو القعدة", "ذو الحجة"], 'es': ["Muharram", "Safar", "Rabi' al-awwal", "Rabi' al-thani", "Jumada al-awwal", "Jumada al-thani", "Rajab", "Sha'ban", "Ramadán", "Shawwal", "Dhu ul-Qi'dah", "Dhu ul-Hiyya"] };

function getTranslation(key, params = {}) { let text = (translations[currentLang] && translations[currentLang][key]) || (translations['en'] && translations['en'][key]) || key; for (const param in params) { text = text.replace(`{${param}}`, params[param]); } return text; }
function applyTranslations() { document.querySelectorAll('[data-lang-key]').forEach(element => { const key = element.getAttribute('data-lang-key'); if (element.tagName === 'INPUT' && element.hasAttribute('placeholder')) { element.placeholder = getTranslation(key); } else { element.textContent = getTranslation(key); } }); document.title = getTranslation('pageTitle'); } /* updateGreetingMessageWithEid() will set specific Eid title */
function toNativeNumeral(numStr, lang) { if (lang === 'bn') { const bengaliDigits = ['০', '১', '২', '৩', '৪', '৫', '৬', '৭', '৮', '৯']; return String(numStr).split('').map(digit => /\d/.test(digit) ? bengaliDigits[parseInt(digit)] : digit).join(''); } else if (lang === 'ar') { const arabicDigits = ['٠', '١', '٢', '٣', '٤', '٥', '٦', '٧', '٨', '٩']; return String(numStr).split('').map(digit => /\d/.test(digit) ? arabicDigits[parseInt(digit)] : digit).join(''); } return String(numStr); }
async function fetchWithTimeout(resource, options = {}, timeout = 8000) { const controller = new AbortController(); const id = setTimeout(() => controller.abort(), timeout); try { const response = await fetch(resource, { ...options, signal: controller.signal }); clearTimeout(id); return response; } catch (error) { clearTimeout(id); throw error; } }

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
        console.log("Attempting to fetch geolocation data from ip-api.com...");
        const response = await fetchWithTimeout('https://ip-api.com/json/?fields=status,message,timezone,countryCode', { cache: 'no-store' });
        if (!response.ok) throw new Error(`IP API HTTP error! status: ${response.status}`);
        const data = await response.json();
        if (data.status === 'success') {
            if (data.countryCode) { userCountryCode = data.countryCode; console.log('User country code from IP API:', userCountryCode); if (!detectedLang && countryToLangMap[userCountryCode] && supportedLanguages.includes(countryToLangMap[userCountryCode])) { detectedLang = countryToLangMap[userCountryCode]; console.log(`Language set by country (${userCountryCode}): ${detectedLang}`); } }
            if (data.timezone) { userTimeZone = data.timezone; fetchedTimeZoneFromAPI = true; console.log('User timezone from IP API:', userTimeZone); }
            else { console.warn('IP API did not return timezone data.'); }
        } else { console.warn('Failed to get country/timezone from IP API. Message:', data.message); }
    } catch (error) { console.error("Error fetching user geolocation data from IP API:", error.name, error.message); }

    if (!fetchedTimeZoneFromAPI) {
        try {
            const browserTimezone = Intl.DateTimeFormat().resolvedOptions().timeZone;
            if (browserTimezone && typeof browserTimezone === 'string' && browserTimezone.length > 0) { userTimeZone = browserTimezone; console.log(`Using browser's timezone as fallback: ${userTimeZone}`); }
            else { console.warn("Could not determine timezone from browser, or invalid timezone returned."); userTimeZone = 'Etc/UTC'; console.log(`Defaulting to ${userTimeZone} due to invalid browser timezone.`); }
        } catch (e) { console.error("Error getting timezone from browser Intl API:", e); userTimeZone = 'Etc/UTC'; console.log(`Defaulting to ${userTimeZone} due to error with Intl API.`); }
    }

    if (!detectedLang) { let browserLangFull = (navigator.languages && navigator.languages[0]) || navigator.language || 'bn-BD'; let browserLangShort = browserLangFull.split('-')[0].toLowerCase(); if (supportedLanguages.includes(browserLangShort)) { detectedLang = browserLangShort; console.log(`Language set by browser: ${detectedLang}`); } }
    currentLang = detectedLang || 'bn';
    userLocale = langToLocaleMap[currentLang] || (currentLang === 'bn' ? 'bn-BD' : 'en-US');
    document.documentElement.lang = currentLang; document.body.lang = currentLang;
    console.log(`Final App language: ${currentLang}, Locale: ${userLocale}, Timezone: ${userTimeZone}`);
    applyTranslations(); // Call applyTranslations before updateGreetingMessageWithEid
}

async function fetchCorrectTime() {
    let finalTimeZone = userTimeZone; let success = false;
    try {
        console.log(`Attempting to fetch time for timezone: ${finalTimeZone}`);
        const response = await fetchWithTimeout(`https://worldtimeapi.org/api/timezone/${finalTimeZone}`, { cache: 'no-store' });
        if (response.ok) {
            const data = await response.json(); const serverTime = new Date(data.utc_datetime); const clientTimeAtFetch = new Date();
            timeOffset = serverTime.getTime() - clientTimeAtFetch.getTime(); initialTimeSynced = true;
            console.log(`Time synced using WorldTimeAPI. Target timezone for display: ${finalTimeZone}, Actual data timezone from API: ${data.timezone}. Offset: ${timeOffset} ms.`);
            success = true;
        } else { let errorText = ""; try { errorText = await response.text(); } catch (e) {} console.error(`WorldTimeAPI HTTP error! Status: ${response.status} for timezone: ${finalTimeZone}. Response: ${errorText}`); }
    } catch (error) { console.error("Failed to fetch correct time from WorldTimeAPI:", error.name, error.message); }
    if (!success) { console.warn("Using local device time as fallback due to WorldTimeAPI failure. Ensure device clock is accurate. Time will be displayed in detected/fallback timezone:", userTimeZone); timeOffset = 0; initialTimeSynced = false; }
    updateTimeDate(); return success;
}

function initializeDateTimeDisplay() { if(!currentTimeEl||!currentDateEl||!currentHijriDateEl){console.error("Date/Time elements not found"); return;}updateTimeDate();setInterval(updateTimeDate,1000); }

function determineEidName(hijriMonth, hijriDay) {
    // শাওয়াল মাসের ১-৩ তারিখে ঈদুল ফিতর
    if (hijriMonth === 10 && hijriDay >= 1 && hijriDay <= 3) { // Shawwal is the 10th month
        return getTranslation('eidAlFitr');
    }
    // জ্বিলহজ্জ মাসের ৯-১৩ তারিখে ঈদুল আযহা
    if (hijriMonth === 12 && hijriDay >= 9 && hijriDay <= 13) { // Dhul Hijja is the 12th month
        return getTranslation('eidAlAdha');
    }
    return null;
}

function updateGreetingMessageWithEid() {
    if (!greetingMessageEl) return;
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
    greetingMessageEl.style.animation = 'none'; greetingMessageEl.offsetHeight; greetingMessageEl.style.animation = null;
}


function updateTimeDate() {
    const clientNow = new Date(); const correctedNow = new Date(clientNow.getTime() + timeOffset);
    const timeOptions = { hour: 'numeric', minute: '2-digit', second: '2-digit', hour12: true }; if (userTimeZone && userTimeZone !== 'Etc/Unknown') { timeOptions.timeZone = userTimeZone; }
    let timeString; try { timeString = correctedNow.toLocaleTimeString(userLocale, timeOptions); } catch (e) { console.warn(`Error formatting time with TZ ${userTimeZone}, attempting without TZ. Error: ${e.message}`); delete timeOptions.timeZone; try { timeString = correctedNow.toLocaleTimeString(userLocale, timeOptions); } catch (e2) { console.error(`Fallback time formatting also failed. Error: ${e2.message}`); timeString = "N/A"; } }
    if (currentTimeEl) currentTimeEl.textContent = `${getTranslation('timeLabel')}: ${timeString}`;
    const dateOptions = { day: 'numeric', month: 'long', year: 'numeric' }; if (userTimeZone && userTimeZone !== 'Etc/Unknown') { dateOptions.timeZone = userTimeZone; }
    let dateString; try { dateString = correctedNow.toLocaleDateString(userLocale, dateOptions); } catch (e) { console.warn(`Error formatting date with TZ ${userTimeZone}, attempting without TZ. Error: ${e.message}`); delete dateOptions.timeZone; try { dateString = correctedNow.toLocaleDateString(userLocale, dateOptions); } catch (e2) { console.error(`Fallback date formatting also failed. Error: ${e2.message}`); dateString = "N/A"; } }
    if (currentDateEl) currentDateEl.textContent = `${getTranslation('dateLabel')}: ${dateString}`;
    if (currentHijriDateEl) {
        if (typeof HijriDate !== 'undefined' && HijriDate.JS && typeof HijriDate.JS.convert === 'function') {
            try {
                const hijriInstance = HijriDate.JS.convert(correctedNow);
                if (hijriInstance && typeof hijriInstance.getDate === 'function') {
                    const hijriDay = toNativeNumeral(hijriInstance.getDate(), currentLang); const hijriMonthIndex = hijriInstance.getMonth() - 1; const currentHijriMonths = hijriMonthsData[currentLang] || hijriMonthsData['en'];
                    if (hijriMonthIndex >= 0 && hijriMonthIndex < currentHijriMonths.length) { const hijriMonthName = currentHijriMonths[hijriMonthIndex]; const hijriYear = toNativeNumeral(hijriInstance.getFullYear(), currentLang); currentHijriDateEl.textContent = `${getTranslation('hijriDateLabel')}: ${hijriDay} ${hijriMonthName}, ${hijriYear} ${getTranslation('hijriYearSuffix')}`; } else { throw new Error("Invalid Hijri month index.");}
                } else { throw new Error("HijriDate conversion returned invalid object."); }
            } catch (e) { currentHijriDateEl.textContent = getTranslation('hijriDateError'); console.error("Error updating Hijri date:", e); }
        } else { currentHijriDateEl.textContent = getTranslation('hijriNotLoaded'); }
    }
}

function attemptMusicPlay(interactionType = "unknown") { if (backgroundMusic && backgroundMusic.paused) { console.log(`Attempting music play due to ${interactionType} interaction...`); const playPromise = backgroundMusic.play(); if (playPromise !== undefined) { playPromise.then(() => { console.log(`Music started successfully via ${interactionType} interaction.`); document.body.removeEventListener('click', handleFirstUserInteractionForMedia); document.body.removeEventListener('touchstart', handleFirstUserInteractionForMedia); }).catch(error => { console.warn(`Music play failed via ${interactionType} interaction:`, error.name, error.message); }); } } else if (backgroundMusic && !backgroundMusic.paused) { console.log(`Music already playing (interaction: ${interactionType}).`); } else if (!backgroundMusic) { console.error("backgroundMusic element not found during attemptMusicPlay."); } }
function handleFirstUserInteractionForMedia(event) { console.log(`First user media interaction (type: ${event.type}) on body detected.`); if (!musicPlayAttemptedOnInteraction) { attemptMusicPlay(`general body ${event.type}`); musicPlayAttemptedOnInteraction = true; } if (eidVideoEl && eidVideoEl.paused) { eidVideoEl.play().catch(e => console.warn("Video play failed on interaction:", e)); } }

function setLanguage(langCode) {
    if (supportedLanguages.includes(langCode) && currentLang !== langCode) {
        currentLang = langCode; userLocale = langToLocaleMap[currentLang] || (currentLang === 'bn' ? 'bn-BD' : 'en-US');
        localStorage.setItem('preferredLang', currentLang); document.documentElement.lang = currentLang; document.body.lang = currentLang;
        applyTranslations();
        updateGreetingMessageWithEid(); // Greeting message আপডেট করা
        updateTimeDate(); // সময় ও তারিখ আপডেট করা
    }
}

window.onload = async function() {
    console.log("Window onload sequence started.");
    await determineLanguageAndLocation(); 
    await fetchCorrectTime(); 

    updateGreetingMessageWithEid(); 

    if (backgroundMusic) { const playPromise = backgroundMusic.play(); if (playPromise !== undefined) { playPromise.then(() => { console.log("Background music autoplay successful."); }).catch(error => { console.warn("Background music autoplay prevented:", error.name, error.message); if (error.name === 'NotAllowedError') { document.body.addEventListener('click', handleFirstUserInteractionForMedia, { once: true }); document.body.addEventListener('touchstart', handleFirstUserInteractionForMedia, { once: true }); } }); } } else { console.error("backgroundMusic element not found!"); }
    if (eidVideoEl) { const videoPlayPromise = eidVideoEl.play(); if (videoPlayPromise !== undefined) { videoPlayPromise.catch(error => { console.warn("Video autoplay was prevented:", error.name, error.message); if (!musicPlayAttemptedOnInteraction && error.name === 'NotAllowedError') { document.body.addEventListener('click', handleFirstUserInteractionForMedia, { once: true }); document.body.addEventListener('touchstart', handleFirstUserInteractionForMedia, { once: true }); } }); } eidVideoEl.onerror = function() { console.error("Error loading video."); }; }
    
    generateButton.disabled = true; 
    userNameInput.addEventListener('input', function() { 
        generateButton.disabled = userNameInput.value.trim() === ""; 
    });
    
    // Ensure fireworks functions are available (loaded from fireworks.js)
    if (typeof startFireworks === 'function' && typeof animateFireworks === 'function') {
        startFireworks();
        animateFireworks();
    } else {
        console.error("Fireworks functions not loaded correctly.");
    }
    
    initializeDateTimeDisplay(); 
    console.log("Window onload sequence finished.");
};

function showStatusMessage(messageKey, type = 'info', duration = 3000, params = {}) { clearTimeout(statusTimeout); statusMessageDiv.textContent = getTranslation(messageKey, params); statusMessageDiv.className = ''; statusMessageDiv.classList.add(type); statusMessageDiv.style.display = 'block'; setTimeout(() => { statusMessageDiv.style.opacity = '1'; }, 10); statusTimeout = setTimeout(() => { statusMessageDiv.style.opacity = '0'; setTimeout(() => { statusMessageDiv.style.display = 'none'; }, 500); }, duration); }
async function generateAndShareLink() { const userName = userNameInput.value.trim(); if (userName === "") { showStatusMessage("statusEnterName", "error"); return; } attemptMusicPlay("share button click"); const currentUrl = new URL(window.location.href); currentUrl.searchParams.set('name', userName); const newLink = currentUrl.toString(); const sharerNameForMessage = decodeURIComponent(userName);
    const clientNow = new Date(); const correctedNow = new Date(clientNow.getTime() + timeOffset); const currentGregorianYear = correctedNow.getFullYear(); let eidName = null;
    if (typeof HijriDate !== 'undefined' && HijriDate.JS && typeof HijriDate.JS.convert === 'function') { try { const hijriInstance = HijriDate.JS.convert(correctedNow); if (hijriInstance) { eidName = determineEidName(hijriInstance.getMonth(), hijriInstance.getDate()); } } catch(e){} }

    let shareTextBase;
    if (eidName) {
        shareTextBase = getTranslation('greetingMessageFromEid', {name: sharerNameForMessage, eidName: eidName, year: toNativeNumeral(currentGregorianYear, currentLang)});
    } else {
        shareTextBase = getTranslation('greetingMessageFrom', {name: sharerNameForMessage});
    }
    const shareText = `${shareTextBase} ${newLink}`; 

    if (navigator.share) { try { await navigator.share({ title: document.title, text: shareText, url: newLink }); showStatusMessage('statusShareOptions', 'success', 1000); document.getElementById('generatedLinkContainer').style.display = 'none'; } catch (error) { console.error("Error during navigator.share:", error); showManualLink(newLink); showStatusMessage('statusShareError', 'info', 4000); } } else { showManualLink(newLink); showStatusMessage('statusNoAutoShare', 'info', 4000); } userNameInput.value = ''; generateButton.disabled = true; }
function showManualLink(link) { const sharableLinkInput = document.getElementById('sharableLink'); sharableLinkInput.value = link; document.getElementById('generatedLinkContainer').style.display = 'block'; }
function copyLink() { const sharableLinkInput = document.getElementById('sharableLink'); sharableLinkInput.select(); sharableLinkInput.setSelectionRange(0, 99999); try { navigator.clipboard.writeText(sharableLinkInput.value) .then(() => { showStatusMessage("statusLinkCopied", "success"); }) .catch(err => { console.error("Clipboard API copy failed:", err); if(document.execCommand('copy')) { showStatusMessage("statusLinkCopiedFallback", "success"); } else { showStatusMessage("statusCopyError", "error", 4000); } }); } catch (err) { console.error("Clipboard API not available or other error:", err); if(document.execCommand('copy')) { showStatusMessage("statusLinkCopiedFallback", "success"); } else { showStatusMessage("statusCopyError", "error", 4000); } } }