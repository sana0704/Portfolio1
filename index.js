


// Typewriter effect for header
let i = 0;
const txt = "Hello, I'm Sananda Roy — Full Stack Web Developer | Frontend Developer ";
const speed = 100;

function typeWriter() {
  const target = document.getElementById("typewriter");
  if (i < txt.length) {
    target.innerHTML += txt.charAt(i);
    i++;
    setTimeout(typeWriter, speed);
  }
}
window.onload = typeWriter;

// animation function with delay
function revealSection(className, delay = 0) {
  const section = document.querySelector(className);
  const sectionTop = section.getBoundingClientRect().top;
  const trigger = window.innerHeight / 1.2;

  if (sectionTop < trigger) {
    setTimeout(() => {
      section.classList.add("visible");
      revealChildren(section);
    }, delay);
  }
}

// child elements with staggered delay
function revealChildren(parent) {
  const children = parent.querySelectorAll(".skill-card, .project-card, .contact-form input, .contact-form textarea, .contact-form button, .contact-details p");
  children.forEach((child, index) => {
    child.style.opacity = 0;
    child.style.transform = "translateY(30px)";
    setTimeout(() => {
      child.style.transition = "all 0.6s ease";
      child.style.opacity = 1;
      child.style.transform = "translateY(0)";
    }, index * 150);
  });
}

// Scroll listener for all animated sections

window.addEventListener("scroll", () => {
  revealSection(".about", 200);
  revealSection(".skills", 300);
  revealSection(".projects", 400);
  revealSection(".contact", 500);
});


window.addEventListener("DOMContentLoaded", () => {
  revealSection(".about", 200);
  revealSection(".skills", 300);
  revealSection(".projects", 400);
  revealSection(".contact", 500);
});