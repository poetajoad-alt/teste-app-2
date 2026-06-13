// Preenche automaticamente os detalhes de confirmação a partir do localStorage
// Espera-se que `localStorage.agendamento` contenha um JSON com as chaves: data, horario, comentarios

function popularConfirmacao() {
  const raw = localStorage.getItem('agendamento');
  const msgEl = document.getElementById('confirmacao-message');
  const dataEl = document.getElementById('confirmacao-data');
  const horarioEl = document.getElementById('confirmacao-horario');
  const obsEl = document.getElementById('confirmacao-observacoes');

  if (!dataEl || !horarioEl || !obsEl || !msgEl) return;

  if (!raw) {
    msgEl.textContent = 'Detalhes não encontrados. Talvez o agendamento não tenha sido concluído.';
    msgEl.style.color = '#b53f60';
    return;
  }

  try {
    const ag = JSON.parse(raw);

    // Atualiza campos com segurança, mantendo fallback caso alguma chave esteja ausente
    dataEl.textContent = ag.data || '--/--';
    horarioEl.textContent = ag.horario || '--:--';
    obsEl.textContent = ag.comentarios && ag.comentarios.length ? ag.comentarios : '—';

    // Mensagem de sucesso acessível
    msgEl.textContent = 'Agendamento carregado.';
    msgEl.style.color = '#2a7a4a';

  } catch (err) {
    console.error('Erro ao ler agendamento do localStorage', err);
    msgEl.textContent = 'Erro ao carregar os detalhes do agendamento.';
    msgEl.style.color = '#b53f60';
  }
}

// Ao carregar o DOM, preenche os dados
document.addEventListener('DOMContentLoaded', function () {
  popularConfirmacao();
});
