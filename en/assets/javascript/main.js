 // Basic helpers: theme toggle, mobile menu, scroll spy
    document.documentElement.classList.remove('no-js');
    document.addEventListener('DOMContentLoaded', () => {
      const html = document.documentElement;
      const toggle = document.querySelector('#themeToggle');
      const menuBtn = document.querySelector('#menuBtn');
      const menu = document.querySelector('#menu');
      const links = document.querySelectorAll('#menu a');
      const sections = document.querySelectorAll('section[id]');

      // Theme
      toggle?.addEventListener('click', () => {
        const next = html.getAttribute('data-theme') === 'light' ? 'dark' : 'light';
        html.setAttribute('data-theme', next);
        localStorage.setItem('pd-theme', next);
      });
      const saved = localStorage.getItem('pd-theme');
      if (saved) html.setAttribute('data-theme', saved);

      // Mobile menu
      menuBtn?.addEventListener('click', () => {
        const isOpen = menu.classList.toggle('is-open');
        menuBtn.setAttribute('aria-expanded', isOpen);
      });

      links.forEach(a => a.addEventListener('click', () => {
        menu.classList.remove('is-open');
        menuBtn.setAttribute('aria-expanded', false);
      }));

      // Scroll spy
      const obs = new IntersectionObserver(entries => {
        entries.forEach(entry => {
          const id = entry.target.getAttribute('id');
          const link = document.querySelector(`#menu a[href="#${id}"]`);
          if (entry.isIntersecting) {
            document.querySelectorAll('#menu a').forEach(a => a.classList.remove('active'));
            link?.classList.add('active');
          }
        });
      }, { rootMargin: '-40% 0px -55% 0px', threshold: 0 });
      sections.forEach(s => obs.observe(s));
    });