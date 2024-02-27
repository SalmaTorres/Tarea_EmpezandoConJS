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
  event.preventDefault();

  const firstNumber = Number.parseInt(num1.value);
  const secondNumber = Number.parseInt(num2.value);

  resul.innerHTML = "<p>" + multiplicar(firstNumber, secondNumber) + "</p>";
});

import generarSecuenciaFizzBazz from "./fizzbazz_secuencia";

const lim = document.querySelector("#limite");
const formFizzBazz = document.querySelector("#FizzBazz-form");
const secuenciaFizzBazz = document.querySelector("#resultado-secuenciaFizzBazz");

formFizzBazz.addEventListener("submit", (event) => {
  event.preventDefault();
  
  const limite = Number.parseInt(lim.value);

  secuenciaFizzBazz.innerHTML = "<p>" + generarSecuenciaFizzBazz(limite) + "</p>";
});

import EsBisiesto from "./bisiesto";

const fecha = document.querySelector("#anio");
const formBisiesto = document.querySelector("#Bisiesto-form");
const respBisiesto = document.querySelector("#resultado-Bisiesto");

formBisiesto.addEventListener("submit", (event => {
  event.preventDefault();

  const anio = Number.parseInt(fecha.value);
  respBisiesto.innerHTML = "<p>" + EsBisiesto(anio) + "</p>";
}))