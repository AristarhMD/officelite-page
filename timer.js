const targetDate = new Date("2026-11-03T23:59:59").getTime();

// Seting interval for couting
const countDownTimer = setInterval(() => {
  const now = new Date().getTime();
  const timeLeft = targetDate - now;

  if (timeLeft < 0) {
    clearInterval(countDownTimer);
    document.querySelector("count-main").classList.add("hidden");
    document.querySelector("count-sing-up").classList.add("hidden");
    return;
  }

  const timeCalculated = calculcateTime(timeLeft);
  updateUI(timeCalculated);
}, 1000);

// Calculate time left to the target
function calculcateTime(timeLeft) {
  const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
  const hours = Math.floor(
    (timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60),
  );
  const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);

  return [days, hours, minutes, seconds];
}

// Updade time for main and sing-up page
function updateUI(timeLeft) {
  document.querySelectorAll(".days").forEach((data) => {
    data.textContent = String(timeLeft[0]).padStart(2, 0);
  });
  document.querySelectorAll(".hours").forEach((data) => {
    data.textContent = String(timeLeft[1]).padStart(2, 0);
  });
  document.querySelectorAll(".min").forEach((data) => {
    data.textContent = String(timeLeft[2]).padStart(2, 0);
  });
  document.querySelectorAll(".sec").forEach((data) => {
    data.textContent = String(timeLeft[3]).padStart(2, 0);
  });
}
