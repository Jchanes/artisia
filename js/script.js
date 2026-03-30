const btn = document.getElementById('verMas');
const extra = document.getElementById('coleccionesExtra');

if (btn && extra) {
  btn.addEventListener('click', function () {
    extra.classList.toggle('visible');
    btn.textContent = extra.classList.contains('visible')
      ? 'Ver menos ↑'
      : 'Ver más ↓';
  });
}
