/* ====================================================
   ESAS HOMES — Sections JS
   i18n (EN/AR/RU/FA/ZH) + all interactive behaviors
==================================================== */

/* ── i18n ── */
const ESAS_T = {
  EN:{dir:'ltr',
    bookViewing:'Book a Private Viewing',
    tagline:'Upgrade Your Lifestyle',
    aboutEyebrow:'About EsasHomes',
    aboutTitle:'The Foundation of<br>Real Estate in Türkiye',
    aboutText:'EsasHomes has guided 420+ global partners through Istanbul\'s finest properties. From the shores of Kartal to the heights of Sarıyer, we are the foundation of real estate in Türkiye.',
    s1n:'300',s1l:'Projects',s2n:'420',s2l:'Partners',s3n:'5',s3l:'Languages',s4n:'✓',s4l:'Citizenship Support',
    meetTeam:'Meet Our Team',
    partnersTitle:'Trusted Developer Partners',
    propertiesTitle:'Featured Properties',
    viewProperty:'View Property',
    readyLbl:'Ready',
    constructLbl:'Under Construction',
    whyTitle:'Why Choose EsasHomes',
    why1h:'Government-Backed Guarantee',why1d:'Properties verified by Turkish authorities with full legal protection and title deed security.',
    why2h:'Fast Title Deed — 1 Day',why2d:'Experience Turkey\'s fastest title transfer process, completed in as little as 24 hours.',
    why3h:'5 Languages Support',why3d:'Our multilingual team serves you fluently in Arabic, English, Russian, Persian, and Chinese.',
    why4h:'Post-Sale Services',why4d:'We remain your partner long after the sale — property management, rentals, and residency support.',
    testiTitle:'Client Stories',
    ytTitle:'Explore Our Properties',
    ytBtn:'View All Videos on YouTube',
    bookTitle:'Book a Private Viewing',
    bookSub:'Reach us directly or fill in the form below and our team will contact you within 24 hours.',
    phoneLbl:'Phone',emailLbl:'Email',addrLbl:'Address',
    nameFld:'Full Name',emailFld:'Email Address',phoneFld:'Phone Number',
    langFld:'Preferred Language',propFld:'Property Interest',msgFld:'Message',dateFld:'Preferred Date',
    submitBtn:'Book Private Viewing',
    successMsg:'Thank you! We will contact you shortly.',
    errMsg:'Please fill all required fields correctly.',
    footerTagline:'The foundation of real estate in Türkiye — serving global investors in 5 languages.',
    nlLabel:'Newsletter',subscribe:'Subscribe',
    copyright:'© 2025 EsasHomes. All rights reserved.',
    privacyLbl:'Privacy Policy',termsLbl:'Terms of Use',
  },
  AR:{dir:'rtl',
    bookViewing:'احجز مشاهدة خاصة',
    tagline:'ارتقِ بأسلوب حياتك',
    aboutEyebrow:'عن أساس هومز',
    aboutTitle:'أساس العقارات<br>في تركيا',
    aboutText:'أرشدت أساس هومز أكثر من 420 شريكاً عالمياً عبر أرقى عقارات إسطنبول. من شواطئ كارتال إلى مرتفعات سارييار، نحن أساس العقارات في تركيا.',
    s1n:'300',s1l:'مشروع',s2n:'420',s2l:'شريك',s3n:'5',s3l:'لغات',s4n:'✓',s4l:'دعم الجنسية',
    meetTeam:'تعرف على فريقنا',
    partnersTitle:'شركاء المطورين الموثوقون',
    propertiesTitle:'العقارات المميزة',
    viewProperty:'عرض العقار',
    readyLbl:'جاهز',
    constructLbl:'قيد الإنشاء',
    whyTitle:'لماذا تختار أساس هومز',
    why1h:'ضمان حكومي',why1d:'عقارات موثقة من الجهات التركية مع حماية قانونية كاملة وأمان صك الملكية.',
    why2h:'صك الملكية بيوم واحد',why2d:'استمتع بأسرع عملية نقل ملكية في تركيا، تكتمل في غضون 24 ساعة.',
    why3h:'دعم بـ 5 لغات',why3d:'فريقنا متعدد اللغات يخدمكم بطلاقة بالعربية والإنجليزية والروسية والفارسية والصينية.',
    why4h:'خدمات ما بعد البيع',why4d:'نبقى شريكك بعد البيع — إدارة العقارات والإيجارات ودعم الإقامة.',
    testiTitle:'قصص العملاء',
    ytTitle:'استكشف عقاراتنا',
    ytBtn:'مشاهدة جميع الفيديوهات على يوتيوب',
    bookTitle:'احجز مشاهدة خاصة',
    bookSub:'تواصل معنا مباشرة أو املأ النموذج أدناه وسيتواصل معك فريقنا خلال 24 ساعة.',
    phoneLbl:'الهاتف',emailLbl:'البريد الإلكتروني',addrLbl:'العنوان',
    nameFld:'الاسم الكامل',emailFld:'البريد الإلكتروني',phoneFld:'رقم الهاتف',
    langFld:'اللغة المفضلة',propFld:'العقار المهتم به',msgFld:'الرسالة',dateFld:'التاريخ المفضل',
    submitBtn:'احجز المشاهدة الخاصة',
    successMsg:'شكراً! سنتواصل معك قريباً.',
    errMsg:'يرجى ملء جميع الحقول المطلوبة بشكل صحيح.',
    footerTagline:'أساس العقارات في تركيا — نخدم المستثمرين العالميين بـ 5 لغات.',
    nlLabel:'النشرة البريدية',subscribe:'اشترك',
    copyright:'© 2025 أساس هومز. جميع الحقوق محفوظة.',
    privacyLbl:'سياسة الخصوصية',termsLbl:'شروط الاستخدام',
  },
  RU:{dir:'ltr',
    bookViewing:'Записаться на просмотр',
    tagline:'Повысьте качество жизни',
    aboutEyebrow:'О компании EsasHomes',
    aboutTitle:'Фундамент недвижимости<br>в Турции',
    aboutText:'EsasHomes помогла 420+ международным партнёрам найти лучшую недвижимость в Стамбуле. От берегов Картала до высот Сарыера — мы основа турецкого рынка недвижимости.',
    s1n:'300',s1l:'Проектов',s2n:'420',s2l:'Партнёров',s3n:'5',s3l:'Языков',s4n:'✓',s4l:'Гражданство Турции',
    meetTeam:'Наша команда',
    partnersTitle:'Проверенные партнёры-застройщики',
    propertiesTitle:'Избранная недвижимость',
    viewProperty:'Посмотреть',
    readyLbl:'Готово',
    constructLbl:'Строится',
    whyTitle:'Почему EsasHomes',
    why1h:'Государственная гарантия',why1d:'Объекты проверены турецкими органами власти с полной юридической защитой.',
    why2h:'Право собственности за 1 день',why2d:'Самый быстрый процесс передачи права собственности в Турции — за 24 часа.',
    why3h:'Поддержка на 5 языках',why3d:'Наша многоязычная команда обслуживает вас на арабском, английском, русском, персидском и китайском.',
    why4h:'Сервис после продажи',why4d:'Мы остаёмся вашим партнёром после покупки — управление недвижимостью и поддержка резидентства.',
    testiTitle:'Истории клиентов',
    ytTitle:'Исследуйте наши объекты',
    ytBtn:'Все видео на YouTube',
    bookTitle:'Записаться на просмотр',
    bookSub:'Свяжитесь с нами напрямую или заполните форму — мы ответим в течение 24 часов.',
    phoneLbl:'Телефон',emailLbl:'Email',addrLbl:'Адрес',
    nameFld:'Полное имя',emailFld:'Email',phoneFld:'Номер телефона',
    langFld:'Предпочтительный язык',propFld:'Интересующий объект',msgFld:'Сообщение',dateFld:'Удобная дата',
    submitBtn:'Записаться на просмотр',
    successMsg:'Спасибо! Мы свяжемся с вами в ближайшее время.',
    errMsg:'Пожалуйста, заполните все обязательные поля.',
    footerTagline:'Фундамент турецкой недвижимости — обслуживаем международных инвесторов на 5 языках.',
    nlLabel:'Рассылка',subscribe:'Подписаться',
    copyright:'© 2025 EsasHomes. Все права защищены.',
    privacyLbl:'Конфиденциальность',termsLbl:'Условия использования',
  },
  FA:{dir:'rtl',
    bookViewing:'رزرو بازدید خصوصی',
    tagline:'سبک زندگی خود را ارتقاء دهید',
    aboutEyebrow:'درباره اساس هومز',
    aboutTitle:'پایه‌ی املاک<br>در ترکیه',
    aboutText:'اساس هومز بیش از ۴۲۰ شریک جهانی را در راستای یافتن بهترین ملک‌های استانبول راهنمایی کرده است. از سواحل کارتال تا ارتفاعات ساریر، ما پایه‌ی بازار مسکن ترکیه هستیم.',
    s1n:'۳۰۰',s1l:'پروژه',s2n:'۴۲۰',s2l:'شریک',s3n:'۵',s3l:'زبان',s4n:'✓',s4l:'پشتیبانی تابعیت',
    meetTeam:'آشنایی با تیم ما',
    partnersTitle:'شرکای توسعه‌دهنده مورد اعتماد',
    propertiesTitle:'ملک‌های ویژه',
    viewProperty:'مشاهده ملک',
    readyLbl:'آماده تحویل',
    constructLbl:'در حال ساخت',
    whyTitle:'چرا اساس هومز',
    why1h:'ضمانت دولتی',why1d:'ملک‌های تأییدشده توسط مراجع ترکیه با حمایت حقوقی کامل.',
    why2h:'سند ملکی در یک روز',why2d:'سریع‌ترین فرآیند انتقال سند در ترکیه — در کمتر از ۲۴ ساعت.',
    why3h:'پشتیبانی ۵ زبانه',why3d:'تیم چندزبانه ما به عربی، انگلیسی، روسی، فارسی و چینی در خدمت شماست.',
    why4h:'خدمات پس از فروش',why4d:'پس از خرید همراه شما می‌مانیم — مدیریت ملک، اجاره و حمایت از اقامت.',
    testiTitle:'داستان مشتریان',
    ytTitle:'ملک‌های ما را کاوش کنید',
    ytBtn:'تمام ویدیوها در یوتیوب',
    bookTitle:'رزرو بازدید خصوصی',
    bookSub:'مستقیماً با ما تماس بگیرید یا فرم زیر را پر کنید تا تیم ما در ۲۴ ساعت با شما ارتباط برقرار کند.',
    phoneLbl:'تلفن',emailLbl:'ایمیل',addrLbl:'آدرس',
    nameFld:'نام کامل',emailFld:'آدرس ایمیل',phoneFld:'شماره تلفن',
    langFld:'زبان مورد نظر',propFld:'ملک مورد علاقه',msgFld:'پیام',dateFld:'تاریخ ترجیحی',
    submitBtn:'رزرو بازدید خصوصی',
    successMsg:'ممنون! به زودی با شما تماس می‌گیریم.',
    errMsg:'لطفاً تمام فیلدهای ضروری را به درستی پر کنید.',
    footerTagline:'پایه‌ی بازار مسکن ترکیه — خدمات به سرمایه‌گذاران جهانی به ۵ زبان.',
    nlLabel:'خبرنامه',subscribe:'عضویت',
    copyright:'© ۲۰۲۵ اساس هومز. تمام حقوق محفوظ است.',
    privacyLbl:'حریم خصوصی',termsLbl:'شرایط استفاده',
  },
  ZH:{dir:'ltr',
    bookViewing:'预约私人参观',
    tagline:'升级您的生活方式',
    aboutEyebrow:'关于EsasHomes',
    aboutTitle:'土耳其房地产<br>的基石',
    aboutText:'EsasHomes已为420余位全球合作伙伴提供伊斯坦布尔顶级房产服务。从卡尔塔尔海岸到萨雷尔高地，我们是土耳其房地产的基石。',
    s1n:'300',s1l:'个项目',s2n:'420',s2l:'位合作伙伴',s3n:'5',s3l:'种语言',s4n:'✓',s4l:'国籍申请支持',
    meetTeam:'认识我们的团队',
    partnersTitle:'值得信赖的开发商合作伙伴',
    propertiesTitle:'精选房产',
    viewProperty:'查看房产',
    readyLbl:'可交付',
    constructLbl:'在建中',
    whyTitle:'为什么选择EsasHomes',
    why1h:'政府背书保障',why1d:'经土耳其当局核实的房产，具有完整法律保护和产权安全。',
    why2h:'快速产权转让（1天）',why2d:'土耳其最快的产权转让流程，最短可在24小时内完成。',
    why3h:'五语言服务',why3d:'我们的多语言团队以阿拉伯语、英语、俄语、波斯语和中文为您提供流利服务。',
    why4h:'售后服务',why4d:'购房后持续陪伴您——物业管理、租赁服务和居留支持。',
    testiTitle:'客户故事',
    ytTitle:'探索我们的房产',
    ytBtn:'在YouTube上查看所有视频',
    bookTitle:'预约私人参观',
    bookSub:'直接联系我们或填写下方表格，我们的团队将在24小时内与您联系。',
    phoneLbl:'电话',emailLbl:'邮箱',addrLbl:'地址',
    nameFld:'全名',emailFld:'电子邮件地址',phoneFld:'电话号码',
    langFld:'首选语言',propFld:'感兴趣的房产',msgFld:'留言',dateFld:'首选日期',
    submitBtn:'预约私人参观',
    successMsg:'感谢您！我们将尽快与您联系。',
    errMsg:'请正确填写所有必填字段。',
    footerTagline:'土耳其房地产基石——以5种语言服务全球投资者。',
    nlLabel:'订阅通讯',subscribe:'订阅',
    copyright:'© 2025 EsasHomes. 版权所有。',
    privacyLbl:'隐私政策',termsLbl:'使用条款',
  },
};

