const secondSpan = document.querySelector(".second-text");

const texts = ["Student", "Developer", "Writer", "Blogger",]

// promise is for delaying
const promise = (time) => {
  return new Promise((reslove, reject) => {
    setTimeout(() => {
      reslove();
    }, time);
  });
}

async function textEffect(element, text, time = 200) {
  await promise(time);
  for (let i = 0; i < text.length; i++) {
    element.textContent += text[i];
    // console.log(element.textContent);
    await promise(time);
  }
  await promise(1000);                      // 1 second delay after each typing word
  for (let i = 0; i < text.length; i++) {
    element.textContent = text.slice(0, text.length - 1 - i);
    // console.log(element.textContent);
    await promise(100);                     // backspacing is faster so 100ms is used
  }
}

(async function run() {
  for (let text of texts) {
    await textEffect(secondSpan, text, 250);
  }
  run();
})();
