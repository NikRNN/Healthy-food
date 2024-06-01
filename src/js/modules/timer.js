function timer() {
  //обратный таймер снизу сайта

  let deadline = "2024-05-20";

  function getClock(endtime) {
    let days, hours, minutes, seconds;

    let difference = Date.parse(endtime) - Date.parse(new Date());

    if (difference <= 0) {
      days = 0;
      hours = 0;
      minutes = 0;
      seconds = 0;
    } else {
      days = Math.floor(difference / (24 * 60 * 60 * 1000));
      hours = Math.floor((difference / (1000 * 60 * 60)) % 24);
      minutes = Math.floor((difference / (1000 * 60)) % 60);
      seconds = Math.floor((difference / 1000) % 60);
    }

    return {
      difference,
      days,
      hours,
      minutes,
      seconds,
    };
  }

  function getZero(num) {
    if (num < 10 && num >= 0) {
      return "0" + num;
    } else {
      return num;
    }
  }

  function getTimer(selector, endtime) {
    const timer = document.querySelector(selector),
      days = timer.querySelector("#days"),
      hours = timer.querySelector("#hours"),
      minutes = timer.querySelector("#minutes"),
      seconds = timer.querySelector("#seconds"),
      timerId = setInterval(updateClock, 1000);

    updateClock();

    function updateClock() {
      const timer = getClock(endtime);

      days.innerHTML = getZero(timer.days);
      hours.innerHTML = getZero(timer.hours);
      minutes.innerHTML = getZero(timer.minutes);
      seconds.innerHTML = getZero(timer.seconds);

      if (timer.difference <= 0) {
        clearInterval(timerId);
      }
    }
  }

  getTimer(".timer", deadline);
  getClock(deadline);
}

export { timer };
