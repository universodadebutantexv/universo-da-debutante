(() => {
  const normalize = value => String(value || '').replace(/[^a-z0-9]+/gi, '').toLowerCase();
  const apply = () => document.querySelectorAll('.supplier-card').forEach(card => {
    if (normalize(card.querySelector('h3')?.textContent) !== 'biankatemperine') return;
    const logo = card.querySelector('.supplier-logo');
    if (!logo) return;
    logo.classList.add('has-photo', 'has-supplier-logo');
    let image = logo.querySelector('.supplier-photo');
    if (!image) { image = document.createElement('img'); image.className = 'supplier-photo'; logo.prepend(image); }
    image.src = 'assets/suppliers/bianka-temperine.jpg';
    image.alt = 'Bianka Temperine';
  });
  const grid = document.querySelector('#supplierGrid');
  if (grid) new MutationObserver(apply).observe(grid, { childList: true, subtree: true });
  apply();
})();
