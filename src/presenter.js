import multiplicar from "./multiplicador";
import sumar from "./sumador";

const first = document.querySelector("#primer-numero");
const second = document.querySelector("#segundo-numero");


const button_suma = document.getElementById("suma");
const button_multi= document.getElementById("multiplicacion");

const div = document.querySelector("#resultado-div");
const div_mult = document.querySelector("#resultado-mult-div");


button_suma.addEventListener("click", (event) => {
  event.preventDefault();

  const firstNumber = Number.parseInt(first.value);
  const secondNumber = Number.parseInt(second.value);
  div.innerHTML = "<p>" + "resultado suma: " + sumar(firstNumber, secondNumber) + "</p>";

});

button_multi.addEventListener("click", (event) => {
  event.preventDefault();

  const firstNumber = Number.parseInt(first.value);
  const secondNumber = Number.parseInt(second.value);

  div_mult.innerHTML = "<p>" + "resultado multiplicacion: " + multiplicar(firstNumber, secondNumber) + "</p>";

});
