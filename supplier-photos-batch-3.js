(() => {
  const photos = {
    ingridfreitasbeauty: 'assets/suppliers/ingrid-freitas.jpg?v=3',
    entrepapeis: 'assets/suppliers/entre-papeis.jpg?v=2'
  };

  const normalize = (value) => String(value || '')
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .replace(/[^a-z0-9]+/gi, '')
    .toLowerCase();

  const applyPhotos = () => {
    document.querySelectorAll('.supplier-card').forEach((card) => {
      const name = normalize(card.querySelector('h3')?.textContent);
      const source = photos[name];
      const logo = card.querySelector('.supplier-logo');
      if (!logo) return;
      if (name === 'ingridfreitasbeauty') {
        logo.classList.add('has-photo', 'has-supplier-logo');
        let image = logo.querySelector('.supplier-photo');
        if (!image) {
          image = document.createElement('img');
          image.className = 'supplier-photo';
          logo.prepend(image);
        }
        image.style.display = '';
        image.removeAttribute('aria-hidden');
        image.src = photos[name];
        image.alt = 'Ingrid Freitas Beauty';
        return;
      }
      if (!source) return;

      logo.classList.add('has-photo', 'has-supplier-logo');
      let image = logo.querySelector('.supplier-photo');
      if (!image) {
        image = document.createElement('img');
        image.className = 'supplier-photo';
        logo.prepend(image);
      }
      image.src = source;
      image.alt = card.querySelector('h3')?.textContent?.trim() || 'Imagem do fornecedor';
    });
  };

  // Reaplique somente a foto da Ingrid caso algum script legado a substitua.
  const applyIngridPhoto = () => {
    document.querySelectorAll('.supplier-card').forEach((card) => {
      const name = normalize(card.querySelector('h3')?.textContent);
      if (name !== 'ingridfreitasbeauty') return;
      const logo = card.querySelector('.supplier-logo');
      if (!logo) return;
      logo.classList.add('has-photo', 'has-supplier-logo');
      let image = logo.querySelector('.supplier-photo');
      if (!image) {
        image = document.createElement('img');
        image.className = 'supplier-photo';
        logo.prepend(image);
      }
      image.style.display = '';
      image.removeAttribute('aria-hidden');
      if (image.getAttribute('src') !== photos[name]) image.src = photos[name];
      image.alt = 'Ingrid Freitas Beauty';
    });
  };

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', applyPhotos);
  } else {
    applyPhotos();
  }
  window.addEventListener('load', () => {
    applyPhotos();
    setTimeout(applyPhotos, 200);
    setTimeout(applyPhotos, 1600);
  });

  const grid = document.querySelector('#supplierGrid');
  if (grid) {
    new MutationObserver(applyPhotos).observe(grid, { childList: true, subtree: true });
  }
  applyIngridPhoto();
  window.setInterval(applyIngridPhoto, 250);
})();
