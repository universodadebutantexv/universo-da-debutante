// Cole aqui a URL do seu Web App do Google Apps Script (veja instruções enviadas junto com este arquivo).
const APPS_SCRIPT_URL = 'https://script.google.com/macros/s/AKfycbxjr78MGOS__5WEWvQJ-AM_BcszpbLHvv-ass_nAT1OJlUHQcRombBxKTYEpACF8esnBw/exec';

const form = document.getElementById('cadastroForm');
const descontoSelect = document.getElementById('desconto');
const descontoOutroField = document.getElementById('descontoOutroField');
const descontoOutroInput = document.getElementById('descontoOutro');
const linkTipoSelect = document.getElementById('linkTipo');
const linkOutrosField = document.getElementById('linkOutrosField');
const linkOutrosInput = document.getElementById('linkOutrosDescricao');
const linkUrlField = document.getElementById('linkUrlField');
const linkUrlInput = document.getElementById('linkUrl');
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

linkTipoSelect.addEventListener('change', () => {
  const hasTipo = Boolean(linkTipoSelect.value);
  const isOutros = linkTipoSelect.value === 'Outros';
  linkUrlField.hidden = !hasTipo;
  linkUrlInput.required = hasTipo;
  linkOutrosField.hidden = !isOutros;
  linkOutrosInput.required = isOutros;
  if (!isOutros) linkOutrosInput.value = '';
});

descricaoField.addEventListener('input', () => {
  const length = descricaoField.value.length;
  charCount.textContent = length;
  charCount.parentElement.classList.toggle('limit-reached', length >= 140);
});

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

  const linkDescricao = linkTipoSelect.value === 'Outros' ? linkOutrosInput.value.trim() : linkTipoSelect.value;

  const payload = {
    nome: document.getElementById('nome').value.trim(),
    empresa: document.getElementById('empresa').value.trim(),
    desconto,
    linkTipo: linkDescricao,
    linkUrl: linkUrlInput.value.trim(),
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
    linkOutrosField.hidden = true;
    linkUrlField.hidden = true;
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
