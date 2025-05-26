// --- Helper Functions (Defined at the very top) ---
async function fetchWithTimeout(resource, options = {}, timeout = 8000) {
    const controller = new AbortController();
    const id = setTimeout(() => {
        controller.abort();
        // console.warn(`Fetch to ${resource} timed out after ${timeout}ms`);
    }, timeout);

    try {
        const response = await fetch(resource, { ...options, signal: controller.signal });
        clearTimeout(id);
        return response;
    } catch (error) {
        clearTimeout(id);
        // console.error(`Fetch error for ${resource}:`, error.name, error.message);
        throw error;
    }
}

function toNativeNumeral(numStr, lang) {
    if (typeof numStr === 'undefined' || numStr === null) return '';
    if (lang === 'bn') {
        const bengaliDigits = ['০', '১', '২', '৩', '৪', '৫', '৬', '৭', '৮', '৯'];
        return String(numStr).split('').map(digit => /\d/.test(digit) ? bengaliDigits[parseInt(digit)] : digit).join('');
    } else if (lang === 'ar') {
        const arabicDigits = ['٠', '١', '٢', '٣', '٤', '٥', '٦', '٧', '٨', '٩'];
        return String(numStr).split('').map(digit => /\d/.test(digit) ? arabicDigits[parseInt(digit)] : digit).join('');
    }
    return String(numStr);
}

function sanitizeHTML(str) {
    if (typeof str !== 'string') return '';
    const temp = document.createElement('div');
    temp.textContent = str;
    return temp.innerHTML;
}

