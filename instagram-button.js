(() => {
  const apply = () => document.querySelectorAll('.contact-art .social-button').forEach(button => {
    if (button.dataset.networkButtonReady) return;
    const isInstagram = button.classList.contains('instagram');
    const image = document.createElement('img');
    image.className = 'network-brand-button';
    image.src = isInstagram
      ? 'assets/contact/instagram-button.png'
      : 'assets/contact/whatsapp-button-reference.jpg';
    image.alt = isInstagram ? 'Instagram' : 'WhatsApp';
    button.append(image);
    button.dataset.networkButtonReady = 'true';
  });

  const start = () => {
    apply();
    const grid = document.querySelector('#supplierGrid');
    if (grid) new MutationObserver(apply).observe(grid, { childList: true, subtree: true });
  };

  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', start);
  else start();
})();
