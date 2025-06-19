// Cuenta regresiva
const countdownDate = new Date("June 23, 2025 20:00:00").getTime();
const updateCountdown = setInterval(() => {
  const now = new Date().getTime();
  const distance = countdownDate - now;

  if (distance < 0) {
    clearInterval(updateCountdown);
    document.querySelector(".countdown-container").innerHTML = "🎉 ¡Ya comenzó el evento!";
    return;
  }

  const days = Math.floor(distance / (1000 * 60 * 60 * 24));
  const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((distance % (1000 * 60)) / 1000);

  document.getElementById("days").textContent = String(days).padStart(2, "0");
  document.getElementById("hours").textContent = String(hours).padStart(2, "0");
  document.getElementById("minutes").textContent = String(minutes).padStart(2, "0");
  document.getElementById("seconds").textContent = String(seconds).padStart(2, "0");
}, 1000);

window.addEventListener("scroll", function () {
  const parallax = document.querySelector(".parallax");
  let offset = window.scrollY * 0.4;
  parallax.style.backgroundPositionY = offset + "px";
});
