function runTime() {
  /* Time variable */
  var Time = new Date();

  /* Time Details */
  var hours = Time.getHours();
  var minutes = Time.getMinutes();
  var seconds = Time.getSeconds();

  /* call the DIVs */
  document.getElementById("hours").innerHTML = hours;
  document.getElementById("minutes").innerHTML = minutes;
  document.getElementById("seconds").innerHTML = seconds;

  var status = document.getElementById("status");

  if (hours >= 12) {
    status.innerHTML = "PM";
  } else {
    status.innerHTML = "AM";
  }

  if (hours > 12) {
    hours = hours - 12;
  }
}

setInterval(runTime);
