  gsap.registerPlugin(ScrollTrigger);

  // === Animacija headera sekcije ===
  gsap.from(".benefits__header", {
    scrollTrigger: {
      trigger: ".benefits__header",
      start: "top 80%", // kada sekcija uđe u viewport
    },
    y: 60,
    opacity: 0,
    duration: 1,
    ease: "power3.out"
  });

  // === Opcionalno: svetlo fade pozadine (ako koristiš benefits__fade) ===
  gsap.fromTo(".benefits__fade",
    { opacity: 0 },
    {
      opacity: 1,
      scrollTrigger: {
        trigger: ".benefits__fade",
        start: "top 85%",
        end: "bottom top",
        scrub: true
      }
    }
  );


  
  gsap.registerPlugin(ScrollTrigger);

  /* === USLUGE === */
  gsap.from(".services__header", {
    scrollTrigger: {
      trigger: ".services__header",
      start: "top 80%",
    },
    y: 50,
    opacity: 0,
    duration: 1,
    ease: "power3.out"
  });

  /* === PROJEKTI === */
  gsap.from(".projects__header", {
    scrollTrigger: {
      trigger: ".projects__header",
      start: "top 80%",
    },
    x: -60,
    opacity: 0,
    duration: 1,
    ease: "power3.out"
  });


  
 gsap.registerPlugin(ScrollTrigger);

  // Header animacija
  gsap.from(".pricing__header", {
    scrollTrigger: {
      trigger: ".pricing__header",
      start: "top 85%",
    },
    y: 60,
    opacity: 0,
    duration: 1,
    ease: "power3.out"
  });
  gsap.from(".faq__header", {
    scrollTrigger: {
      trigger: ".faq__header",
      start: "top 80%",
    },
    x: 60,
    opacity: 0,
    duration: 1,
    ease: "power3.out"
  });


    gsap.from(".contact__header", {
    scrollTrigger: {
      trigger: ".contact__header",
      start: "top 80%",
    },
    x: -60,
    opacity: 0,
    duration: 1,
    ease: "power2.out"
  });