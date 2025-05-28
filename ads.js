// ads.js

// ফাংশন যা নির্দিষ্ট ID যুক্ত এলিমেন্টে অ্যাডের HTML বসাবে (সাধারণ ব্যানার অ্যাডের জন্য)
function placeBannerAd(placeholderId, adHtml) {
  const placeholder = document.getElementById(placeholderId);
  if (placeholder) {
    placeholder.innerHTML = adHtml;
  } else {
    console.error('Banner ad placeholder with ID "' + placeholderId + '" not found.');
  }
}

// বিশেষ ফাংশン যা স্ক্রিপ্ট ট্যাগ সহ HTML বসাবে এবং স্ক্রিপ্ট লোড করবে (জটিল ব্যানার অ্যাডের জন্য)
function placeDynamicBannerAd(placeholderId, adHtmlString) {
    const placeholder = document.getElementById(placeholderId);
    if (placeholder) {
        // প্লেসহোল্ডারের আগের কন্টেন্ট মুছে ফেলা হচ্ছে
        while (placeholder.firstChild) {
            placeholder.removeChild(placeholder.firstChild);
        }
        
        // নতুন HTML কন্টেন্ট যোগ করা হচ্ছে
        const tempDiv = document.createElement('div');
        tempDiv.innerHTML = adHtmlString;

        // HTML কন্টেন্ট প্লেসহোল্ডারে যোগ করা
        while (tempDiv.firstChild) {
            placeholder.appendChild(tempDiv.firstChild);
        }

        // প্লেসহোল্ডারের ভেতরের সব <script> ট্যাগ খুঁজে বের করা এবং সেগুলোকে এক্সিকিউট করা
        Array.from(placeholder.getElementsByTagName("script")).forEach(oldScript => {
            const newScript = document.createElement("script");
            // পুরনো স্ক্রিপ্টের অ্যাট্রিবিউটগুলো নতুন স্ক্রিপ্টে কপি করা
            Array.from(oldScript.attributes).forEach(attr => {
                newScript.setAttribute(attr.name, attr.value);
            });
            // পুরনো স্ক্রিপ্টের কন্টেন্ট (যদি থাকে) নতুন স্ক্রিপ্টে কপি করা
            if (oldScript.innerHTML) {
                newScript.text = oldScript.innerHTML;
            }
            // পুরনো স্ক্রিপ্টটি সরিয়ে নতুন স্ক্রিপ্টটি তার জায়গায় বসানো
            // এটি ব্রাউজারকে নতুন স্ক্রিপ্টটি লোড ও এক্সিকিউট করতে বাধ্য করে
            if (oldScript.parentNode) {
                 oldScript.parentNode.replaceChild(newScript, oldScript);
            } else {
                // যদি পুরনো স্ক্রিপ্টের প্যারেন্ট না থাকে (বিরল কেস)
                placeholder.appendChild(newScript); // সরাসরি প্লেসহোল্ডারে যোগ করা
            }
        });
    } else {
        console.error('Dynamic banner ad placeholder with ID "' + placeholderId + '" not found.');
    }
}


// --- ব্যানার অ্যাডগুলোর HTML স্ট্রিং ---

// ১. Adsterra ব্যানার অ্যাড (স্থান ১)
const adsterraAd1Html = `
  <script type="text/javascript">
    atOptions = {
        'key' : '083daa680b95934e474dba6b9a43263b',
        'format' : 'iframe',
        'height' : 60,
        'width' : 468,
        'params' : {}
    };
  <\/script> 
  <script type="text/javascript" src="//genuinelyunacceptableweep.com/083daa680b95934e474dba6b9a43263b/invoke.js"><\/script>
`;

// ২. Mondiad রেফারেল ব্যানার
const mondiadReferralAdHtml = `
  <div style="text-align: center; margin-bottom: 15px; position: relative; z-index: 4;">
    <a href="https://mondiad.com?refid=24765" target="_blank" rel="noopener noreferrer" title="Mondiad.com">
      <img src="https://publisher.mondiad.com/img/promo/728x90/17.gif" alt="Mondiad.com" style="max-width: 100%; height: auto; border: 0;">
    </a>
  </div>
`;

