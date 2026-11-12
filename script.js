(() => {
  const $ = (selector, root = document) => root.querySelector(selector);
  const $$ = (selector, root = document) => [...root.querySelectorAll(selector)];
  const year = $('#year');
  if (year) year.textContent = new Date().getFullYear();

  const toggle = $('#menuToggle');
  const nav = $('#siteNav');
  if (toggle && nav) {
    toggle.addEventListener('click', () => {
      const open = nav.classList.toggle('open');
      toggle.setAttribute('aria-expanded', String(open));
      toggle.querySelector('span').textContent = open ? '−' : '＋';
    });
    $$('a', nav).forEach(link => link.addEventListener('click', () => {
      nav.classList.remove('open');
      toggle.setAttribute('aria-expanded', 'false');
      toggle.querySelector('span').textContent = '＋';
    }));
  }

  // Reveal sections as they enter the viewport; keep content visible without JS.
  const revealItems = $$('[data-reveal]');
  if ('IntersectionObserver' in window && !window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12 });
    revealItems.forEach(item => observer.observe(item));
  } else {
    revealItems.forEach(item => item.classList.add('is-visible'));
  }

  // A quiet cursor light on pointer devices only.
  const aura = $('.cursor-aura');
  if (aura && window.matchMedia('(pointer:fine)').matches) {
    window.addEventListener('pointermove', event => {
      aura.style.left = `${event.clientX}px`;
      aura.style.top = `${event.clientY}px`;
    }, { passive: true });
  } else if (aura) aura.remove();
})();
