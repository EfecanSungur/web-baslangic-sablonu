// Mobil menüyü aç / kapat
const menuButonu = document.querySelector('.menu-toggle');
const menu = document.querySelector('.site-nav');

if (menuButonu && menu) {
  menuButonu.addEventListener('click', () => {
    const acikMi = menu.classList.toggle('acik');
    menuButonu.setAttribute('aria-expanded', acikMi);
  });

  // Bir bağlantıya tıklanınca menüyü kapat
  menu.querySelectorAll('a').forEach((link) => {
    link.addEventListener('click', () => {
      menu.classList.remove('acik');
      menuButonu.setAttribute('aria-expanded', 'false');
    });
  });
}
