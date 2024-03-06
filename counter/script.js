'use strict';

const displayCounter = document.querySelector(".display-counter");
const btnDecrement = document.querySelector(".btn-decrement");
const btnIncrement = document.querySelector(".btn-increment");
const inputNum = document.querySelector("#input-number");
const btnReset = document.querySelector(".btn-reset");
const containerDiv = document.querySelector(".container");

let counter = 0;
let counterChangeBy = 1;
inputNum.value = counterChangeBy;

function decrementCounter() {
  counter -= counterChangeBy;
  displayCounter.textContent = counter;
}

function incrementCounter() {
  counter += counterChangeBy;
  displayCounter.textContent = counter;
}

function resetCounter() {
  counter = 0;
  counterChangeBy = 1;
  displayCounter.textContent = counter;
  inputNum.value = 1;
}


inputNum.addEventListener("change", function (e) {
  counterChangeBy = +e.target.value;
  e.target.value = counterChangeBy;
});
btnDecrement.addEventListener("click", decrementCounter);
btnIncrement.addEventListener("click", incrementCounter);
btnReset.addEventListener("click", resetCounter);


// Using Event delegation.
// containerDiv.addEventListener("click", function (e) {
//   if (e.target.classList.contains("btn-decrement")) decrementCounter();
//   if (e.target.classList.contains("btn-increment")) incrementCounter();
//   if (e.target.classList.contains("btn-reset")) resetCounter();
// });