// Custom Cursor
const cursor = document.getElementById('cursor');
const ring = document.getElementById('cursorRing');
let mx = 0, my = 0, rx = 0, ry = 0;

document.addEventListener('mousemove', e => { 
  mx = e.clientX; 
  my = e.clientY; 
});

function animateCursor() {
  cursor.style.left = mx + 'px'; 
  cursor.style.top = my + 'px';
  rx += (mx - rx) * 0.12; 
  ry += (my - ry) * 0.12;
  ring.style.left = rx + 'px'; 
  ring.style.top = ry + 'px';
  requestAnimationFrame(animateCursor);
}
animateCursor();

document.querySelectorAll('a, button').forEach(el => {
  el.addEventListener('mouseenter', () => { 
    cursor.style.width = '16px'; 
    cursor.style.height = '16px'; 
    ring.style.width = '52px'; 
    ring.style.height = '52px'; 
  });
  el.addEventListener('mouseleave', () => { 
    cursor.style.width = '10px'; 
    cursor.style.height = '10px'; 
    ring.style.width = '36px'; 
    ring.style.height = '36px'; 
  });
});

// Navigation background change on scroll
const nav = document.getElementById('nav');
window.addEventListener('scroll', () => { 
  nav.classList.toggle('scrolled', window.scrollY > 60); 
});

// Scroll Reveal Observer
const reveals = document.querySelectorAll('.reveal');
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
    }
  });
}, { threshold: 0.1 });

reveals.forEach(reveal => observer.observe(reveal));