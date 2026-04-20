const texts = {
  ru: {
    saveDate: "Сохраните дату",
    names: "Алишер & Аяулым",
    heroSubtitle: "Приглашение на свадебный той",
    eventDate: "DD.MM.YYYY",
    invitationTitle: "Дорогие гости!",
    invitationBody:
      "С большой радостью приглашаем вас на свадебный той Алишера и Аяулым. Пусть этот вечер станет теплой встречей родных и близких сердец.",
    parentsLine: "С уважением, Нурлан и Гульнара.",
    whereTitle: "Место",
    whereValue: "Louvre Ball Room, г. Алматы, ул. Розыбакиева, 182а",
    mapLink: "Открыть карту",
    timeTitle: "Время",
    timeValue: "Сбор гостей: 16:00",
    dressTitle: "Дресс-код",
    dressValue: "Праздничный",
    countdownTitle: "До торжества",
    days: "дней",
    hours: "часов",
    minutes: "минут",
    seconds: "секунд",
    programTitle: "Программа вечера",
    program1: "Сбор и приветствие гостей, фуршет",
    program2: "Приветствие и встреча сватов (кудалар)",
    program3: "Беташар",
    program4: "Торжественное начало тоя",
    program5: "Продолжение тоя",
    program6: "Завершение тоя",
    galleryTitle: "Фотографии молодых",
    galleryNote: "Наша история любви в самых теплых кадрах этого особенного дня.",
    galleryPrev: "Назад",
    galleryNext: "Далее",
    photoCaption1: "Ваше фото",
    photoCaption2: "Ваше фото",
    photoCaption3: "Ваше фото",
    rsvpTitle: "Подтвердите участие",
    rsvpText: "Заполните форму, и сообщение откроется в WhatsApp для отправки.",
    fieldNameLabel: "ФИО",
    fieldNamePlaceholder: "Например: Айдос Нұрланұлы",
    fieldCountLabel: "Сколько человек придет с вами",
    fieldCountPlaceholder: "Выберите",
    fieldPhoneLabel: "Номер телефона",
    fieldPhonePlaceholder: "+7 777 000 00 00",
    rsvpBtn: "Отправить в WhatsApp",
    formAlertRequired: "Пожалуйста, заполните все поля формы.",
    musicOn: "Музыка: Вкл",
    musicOff: "Музыка: Выкл",
    waTitle: "Подтверждение участия в тое",
    waName: "ФИО",
    waGuests: "Количество гостей",
    waPhone: "Телефон",
    waDate: "Дата",
    footerText: "С нетерпением ждем встречи с вами!"
  },
  kz: {
    saveDate: "Күнді белгілеп қойыңыз",
    names: "Алишер & Аяулым",
    heroSubtitle: "Үйлену тойына шақыру",
    eventDate: "DD.MM.YYYY",
    invitationTitle: "Құрметті қонақтар!",
    invitationBody:
      "Сіздерді Алишер мен Аяулымның үйлену тойына арналған ақ дастарханымыздың қадірлі қонағы болуға шын жүректен шақырамыз.",
    parentsLine: "Ізгі тілекпен, Нурлан және Гульнара.",
    whereTitle: "Өтетін орны",
    whereValue: "Louvre Ball Room, Алматы қ., Розыбакиев көшесі, 182а",
    mapLink: "Картадан көру",
    timeTitle: "Уақыты",
    timeValue: "Қонақтарды қарсы алу: 16:00",
    dressTitle: "Дресс-код",
    dressValue: "Мерекелік",
    countdownTitle: "Тойға дейін",
    days: "күн",
    hours: "сағат",
    minutes: "минут",
    seconds: "секунд",
    programTitle: "Кеш бағдарламасы",
    program1: "Қонақтарды қарсы алу, фуршет",
    program2: "Құдаларды қарсы алу",
    program3: "Беташар",
    program4: "Тойдың салтанатты басталуы",
    program5: "Той жалғасады",
    program6: "Тойдың аяқталуы",
    galleryTitle: "Жас жұбайлардың фотосы",
    galleryNote: "Махаббат хикаямыздың ең әсерлі, жүрекке жақын сәттері.",
    galleryPrev: "Алдыңғы",
    galleryNext: "Келесі",
    photoCaption1: "Сіздің фотоңыз",
    photoCaption2: "Сіздің фотоңыз",
    photoCaption3: "Сіздің фотоңыз",
    rsvpTitle: "Қатысуыңызды растаңыз",
    rsvpText: "Форманы толтырыңыз, хабарлама WhatsApp-та жіберуге ашылады.",
    fieldNameLabel: "Аты-жөні",
    fieldNamePlaceholder: "Мысалы: Айдос Нұрланұлы",
    fieldCountLabel: "Өзіңізбен қанша адам келеді",
    fieldCountPlaceholder: "Таңдаңыз",
    fieldPhoneLabel: "Телефон нөмірі",
    fieldPhonePlaceholder: "+7 777 000 00 00",
    rsvpBtn: "WhatsApp арқылы жіберу",
    formAlertRequired: "Өтінеміз, форманың барлық өрістерін толтырыңыз.",
    musicOn: "Музыка: Қосулы",
    musicOff: "Музыка: Өшірулі",
    waTitle: "Тойға қатысуды растау",
    waName: "Аты-жөні",
    waGuests: "Қонақ саны",
    waPhone: "Телефон",
    waDate: "Күні",
    footerText: "Сіздерді асыға күтеміз!"
  }
};

