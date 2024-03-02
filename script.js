const date = new Date();
let countDownDate = new Date(date.getFullYear() + 1, 0);
let x = setInterval(function () {
  let now = new Date().getTime();
  let distance = countDownDate - now;
  let day = Math.floor(distance / (1000 * 60 * 60 * 24));
  let hour = Math.floor(
    (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60) - 1
  );
  let minute = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  let second = Math.floor((distance % (1000 * 60)) / 1000);

  document.getElementById("day").textContent = zero(day);
  document.getElementById("hour").textContent = zero(hour);
  document.getElementById("minute").textContent = zero(minute);
  document.getElementById("second").textContent = zero(second);
}, 1000);

function zero(number) {
  if (number < 10) {
    return "0" + number;
  } else {
    return number;
  }
}
