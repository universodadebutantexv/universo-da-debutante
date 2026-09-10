(() => {
  const grid = document.querySelector('#supplierGrid');
  if (!grid) return;

  const ICONS = {
    instagram: '<svg viewBox="0 0 24 24" fill="none" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="3" width="18" height="18" rx="5"/><circle cx="12" cy="12" r="4.1"/><circle cx="17.3" cy="6.7" r="1" fill="currentColor" stroke="none"/></svg>',
    site: '<svg viewBox="0 0 24 24" fill="none" stroke-width="1.8" stroke-linecap="round"><circle cx="12" cy="12" r="9"/><path d="M3 12h18M12 3c2.5 2.6 4 6 4 9s-1.5 6.4-4 9c-2.5-2.6-4-6-4-9s1.5-6.4 4-9Z"/></svg>',
    address: '<svg viewBox="0 0 24 24" fill="none" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M12 21s7-7.1 7-12a7 7 0 0 0-14 0c0 4.9 7 12 7 12Z"/><circle cx="12" cy="9" r="2.4"/></svg>',
    gmb: '<svg viewBox="0 0 24 24"><path d="M21.6 12.23c0-.74-.06-1.28-.2-1.84H12v3.33h5.5c-.11.9-.71 2.26-2.04 3.17l-.02.13 2.96 2.26.2.02c1.88-1.7 2.96-4.22 2.96-7.07Z"/><path d="M12 22c2.67 0 4.92-.86 6.56-2.34l-3.12-2.4c-.84.57-1.98.96-3.44.96-2.63 0-4.86-1.72-5.66-4.1l-.12.01-3.08 2.35-.04.11C4.14 19.86 7.79 22 12 22Z"/><path d="M6.34 14.12A5.9 5.9 0 0 1 6.02 12c0-.74.13-1.46.31-2.12L6.32 9.75 3.2 7.36l-.1.05A9.9 9.9 0 0 0 2 12c0 1.6.39 3.12 1.1 4.47l3.24-2.35Z"/><path d="M12 5.98c1.85 0 3.1.79 3.81 1.46l2.78-2.68C16.91 3.16 14.67 2 12 2 7.79 2 4.14 4.14 3.1 7.55l3.22 2.5c.8-2.38 3.03-4.07 5.68-4.07Z"/></svg>'
  };

  // Garante que o link seja absoluto, sem alterar nada além de adicionar o
  // protocolo quando faltar (ex: "google.com" vira "https://google.com").
  function ensureUrl(value) {
    const trimmed = String(value || '').trim();
    if (!trimmed) return '';
    if (/^([a-z][a-z0-9+.-]*:|\/\/)/i.test(trimmed)) return trimmed;
    return `https://${trimmed}`;
  }

  function iconLink(kind, href, label) {
    const url = ensureUrl(href);
    if (!url) return '';
    return `<a class="v2-icon v2-${kind}" href="${url}" target="_blank" rel="noreferrer" aria-label="${label}">${ICONS[kind]}</a>`;
  }

  function upgradeCard(card, supplier) {
    card.classList.add('card-v2');
    // Cada botão usa o link exatamente como está na planilha, sem montar nada aqui.
    const igUrl = ensureUrl(supplier.handle);
    const waUrl = ensureUrl(supplier.phone);

    card.innerHTML = `
      <div class="v2-logo-wrap">
        <div class="v2-logo"><img src="assets/suppliers/bianka-temperine.jpg" alt="${supplier.name}" /></div>
        <div class="v2-seal"><img src="assets/brand/seal-parceiro.png" alt="Selo Parceiro do Universo" /></div>
      </div>
      <h3>${supplier.name}</h3>
      <button type="button" class="v2-category" data-v2-category="${supplier.category}">${supplier.category}</button>
      <p class="v2-benefit-text">${supplier.description || supplier.benefit}</p>
      <span class="v2-benefit-pill">${supplier.benefit}</span>
      <div class="v2-actions">
        <a class="v2-whatsapp" href="${waUrl}" target="_blank" rel="noreferrer" aria-label="Abrir WhatsApp de ${supplier.name}">WhatsApp</a>
        <div class="v2-icon-row">
          ${iconLink('instagram', igUrl, `Instagram de ${supplier.name}`)}
          ${iconLink('site', supplier.site, `Site de ${supplier.name}`)}
          ${iconLink('address', supplier.address, `Endereço de ${supplier.name}`)}
          ${iconLink('gmb', supplier.gmb, `Google Meu Negócio de ${supplier.name}`)}
        </div>
      </div>
    `;

    card.querySelector('.v2-category')?.addEventListener('click', () => {
      if (typeof category !== 'undefined') {
        category = supplier.category;
        closeFilters?.();
        renderFilters?.();
        render?.();
      }
    });
  }

  function scan() {
    if (typeof suppliers === 'undefined') return;
    const supplier = suppliers.find(s => s.name === 'Bianka Temperine');
    if (!supplier) return;
    grid.querySelectorAll('.supplier-card').forEach(card => {
      const h3 = card.querySelector('h3');
      if (h3 && h3.textContent.trim() === 'Bianka Temperine' && !card.classList.contains('card-v2')) {
        upgradeCard(card, supplier);
      }
    });
  }

  new MutationObserver(scan).observe(grid, { childList: true });
  scan();
})();
