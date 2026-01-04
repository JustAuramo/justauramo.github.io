// Entry animations
window.addEventListener("load", () => {
    document.querySelectorAll(".fade-up").forEach(el => {
        el.style.animationPlayState = "running";
    });
});

const themeToggle = document.getElementById("themeToggle");

/* Load saved theme */
const savedTheme = localStorage.getItem("theme") || "dark";
document.body.classList.add(savedTheme);
themeToggle.textContent = savedTheme === "dark" ? "☀️" : "🌙";

/* Toggle light / dark */
themeToggle.addEventListener("click", () => {
    const isDark = document.body.classList.contains("dark");

    document.body.classList.toggle("dark", !isDark);
    document.body.classList.toggle("light", isDark);

    themeToggle.textContent = isDark ? "🌙" : "☀️";
    localStorage.setItem("theme", isDark ? "light" : "dark");
});
