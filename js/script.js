let $ = document;
let c = $.querySelector(".c");
let F = $.querySelector(".F");
let converter = $.getElementById("converter");
let resultPTag = $.querySelector(".result");
let convertButton = $.querySelector(".convertButton");
let resetButton = $.querySelector(".resetButton");
let changeButton = $.querySelector(".changeButton");

let isCelsius = true;

(function () {
  setInterval(function () {
    let randomRGB1 = Math.floor(Math.random() * 155) + 100;
    let randomRGB2 = Math.floor(Math.random() * 155) + 100;
    let randomRGB3 = Math.floor(Math.random() * 155) + 100;
    let randomRGB4 = Math.floor(Math.random() * 155) + 100;
    let randomRGB5 = Math.floor(Math.random() * 155) + 100;
    let randomRGB6 = Math.floor(Math.random() * 155) + 100;
    let randomLinear1 = Math.floor(Math.random() * 70);
    let randomLinear2 = Math.floor(Math.random() * 100);
    let randomDeg = Math.floor(Math.random() * 180);
    $.body.style.background =
      "linear-gradient(" +
      randomDeg +
      "deg,rgb(" +
      randomRGB1 +
      "," +
      randomRGB2 +
      "," +
      randomRGB3 +
      ")" +
      randomLinear1 +
      "%" +
      ",rgb(" +
      randomRGB4 +
      "," +
      randomRGB5 +
      "," +
      randomRGB6 +
      ")" +
      randomLinear2 +
      "%";
  }, 12000);
})();

convertButton.addEventListener("click", function () {
  let inputConverter = converter.value;

  if (isNaN(inputConverter) || inputConverter === "") {
    resultPTag.innerHTML = "Please Enter correct value ...";
    resultPTag.style.color = "#cb2b2b";
  } else {
    resultPTag.style.color = "#e2e243";
    if (isCelsius) {
      let result = inputConverter * 1.8 + 32;
      resultPTag.innerHTML = result.toFixed(2) + " °F";
    } else {
      let result = ((inputConverter - 32) * 5) / 9;
      resultPTag.innerHTML = result.toFixed(2) + " °C";
    }
  }
});
resetButton.addEventListener("click", function () {
  resultPTag.innerHTML = "";
  converter.value = "";
});

changeButton.addEventListener("click", function () {
  resultPTag.innerHTML = "";
  converter.value = "";

  if (!isCelsius) {
    $.title = "Kiyan Converter | °C to °F";
    converter.setAttribute("placeholder", "°C");
    F.innerHTML = "°F";
    c.innerHTML = "°C";

    isCelsius = true;
  } else {
    $.title = "Kiyan Converter | °F to °C";

    converter.setAttribute("placeholder", "°F");
    c.innerHTML = "°F";
    F.innerHTML = "°C";
    isCelsius = false;
  }
});
