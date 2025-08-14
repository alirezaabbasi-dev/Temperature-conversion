const $ = (selector) => document.querySelector(selector);

const c = $(".c");
const F = $(".F");
const converter = document.getElementById("converter");
const resultPTag = $(".result");
const convertButton = $(".convertButton");
const resetButton = $(".resetButton");
const changeButton = $(".changeButton");

let isCelsius = true;

// Generate random background gradient
function setRandomBackground() {
  const randomRGB = () => Math.floor(Math.random() * 155) + 100;
  const randomPercent = (max) => Math.floor(Math.random() * max);
  const deg = Math.floor(Math.random() * 180);

  document.body.style.background = `linear-gradient(${deg}deg, 
    rgb(${randomRGB()},${randomRGB()},${randomRGB()}) ${randomPercent(70)}%, 
    rgb(${randomRGB()},${randomRGB()},${randomRGB()}) ${randomPercent(100)}%)`;
}

setRandomBackground();
setInterval(setRandomBackground, 12000);

// Convert temperature
function convertTemperature() {
  const value = converter.value.trim();
  if (isNaN(value) || value === "") {
    resultPTag.textContent = "Please Enter correct value ...";
    resultPTag.style.color = "#cb2b2b";
    return;
  }

  resultPTag.style.color = "#e2e243";
  const numValue = parseFloat(value);
  const result = isCelsius
    ? numValue * 1.8 + 32
    : (numValue - 32) * 5 / 9;

  resultPTag.textContent = `${result.toFixed(2)} °${isCelsius ? "F" : "C"}`;
}

// Reset fields
function resetFields() {
  resultPTag.textContent = "";
  converter.value = "";
}

// Toggle between Celsius and Fahrenheit
function toggleUnit() {
  resetFields();
  isCelsius = !isCelsius;

  document.title = `Kiyan Converter | °${isCelsius ? "C to °F" : "F to °C"}`;
  converter.placeholder = `°${isCelsius ? "C" : "F"}`;
  c.textContent = `°${isCelsius ? "C" : "F"}`;
  F.textContent = `°${isCelsius ? "F" : "C"}`;
}

// Event listeners
convertButton.addEventListener("click", convertTemperature);
resetButton.addEventListener("click", resetFields);
changeButton.addEventListener("click", toggleUnit);