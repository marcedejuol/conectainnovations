// Countdown — ajusta la fecha objetivo
const TARGET_DATE = new Date('2025-09-01T00:00:00');

function pad(n) {
  return String(n).padStart(2, '0');
}

function updateCountdown() {
  const now = new Date();
  const diff = TARGET_DATE - now;

  if (diff <= 0) {
    document.getElementById('countdown').style.display = 'none';
    return;
  }

  const days = Math.floor(diff / (1000 * 60 * 60 * 24));
  const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((diff % (1000 * 60)) / 1000);

  document.getElementById('days').textContent = pad(days);
  document.getElementById('hours').textContent = pad(hours);
  document.getElementById('minutes').textContent = pad(minutes);
  document.getElementById('seconds').textContent = pad(seconds);
}

updateCountdown();
setInterval(updateCountdown, 1000);

// Notify form
document.getElementById('notifyForm').addEventListener('submit', function (e) {
  e.preventDefault();
  const email = document.getElementById('emailInput').value.trim();
  const feedback = document.getElementById('formFeedback');

  if (!email) return;

  // Placeholder: aquí irá la llamada al backend cuando esté listo
  feedback.textContent = '¡Gracias! Te avisaremos cuando lancemos.';
  this.reset();

  setTimeout(() => {
    feedback.textContent = '';
  }, 5000);
});
