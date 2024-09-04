export function CountDownTimer(endDate, id) {
  var end = new Date(endDate);

  var _second = 1000;
  var _minute = _second * 60;
  var _hour = _minute * 60;
  var _day = _hour * 24;
  var timer;

  function showRemaining() {
    let now = new Date();
    let distance = end - now;
    if (distance < 0) {
      clearInterval(timer);
      document.getElementById(id).innerHTML = "EXPIRED!";

      return;
    }
    let days = Math.floor(distance / _day);
    let hours = Math.floor((distance % _day) / _hour);
    let minutes = Math.floor((distance % _hour) / _minute);
    let seconds = Math.floor((distance % _minute) / _second);

    document.getElementById(id).innerHTML = days + " days, ";
    document.getElementById(id).innerHTML += hours + " hours, ";
    document.getElementById(id).innerHTML += minutes + " minutes and ";
    document.getElementById(id).innerHTML += seconds + " seconds left.";
  }

  timer = setInterval(showRemaining, 1000);
}