/* ── Apply translations ── */
function esasApplyLang(lang) {
  const t = ESAS_T[lang] || ESAS_T.EN;
  document.documentElement.setAttribute('dir', t.dir);
  document.documentElement.setAttribute('lang', lang.toLowerCase());
  document.querySelectorAll('[data-t]').forEach(el => {
    const k = el.dataset.t;
    if (t[k] !== undefined) el.textContent = t[k];
  });
  document.querySelectorAll('[data-th]').forEach(el => {
    const k = el.dataset.th;
    if (t[k] !== undefined) el.innerHTML = t[k];
  });
}

/* ── Toast ── */
function esasToast(msg) {
  const el = document.getElementById('esas-toast');
  if (!el) return;
  el.querySelector('.tm').textContent = msg;
  el.classList.add('show');
  clearTimeout(el._t);
  el._t = setTimeout(() => el.classList.remove('show'), 3200);
}

/* ── Phone handler ── */
function initPhone() {
  document.querySelectorAll('.esas-phone-trigger').forEach(el => {
    el.addEventListener('click', e => {
      const num = '+905533333295';
      const isMob = /Mobi|Android/i.test(navigator.userAgent);
      if (isMob) { window.location.href = 'tel:' + num; return; }
      e.preventDefault();
      if (navigator.clipboard) {
        navigator.clipboard.writeText('+90 553 333 32 95')
          .then(() => esasToast('Phone number copied to clipboard ✓'))
          .catch(() => window.location.href = 'tel:' + num);
      } else {
        window.location.href = 'tel:' + num;
      }
    });
  });
}

