let days = document.getElementById("days");
let hours = document.getElementById("hours");
let minutes = document.getElementById("minutes");
let seconds = document.getElementById("seconds");
let second2 = localStorage.getItem("second2")
  ? parseInt(localStorage.getItem("second2"))
  : 41;
let minutes2 = localStorage.getItem("minutes2")
  ? parseInt(localStorage.getItem("minutes2"))
  : 55;
let hours2 = localStorage.getItem("hours2")
  ? parseInt(localStorage.getItem("hours2"))
  : 23;
let days2 = localStorage.getItem("days2")
  ? parseInt(localStorage.getItem("days2"))
  : 8;

function time() {
  if (second2 > 0) {
    second2--;
  } else {
    second2 = 59;
    minutes2--;
  }
  seconds.textContent = second2;

  if (minutes2 < 0) {
    minutes2 = 59;
    hours2--;
  }
  minutes.textContent = minutes2;

  if (hours2 < 0) {
    hours2 = 23;
    days2--;
  }

  hours.textContent = hours2;
  days.textContent = `0${days2}`;

  localStorage.setItem("second2", second2);
  localStorage.setItem("minutes2", minutes2);
  localStorage.setItem("hours2", hours2);
  localStorage.setItem("days2", days2);
}

setInterval(time, 1000);
time();
