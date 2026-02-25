const root = document.documentElement;
const yearEl = document.getElementById("year");
const themeBtn = document.getElementById("themeBtn");
const burgerBtn = document.getElementById("burgerBtn");
const navLinks = document.getElementById("navLinks");

const copyBtn = document.getElementById("copyEmailBtn");
const copyMsg = document.getElementById("copyMsg");
const email = "rodrigocaravacaruiz12@gmail.com";

yearEl.textContent = new Date().getFullYear();

// Theme (persist)
const savedTheme = localStorage.getItem("theme");
if (savedTheme) root.setAttribute("data-theme", savedTheme);
setThemeIcon();

themeBtn.addEventListener("click", () => {
  const current = root.getAttribute("data-theme") || "dark";
  const next = current === "dark" ? "light" : "dark";
  root.setAttribute("data-theme", next);
  localStorage.setItem("theme", next);
  setThemeIcon();
});

function setThemeIcon(){
  const current = root.getAttribute("data-theme") || "dark";
  themeBtn.textContent = current === "dark" ? "🌙" : "☀️";
}

// Mobile menu
burgerBtn.addEventListener("click", () => {
  navLinks.classList.toggle("open");
});

// Close menu when clicking a link (mobile)
navLinks.querySelectorAll("a").forEach(a => {
  a.addEventListener("click", () => navLinks.classList.remove("open"));
});

// Copy email
copyBtn?.addEventListener("click", async () => {
  try{
    await navigator.clipboard.writeText(email);
    copyMsg.textContent = "Email copiado ✅";
    setTimeout(() => (copyMsg.textContent = ""), 1800);
  }catch{
    copyMsg.textContent = "No se pudo copiar. Selecciónalo manualmente: " + email;
  }
});

// Smooth offset for anchor clicks (fixed nav)
document.querySelectorAll('a[href^="#"]').forEach(link => {
  link.addEventListener("click", (e) => {
    const id = link.getAttribute("href");
    const target = document.querySelector(id);
    if (!target) return;
    e.preventDefault();
    const y = target.getBoundingClientRect().top + window.scrollY - 78;
    window.scrollTo({ top: y, behavior: "smooth" });
  });
});