const config = {
  // Укажите дату и время начала тоя в формате: "2026-07-18T16:00:00+05:00"
  eventDateISO: "2026-07-18T16:00:00+05:00",
  whatsappNumber: "77006070515"
};

let currentLang = "kz";
let isMusicPlaying = false;

function applyLanguage(lang) {
  currentLang = lang;
  document.documentElement.lang = lang === "kz" ? "kk" : "ru";
  document.title = lang === "kz" ? "Алишер & Аяулым | Той" : "Алишер & Аяулым | Свадьба";

  document.querySelectorAll("[data-i18n]").forEach((el) => {
    const key = el.getAttribute("data-i18n");
    if (texts[lang][key]) {
      el.textContent = texts[lang][key];
    }
  });

  document.querySelectorAll("[data-i18n-placeholder]").forEach((el) => {
    const key = el.getAttribute("data-i18n-placeholder");
    if (texts[lang][key]) {
      el.setAttribute("placeholder", texts[lang][key]);
    }
  });

  document.querySelectorAll(".lang-toggle span").forEach((el) => {
    el.classList.toggle("active", el.dataset.lang === lang);
  });

  const dateEl = document.querySelector('[data-i18n="eventDate"]');
  if (dateEl) {
    dateEl.textContent = formatEventDate(lang);
  }

  const musicBtn = document.getElementById("musicToggle");
  if (musicBtn) {
    musicBtn.textContent = isMusicPlaying ? texts[lang].musicOn : texts[lang].musicOff;
  }
}

function formatEventDate(lang) {
  const date = new Date(config.eventDateISO);
  if (Number.isNaN(date.getTime())) {
    return "DD.MM.YYYY";
  }

  const locale = lang === "kz" ? "kk-KZ" : "ru-RU";
  return new Intl.DateTimeFormat(locale, {
    day: "2-digit",
    month: "long",
    year: "numeric"
  }).format(date);
}

function initLanguageSwitch() {
  const toggle = document.getElementById("langToggle");
  toggle.addEventListener("click", () => {
    applyLanguage(currentLang === "ru" ? "kz" : "ru");
  });
}

function startCountdown() {
  const daysEl = document.getElementById("days");
  const hoursEl = document.getElementById("hours");
  const minutesEl = document.getElementById("minutes");
  const secondsEl = document.getElementById("seconds");
  const target = new Date(config.eventDateISO).getTime();

  function update() {
    const now = Date.now();
    const diff = Math.max(target - now, 0);

    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
    const minutes = Math.floor((diff / (1000 * 60)) % 60);
    const seconds = Math.floor((diff / 1000) % 60);

    daysEl.textContent = String(days).padStart(2, "0");
    hoursEl.textContent = String(hours).padStart(2, "0");
    minutesEl.textContent = String(minutes).padStart(2, "0");
    secondsEl.textContent = String(seconds).padStart(2, "0");
  }

  update();
  setInterval(update, 1000);
}

function initReveal() {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
        }
      });
    },
    { threshold: 0.14 }
  );

  document.querySelectorAll(".reveal").forEach((el) => observer.observe(el));
}

function initRsvpForm() {
  const form = document.getElementById("rsvpForm");
  if (!form) return;

  form.addEventListener("submit", (event) => {
    event.preventDefault();
    const name = form.guestName.value.trim();
    const guests = form.guestCount.value;
    const phone = form.guestPhone.value.trim();

    if (!name || !guests || !phone) {
      alert(texts[currentLang].formAlertRequired);
      return;
    }

    const dateText = formatEventDate(currentLang);
    const t = texts[currentLang];
    const message = [
      t.waTitle,
      `${t.waName}: ${name}`,
      `${t.waGuests}: ${guests}`,
      `${t.waPhone}: ${phone}`,
      `${t.waDate}: ${dateText}`
    ].join("\n");

    const url = `https://wa.me/${config.whatsappNumber}?text=${encodeURIComponent(message)}`;
    window.open(url, "_blank", "noopener");
  });
}

function initMusic() {
  const audio = document.getElementById("bgMusic");
  const button = document.getElementById("musicToggle");
  if (!audio || !button) return;

  const syncButton = () => {
    button.classList.toggle("playing", isMusicPlaying);
    button.textContent = isMusicPlaying
      ? texts[currentLang].musicOn
      : texts[currentLang].musicOff;
  };

  button.addEventListener("click", async () => {
    if (!isMusicPlaying) {
      try {
        await audio.play();
        isMusicPlaying = true;
      } catch {
        isMusicPlaying = false;
      }
    } else {
      audio.pause();
      isMusicPlaying = false;
    }
    syncButton();
  });

  syncButton();
}

