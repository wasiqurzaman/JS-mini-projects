const data = [
  {
    question: "What is the difference between a UI and UX Designer?",
    answer: "The main difference is UI designers design User Interface and UX designer design user experience. Lorem, ipsum dolor sit amet consectetur adipisicing elit.Modi quisquam consequatur magnam fugiat delectus hic eius omnis illum ea quasi numquam quae est aspernatur earum, rem magni excepturi culpa eligendi."
  },
  {
    question: "How to become a UI designer?",
    answer: "Learn the basics. Lorem, ipsum dolor sit amet consectetur adipisicing elit.Modi quisquam consequatur magnam fugiat delectus hic eius omnis illum ea quasi numquam quae est aspernatur earum, rem magni excepturi culpa eligendi."
  },
  {
    question: "What is the best UI design tool?",
    answer: "There are several tools out there for professional UI designers. The current most user tool is Figma. Lorem, ipsum dolor sit amet consectetur adipisicing elit.Modi quisquam consequatur magnam fugiat delectus hic eius omnis illum ea quasi numquam quae est aspernatur earum, rem magni excepturi culpa eligendi."
  },
  {
    question: "What is the best place to learn Figma?",
    answer: "There are many course out there by professional UI designers. Choose any of them. Lorem, ipsum dolor sit amet consectetur adipisicing elit.Modi quisquam consequatur magnam fugiat delectus hic eius omnis illum ea quasi numquam quae est aspernatur earum, rem magni excepturi culpa eligendi."
  },
  {
    question: "Should designers?",
    answer: "Learning to code is a very useful skill. It will help designers to think better in term of their designs. Lorem, ipsum dolor sit amet consectetur adipisicing elit.Modi quisquam consequatur magnam fugiat delectus hic eius omnis illum ea quasi numquam quae est aspernatur earum, rem magni excepturi culpa eligendi."
  }
]

// const dataModified = data.map(item => ({ ...item, isOpen: false }));

const accordionContainer = document.querySelector(".accordion");

data.forEach((item, i) => {
  const itemHtml = `
  <div class="accordion-item item-${i}">
  <div class="question">
  <p>${item.question}</p>
  <button class="btn btn-${i}">+</button>
  </div>
  </div>
  `
  accordionContainer.insertAdjacentHTML("beforeend", itemHtml);
});

const itemsContainer = document.querySelectorAll(".accordion-item");
const questions = document.querySelectorAll(".question");
const buttons = document.querySelectorAll(".btn");


let openAccordions = [];

// buttons.forEach((button, i) => {
questions.forEach((question, i) => {
  question.addEventListener("click", function (e) {
    if (openAccordions.includes(i)) {
      itemsContainer[i].lastChild.remove();
      openAccordions = openAccordions.filter(item => item !== i);
      itemsContainer[i].querySelector(".btn").textContent = "+"
    } else {
      openAccordions.push(i);
      const itemData = data[i];
      const html = `<div class="answer">${itemData.answer}</div>`
      itemsContainer[i].insertAdjacentHTML("beforeend", html);
      itemsContainer[i].querySelector(".btn").textContent = "-"
    }
    // console.log(openAccordions);
  });
});