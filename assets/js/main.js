let countDownDate = new Date('December 10, 2022 15:37:25').getTime();

const x = setInterval(function () {
  let now = new Date().getTime();
  let diff = countDownDate - now;

  let days = Math.floor(diff / (1000 * 60 * 60 * 24));
  let hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  let minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
  let seconds = Math.floor((diff % (1000 * 60)) / 1000);

  document.getElementById('days').innerHTML = days;
  document.getElementById('hours').innerHTML = hours;
  document.getElementById('mins').innerHTML = minutes;
  document.getElementById('sec').innerHTML = seconds;

  if (diff < 0) {
    clearInterval(x);
    document.getElementById('days').innerHTML = 0;
    document.getElementById('hours').innerHTML = 0;
    document.getElementById('mins').innerHTML = 0;
    document.getElementById('sec').innerHTML = 0;
  }
}, 1000);
