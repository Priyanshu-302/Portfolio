const hamburger = document.getElementById("hamburger");
const navLinks = document.getElementById("nav-links");

hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("open");
  navLinks.classList.toggle("open");
});

document.querySelectorAll(".nav-links a").forEach((link) => {
  link.addEventListener("click", () => {
    hamburger.classList.remove("open");
    navLinks.classList.remove("open");
  });
});

const typed = new Typed(".typed-text", {
  strings: ["Full-Stack Developer", "UI/UX Designer", "Backend Consultant"],
  typeSpeed: 60,
  backSpeed: 30,
  backDelay: 2000,
  loop: true,
});

// GSAP
gsap.registerPlugin(ScrollTrigger);
gsap.from(".glow-heading", {
  scrollTrigger: { trigger: ".glow-heading", start: "top 80%" },
  y: -30,
  opacity: 0,
  duration: 1.2,
  ease: "power3.out",
});
gsap.from(".about-container", {
  scrollTrigger: { trigger: ".about-container", start: "top 85%" },
  opacity: 0,
  y: 50,
  duration: 1,
});
gsap.from(".skill-card", {
  scrollTrigger: { trigger: ".skills-grid", start: "top 85%" },
  y: 40,
  opacity: 0,
  duration: 0.8,
  stagger: 0.2,
  ease: "power2.out",
});
gsap.from(".project-card", {
  scrollTrigger: { trigger: ".projects-grid", start: "top 85%" },
  y: 60,
  opacity: 0,
  duration: 1,
  stagger: 0.3,
  ease: "power2.out",
});
gsap.from(".contact-form", {
  scrollTrigger: { trigger: "#contact", start: "top 85%" },
  opacity: 0,
  y: 50,
  duration: 1,
});