/* ── Stats counter ── */
function countUp(el, target, dur) {
  if (!el) return;
  // Skip non-numeric targets
  if (!/^\d/.test(target)) { el.textContent = target; return; }
  const num = parseInt(target.replace(/\D/g,''), 10);
  if (!num) { el.textContent = target; return; }
  const suffix = target.replace(/[\d]/g,'');
  let start = null;
  const step = ts => {
    if (!start) start = ts;
    const p = Math.min((ts - start) / dur, 1);
    const ease = 1 - Math.pow(1 - p, 3);
    el.textContent = Math.floor(ease * num) + suffix;
    if (p < 1) requestAnimationFrame(step);
    else el.textContent = target;
  };
  requestAnimationFrame(step);
}

/* ── Scroll reveal + stats trigger ── */
function initScroll() {
  const obs = new IntersectionObserver(entries => {
    entries.forEach(e => {
      if (e.isIntersecting) { e.target.classList.add('in'); obs.unobserve(e.target); }
    });
  }, { threshold: 0.12, rootMargin: '0px 0px -8% 0px' });
  document.querySelectorAll('.esas-r').forEach(el => obs.observe(el));

  const statsObs = new IntersectionObserver(entries => {
    entries.forEach(e => {
      if (!e.isIntersecting) return;
      statsObs.unobserve(e.target);
      e.target.querySelectorAll('[data-cnt]').forEach(n => {
        const val = n.dataset.cnt;
        countUp(n, val, 1600);
      });
    });
  }, { threshold: 0.4 });
  const stats = document.querySelector('.esas-stats');
  if (stats) statsObs.observe(stats);
}

