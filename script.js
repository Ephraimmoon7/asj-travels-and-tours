// Mobile menu toggle
const menuToggle = document.getElementById('menuToggle');
const nav = document.getElementById('nav');

if (menuToggle && nav) {
  menuToggle.addEventListener('click', () => {
    const isOpen = nav.classList.toggle('open');
    menuToggle.classList.toggle('active');
    document.body.style.overflow = isOpen ? 'hidden' : '';
  });

  nav.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', () => {
      nav.classList.remove('open');
      menuToggle.classList.remove('active');
      document.body.style.overflow = '';
    });
  });
}

// Active nav link on scroll
const sections = document.querySelectorAll('section[id]');
const navLinks = document.querySelectorAll('.nav-link');

window.addEventListener('scroll', () => {
  let current = '';
  sections.forEach(section => {
    const sectionTop = section.offsetTop - 120;
    if (scrollY >= sectionTop) {
      current = section.getAttribute('id');
    }
  });

  navLinks.forEach(link => {
    link.classList.remove('active');
    if (link.getAttribute('href') === `#${current}`) {
      link.classList.add('active');
    }
  });
});

// Contact form → WhatsApp
const contactForm = document.getElementById('contactForm');

if (contactForm) {
  contactForm.addEventListener('submit', function (e) {
    e.preventDefault();

    const name = document.getElementById('name').value.trim();
    const phone = document.getElementById('phone').value.trim();
    const email = document.getElementById('email').value.trim();
    const service = document.getElementById('service').value;
    const destination = document.getElementById('destination').value;
    const message = document.getElementById('message').value.trim();

    let waMessage = `*New Inquiry from Website*%0A%0A`;
    waMessage += `*Name:* ${name}%0A`;
    waMessage += `*Phone:* ${phone}%0A`;
    if (email) waMessage += `*Email:* ${email}%0A`;
    if (service) waMessage += `*Service:* ${service}%0A`;
    if (destination) waMessage += `*Destination:* ${destination}%0A`;
    if (message) waMessage += `*Message:* ${message}%0A`;

    window.open(`https://wa.me/923325176566?text=${waMessage}`, '_blank');
    contactForm.reset();
    alert('Thank you! Your inquiry will open in WhatsApp. Please send the message to complete.');
  });
}

// Header shadow on scroll
const header = document.querySelector('.header');
window.addEventListener('scroll', () => {
  if (window.scrollY > 50) {
    header.style.boxShadow = '0 4px 25px rgba(0,0,0,0.1)';
  } else {
    header.style.boxShadow = '0 2px 20px rgba(0,0,0,0.06)';
  }
});

// Destination tabs
const destTabs = document.querySelectorAll('.dest-tab');
const destSlides = document.querySelectorAll('.dest-slide');

destTabs.forEach(tab => {
  tab.addEventListener('click', () => {
    const target = tab.getAttribute('data-target');

    destTabs.forEach(t => t.classList.remove('active'));
    tab.classList.add('active');

    destSlides.forEach(slide => {
      slide.classList.remove('active');
      if (slide.getAttribute('data-dest') === target) {
        void slide.offsetWidth;
        slide.classList.add('active');
      }
    });
  });
});

// Scroll reveal
function initReveal() {
  const reveals = document.querySelectorAll(
    '.reveal, .reveal-left, .reveal-right, .reveal-scale'
  );
  if (!reveals.length) return;

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.12, rootMargin: '0px 0px -40px 0px' }
  );

  reveals.forEach((el) => observer.observe(el));
}

function autoReveal() {
  document.querySelectorAll('.trust-item').forEach((el, i) => {
    el.classList.add('reveal', 'reveal-delay-' + ((i % 4) + 1));
  });
  document.querySelectorAll('.service-card').forEach((el, i) => {
    el.classList.add('reveal', 'reveal-delay-' + ((i % 4) + 1));
  });
  document.querySelectorAll('.section-header').forEach((el) => {
    el.classList.add('reveal');
  });

  const aboutContent = document.querySelector('.about-content');
  const aboutCard = document.querySelector('.about-card');
  if (aboutContent) aboutContent.classList.add('reveal-left');
  if (aboutCard) aboutCard.classList.add('reveal-right');

  const contactInfo = document.querySelector('.contact-info');
  const contactFormEl = document.querySelector('.contact-form');
  if (contactInfo) contactInfo.classList.add('reveal-left');
  if (contactFormEl) contactFormEl.classList.add('reveal-right');

  const destShowcase = document.querySelector('.dest-showcase');
  if (destShowcase) destShowcase.classList.add('reveal-scale');

  document.querySelectorAll('.dest-tab').forEach((el, i) => {
    el.classList.add('reveal', 'reveal-delay-' + ((i % 4) + 1));
  });
}

document.addEventListener('DOMContentLoaded', () => {
  autoReveal();
  initReveal();
});