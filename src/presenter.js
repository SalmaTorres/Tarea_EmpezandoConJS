import sumar from "./sumador";

const first = document.querySelector("#primer-numero");
const second = document.querySelector("#segundo-numero");
const form = document.querySelector("#sumar-form");
const div = document.querySelector("#resultado-div");

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const firstNumber = Number.parseInt(first.value);
  const secondNumber = Number.parseInt(second.value);

  div.innerHTML = "<p>" + sumar(firstNumber, secondNumber) + "</p>";
});

import multiplicar from "./multiplicador";

const num1 = document.querySelector("#n1");
const num2 = document.querySelector("#n2");
const formulario = document.querySelector("#multiplicar-form");
const resul = document.querySelector("#resultado-mult");

formulario.addEventListener("submit", (event) => {
  resul.preventDefault();

  const firstNumber = Number.parseInt(num1.value);
  const secondNumber = Number.parseInt(num2.value);

  div.innerHTML = "<p>" + multiplicar(firstNumber, secondNumber) + "</p>";
});