// --- Global Constants and Variables ---
const translations = {
    'bn': {
        'pageTitle': 'ঈদ মোবারক!', 'greetingMessage': 'ঈদ মোবারক!', 'greetingMessageFrom': '{name} এর পক্ষ থেকে, ঈদ মোবারক!',
        'yourNameLabel': 'আপনার নাম লিখুন:', 'namePlaceholder': 'এখানে আপনার নাম দিন', 'shareButtonText': 'WhatsApp এ শেয়ার করুন',
        'shareLinkManualText': 'এই লিঙ্কটি বন্ধুদের সাথে শেয়ার করুন (যদি অটো-শেয়ার কাজ না করে):', 'copyButtonText': 'কপি করুন',
        'eidWishesFooter': 'সবাইকে ঈদের আন্তরিক শুভেচ্ছা!', 'timeLabel': 'সময়', 'dateLabel': 'তারিখ',
        'hijriDateLabel': 'ইসলামী তারিখ', 'hijriYearSuffix': 'হিজরি', 'statusEnterName': 'অনুগ্রহ করে আপনার নাম লিখুন।',
        'statusShareOptions': 'শুভেচ্ছা শেয়ার করার জন্য অপশন দেখানো হয়েছে!', 'statusShareError': 'শেয়ার অপশন কাজ করেনি/বাতিল হয়েছে। লিঙ্ক কপি করুন।',
        'statusNoAutoShare': 'আপনার ব্রাউজার অটো-শেয়ার সাপোর্ট করে না। লিঙ্ক কপি করুন।', 'statusLinkCopied': 'লিঙ্ক সফলভাবে কপি করা হয়েছে!',
        'statusLinkCopiedFallback': 'লিঙ্ক কপি করা হয়েছে (ফলব্যাক)!', 'statusCopyError': 'দুঃখিত, লিঙ্ক কপি করা যায়নি। নিজে কপি করে নিন।',
        'hijriDateLoading': 'ইসলামী তারিখ পরীক্ষা করা হচ্ছে...', 'hijriDateError': 'ইসলামী তারিখ রূপান্তরে ত্রুটি।',
        'hijriCalcError': 'হিজরি মাস গণনায় ত্রুটি।', 'hijriNotLoaded': 'ইসলামী ক্যালেন্ডার লোড হয়নি।',
        'musicPlayError': 'মিউজিক প্লে করা যায়নি। ডিভাইস সাউন্ড চেক করুন।', 'pageTitleEid': '{eidName} {year} এর শুভেচ্ছা!',
        'greetingMessageEid': '{eidName} {year}!', 'greetingMessageFromEid': '{name} এর পক্ষ থেকে, {eidName} {year}!',
        'eidAlFitr': 'ঈদুল ফিতর', 'eidAlAdha': 'ঈদুল আযহা', 'eidMubarakGeneric': 'ঈদ মোবারক',
        'languageLabel': 'ভাষা:', 'themeDark': 'ডার্ক থিম', 'themeLight': 'লাইট থিম',
        'toggleMusicPlay': 'মিউজিক প্লে করুন', 'toggleMusicPause': 'মিউজিক বন্ধ করুন',
        'shareViaText': 'অন্যান্য মাধ্যমে শেয়ার করুন:', 'shareFacebookText': 'Facebook', 'shareTwitterText': 'Twitter/X',
        'generateCardButtonText': 'ই-কার্ড তৈরি ও ডাউনলোড করুন', // নতুন টেক্সট
    },
    'en': {
        'pageTitle': 'Eid Mubarak!', 'greetingMessage': 'Eid Mubarak!', 'greetingMessageFrom': 'Eid Mubarak from {name}!',
        'yourNameLabel': 'Enter your name:', 'namePlaceholder': 'Enter your name here', 'shareButtonText': 'Share on WhatsApp',
        'shareLinkManualText': 'Share this link with friends (if auto-share doesn\'t work):', 'copyButtonText': 'Copy',
        'eidWishesFooter': 'Eid greetings to everyone!', 'timeLabel': 'Time', 'dateLabel': 'Date',
        'hijriDateLabel': 'Islamic Date', 'hijriYearSuffix': 'AH', 'statusEnterName': 'Please enter your name.',
        'statusShareOptions': 'Share options are shown!', 'statusShareError': 'Share option failed/cancelled. Please copy the link.',
        'statusNoAutoShare': 'Your browser does not support auto-share. Please copy the link.', 'statusLinkCopied': 'Link copied successfully!',
        'statusLinkCopiedFallback': 'Link copied (fallback)!', 'statusCopyError': 'Sorry, could not copy the link. Please copy it manually.',
        'hijriDateLoading': 'Checking Islamic date...', 'hijriDateError': 'Error in Islamic date conversion.',
        'hijriCalcError': 'Error in Hijri month calculation.', 'hijriNotLoaded': 'Islamic calendar not loaded.',
        'musicPlayError': 'Could not play music. Check device sound.', 'pageTitleEid': '{eidName} {year} Greetings!',
        'greetingMessageEid': '{eidName} {year}!', 'greetingMessageFromEid': 'From {name}, {eidName} {year}!',
        'eidAlFitr': 'Eid al-Fitr', 'eidAlAdha': 'Eid al-Adha', 'eidMubarakGeneric': 'Eid Mubarak',
        'languageLabel': 'Language:', 'themeDark': 'Dark Theme', 'themeLight': 'Light Theme',
        'toggleMusicPlay': 'Play Music', 'toggleMusicPause': 'Pause Music',
        'shareViaText': 'Share via other platforms:', 'shareFacebookText': 'Facebook', 'shareTwitterText': 'Twitter/X',
        'generateCardButtonText': 'Create & Download E-Card', // নতুন টেক্সট
    },
    'ar': {
        'pageTitle': 'عيد مبارك!', 'greetingMessage': 'عيد مبارك!', 'greetingMessageFrom': 'عيد مبارك من {name}!',
        'yourNameLabel': 'أدخل اسمك:', 'namePlaceholder': 'أدخل اسمك هنا', 'shareButtonText': 'شارك على WhatsApp',
        'shareLinkManualText': 'شارك هذا الرابط مع الأصدقاء (إذا لم تعمل المشاركة التلقائية):', 'copyButtonText': 'نسخ',
        'eidWishesFooter': 'تهاني العيد للجميع!', 'timeLabel': 'الوقت', 'dateLabel': 'التاريخ',
        'hijriDateLabel': 'التاريخ الهجري', 'hijriYearSuffix': 'هـ', 'statusEnterName': 'الرجاء إدخال اسمك.',
        'statusShareOptions': 'عرضت خيارات المشاركة!', 'statusShareError': 'فشلت المشاركة / ألغيت. يرجى نسخ الرابط.',
        'statusNoAutoShare': 'متصفحك لا يدعم المشاركة التلقائية. يرجى نسخ الرابط.', 'statusLinkCopied': 'تم نسخ الرابط بنجاح!',
        'statusLinkCopiedFallback': 'تم نسخ الرابط (احتياطي)!', 'statusCopyError': 'عذراً، لم يتم نسخ الرابط. يرجى نسخه يدوياً.',
        'hijriDateLoading': 'جاري التحقق من التاريخ الهجري...', 'hijriDateError': 'خطأ في تحويل التاريخ الهجري.',
        'hijriCalcError': 'خطأ في حساب الشهر الهجري.', 'hijriNotLoaded': 'التقويم الإسلامي لم يتم تحميله.',
        'musicPlayError': 'لم يتم تشغيل الموسيقى. تحقق من صوت الجهاز.', 'pageTitleEid': 'تهاني {eidName} {year}!',
        'greetingMessageEid': '{eidName} {year}!', 'greetingMessageFromEid': 'من {name}, {eidName} {year}!',
        'eidAlFitr': 'عيد الفطر', 'eidAlAdha': 'عيد الأضحى', 'eidMubarakGeneric': 'عيد مبارك',
        'languageLabel': 'اللغة:', 'themeDark': 'الوضع الداكن', 'themeLight': 'الوضع الفاتح',
        'toggleMusicPlay': 'تشغيل الموسيقى', 'toggleMusicPause': 'إيقاف الموسيقى',
        'shareViaText': 'شارك عبر منصات أخرى:', 'shareFacebookText': 'Facebook', 'shareTwitterText': 'Twitter/X',
        'generateCardButtonText': 'إنشاء وتنزيل البطاقة الإلكترونية', // নতুন টেক্সট
    },
    'es': {
        'pageTitle': '¡Eid Mubarak!', 'greetingMessage': '¡Eid Mubarak!', 'greetingMessageFrom': '¡Eid Mubarak de parte de {name}!',
        'yourNameLabel': 'Introduce tu nombre:', 'namePlaceholder': 'Introduce tu nombre aquí', 'shareButtonText': 'Compartir en WhatsApp',
        'shareLinkManualText': 'Comparte este enlace con amigos (si la compartición automática no funciona):', 'copyButtonText': 'Copiar',
        'eidWishesFooter': '¡Saludos de Eid para todos!', 'timeLabel': 'Hora', 'dateLabel': 'Fecha',
        'hijriDateLabel': 'Fecha Islámica', 'hijriYearSuffix': 'H', 'statusEnterName': 'Por favor, introduce tu nombre.',
        'statusShareOptions': '¡Se muestran las opciones para compartir!', 'statusShareError': 'La opción de compartir falló o fue cancelada. Por favor, copia el enlace.',
        'statusNoAutoShare': 'Tu navegador no soporta la compartición automática. Por favor, copia el enlace.', 'statusLinkCopied': '¡Enlace copiado con éxito!',
        'statusLinkCopiedFallback': '¡Enlace copiado (alternativo)!', 'statusCopyError': 'Lo sentimos, no se pudo copiar el enlace. Por favor, cópialo manualmente.',
        'hijriDateLoading': 'Comprobando fecha islámica...', 'hijriDateError': 'Error en la conversión de la fecha islámica.',
        'hijriCalcError': 'Error en el cálculo del mes islámico.', 'hijriNotLoaded': 'Calendario islámico no cargado.',
        'musicPlayError': 'No se pudo reproducir la música. Comprueba el sonido del dispositivo.',
        'pageTitleEid': '¡Saludos de {eidName} {year}!', 'greetingMessageEid': '¡{eidName} {year}!',
        'greetingMessageFromEid': '¡De parte de {name}, {eidName} {year}!', 'eidAlFitr': 'Eid al-Fitr',
        'eidAlAdha': 'Eid al-Adha', 'eidMubarakGeneric': 'Eid Mubarak',
        'languageLabel': 'Idioma:', 'themeDark': 'Tema Oscuro', 'themeLight': 'Tema Claro',
        'toggleMusicPlay': 'Reproducir Música', 'toggleMusicPause': 'Pausar Música',
        'shareViaText': 'Compartir en otras plataformas:', 'shareFacebookText': 'Facebook', 'shareTwitterText': 'Twitter/X',
        'generateCardButtonText': 'Crear y Descargar Tarjeta Electrónica', // নতুন টেক্সট
    }
};
const countryToLangMap = { 'SA': 'ar', 'AE': 'ar', 'EG': 'ar', 'KW': 'ar', 'QA': 'ar', 'OM': 'ar', 'BH': 'ar', 'BD': 'bn', 'IN': 'en', 'PK': 'en', 'US': 'en', 'GB': 'en', 'CA': 'en', 'AU': 'en', 'ES': 'es', 'MX': 'es', 'AR': 'es', 'CO': 'es', };
const langToLocaleMap = { 'bn': 'bn-BD', 'en': 'en-US', 'ar': 'ar-SA', 'es': 'es-ES', };
const supportedLanguages = Object.keys(translations);
const hijriMonthsData = {
    'bn': ["মহররম", "সফর", "রবিউল আউয়াল", "রবিউস সানি", "জমাদিউল আউয়াল", "জমাদিউস সানি", "রজব", "শাবান", "রমজান", "শাওয়াল", "জ্বিলকদ", "জ্বিলহজ্জ"],
    'en': ["Muharram", "Safar", "Rabi' al-awwal", "Rabi' al-thani", "Jumada al-awwal", "Jumada al-thani", "Rajab", "Sha'ban", "Ramadan", "Shawwal", "Dhu al-Qi'dah", "Dhu al-Hijjah"],
    'ar': ["محرم", "صفر", "ربيع الأول", "ربيع الثاني", "جمادى الأولى", "جمادى الآخرة", "رجب", "شعبان", "رمضان", "شوال", "ذو القعدة", "ذو الحجة"],
    'es': ["Muharram", "Safar", "Rabi' al-awwal", "Rabi' al-thani", "Jumada al-awwal", "Jumada al-thani", "Rajab", "Sha'ban", "Ramadán", "Shawwal", "Dhu ul-Qi'dah", "Dhu ul-Hiyya"]
};

