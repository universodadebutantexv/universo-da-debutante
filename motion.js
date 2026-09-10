(() => {
  const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  // Barra de navegação: transparente sobre o hero, sólida ao rolar
  const topbar = document.querySelector('.topbar');
  if (topbar) {
    const toggle = () => topbar.classList.toggle('is-scrolled', window.scrollY > 40);
    toggle();
    window.addEventListener('scroll', toggle, { passive: true });
  }

  if (reduceMotion) return;

  // Conteúdo do hero esmaece suavemente conforme o usuário rola para baixo
  const heroCopy = document.querySelector('.hero-copy');
  if (heroCopy) {
    let ticking = false;
    window.addEventListener('scroll', () => {
      if (ticking) return;
      ticking = true;
      requestAnimationFrame(() => {
        const fade = Math.max(0, 1 - window.scrollY / 500);
        heroCopy.style.opacity = fade;
        heroCopy.style.transform = `translateY(${(1 - fade) * 24}px)`;
        ticking = false;
      });
    }, { passive: true });
  }

  // Contador animado quando a busca/filtro muda o total de resultados
  const countEl = document.querySelector('#resultCount');
  if (countEl) {
    let lastValue = -1;
    const animateTo = (target, previousText) => {
      const duration = 450;
      const startTime = performance.now();
      const step = (now) => {
        const progress = Math.min((now - startTime) / duration, 1);
        const eased = 1 - Math.pow(1 - progress, 3);
        const current = Math.round(target * eased);
        countEl.textContent = previousText.replace(/^\d+/, current);
        if (progress < 1) requestAnimationFrame(step);
      };
      requestAnimationFrame(step);
    };
    const mo = new MutationObserver(() => {
      const match = countEl.textContent.match(/^\d+/);
      if (!match) return;
      const value = parseInt(match[0], 10);
      if (value !== lastValue && lastValue !== -1) {
        const previousText = countEl.textContent;
        mo.disconnect();
        animateTo(value, previousText);
        setTimeout(() => mo.observe(countEl, { childList: true, characterData: true, subtree: true }), 470);
      }
      lastValue = value;
    });
    mo.observe(countEl, { childList: true, characterData: true, subtree: true });
  }
})();