// ৩. Advertica.com ব্যানার অ্যাড (স্থান ২)
const adverticaAdHtml = `
  <ins style="width: 468px;height:60px" data-width="468" data-height="60" class="ga52fbdf917" data-domain="//data369.click" data-affquery="/1f0c5c8df4e2fb73a05d/a52fbdf917/?placementName=default"><script src="//data369.click/js/responsive.js" async><\/script></ins>
`;

// ৪. Aviso.bz অ্যাড
const avisoAdHtml = `
  <div style="text-align: center; margin-top: 15px; margin-bottom: 10px;">
    <a href="https://aviso.bz/?r=fiamrhack" target="_blank">
      <img src="https://aviso.bz/statica/pictures/A-468-2.gif" style="width:468px; height:60px;" alt="aviso | advertising service">
    </a>
  </div>
`;

// --- অন্যান্য থার্ড-পার্টি স্ক্রিপ্ট লোড করার ফাংশন ---

// Popcash অ্যাড লোড করার ফাংশন
function loadPopcashAd() {
  try {
    var uid = '205147';
    var wid = '740634';
    var pop_fback = 'up'; // এই ভ্যারিয়েবলটি Popcash এর স্ক্রিপ্টে ব্যবহৃত হতে পারে
    var pop_tag = document.createElement('script');
    pop_tag.src = '//cdn.popcash.net/show.js';
    pop_tag.async = true; // অ্যাসিঙ্ক্রোনাসভাবে লোড করা ভালো
    pop_tag.onerror = function() {
      console.warn("Popcash main CDN failed. Trying fallback CDN.");
      var pop_tag_fallback = document.createElement('script');
      pop_tag_fallback.src = '//cdn2.popcash.net/show.js';
      pop_tag_fallback.async = true;
      document.body.appendChild(pop_tag_fallback);
    };
    document.body.appendChild(pop_tag);
    // console.log("Popcash ad script initiated.");
  } catch (e) {
    console.error("Error loading Popcash ad:", e);
  }
}

// Adcash Autotag লোড করার ফাংশন
function loadAdcashAutotag() {
  // নিশ্চিত করা হচ্ছে যে aclib (Adcash লাইব্রেরি) লোড হয়েছে
  if (typeof aclib !== 'undefined' && typeof aclib.runAutoTag === 'function') {
    try {
      aclib.runAutoTag({
        zoneId: '3f2oyvh14',
      });
      // console.log("Adcash Autotag initiated.");
    } catch (e) {
      console.error("Error running Adcash Autotag:", e);
    }
  } else {
    // aclib এখনও লোড না হলে, কয়েকবার নির্দিষ্ট সময় পর পর চেষ্টা করা
    let retries = 5; // মোট ৫ বার চেষ্টা করবে
    let interval = 1000; // ১ সেকেন্ড পর পর

    function attemptLoad() {
      if (typeof aclib !== 'undefined' && typeof aclib.runAutoTag === 'function') {
        loadAdcashAutotag(); // সফল হলে আবার কল করে রান করবে
      } else if (retries > 0) {
        // console.warn(`Adcash library (aclib) not found. Retrying Adcash Autotag in ${interval/1000}s. Retries left: ${retries}`);
        retries--;
        setTimeout(attemptLoad, interval);
      } else {
        console.error("Adcash library (aclib) could not be loaded after multiple retries. Autotag will not run.");
      }
    }
    setTimeout(attemptLoad, interval); // প্রথম চেষ্টা শুরু
  }
}

// DOM লোড হওয়ার পর সব অ্যাড এবং স্ক্রিপ্ট লোড করা হবে
document.addEventListener('DOMContentLoaded', function() {
  // console.log("DOM fully loaded. Initiating ads from ads.js");

  // ব্যানার অ্যাডগুলো বসানো হচ্ছে
  placeDynamicBannerAd('adsterraAd1Placeholder', adsterraAd1Html);
  placeBannerAd('mondiadReferralAdPlaceholder', mondiadReferralAdHtml);
  placeDynamicBannerAd('adverticaAdPlaceholder', adverticaAdHtml);
  placeBannerAd('avisoAdPlaceholder', avisoAdHtml);

  // অন্যান্য থার্ড-পার্টি স্ক্রিপ্ট লোড করা হচ্ছে
  loadPopcashAd();
  loadAdcashAutotag(); 
});
