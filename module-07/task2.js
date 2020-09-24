//В JS есть массив строк.

const ingredients = [
  "Картошка",
  "Грибы",
  "Чеснок",
  "Помидоры",
  "Зелень",
  "Приправы",
];
//Напиши скрипт, который для каждого элемента массива ingredients создаст отдельный li,
//после чего вставит все li за одну операцию в список ul.ingredients.
//Для создания DOM-узлов используй document.createElement().
// const ulTag = document.querySelector("#ingredients");
// ulTag.style.listStyleType = "none";
// ingredients.map((el) => {
//   const ulTagLi = document.createElement("li");
//   ulTagLi.textContent = el;
//   ulTagLi.classList.add("liclass");
//   ulTag.append(ulTagLi);
//   ulTagLi.style.color = `rgb(${Math.floor(Math.random() * 255)},${Math.floor(
//     Math.random() * 255
//   )},${Math.floor(Math.random() * 255)})`;
// });

const ulTag = document.querySelector("#ingredients");
ulTag.style.listStyleType = "none";
const listOfIngredients = ingredients.map((el) => {
  const ulTagLi = document.createElement("li");
  ulTagLi.textContent = el;
  ulTagLi.classList.add("liclass");
  ulTagLi.style.color = `rgb(${Math.floor(Math.random() * 255)},${Math.floor(
    Math.random() * 255
  )},${Math.floor(Math.random() * 255)})`;
  return ulTagLi;
});

ulTag.append(...listOfIngredients);
