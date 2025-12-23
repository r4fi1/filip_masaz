const services = document.querySelectorAll(".service");
const overlay = document.getElementById("modal-overlay");
const title = document.getElementById("modal-title");
const content = document.getElementById("modal-content");
const closeBtn = document.getElementById("modal-close");

services.forEach(service => {
  service.addEventListener("click", () => {
    title.textContent = service.dataset.title;
    content.textContent = service.dataset.content;
    overlay.style.display = "flex";
  });
});

closeBtn.addEventListener("click", () => {
  overlay.style.display = "none";
});

overlay.addEventListener("click", e => {
  if (e.target === overlay) {
    overlay.style.display = "none";
  }
});
