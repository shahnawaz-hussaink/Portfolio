const toggleBtn = document.getElementById("theme-toggle");
const body = document.body;

toggleBtn.addEventListener("click", () => {
  body.classList.toggle("dark-mode");
  toggleBtn.textContent = body.classList.contains("dark-mode") ? "☀️ Light Mode" : "🌙 Dark Mode";
});

const texts = ["Turning Caffeine into Code ", "Web Dev Enthusiast ", "DSA Explorer ", "Tech Learner "];
let index = 0;
let charIndex = 0;
const speed = 100;

function typeEffect() {
  if (charIndex < texts[index].length) {
    document.getElementById("coffee").textContent += texts[index].charAt(charIndex);
    charIndex++;
    setTimeout(typeEffect, speed);
  } else {
    setTimeout(eraseEffect, 1000);
  }
}

function eraseEffect() {
  if (charIndex > 0) {
    document.getElementById("coffee").textContent = texts[index].substring(0, charIndex - 1);
    charIndex--;
    setTimeout(eraseEffect, 50);
  } else {
    index = (index + 1) % texts.length;
    setTimeout(typeEffect, 500);
  }
}

document.addEventListener("DOMContentLoaded", () => {
  typeEffect();
});
