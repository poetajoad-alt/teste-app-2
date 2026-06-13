(function () {
  // Seleção de serviço na página manicure
  const cards = Array.from(document.querySelectorAll('.manicure-card'));
  if (!cards.length) return;

  function clearSelection() {
    cards.forEach(c => {
      c.classList.remove('selected');
      c.setAttribute('aria-pressed', 'false');
    });
  }

  function selectCard(card) {
    clearSelection();
    card.classList.add('selected');
    card.setAttribute('aria-pressed', 'true');
    const nameEl = card.querySelector('.manicure-card-name');
    const name = nameEl ? nameEl.textContent.trim() : 'serviço';
    localStorage.setItem('servico', JSON.stringify({ categoria: 'manicure', nome: name }));
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
