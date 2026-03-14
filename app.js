// Año dinámico
document.getElementById("year").textContent = new Date().getFullYear();

// Intersection Observer para revelación de secciones
const observerOptions = { threshold: 0.1 };
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
    }
  });
}, observerOptions);

document.querySelectorAll('.reveal').forEach(el => observer.observe(el));

// Manejo de Tema (Oscuro/Claro)
const root = document.documentElement;
const themeBtn = document.getElementById("themeBtn");

themeBtn.addEventListener("click", () => {
  const currentTheme = root.getAttribute("data-theme") || "dark";
  const newTheme = currentTheme === "dark" ? "light" : "dark";
  root.setAttribute("data-theme", newTheme);
  themeBtn.textContent = newTheme === "dark" ? "🌙" : "☀️";
  localStorage.setItem("portfolio-theme", newTheme);
});

// Cargar tema guardado
if(localStorage.getItem("portfolio-theme") === "light") {
  root.setAttribute("data-theme", "light");
  themeBtn.textContent = "☀️";
}

// Menú Hamburguesa (Mobile)
const burgerBtn = document.getElementById("burgerBtn");
const navLinks = document.getElementById("navLinks");

burgerBtn.addEventListener("click", () => {
  navLinks.style.display = navLinks.style.display === "flex" ? "none" : "flex";
  navLinks.classList.toggle("mobile-open");
});

// Copiar Email
const copyBtn = document.getElementById("copyEmailBtn");
const copyMsg = document.getElementById("copyMsg");
const email = "rodrigocaravacaruiz12@gmail.com";

copyBtn?.addEventListener("click", async () => {
  try {
    await navigator.clipboard.writeText(email);
    copyMsg.textContent = "✅ ¡Email copiado!";
    setTimeout(() => copyMsg.textContent = "", 2000);
  } catch {
    copyMsg.textContent = "Error al copiar";
  }
});