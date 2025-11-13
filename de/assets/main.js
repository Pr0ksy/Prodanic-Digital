document.addEventListener("DOMContentLoaded", () => {
  const menuBtn = document.getElementById("menuBtn");
  const navLinks = document.getElementById("navLinks");

  // Burger meni
  menuBtn.addEventListener("click", () => {
    navLinks.classList.toggle("active");
    menuBtn.classList.toggle("open");
    menuBtn.innerHTML = menuBtn.classList.contains("open")
      ? '<i class="ri-close-line"></i>'
      : '<i class="ri-menu-line"></i>';
  });

  // Banner dupliciranje logotipa
  const banner = document.querySelector(".banner__wrapper");
  const inner = document.createElement("div");
  inner.classList.add("banner__inner");
  const logos = Array.from(banner.children);
  [...logos, ...logos].forEach((logo) => inner.appendChild(logo.cloneNode(true)));
  banner.innerHTML = "";
  banner.appendChild(inner);

  // === GSAP ANIMACIJE ===
  gsap.registerPlugin();

  const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

  tl.from(".navbar", {
    y: -50,
    opacity: 0,
    duration: 0.8,
  })
    .from(".hero__badge", {
      y: 30,
      opacity: 0,
      duration: 0.6,
    })
    .from(".hero h1", {
      y: 40,
      opacity: 0,
      scale: 0.95,
      duration: 0.7,
    })
    .from(".hero p", {
      y: 25,
      opacity: 0,
      duration: 0.6,
    })
    .from(".hero__buttons", {
      y: 20,
      opacity: 0,
      duration: 0.5,
    })
    tl.from(".hero__link", {
    y: 20,
    opacity: 0,
    duration: 0.6,
    clearProps: "all", 
    }, "-=0.2")
    .from(".banner__wrapper", {
      y: 60,
      opacity: 0,
      duration: 1,
    });
});

const projectsSwiper = new Swiper(".projects__slider", {
  loop: true,
  spaceBetween: 40,
  slidesPerView: 1,
  centeredSlides: true,
  initialSlide: 0, // 🟢 UVEK POČNI OD PRVOG SLIDEA
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  breakpoints: {
    768: {
      slidesPerView: 1.2,
    },
    1024: {
      slidesPerView: 1.4,
    },
  },
});


// === Tooltip details with Remix icons ===
document.addEventListener("DOMContentLoaded", () => {
  const details = document.querySelectorAll(".project__details");

 const tooltipData = [
  `
  <div><i class="ri-time-line"></i>4 Tage Entwicklung</div>
  <div><i class="ri-lightbulb-flash-fill"></i>Tolle Zusammenarbeit mit dem Kunden</div>
  <div><i class="ri-star-half-fill"></i>5/5</div>
  `,
  `
  <div><i class="ri-time-line"></i>7 Tage Entwicklung</div>
  <div><i class="ri-code-box-line"></i>Buchungssystem</div>
  <div><i class="ri-star-fill"></i>4/5</div>
  `,
  `
  <div><i class="ri-time-line"></i>14 Tage Entwicklung</div>
  <div><i class="ri-rocket-line"></i>Erweiterte Web-Anwendung</div>
  <div><i class="ri-star-fill"></i>5/5</div>
  `,
  `
  <div><i class="ri-time-line"></i>2 Tage Entwicklung</div>
  <div><i class="ri-brush-fill"></i>Designorientiertes Projekt</div>
  <div><i class="ri-star-fill"></i>5/5</div>
  `,
  `
  <div><i class="ri-time-line"></i>6 Tage Entwicklung</div>
  <div><i class="ri-settings-3-line"></i>Backend-Optimierung</div>
  <div><i class="ri-star-fill"></i>4/5</div>
  `,
  `
  <div><i class="ri-time-line"></i>8 Tage Entwicklung</div>
  <div><i class="ri-lightbulb-flash-fill"></i>Eines der komplexesten Projekte</div>
  <div><i class="ri-star-half-fill"></i>4.5/5</div>
  `,
];


  details.forEach((el, i) => {
    const tooltip = document.createElement("div");
    tooltip.classList.add("tooltip-card");
    tooltip.innerHTML = tooltipData[i % tooltipData.length];
    el.appendChild(tooltip);

    el.addEventListener("mouseenter", () => {
      tooltip.classList.add("show");
    });

    el.addEventListener("mouseleave", () => {
      tooltip.classList.remove("show");
    });
  });
});

// === Switch Tabs for Pricelist ===
document.addEventListener("DOMContentLoaded", () => {
  const tabBtns = document.querySelectorAll(".tab-btn");
  const groups = document.querySelectorAll(".pricing__group");

  tabBtns.forEach((btn) => {
    btn.addEventListener("click", () => {
      tabBtns.forEach(b => b.classList.remove("active"));
      groups.forEach(g => g.classList.remove("active"));

      btn.classList.add("active");
      const target = document.getElementById(btn.dataset.target);
      target.classList.add("active");
    });
  });
});

 const faqItems = document.querySelectorAll(".faq__item");

  faqItems.forEach((item) => {
    item.querySelector(".faq__question").addEventListener("click", () => {
      item.classList.toggle("active");

      faqItems.forEach((other) => {
        if (other !== item) other.classList.remove("active");
      });
    });
  });


    const scrollBtn = document.getElementById("scrollTopBtn");

  // Prikaži dugme kada skrolujemo dovoljno dole
  window.addEventListener("scroll", () => {
    if (window.scrollY > 400) {
      scrollBtn.classList.add("show");
    } else {
      scrollBtn.classList.remove("show");
    }
  });

  // Kad kliknemo - smooth scroll do vrha
  scrollBtn.addEventListener("click", () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  });


  window.addEventListener("load", () => {
    const preloader = document.getElementById("preloader");
    setTimeout(() => {
      preloader.classList.add("hidden");
    }, 800); // kratko zadržavanje pre nestajanja
  });

