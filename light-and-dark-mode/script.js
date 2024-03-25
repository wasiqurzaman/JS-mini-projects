const body = document.querySelector("body");
const innerText = document.querySelector(".inner-text");
const outerCheckbox = document.querySelector("#checkbox-outer");
const innerCheckbox = document.querySelector("#checkbox-inner");

const darkmode = JSON.parse(localStorage.getItem("darkmode")) || {
  outer: false,
  inner: false
}

const changeBody = function (color, backgroundColor) {
  body.style.color = color;
  body.style.backgroundColor = backgroundColor;
}

const changeInnerText = function (color, backgroundColor) {
  innerText.style.color = color;
  innerText.style.backgroundColor = backgroundColor;
}

if (darkmode.inner) {
  changeInnerText("white", "black");
  innerCheckbox.checked = true;
}
if (darkmode.outer) {
  changeBody("white", "black");
  changeInnerText("white", "black");
  outerCheckbox.checked = true;
  innerCheckbox.checked = true;
}

if (!darkmode.inner) {
  changeInnerText("black", "white");
  innerCheckbox.checked = false;
}

outerCheckbox.addEventListener("change", function () {
  if (outerCheckbox.checked) {
    changeBody("white", "black");
    changeInnerText("white", "black");
    innerCheckbox.checked = true;
    darkmode.inner = darkmode.outer = true;
    localStorage.setItem("darkmode", JSON.stringify(darkmode));
  } else {
    changeBody("black", "white");
    changeInnerText("black", "white");
    innerCheckbox.checked = false;
    darkmode.inner = darkmode.outer = false;
    localStorage.setItem("darkmode", JSON.stringify(darkmode));
  }
});

innerCheckbox.addEventListener("change", function () {
  if (innerCheckbox.checked) {
    changeInnerText("white", "black");
    darkmode.inner = true;
    localStorage.setItem("darkmode", JSON.stringify(darkmode));
  } else {
    changeInnerText("black", "white");
    darkmode.inner = false;
    localStorage.setItem("darkmode", JSON.stringify(darkmode));
  }
});

