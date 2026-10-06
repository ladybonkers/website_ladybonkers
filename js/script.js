/* =========================================================
   Júlia — Portfolio scripts
   ========================================================= */

// ---------- Rotating roles (typewriter effect) ----------
const roles = [
  "Backend Developer",
  "Computer Science Student",
  "Cybersecurity Analyst"
];

const roleEl = document.getElementById("roleText");
let ri = 0;       // current role index
let ci = 0;       // current character index
let deleting = false;

function type() {
  const current = roles[ri];

  if (!deleting) {
    roleEl.textContent = current.slice(0, ci + 1);
    ci++;
    if (ci === current.length) {
      deleting = true;
      setTimeout(type, 1800);
      return;
    }
  } else {
    roleEl.textContent = current.slice(0, ci - 1);
    ci--;
    if (ci === 0) {
      deleting = false;
      ri = (ri + 1) % roles.length;
    }
  }
  setTimeout(type, deleting ? 40 : 80);
}
type();

// ---------- Mobile menu toggle ----------
const burger = document.getElementById("burger");
const navLinks = document.getElementById("navLinks");

burger.addEventListener("click", () => navLinks.classList.toggle("open"));
navLinks.querySelectorAll("a").forEach(a =>
  a.addEventListener("click", () => navLinks.classList.remove("open"))
);

// ---------- Reveal on scroll ----------
const io = new IntersectionObserver(entries => {
  entries.forEach(e => {
    if (e.isIntersecting) e.target.classList.add("visible");
  });
}, { threshold: 0.12 });

document.querySelectorAll(".reveal").forEach(el => io.observe(el));

// ---------- Footer year ----------
document.getElementById("year").textContent = new Date().getFullYear();