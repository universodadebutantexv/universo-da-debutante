(() => {
  const gate = document.querySelector('#accessGate');
  const content = document.querySelector('#supplierContent');
  const form = document.querySelector('#accessForm');
  const password = document.querySelector('#accessPassword');
  const error = document.querySelector('#accessError');
  if (!gate || !content || !form || !password || !error) return;
  form.addEventListener('submit', event => {
    event.preventDefault();
    if (password.value.trim().toLowerCase() !== 'ud') { error.hidden = false; password.select(); return; }
    error.hidden = true; gate.hidden = true; content.hidden = false; document.body.classList.add('is-unlocked'); window.syncSuppliersFromSheet?.(); window.scrollTo({ top: 0, behavior: 'instant' });
  });
})();
