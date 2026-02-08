// Real-time validation
const form = document.getElementById('registrationForm');
const successMessage = document.getElementById('successMessage');
const progress = document.getElementById('progress');

form.addEventListener('input', () => {
  let filled = 0;
  const inputs = form.querySelectorAll('input[required]');
  inputs.forEach(input => {
    if (input.value.trim() !== '') filled++;
  });
  progress.textContent = `Progress: ${filled}/${inputs.length} fields completed`;
});

form.addEventListener('submit', (e) => {
  e.preventDefault();
  successMessage.textContent = "🎉 Registration successful!";
});

// Countdown timer
const countdown = document.getElementById('countdown');
const eventDate = new Date("Feb 20, 2026 18:00:00").getTime();

setInterval(() => {
  const now = new Date().getTime();
  const distance = eventDate - now;
  if (distance < 0) {
    countdown.textContent = "Event has started!";
    return;
  }
  const days = Math.floor(distance / (1000 * 60 * 60 * 24));
  const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  countdown.textContent = `Event starts in ${days}d ${hours}h`;
}, 1000);