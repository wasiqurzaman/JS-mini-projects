'use strict';

const inputText = document.querySelector(".input");

inputText.addEventListener("keyup", function (e) {
  if (e.keyCode >= 96 && e.keyCode <= 105 || e.keyCode >= 48 && e.keyCode <= 57) {
    console.log(e.target.value);
    const arr = e.target.value.split("").filter(n => new RegExp(`${n}`).test("0123456789"));
    console.log(arr);
    let value = String(Number.parseInt(arr.join(""), 10));
    console.log(value);
    if (e.target.value.length >= 4) {
      value = `+(${value[0]}${value[1]}${value[2]}) - ${value.slice(3)}`;
      inputText.value = value;
    }
  }
})