let currentLang = 'bn';
let userTimeZone = 'Etc/UTC';
let userLocale = 'bn-BD';
let currentTheme = 'dark';
let timeOffset = 0;
let initialTimeSynced = false;
let musicPlayAttemptedOnInteraction = false;
let canAutoplayAudio = false;
let statusTimeout;
let sharerNameForCard = ''; // ই-কার্ডের জন্য নাম সংরক্ষণ করতে

// DOM Element Selectors
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
const shareFacebookButton = document.getElementById('shareFacebook');
const shareTwitterButton = document.getElementById('shareTwitter');
const mainFooterElement = document.getElementById('mainFooter');
const generateCardButton = document.getElementById('generateCardButton'); // নতুন বাটন সিলেক্ট করুন

// --- Core Application Functions ---

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
    if (document.title !== getTranslation('pageTitle')) {
        document.title = getTranslation('pageTitle');
    }
    if (musicToggleButton && backgroundMusic) {
        musicToggleButton.setAttribute('aria-label', backgroundMusic.paused ? getTranslation('toggleMusicPlay') : getTranslation('toggleMusicPause'));
    }
    if (themeToggleButton) {
        themeToggleButton.setAttribute('aria-label', currentTheme === 'dark' ? getTranslation('themeLight') : getTranslation('themeDark'));
    }
}

