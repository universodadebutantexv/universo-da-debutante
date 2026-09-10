(() => {
  const mobile = window.matchMedia('(max-width: 760px)');
  const apply = () => document.querySelectorAll('.contact-art .social-button').forEach(button => {
    if (!mobile.matches) return;
    if (button.querySelector('.contact-label')) return;
    const label = document.createElement('b');
    label.className = 'contact-label';
    label.textContent = button.classList.contains('instagram') ? 'Instagram' : 'WhatsApp';
    button.append(label);
  });

  const start = () => {
    apply();
    const grid = document.querySelector('#supplierGrid');
    if (grid) new MutationObserver(apply).observe(grid, { childList: true, subtree: true });
  };

  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', start);
  else start();
})();
