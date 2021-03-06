// <div id="controls">
//   <input type="number" min="0" max="100" step="1" />
//   <button type="button" data-action="render">Создать</button>
//   <button type="button" data-action="destroy">Очистить</button>
// </div>

// <div id="boxes"></div>
// Напиши скрипт создания и очистки коллекции элементов. Пользователь вводит количество элементов
// в input и нажимает кнопку Создать, после чего рендерится коллекция. При нажатии на кнопку Очистить,
// коллекция элементов очищается.

// Создай функцию createBoxes(amount), которая принимает 1 параметр amount - число. Функция
// создает столько div, сколько указано в amount и добавляет их в div#boxes.

// Каждый созданный div:

// Имеет случайный rgb цвет фона
// Размеры самого первого div - 30px на 30px
// Каждый следующий div после первого, должен быть шире и выше предыдущего на 10px
// Создай функцию destroyBoxes(), которая очищает div#boxes.
const divBoxes = document.querySelector("#boxes");
const renderBtn = document.querySelector('button[data-action="render"]');
const destroyBtn = document.querySelector('button[data-action="destroy"]');
const input = document.querySelector("input");
renderBtn.addEventListener("click", createBoxes);
destroyBtn.addEventListener("click", destroyBoxes);

function createBoxes() {
  let acc = 30;
  for (let i = 0; i < input.value; i += 1) {
    let div = document.createElement("div");
    div.style.width = `${acc}px`;
    div.style.height = `${acc}px`;
    acc += 10;
    div.style.background = `rgb(${Math.floor(Math.random() * 255)},${Math.floor(
      Math.random() * 255
    )},${Math.floor(Math.random() * 255)})`;
    divBoxes.append(div);
  }
}
function destroyBoxes() {
  divBoxes.innerHTML = "";
}
