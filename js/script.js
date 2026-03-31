const btn = document.getElementById('verMas');
const extra = document.getElementById('coleccionesExtra');
const mapaGlobal = document.getElementById('mapa-global');
const culturaCards = document.querySelectorAll('.cultura-card');


if (btn && extra) {
  btn.addEventListener('click', function () {
    extra.classList.toggle('visible');
    btn.textContent = extra.classList.contains('visible')
      ? 'Ver menos ↑'
      : 'Ver más ↓';
  });
}

if (mapaGlobal && culturaCards.length > 0) {
  culturaCards.forEach(card => {
    card.addEventListener('click', () => {

      const lugar = card.dataset.lugar;
      mapaGlobal.src =
        `https://maps.google.com/maps?q=${encodeURIComponent(lugar)}&output=embed`;

      culturaCards.forEach(c => c.classList.remove('activa'));
      card.classList.add('activa');

    });
  });
}