async function determineLanguageAndLocation() {
    let detectedLang = localStorage.getItem('preferredLang') || (navigator.language || navigator.userLanguage || 'bn-BD').split('-')[0].toLowerCase();
    if (!supportedLanguages.includes(detectedLang)) {
        detectedLang = 'bn';
    }
    currentLang = detectedLang;
    userLocale = langToLocaleMap[currentLang] || (currentLang === 'bn' ? 'bn-BD' : 'en-US');
    userTimeZone = Intl.DateTimeFormat().resolvedOptions().timeZone || 'Etc/UTC';

    document.documentElement.lang = currentLang;
    if (document.body) document.body.lang = currentLang;
    if (languageSelector) languageSelector.value = currentLang;
    // applyTranslations(); // onload এ কল হবে

    const urlParams = new URLSearchParams(window.location.search);
    const langParam = urlParams.get('lang');
    if (langParam && supportedLanguages.includes(langParam)) {
        currentLang = langParam;
    }

    if (languageSelector && languageSelector.value !== currentLang) languageSelector.value = currentLang;
    document.documentElement.lang = currentLang;
    if (document.body) document.body.lang = currentLang;
    userLocale = langToLocaleMap[currentLang] || (currentLang === 'bn' ? 'bn-BD' : 'en-US');

    try {
        const response = await fetchWithTimeout('https://ip-api.com/json/?fields=status,message,timezone,countryCode', { cache: 'no-store' });
        if (response && response.ok) {
            const data = await response.json();
            if (data.status === 'success') {
                if (data.countryCode && !langParam && !localStorage.getItem('preferredLang')) {
                    const langFromCountry = countryToLangMap[data.countryCode];
                    if (langFromCountry && supportedLanguages.includes(langFromCountry)) {
                        currentLang = langFromCountry;
                    }
                }
                if (data.timezone) userTimeZone = data.timezone;
            }
        }
    } catch (error) { /* Handled by fetchWithTimeout */ }

    if (languageSelector && languageSelector.value !== currentLang) languageSelector.value = currentLang;
    document.documentElement.lang = currentLang;
    if (document.body) document.body.lang = currentLang;
    userLocale = langToLocaleMap[currentLang] || (currentLang === 'bn' ? 'bn-BD' : 'en-US');
    // applyTranslations(); // onload এ কল হবে
}

async function fetchCorrectTime() {
    let success = false;
    try {
        const response = await fetchWithTimeout(`https://worldtimeapi.org/api/timezone/${userTimeZone || 'Etc/UTC'}`, { cache: 'no-store' });
        if (response && response.ok) {
            const data = await response.json();
            const serverTime = new Date(data.utc_datetime);
            timeOffset = serverTime.getTime() - (new Date().getTime());
            initialTimeSynced = true;
            success = true;
        }
    } catch (error) { /* Handled by fetchWithTimeout */ }
    if (!success) {
        timeOffset = 0;
        initialTimeSynced = false;
    }
    return success;
}

function initializeDateTimeDisplay() {
    if (!currentTimeEl || !currentDateEl || !currentHijriDateEl) return;
    updateTimeDate();
    setInterval(updateTimeDate, 1000);
}

