const menuBtn = document.getElementById("menu-btn");
const navLinks = document.getElementById("nav-links");
const menuBtnIcon = menuBtn.querySelector("i");

menuBtn.addEventListener("click", (e) => {
  navLinks.classList.toggle("open");

  const isOpen = navLinks.classList.contains("open");
  menuBtnIcon.setAttribute("class", isOpen ? "ri-close-line" : "ri-menu-line");
});

navLinks.addEventListener("click", (e) => {
  navLinks.classList.remove("open");
  menuBtnIcon.setAttribute("class", "ri-menu-line");
});

const scrollRevealOption = {
  origin: "bottom",
  distance: "50px",
  duration: 1000,
};

ScrollReveal().reveal(".header__image img", {
  ...scrollRevealOption,
  origin: "right",
});
ScrollReveal().reveal(".header__content p", {
  ...scrollRevealOption,
  delay: 500,
});
ScrollReveal().reveal(".header__content h1", {
  ...scrollRevealOption,
  delay: 1000,
});
ScrollReveal().reveal(".header__btns", {
  ...scrollRevealOption,
  delay: 1500,
});

ScrollReveal().reveal(".destination__card", {
  ...scrollRevealOption,
  interval: 500,
});

ScrollReveal().reveal(".showcase__image img", {
  ...scrollRevealOption,
  origin: "left",
});
ScrollReveal().reveal(".showcase__content h4", {
  ...scrollRevealOption,
  delay: 500,
});
ScrollReveal().reveal(".showcase__content p", {
  ...scrollRevealOption,
  delay: 1000,
});
ScrollReveal().reveal(".showcase__btn", {
  ...scrollRevealOption,
  delay: 1500,
});

ScrollReveal().reveal(".banner__card", {
  ...scrollRevealOption,
  interval: 500,
});

ScrollReveal().reveal(".discover__card", {
  ...scrollRevealOption,
  interval: 500,
});

const swiper = new Swiper(".swiper", {
  slidesPerView: 3,
  spaceBetween: 20,
  loop: true,
});
// Vertical Menu Toggle
const verticalMenu = document.querySelector('.vertical-menu');
const menuToggle = document.createElement('button');
menuToggle.className = 'menu-toggle';
menuToggle.innerHTML = '<i class="ri-menu-line"></i>';
document.body.appendChild(menuToggle);

menuToggle.addEventListener('click', () => {
  verticalMenu.classList.toggle('active');
  const isActive = verticalMenu.classList.contains('active');
  menuToggle.innerHTML = isActive ? '<i class="ri-close-line"></i>' : '<i class="ri-menu-line"></i>';
});

// Animate menu items with ScrollReveal
ScrollReveal().reveal('.vertical-menu ul li', {
  delay: 300,
  interval: 100,
  origin: 'left',
  distance: '50px',
  easing: 'ease-out',
  reset: true
});

// Close menu on click outside
document.addEventListener('click', (e) => {
  if (!verticalMenu.contains(e.target) && !menuToggle.contains(e.target)) {
    verticalMenu.classList.remove('active');
    menuToggle.innerHTML = '<i class="ri-menu-line"></i>';
  }
});
