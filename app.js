// ---------------- Hamburger Menu & Link Click Logic ----------------
const hamburger = document.querySelector(".hamburger");
const navLinks = document.querySelector(".nav-links");
const navItems = document.querySelectorAll(".nav-links li a");

hamburger.addEventListener("click", () => {
  navLinks.classList.toggle("active");
  hamburger.classList.toggle("active");
});

navItems.forEach(link => {
  link.addEventListener('click', (e) => {

    e.preventDefault();


    navItems.forEach(item => item.classList.remove('active-link'));
    link.classList.add('active-link');

  
    const targetId = link.getAttribute('href');
    const targetSection = document.querySelector(targetId);

    if (targetSection) {
      const navBarHeight = document.querySelector('.navbar').offsetHeight;
      const targetPosition = targetSection.offsetTop - navBarHeight;

      window.scrollTo({
        top: targetPosition,
        behavior: 'smooth'
      });
    }
  });
});


// ---------------- Hero Typing Animation ----------------
const heroTextH2 = document.querySelector('.carousel-item.active .hero-text h2');
const text = 'Welcome to Bright Future Academy';
let index = 0;

function typeEffect() {
  if (heroTextH2 && index < text.length) {
    heroTextH2.innerHTML += text.charAt(index);
    index++;
    setTimeout(typeEffect, 40);
  }
}
window.addEventListener('load', typeEffect);


// ---------------- Apply Button Click ----------------
const applyBtns = document.querySelectorAll('.apply');
applyBtns.forEach(applyBtn => {
  applyBtn.addEventListener('click', () => {
    applyBtn.style.backgroundColor = '#0077c2';
    setTimeout(() => {
      applyBtn.style.backgroundColor = '#0f5397';
      alert('Thank you for applying! Our team will contact you.');
    }, 200);
  });
});


// ---------------- Active Nav Link Highlight on Manual Scroll ----------------
const sections = document.querySelectorAll('section');

window.addEventListener('scroll', () => {
  let scrollPos = window.scrollY + 150; // Offset badhaya gaya

  sections.forEach(section => {
    const top = section.offsetTop;
    const height = section.offsetHeight;
    const id = section.getAttribute('id');
    const navLink = document.querySelector(`.nav-links a[href="#${id}"]`);
    
    if (scrollPos >= top && scrollPos < top + height) {
      navItems.forEach(link => link.classList.remove('active-link'));
      if (navLink) navLink.classList.add('active-link');
    }
  });
});


// ---------------- Contact Form Submit ----------------
const contactForm = document.getElementById('contact-form');

contactForm.addEventListener('submit', (e) => {
  e.preventDefault();
  alert('Thank you for your message! We will contact you soon.');
  contactForm.reset();
});