/* ── Testimonials carousel ── */
function initCarousel() {
  const track = document.getElementById('testi-track');
  const prev  = document.getElementById('testi-prev');
  const next  = document.getElementById('testi-next');
  if (!track) return;
  let cur = 0;
  const cards = track.children;
  function cardW() { return cards[0] ? cards[0].offsetWidth + 20 : 420; }
  function maxIdx() {
    const vis = window.innerWidth < 700 ? 1 : window.innerWidth < 1100 ? 2 : 3;
    return Math.max(0, cards.length - vis);
  }
  function go() {
    cur = Math.max(0, Math.min(cur, maxIdx()));
    track.style.transform = `translateX(-${cur * cardW()}px)`;
  }
  if (prev) prev.addEventListener('click', () => { cur--; go(); });
  if (next) next.addEventListener('click', () => { cur++; go(); });
}

/* ── Form validation ── */
function initForm() {
  const form = document.getElementById('booking-form');
  if (!form) return;
  form.addEventListener('submit', e => {
    e.preventDefault();
    const lang = document.documentElement.getAttribute('lang') || 'en';
    const t = ESAS_T[lang.toUpperCase()] || ESAS_T.EN;
    let ok = true;
    form.querySelectorAll('[required]').forEach(f => {
      f.classList.remove('err');
      if (!f.value.trim()) { f.classList.add('err'); ok = false; }
    });
    const em = form.querySelector('#f-email');
    if (em && em.value && !/^[^@]+@[^@]+\.[^@]+$/.test(em.value)) {
      em.classList.add('err'); ok = false;
    }
    if (ok) {
      esasToast(t.successMsg);
      form.reset();
    } else {
      esasToast(t.errMsg);
    }
  });
  form.querySelectorAll('input,select,textarea').forEach(f => {
    f.addEventListener('input', () => f.classList.remove('err'));
  });
}

/* ── Init ── */
document.addEventListener('DOMContentLoaded', () => {
  const lang = localStorage.getItem('lang') || 'EN';
  esasApplyLang(lang);
  initPhone();
  initScroll();
  initCarousel();
  initForm();
});

/* ── Listen to React lang changes ── */
window.addEventListener('esasLangChange', e => {
  esasApplyLang(e.detail);
});