function initGallery() {
  const track = document.getElementById("photosTrack");
  const prev = document.getElementById("galleryPrev");
  const next = document.getElementById("galleryNext");
  const dotsWrap = document.getElementById("galleryDots");
  const range = document.getElementById("galleryRange");
  const lightbox = document.getElementById("lightbox");
  const lightboxImage = document.getElementById("lightboxImage");
  const lightboxClose = document.getElementById("lightboxClose");
  if (!track || !prev || !next || !dotsWrap || !range || !lightbox || !lightboxImage || !lightboxClose) return;

  const items = Array.from(track.querySelectorAll(".photo"));
  let perView = window.matchMedia("(max-width: 920px)").matches ? 1 : 3;
  let currentStart = 0;
  let pageStarts = [0];

  const maxStart = () => Math.max(0, items.length - perView);

  const buildPages = () => {
    const starts = [];
    for (let start = 0; start < items.length; start += perView) {
      starts.push(start);
    }

    const lastStart = maxStart();
    if (starts[starts.length - 1] !== lastStart) {
      starts.push(lastStart);
    }

    pageStarts = starts.filter((value, idx, arr) => arr.indexOf(value) === idx);
    currentStart = Math.max(0, Math.min(currentStart, maxStart()));
  };

  const renderDots = () => {
    dotsWrap.innerHTML = "";
    for (let i = 0; i < pageStarts.length; i += 1) {
      const dot = document.createElement("button");
      dot.type = "button";
      dot.className = "gallery-dot";
      dot.setAttribute("aria-label", `Page ${i + 1}`);
      dot.addEventListener("click", () => {
        currentStart = pageStarts[i] ?? 0;
        update();
      });
      dotsWrap.appendChild(dot);
    }
  };

  const update = () => {
    currentStart = Math.max(0, Math.min(currentStart, maxStart()));
    track.classList.toggle("mobile-single", perView === 1);
    track.style.gridTemplateColumns = `repeat(${perView}, minmax(0, 1fr))`;
    items.forEach((item, i) => {
      const visible = i >= currentStart && i < currentStart + perView;
      item.style.display = visible ? "" : "none";
    });

    prev.disabled = currentStart === 0;
    next.disabled = currentStart >= maxStart();

    range.max = String(maxStart());
    range.value = String(currentStart);

    let activeDot = 0;
    for (let i = 0; i < pageStarts.length; i += 1) {
      if (pageStarts[i] <= currentStart) {
        activeDot = i;
      }
    }
    dotsWrap.querySelectorAll(".gallery-dot").forEach((dot, i) => {
      dot.classList.toggle("active", i === activeDot);
    });
  };

  prev.addEventListener("click", () => {
    currentStart = Math.max(0, currentStart - perView);
    update();
  });

  next.addEventListener("click", () => {
    currentStart = Math.min(maxStart(), currentStart + perView);
    update();
  });

  range.addEventListener("input", () => {
    currentStart = Number(range.value);
    update();
  });

  window.addEventListener("resize", () => {
    const nextPerView = window.matchMedia("(max-width: 920px)").matches ? 1 : 3;
    if (nextPerView !== perView) {
      perView = nextPerView;
      buildPages();
      renderDots();
    }
    update();
  });

  // Swipe support on mobile/tablet
  const viewport = track.parentElement;
  if (viewport) {
    let touchStartX = 0;
    let touchCurrentX = 0;
    let touching = false;

    viewport.addEventListener(
      "touchstart",
      (event) => {
        touchStartX = event.touches[0].clientX;
        touchCurrentX = touchStartX;
        touching = true;
      },
      { passive: true }
    );

    viewport.addEventListener(
      "touchmove",
      (event) => {
        if (!touching) return;
        touchCurrentX = event.touches[0].clientX;
      },
      { passive: true }
    );

    viewport.addEventListener("touchend", () => {
      if (!touching) return;
      const delta = touchCurrentX - touchStartX;
      if (Math.abs(delta) > 45) {
        if (delta < 0) {
          currentStart = Math.min(maxStart(), currentStart + 1);
        } else {
          currentStart = Math.max(0, currentStart - 1);
        }
        update();
      }
      touching = false;
    });
  }

  items.forEach((item) => {
    const img = item.querySelector("img");
    if (!img) return;
    img.addEventListener("click", () => {
      lightboxImage.src = img.src;
      lightboxImage.alt = img.alt;
      lightbox.classList.add("open");
      document.body.classList.add("modal-open");
      lightbox.setAttribute("aria-hidden", "false");
    });
  });

  const closeLightbox = () => {
    lightbox.classList.remove("open");
    document.body.classList.remove("modal-open");
    lightbox.setAttribute("aria-hidden", "true");
    lightboxImage.src = "";
  };

  lightboxClose.addEventListener("click", closeLightbox);
  lightbox.addEventListener("click", (event) => {
    if (event.target === lightbox) {
      closeLightbox();
    }
  });

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape" && lightbox.classList.contains("open")) {
      closeLightbox();
    }
  });

  buildPages();
  renderDots();
  update();
}

initLanguageSwitch();
applyLanguage("kz");
startCountdown();
initReveal();
initRsvpForm();
initMusic();
initGallery();
