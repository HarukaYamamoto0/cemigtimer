let timer;
let seconds = 0;
let isRunning = false;

const timerElement = document.getElementById("timer");
const startBtn = document.getElementById("startBtn");
const stopBtn = document.getElementById("stopBtn");
const resetBtn = document.getElementById("resetBtn");
const restartBtn = document.getElementById("restartBtn");

const ALERTS = {
  FIRST: 20,
  SECOND: 30,
  MAX: 40,
};

const ALERT_MESSAGES = {
  EXCEEDED_TIME:
    "Tempo de espera excedido!\nVocê provavelmente vai ser zerado pela monitoria.",
};

function formatTime(seconds) {
  const minutes = Math.floor(seconds / 60);
  const remainingSeconds = seconds % 60;
  return `${minutes < 10 ? "0" : ""}${minutes}:${
    remainingSeconds < 10 ? "0" : ""
  }${remainingSeconds}`;
}

function updateTimer() {
  timerElement.textContent = formatTime(seconds);
  setTimerColor();
}

function setTimerColor() {
  if (seconds >= ALERTS.MAX) {
    timerElement.style.color = "red";
    if (seconds === ALERTS.MAX) {
      alert(ALERT_MESSAGES.EXCEEDED_TIME);
    }
  } else if (seconds >= ALERTS.SECOND) {
    timerElement.style.color = "yellow";
  } else if (seconds >= ALERTS.FIRST) {
    timerElement.style.color = "orange";
  } else {
    timerElement.style.color = "black";
  }
}

function toggleButtons(isRunning) {
  startBtn.disabled = isRunning;
  stopBtn.disabled = !isRunning;
  resetBtn.disabled = seconds == 0 && !isRunning;
  restartBtn.disabled = !isRunning; // Restart button only enabled when timer is running
}

function resetTimer() {
  seconds = 0;
  updateTimer();
}

startBtn.addEventListener("click", () => {
  if (!isRunning) {
    isRunning = true;
    timer = setInterval(() => {
      seconds++;
      updateTimer();
    }, 1000);
    toggleButtons(true);
  }
});

stopBtn.addEventListener("click", () => {
  clearInterval(timer);
  isRunning = false;
  toggleButtons(false);
});

resetBtn.addEventListener("click", () => {
  clearInterval(timer);
  isRunning = false;
  resetTimer();
  toggleButtons(false);
});

restartBtn.addEventListener("click", () => {
  resetTimer(); // Reset time to 00:00
  if (isRunning) {
    clearInterval(timer); // Stop the existing timer
    timer = setInterval(() => {
      seconds++;
      updateTimer();
    }, 1000); // Restart the timer from the reset state
  }
});
