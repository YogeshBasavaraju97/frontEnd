function toggleMenu() {
  const leftMenu = document.getElementById('leftMenu');
  leftMenu.classList.toggle('collapsed');
}

function adjustPageSize() {
  const width = window.innerWidth;
  const page = document.body;

  if (width >= 992 && width <= 1600) {
    page.style.transform = 'scale(0.9)';
  } else if (width >= 700 && width <= 767) {
    page.style.transform = 'scale(0.8)';
  } else if (width >= 600 && width <= 700) {
    page.style.transform = 'scale(0.75)';
  } else if (width <= 600) {
    page.style.transform = 'scale(0.5)';
  } else {
    page.style.transform = 'scale(1)';
  }
}

window.addEventListener('resize', adjustPageSize);
window.addEventListener('load', adjustPageSize);
