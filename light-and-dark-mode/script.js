const body = document.querySelector("body");
const innerText = document.querySelector(".inner-text");
const outerCheckbox = document.querySelector("#checkbox-outer");
const innerCheckbox = document.querySelector("#checkbox-inner");


const changeBody = function (color, backgroundColor) {
  body.style.color = color;
  body.style.backgroundColor = backgroundColor;
}

const changeInnerText = function (color, backgroundColor) {
  innerText.style.color = color;
  innerText.style.backgroundColor = backgroundColor;
}

outerCheckbox.addEventListener("change", function () {
  if (outerCheckbox.checked) {
    changeBody("white", "black");
    changeInnerText("white", "black");
    innerCheckbox.checked = true;
  } else {
    changeBody("black", "white");
    changeInnerText("black", "white");
    innerCheckbox.checked = false;
  }
});

innerCheckbox.addEventListener("change", function () {
  if (innerCheckbox.checked) {
    changeInnerText("white", "black");
  } else {
    changeInnerText("black", "white");
  }
});