function determineEidName(hijriMonth, hijriDay) {
    if (hijriMonth === 10 && hijriDay >= 1 && hijriDay <= 3) return getTranslation('eidAlFitr');
    if (hijriMonth === 12 && hijriDay >= 9 && hijriDay <= 13) return getTranslation('eidAlAdha');
    return null;
}

function updateGreetingMessageWithEid() {
    if (!greetingMessageEl) return;
    const correctedNow = new Date(new Date().getTime() + timeOffset);
    const currentGregorianYear = correctedNow.getFullYear();
    let eidName = null;

    if (typeof HijriDate !== 'undefined' && HijriDate.JS && typeof HijriDate.JS.convert === 'function') {
        try {
            const hijriInstance = HijriDate.JS.convert(correctedNow);
            if (hijriInstance && typeof hijriInstance.getMonth === 'function' && typeof hijriInstance.getDate === 'function') {
                eidName = determineEidName(hijriInstance.getMonth(), hijriInstance.getDate());
            }
        } catch (e) { console.error("Error determining Eid name from Hijri date:", e); }
    }

    const urlParams = new URLSearchParams(window.location.search);
    const sharerNameParamRaw = urlParams.get('name');
    let sharerNameForDisplay = '';
    if (sharerNameParamRaw) {
        sharerNameForDisplay = decodeURIComponent(sharerNameParamRaw);
    }

    let finalGreetingMessage;
    let finalPageTitle;

    if (eidName) {
        const yearText = toNativeNumeral(currentGregorianYear, currentLang);
        if (sharerNameForDisplay) {
            finalGreetingMessage = getTranslation('greetingMessageFromEid', { name: sharerNameForDisplay, eidName: eidName, year: yearText });
        } else {
            finalGreetingMessage = getTranslation('greetingMessageEid', { eidName: eidName, year: yearText });
        }
        finalPageTitle = getTranslation('pageTitleEid', { eidName: eidName, year: yearText });
    } else {
        if (sharerNameForDisplay) {
            finalGreetingMessage = getTranslation('greetingMessageFrom', { name: sharerNameForDisplay });
        } else {
            finalGreetingMessage = getTranslation('greetingMessage');
        }
        finalPageTitle = getTranslation('pageTitle');
    }
    greetingMessageEl.textContent = finalGreetingMessage; // textContent ব্যবহার XSS প্রতিরোধ করে
    if (document.title !== finalPageTitle) document.title = finalPageTitle;
    greetingMessageEl.style.animation = 'none';
    greetingMessageEl.offsetHeight; // Reflow to restart animation
    greetingMessageEl.style.animation = null;
}

