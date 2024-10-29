setInterval(function () {
  //Los Angeles
  let losAngelesElement = document.querySelector("#los-angeles");
  let losAngelesDateElement = losAngelesElement.querySelector(".date");
  let losAngelesTimeElement = losAngelesElement.querySelector(".time");
  let losAngelesTime = moment().tz("America/Los_Angeles");

  losAngelesDateElement.innerHTML = losAngelesTime.format("MMMM Do YYYY");
  losAngelesTimeElement.innerHTML = losAngelesTime.format(
    "hh:mm:ss [<small>]A[</small>]"
  );
  // Zagreb
  let zagrebElement = document.querySelector("#zagreb");
  let zagrebDateElement = zagrebElement.querySelector(".date");
  let zagrebTimeElement = zagrebElement.querySelector(".time");
  let zagrebTime = moment().tz("Europe/Zagreb");

  zagrebDateElement.innerHTML = zagrebTime.format("MMMM Do YYYY");
  zagrebTimeElement.innerHTML = zagrebTime.format(
    "hh:mm:ss [<small>]A[</small>]"
  );

  // Singapore
  let singaporeElement = document.querySelector("#singapore");
  let singaporeDateElement = singaporeElement.querySelector(".date");
  let singaporeTimeElement = singaporeElement.querySelector(".time");
  let singaporeTime = moment().tz("Asia/Singapore");

  singaporeDateElement.innerHTML = singaporeTime.format("MMMM Do YYYY");
  singaporeTimeElement.innerHTML = singaporeTime.format(
    "hh:mm:ss [<small>]A[</small>]"
  );

  // Moscow
  let moscowElement = document.querySelector("#moscow");
  let moscowDateElement = moscowElement.querySelector(".date");
  let moscowTimeElement = moscowElement.querySelector(".time");
  let moscowTime = moment().tz("Europe/Moscow");

  moscowDateElement.innerHTML = moscowTime.format("MMMM Do YYYY");
  moscowTimeElement.innerHTML = moscowTime.format(
    "hh:mm:ss [<small>]A[</small>]"
  );
}, 1000);
