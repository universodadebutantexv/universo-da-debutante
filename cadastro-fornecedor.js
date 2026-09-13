// Cole aqui a URL do seu Web App do Google Apps Script (veja instruções enviadas junto com este arquivo).
const APPS_SCRIPT_URL = 'https://script.google.com/macros/s/AKfycbyY8GWHlfCc74lXfY33y3F790hHnijhkSZ07vovbcXZe26C0oQ0vQZEQWL44wWxv_TPwg/exec';

const form = document.getElementById('cadastroForm');
const descontoSelect = document.getElementById('desconto');
const descontoOutroField = document.getElementById('descontoOutroField');
const descontoOutroInput = document.getElementById('descontoOutro');
const linksContainer = document.getElementById('linksContainer');
const addLinkButton = document.getElementById('addLinkButton');
const descricaoField = document.getElementById('descricao');
const charCount = document.getElementById('charCount');
const submitButton = document.getElementById('submitButton');
const submitLabel = document.getElementById('submitLabel');
const feedback = document.getElementById('formFeedback');

descontoSelect.addEventListener('change', () => {
  const isOutro = descontoSelect.value === 'Outro';
  descontoOutroField.hidden = !isOutro;
  descontoOutroInput.required = isOutro;
  if (!isOutro) descontoOutroInput.value = '';
});

function updateLinkRow(row) {
  const tipoSelect = row.querySelector('.linkTipo');
  const outrosInput = row.querySelector('.linkOutrosDescricao');
  const urlInput = row.querySelector('.linkUrl');
  const hasTipo = Boolean(tipoSelect.value);
  const isOutros = tipoSelect.value === 'Outros';

  urlInput.hidden = !hasTipo;
  urlInput.required = hasTipo;
  outrosInput.hidden = !isOutros;
  outrosInput.required = isOutros;
  if (!isOutros) outrosInput.value = '';
}

function updateRemoveButtons() {
  const rows = linksContainer.querySelectorAll('[data-link-row]');
  rows.forEach((row) => {
    row.querySelector('.removeLinkButton').hidden = rows.length <= 1;
  });
}

linksContainer.addEventListener('change', (event) => {
  if (event.target.classList.contains('linkTipo')) {
    updateLinkRow(event.target.closest('[data-link-row]'));
  }
});

linksContainer.addEventListener('click', (event) => {
  if (event.target.classList.contains('removeLinkButton')) {
    event.target.closest('[data-link-row]').remove();
    updateRemoveButtons();
  }
});

addLinkButton.addEventListener('click', () => {
  const firstRow = linksContainer.querySelector('[data-link-row]');
  const newRow = firstRow.cloneNode(true);
  newRow.querySelectorAll('select, input').forEach((field) => {
    field.value = '';
    if (field.tagName === 'SELECT') field.querySelector('option[value=""]').selected = true;
  });
  updateLinkRow(newRow);
  linksContainer.appendChild(newRow);
  updateRemoveButtons();
});

descricaoField.addEventListener('input', () => {
  const length = descricaoField.value.length;
  charCount.textContent = length;
  charCount.parentElement.classList.toggle('limit-reached', length >= 140);
});

function collectLinks() {
  const rows = linksContainer.querySelectorAll('[data-link-row]');
  const links = [];
  for (const row of rows) {
    const tipoSelect = row.querySelector('.linkTipo');
    const outrosInput = row.querySelector('.linkOutrosDescricao');
    const urlInput = row.querySelector('.linkUrl');
    if (!tipoSelect.value) continue;

    const label = tipoSelect.value === 'Outros' ? outrosInput.value.trim() : tipoSelect.value;
    const url = urlInput.value.trim();
    if (!label || !url) return null;
    links.push(`${label}: ${url}`);
  }
  return links.join(' | ');
}

form.addEventListener('submit', async (event) => {
  event.preventDefault();
  feedback.textContent = '';
  feedback.className = 'form-feedback';

  if (!form.reportValidity()) return;

  const desconto = descontoSelect.value === 'Outro' ? descontoOutroInput.value.trim() : descontoSelect.value;
  if (descontoSelect.value === 'Outro' && !desconto) {
    feedback.textContent = 'Descreva qual vai ser o desconto oferecido.';
    feedback.classList.add('error');
    return;
  }

  const links = collectLinks();
  if (links === null) {
    feedback.textContent = 'Preencha o link ou remova a linha em branco antes de enviar.';
    feedback.classList.add('error');
    return;
  }

  const payload = {
    nome: document.getElementById('nome').value.trim(),
    empresa: document.getElementById('empresa').value.trim(),
    desconto,
    links,
    descricao: descricaoField.value.trim(),
  };

  if (APPS_SCRIPT_URL.includes('COLE_AQUI')) {
    feedback.textContent = 'Formulário ainda não conectado à planilha. Configure a URL do Apps Script.';
    feedback.classList.add('error');
    return;
  }

  submitButton.disabled = true;
  submitLabel.textContent = 'Enviando...';

  try {
    await fetch(APPS_SCRIPT_URL, {
      method: 'POST',
      mode: 'no-cors',
      headers: { 'Content-Type': 'text/plain;charset=utf-8' },
      body: JSON.stringify(payload),
    });

    form.reset();
    charCount.textContent = '0';
    descontoOutroField.hidden = true;

    const rows = linksContainer.querySelectorAll('[data-link-row]');
    rows.forEach((row, index) => {
      if (index > 0) {
        row.remove();
      } else {
        updateLinkRow(row);
      }
    });
    updateRemoveButtons();

    feedback.textContent = 'Cadastro enviado com sucesso! Obrigada por fazer parte do Universo da Debutante.';
    feedback.classList.add('success');
  } catch (error) {
    feedback.textContent = 'Não foi possível enviar agora. Tente novamente em instantes.';
    feedback.classList.add('error');
  } finally {
    submitButton.disabled = false;
    submitLabel.textContent = 'Enviar cadastro';
  }
});