function updateTimeDate() {
    if (!currentLang || !hijriMonthsData[currentLang]) {
        const correctedNowBasic = new Date(new Date().getTime() + timeOffset);
        const timeOptionsBasic = { hour: 'numeric', minute: '2-digit', second: '2-digit', hour12: true };
        if(userTimeZone && userTimeZone !== 'Etc/Unknown' && userTimeZone !== 'Etc/UTC') timeOptionsBasic.timeZone = userTimeZone;
        if (currentTimeEl) currentTimeEl.textContent = `${getTranslation('timeLabel')}: ${correctedNowBasic.toLocaleTimeString(userLocale, timeOptionsBasic)}`;
        const dateOptionsBasic = { day: 'numeric', month: 'long', year: 'numeric' };
        if(userTimeZone && userTimeZone !== 'Etc/Unknown' && userTimeZone !== 'Etc/UTC') dateOptionsBasic.timeZone = userTimeZone;
        if (currentDateEl) currentDateEl.textContent = `${getTranslation('dateLabel')}: ${correctedNowBasic.toLocaleDateString(userLocale, dateOptionsBasic)}`;
        if (currentHijriDateEl) currentHijriDateEl.textContent = getTranslation('hijriDateLoading');
        return;
    }

    const correctedNow = new Date(new Date().getTime() + timeOffset);
    const timeOptions = { hour: 'numeric', minute: '2-digit', second: '2-digit', hour12: true };
    if (userTimeZone && userTimeZone !== 'Etc/Unknown' && userTimeZone !== 'Etc/UTC') {
        try { new Date().toLocaleTimeString('en-US', {timeZone: userTimeZone}); timeOptions.timeZone = userTimeZone; }
        catch (e) { /* Use local if TZ invalid */ }
    }
    let timeString;
    try { timeString = correctedNow.toLocaleTimeString(userLocale, timeOptions); }
    catch (e) { delete timeOptions.timeZone; try { timeString = correctedNow.toLocaleTimeString(userLocale, timeOptions); } catch (e2) { timeString = "N/A"; } }
    if (currentTimeEl) currentTimeEl.textContent = `${getTranslation('timeLabel')}: ${timeString}`;

    const dateOptions = { day: 'numeric', month: 'long', year: 'numeric' };
     if (userTimeZone && userTimeZone !== 'Etc/Unknown' && userTimeZone !== 'Etc/UTC') {
        try { new Date().toLocaleDateString('en-US', {timeZone: userTimeZone}); dateOptions.timeZone = userTimeZone; }
        catch (e) { /* Use local if TZ invalid */ }
    }
    let dateString;
    try { dateString = correctedNow.toLocaleDateString(userLocale, dateOptions); }
    catch (e) { delete dateOptions.timeZone; try { dateString = correctedNow.toLocaleDateString(userLocale, dateOptions); } catch (e2) { dateString = "N/A"; } }
    if (currentDateEl) currentDateEl.textContent = `${getTranslation('dateLabel')}: ${dateString}`;

    if (currentHijriDateEl) {
        if (typeof HijriDate !== 'undefined' && HijriDate.JS && typeof HijriDate.JS.convert === 'function') {
            try {
                const hijriInstance = HijriDate.JS.convert(correctedNow);
                if (hijriInstance && typeof hijriInstance.getDate === 'function' && typeof hijriInstance.getMonth === 'function' && typeof hijriInstance.getFullYear === 'function') {
                    const dayVal = hijriInstance.getDate();
                    const yearVal = hijriInstance.getFullYear();
                    const hijriDay = toNativeNumeral(dayVal, currentLang);
                    const hijriYear = toNativeNumeral(yearVal, currentLang);
                    const hijriMonthIndex = hijriInstance.getMonth() - 1;
                    const currentValidHijriMonths = hijriMonthsData[currentLang] || hijriMonthsData['en'];

                    if (currentValidHijriMonths && hijriMonthIndex >= 0 && hijriMonthIndex < currentValidHijriMonths.length && hijriDay && hijriYear) {
                        const hijriMonthName = currentValidHijriMonths[hijriMonthIndex];
                        currentHijriDateEl.textContent = `${getTranslation('hijriDateLabel')}: ${hijriDay} ${hijriMonthName}, ${hijriYear} ${getTranslation('hijriYearSuffix')}`;
                    } else {
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
                    canAutoplayAudio = true;
                    updateMusicButton();
                    if (interactionType === "user_interaction") {
                        document.body.removeEventListener('click', handleFirstUserInteractionForMedia);
                        document.body.removeEventListener('touchstart', handleFirstUserInteractionForMedia);
                    }
                    resolve(true);
                }).catch(error => {
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

function toggleMusic() {
    if (!backgroundMusic) return;
    if (backgroundMusic.paused) {
        attemptMusicPlay("user_interaction").catch(err => { /* Error logged in attemptMusicPlay */ });
    } else {
        backgroundMusic.pause();
    }
}

function handleFirstUserInteractionForMedia(event) {
    if (!musicPlayAttemptedOnInteraction) {
        attemptMusicPlay("user_interaction").catch(err => { /* Error logged in attemptMusicPlay */ });
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

    if (mainFooterElement) {
        const colorToSet = themeName === 'light' ? '#000000' : '#f0e68c';
        mainFooterElement.style.color = colorToSet;
        const footerParagraphs = mainFooterElement.getElementsByTagName('p');
        for (let p of footerParagraphs) {
            p.style.color = colorToSet;
        }
        const footerSpans = mainFooterElement.getElementsByTagName('span');
        for (let span of footerSpans) {
            span.style.color = colorToSet;
        }
    }
}

function toggleTheme() {
    const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
    setTheme(newTheme);
}

function showStatusMessage(messageKey, type = 'info', duration = 3000, params = {}) {
    if (!statusMessageDiv) return;
    clearTimeout(statusTimeout);
    statusMessageDiv.textContent = getTranslation(messageKey, params);
    statusMessageDiv.className = '';
    statusMessageDiv.classList.add(type);
    statusMessageDiv.style.display = 'block';
    setTimeout(() => { statusMessageDiv.style.opacity = '1'; }, 10);
    statusTimeout = setTimeout(() => {
        statusMessageDiv.style.opacity = '0';
        setTimeout(() => { statusMessageDiv.style.display = 'none'; }, 500);
    }, duration);
}

function shareOnSocialMedia(platform) {
    const sharableLinkInput = document.getElementById('sharableLink');
    const linkToShare = (sharableLinkInput && sharableLinkInput.value) ? sharableLinkInput.value : window.location.href;

    let textToShare = document.title;

    const urlParams = new URLSearchParams(window.location.search);
    const sharerNameParamRaw = urlParams.get('name');
    let sharerNameForDisplay = '';
    if(sharerNameParamRaw) sharerNameForDisplay = decodeURIComponent(sharerNameParamRaw);

    let customMessage = getTranslation('greetingMessage');
    if (sharerNameForDisplay) {
        customMessage = getTranslation('greetingMessageFrom', { name: sharerNameForDisplay });
    }

    const correctedNow = new Date(new Date().getTime() + timeOffset);
    const currentGregorianYear = correctedNow.getFullYear();
    let eidName = null;
    if (typeof HijriDate !== 'undefined' && HijriDate.JS && typeof HijriDate.JS.convert === 'function') {
        try {
            const hijriInstance = HijriDate.JS.convert(correctedNow);
            if (hijriInstance && typeof hijriInstance.getMonth === 'function') {
                eidName = determineEidName(hijriInstance.getMonth(), hijriInstance.getDate());
            }
        } catch (e) { /* ignore */ }
    }

    if (eidName) {
        const yearText = toNativeNumeral(currentGregorianYear, currentLang);
        if (sharerNameForDisplay) {
            customMessage = getTranslation('greetingMessageFromEid', { name: sharerNameForDisplay, eidName: eidName, year: yearText });
        } else {
            customMessage = getTranslation('greetingMessageEid', { eidName: eidName, year: yearText });
        }
    }
    textToShare = `${customMessage} - ${getTranslation('eidWishesFooter')}`;


    let shareUrl = '';
    if (platform === 'facebook') {
        shareUrl = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(linkToShare)}"e=${encodeURIComponent(textToShare)}`;
    } else if (platform === 'twitter') {
        shareUrl = `https://twitter.com/intent/tweet?url=${encodeURIComponent(linkToShare)}&text=${encodeURIComponent(textToShare)}`;
    }

    if (shareUrl) {
        window.open(shareUrl, '_blank', 'noopener,noreferrer,width=600,height=400');
    }
}

async function generateAndShareLink() {
    if (!userNameInput || !generateButton) return;
    const userNameRaw = userNameInput.value.trim();
    if (userNameRaw === "") {
        showStatusMessage("statusEnterName", "error");
        return;
    }
    sharerNameForCard = userNameRaw; // নামটি গ্লোবাল ভেরিয়েবলে সংরক্ষণ করুন

    if (backgroundMusic && backgroundMusic.paused) {
        if (!musicPlayAttemptedOnInteraction) {
            await attemptMusicPlay("user_interaction").catch(err => {/* already logged */});
        } else if (canAutoplayAudio) {
            await attemptMusicPlay("implicit_permission").catch(err => {/* already logged */});
        }
    }

    const currentUrl = new URL(window.location.href);
    currentUrl.searchParams.set('name', userNameRaw);
    const newLink = currentUrl.toString();

    const sharableLinkInput = document.getElementById('sharableLink');
    if (sharableLinkInput) sharableLinkInput.value = newLink;

    const correctedNow = new Date(new Date().getTime() + timeOffset);
    const currentGregorianYear = correctedNow.getFullYear();
    let eidName = null;
    if (typeof HijriDate !== 'undefined' && HijriDate.JS && typeof HijriDate.JS.convert === 'function') {
        try {
            const hijriInstance = HijriDate.JS.convert(correctedNow);
            if (hijriInstance && typeof hijriInstance.getMonth === 'function') {
                eidName = determineEidName(hijriInstance.getMonth(), hijriInstance.getDate());
            }
        } catch(e){ console.error("Error determining Eid for share link:", e); }
    }

    let shareTextBase;
    if (eidName) {
        shareTextBase = getTranslation('greetingMessageFromEid', {name: sharerNameForCard, eidName: eidName, year: toNativeNumeral(currentGregorianYear, currentLang)});
    } else {
        shareTextBase = getTranslation('greetingMessageFrom', {name: sharerNameForCard});
    }
    const shareText = `${shareTextBase} ${newLink}`;

    if (navigator.share) {
        try {
            await navigator.share({ title: document.title, text: shareText, url: newLink });
            showStatusMessage('statusShareOptions', 'success', 1000);
            const linkContainer = document.getElementById('generatedLinkContainer');
            if(linkContainer) linkContainer.style.display = 'none';
        } catch (error) {
            showManualLink(newLink);
            showStatusMessage('statusShareError', 'info', 4000);
        }
    } else {
        showManualLink(newLink);
        showStatusMessage('statusNoAutoShare', 'info', 4000);
    }
    userNameInput.value = ''; // ইনপুট ফিল্ড খালি করুন
    generateButton.disabled = true; // শেয়ার বাটন ডিজেবল করুন

    // নতুন ই-কার্ড বাটন দেখানোর কোড
    if (generateCardButton) {
        generateCardButton.style.display = 'block';
        applyTranslations(); // Ensure the button text is translated if language changes before it's shown
    }
}

function showManualLink(link) {
    const linkContainer = document.getElementById('generatedLinkContainer');
    const sharableLinkInput = document.getElementById('sharableLink');
    if (!linkContainer || !sharableLinkInput) return;
    sharableLinkInput.value = link;
    linkContainer.style.display = 'block';
}

function copyLink() {
    const sharableLinkInput = document.getElementById('sharableLink');
    if (!sharableLinkInput) return;
    sharableLinkInput.select();
    sharableLinkInput.setSelectionRange(0, 99999);
    try {
        navigator.clipboard.writeText(sharableLinkInput.value)
            .then(() => { showStatusMessage("statusLinkCopied", "success"); })
            .catch(err => {
                if(document.execCommand('copy')) {
                    showStatusMessage("statusLinkCopiedFallback", "success");
                } else {
                    showStatusMessage("statusCopyError", "error", 4000);
                }
            });
    } catch (err) {
        if(document.execCommand('copy')) {
            showStatusMessage("statusLinkCopiedFallback", "success");
        } else {
            showStatusMessage("statusCopyError", "error", 4000);
        }
    }
}

// ই-কার্ড জেনারেট করার ফাংশন (প্রাথমিক)
function generateECard() {
    if (!sharerNameForCard) {
        showStatusMessage('statusEnterName', 'error');
        return;
    }
    alert(`ই-কার্ড তৈরি করার ফিচার শীঘ্রই আসছে! \nশুভেচ্ছান্তে: ${sharerNameForCard}`);
    // পরবর্তী ধাপে এখানে ক্যানভাস ব্যবহার করে কার্ড তৈরির লজিক যুক্ত করা হবে
}

// --- Window Onload Event ---
window.onload = async function() {
    if (document.body) {
        const savedTheme = localStorage.getItem('preferredTheme');
        setTheme(savedTheme && (savedTheme === 'light' || savedTheme === 'dark') ? savedTheme : 'dark');
    }

    await determineLanguageAndLocation();
    applyTranslations(); // প্রাথমিক অনুবাদ প্রয়োগ
    await fetchCorrectTime();
    initializeDateTimeDisplay();
    updateGreetingMessageWithEid();

    if (eidVideoEl) {
        eidVideoEl.muted = true;
        const videoPlayPromise = eidVideoEl.play();
        if (videoPlayPromise !== undefined) {
            videoPlayPromise.catch(error => {
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
        attemptMusicPlay("initial_autoplay_attempt").catch(err => { /* Handled in func */ });
        backgroundMusic.onplay = updateMusicButton;
        backgroundMusic.onpause = updateMusicButton;
        backgroundMusic.onended = () => { if (!backgroundMusic.loop) { updateMusicButton(); }};
        backgroundMusic.onerror = function() {
            console.error("Error with background music: " + (backgroundMusic.error ? backgroundMusic.error.message : 'Unknown error'));
            showStatusMessage('musicPlayError', 'error');
        }
    }

    if (languageSelector) {
        languageSelector.addEventListener('change', (event) => setLanguage(event.target.value));
    }
    if (musicToggleButton) {
        musicToggleButton.addEventListener('click', toggleMusic);
    }
    if (themeToggleButton) {
        themeToggleButton.addEventListener('click', toggleTheme);
    }
    if (shareFacebookButton) {
        shareFacebookButton.addEventListener('click', () => shareOnSocialMedia('facebook'));
    }
    if (shareTwitterButton) {
        shareTwitterButton.addEventListener('click', () => shareOnSocialMedia('twitter'));
    }

    if (generateButton && userNameInput) {
        generateButton.disabled = true;
        userNameInput.addEventListener('input', function() {
            generateButton.disabled = userNameInput.value.trim() === "";
            // যদি নাম লেখার সময় শেয়ার বাটন এনাবল হয়, তাহলে কার্ড বাটন হাইড করে দিন
            if (generateCardButton && generateCardButton.style.display !== 'none') {
                generateCardButton.style.display = 'none';
            }
            // যদি নাম মুছে ফেলা হয় এবং লিঙ্ক কন্টেইনার দৃশ্যমান থাকে, সেটাও হাইড করুন
            const linkContainer = document.getElementById('generatedLinkContainer');
            if(linkContainer && linkContainer.style.display !== 'none' && userNameInput.value.trim() === ""){
                linkContainer.style.display = 'none';
            }
        });
    }

    // নতুন: generateCardButton এর জন্য ইভেন্ট লিসেনার
    if (generateCardButton) {
        generateCardButton.addEventListener('click', generateECard);
    }

    if (typeof startFireworks === 'function' && typeof animateFireworks === 'function') {
        startFireworks();
        animateFireworks();
    } else {
        console.error("Fireworks functions not loaded correctly.");
    }
};
