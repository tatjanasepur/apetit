// godina u footeru
const yearEl = document.getElementById("year");
if (yearEl) {
  yearEl.textContent = new Date().getFullYear();
}

// mobilni meni
const navToggle = document.querySelector(".nav-toggle");
const mainNav = document.querySelector(".main-nav");

if (navToggle && mainNav) {
  navToggle.addEventListener("click", () => {
    const isOpen = mainNav.classList.toggle("nav-open");
    if (isOpen) {
      mainNav.style.display = "flex";
      mainNav.style.flexDirection = "column";
      mainNav.style.position = "absolute";
      mainNav.style.top = "56px";
      mainNav.style.right = "16px";
      mainNav.style.background = "#fff";
      mainNav.style.padding = "1rem 1.2rem";
      mainNav.style.boxShadow = "0 16px 40px rgba(0,0,0,0.16)";
      mainNav.style.borderRadius = "12px";
    } else {
      mainNav.removeAttribute("style");
    }
  });
}