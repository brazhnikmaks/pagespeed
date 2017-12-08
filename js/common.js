$(document).ready(function() {
  Timer();
});


  function Timer() {
    var $timers = $(".timer"),
        date = new Date(),
        dateOffset = date.getTimezoneOffset() * 60 * 1000,
        tomorrowDate = new Date(new Date().getTime() + 24 * 60 * 60 * 1000);

    tomorrowDate.setHours(0);
    tomorrowDate.setMinutes(0);
    tomorrowDate.setSeconds(0);

    var timeLeft = tomorrowDate - date + dateOffset;

    step();
    startTimer();

    function setTime(milliseconds) {
      var hours = formatDigit(new Date(milliseconds).getHours()),
          minutes = formatDigit(new Date(milliseconds).getMinutes()),
          seconds = formatDigit(new Date(milliseconds).getSeconds());

      $timers.each(function(){
        $(this).find('.hours').text(hours);
        $(this).find('.minutes').text(minutes);
        $(this).find('.seconds').text(seconds);
      });
    }

    function formatDigit(digit) {
      if(digit >= 10) {
        return digit;
      } else {
        return "0" + digit;
      }
    }

    var interval;

    function step() {
      if(timeLeft == dateOffset) {
        clearInterval(interval);
      } else {
        timeLeft -= 1000;
        setTime(timeLeft);
      }
    }

    function startTimer() {
      interval = setInterval(step, 1000);
    }
  }