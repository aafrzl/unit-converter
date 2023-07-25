let convertBtn = document.getElementById('converter-btn');
let inputEl = document.getElementById('input-el');
let lengthEl = document.getElementById('length-el');
let volumeEl = document.getElementById('volume-el');
let massEl = document.getElementById('mass-el');

const meterToFeet = 3.281;
const literToGallon = 0.264;
const kilogramToPound = 2.204;

convertBtn.addEventListener('click', function () {
  let inputValue = inputEl.value;

  //length(meter/feet)
  lengthEl.textContent = `${inputValue} meter = ${(inputValue * meterToFeet).toFixed(3)} feet | ${inputValue} feet = ${(inputValue / meterToFeet).toFixed(3)} meters`;

  //volume(liter/gallon)
  volumeEl.textContent = `${inputValue} liter = ${(inputValue * literToGallon).toFixed(3)} gallon | ${inputValue} gallon = ${(inputValue / literToGallon).toFixed(3)} liters`;

  //mass(kilogram/pound)
  massEl.textContent = `${inputValue} kilogram = ${(inputValue * kilogramToPound).toFixed(3)} pound | ${inputValue} pound = ${(inputValue / kilogramToPound).toFixed(3)} kilograms`;
});
