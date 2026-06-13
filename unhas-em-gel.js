(function () {
  // Seleção de serviço na página unhas-em-gel
  const cards = Array.from(document.querySelectorAll('.unhas-card'));
  if (!cards.length) return;

  const actionButton = document.querySelector('.unhas-action-button');
  if (actionButton) {
    actionButton.setAttribute('aria-disabled', 'true');
  }

  function clearSelection() {
    cards.forEach(c => {
      c.classList.remove('selected');
      c.setAttribute('aria-pressed', 'false');
    });
    if (actionButton) {
      actionButton.classList.remove('enabled');
      actionButton.setAttribute('aria-disabled', 'true');
    }
  }

  function selectCard(card) {
    clearSelection();
    card.classList.add('selected');
    card.setAttribute('aria-pressed', 'true');
    const nameEl = card.querySelector('.unhas-card-title');
    const name = nameEl ? nameEl.textContent.trim() : 'serviço';
    localStorage.setItem('servico', JSON.stringify({ categoria: 'unhas-em-gel', nome: name }));
    if (actionButton) {
      actionButton.classList.add('enabled');
      actionButton.removeAttribute('aria-disabled');
    }
  }

  cards.forEach(card => {
    card.setAttribute('tabindex', '0');
    card.setAttribute('role', 'button');
    card.setAttribute('aria-pressed', 'false');

    card.addEventListener('click', () => selectCard(card));
    card.addEventListener('keydown', (e) => {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        selectCard(card);
      }
    });
  });
})();
