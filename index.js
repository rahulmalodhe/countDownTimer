(function () {
  const hour = document.querySelector(".hour");
  const min = document.querySelector(".min");
  let sec = document.querySelector(".sec");

  const start = document.querySelector(".start");
  const stop = document.querySelector(".stop");
  const reset = document.querySelector(".reset");

  start.addEventListener("click", () => {
    if (hour.value == 0 && min.value == 0 && sec.value == 0) return;
    start.style.display = "none";
    stop.style.display = "initial";

    function startInterval() {
      countdownTimer = setInterval(() => {
        timer();
      }, 1000);
    }
    startInterval();
  });

  stop.addEventListener("click", () => {
    console.log("clicked stop")
    stopInterval("pause");
  });

  reset.addEventListener("click", () => {
    hour.value = " ";
    min.value = " ";
    sec.value = " ";
    stopInterval();
  });

  function timer() {
    if (sec.value > 60) {
      min.value += 1;
      sec.value = parseInt(sec.value) - 59;
    } else if (min.value > 60) {
      hour.value += 1;
      min.value = parseInt(min.value) - 60;
    }
    if (hour.value == 0 && min.value == 0 && sec.value == 0) {
      hour.value = " ";
      min.value = " ";
      sec.value = " ";
      stopInterval();
    } else if (sec.value != 0) {
      sec.value = `${sec.value <= 10 ? "0" : ""}${sec.value - 1}`;
    } else if (min.value != 0 && sec.value == 0) {
      console.log("entered");
      sec.value = 59;
      min.value = `${min.value <= 10 ? "0" : ""}${min.value - 1}`;
    } else if (hour.value != 0 && min.value == 0) {
      min.value = 59;
      hour.value = `${hour.value <= 10 ? "0" : ""}${hour.value - 1}`;
    }
    return;
  }

  function stopInterval(state) {
    start.innerText = state === "pause" ? "Continue" : "Start";
    stop.style.display = "none";
    start.style.display = "initial";
    clearInterval(countdownTimer);
  }
})();
