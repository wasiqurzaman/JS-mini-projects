'use strict';

const inputText = document.querySelector(".input");
const inputFrom = document.querySelector(".form");
const transformedText = document.querySelector(".transfromed-text");
const textContainerAll = document.querySelectorAll(".text-container");

inputText.value = "this is a normal sentence to transform";
let transformedTextsArr;

function transformText(text) {
  let textArr = text.trim().split(" ");
  const lowerCase = textArr.map(word => word.toLowerCase()).join(" ");
  const upperCase = textArr.map(word => word.toUpperCase()).join(" ");
  const camelCase = textArr.map((word, i) => i === 0 ? word : word === "" ? "" : word?.at(0)?.toUpperCase() + word?.slice(1).toLowerCase()).join("");
  const pascalCase = textArr.map(word => word === "" ? "" : word?.at(0)?.toUpperCase() + word?.slice(1).toLowerCase()).join("");
  const snakeCase = textArr.filter(word => word !== "").join("_");
  const kebabCase = textArr.filter(word => word !== "").join("-");
  const trimmed = textArr.join("");
  transformedTextsArr = [lowerCase, upperCase, camelCase, pascalCase, snakeCase, kebabCase, trimmed];
}

function updateUI() {
  textContainerAll.forEach((textContainer, i) => {
    const child = textContainer.querySelector("p");
    if (child) textContainer.removeChild(child);
    let html = `<p class="transformed-text">${transformedTextsArr[i]}</p>`;
    textContainer.insertAdjacentHTML("beforeend", html);
  });
}

transformText(inputText.value);
updateUI();

inputText.addEventListener("input", function (e) {
  transformText(e.target.value);
  updateUI();
});

