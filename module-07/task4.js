// Счетчик состоит из спана и кнопок, которые должны увеличивать и уменьшать значение счетчика на 1.

// Создай переменную counterValue в которой будет хранится текущее значение счетчика.
// Создай функции increment и decrement для увеличения и уменьшения значения счетчика
// Добавь слушатели кликов на кнопки, вызовы функций и обновление интерфейса
// <div id="counter">
//   <button type="button" data-action="decrement">-1</button>
//   <span id="value">0</span>
//   <button type="button" data-action="increment">+1</button>
// </div>

let counterValue = 0;
const value = document.getElementById("value");
const btnDecrement = document.querySelector('button[data-action="decrement"]');
const btnIncrement = document.querySelector('button[data-action="increment"]');
const increment = function () {
  counterValue += 1;
};
const decrement = function () {
  counterValue -= 1;
};
const updateHtml = function () {
  value.textContent = counterValue;
};

btnDecrement.addEventListener("click", () => {
  decrement();
  updateHtml();
});
btnIncrement.addEventListener("click", () => {
  increment();
  updateHtml();
});
