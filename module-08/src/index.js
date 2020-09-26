import galleryItems from "./gallery-items.js";
// Создание и рендер разметки по массиву данных и предоставленному шаблону.+
// Реализация делегирования на галерее ul.js-gallery и получение url большого изображения.+
// Открытие модального окна по клику на элементе галереи.+
// Подмена значения атрибута src элемента img.lightbox__image.+
// Закрытие модального окна по клику на кнопку button[data-action="close-lightbox"].+
// Очистка значения атрибута src элемента img.lightbox__image. Это необходимо для того,
// чтобы при следующем открытии модального окна, пока грузится изображение, мы не видели предыдущее.+
// Закрытие модального окна по клику на div.lightbox__overlay.-
// Закрытие модального окна по нажатию клавиши ESC.+
// Пролистывание изображений галереи в открытом модальном окне клавишами "влево" и "вправо".

const list = document.querySelector(".js-gallery");
const div = document.querySelector(".lightbox");
const modalImg = document.querySelector(".lightbox__image");
const modalCloseBtn = document.querySelector(
  'button[data-action="close-lightbox"]'
);
const divOverlay = document.querySelector(".lightbox__overlay");
const divContent = document.querySelector(".lightbox__content");

const gallery = galleryItems.map((item, index) => {
  const img = document.createElement("img");
  img.classList.add("gallery__image");
  img.src = item.preview;
  img.setAttribute("data-source", item.original);
  img.setAttribute("data-index", index);
  img.alt = item.description;
  img.style.display = "block";
  const link = document.createElement("a");
  link.classList.add("gallery__link");
  link.href = item.original;
  link.append(img);
  let li = document.createElement("li");
  li.classList.add("gallery__item");
  li.append(link);
  return li;
});
list.append(...gallery);

list.addEventListener("click", openModal);

modalCloseBtn.addEventListener("click", closeModal);

divOverlay.addEventListener("click", onOverlayClick);

divContent.addEventListener("click", onContentClick);

function openModal(event) {
  event.preventDefault();
  if (event.target !== event.currentTarget) {
    window.addEventListener("keydown", onCloseEsc);
    window.addEventListener("keydown", onCloseArrows);
    div.classList.add("is-open");
    let modalLink = event.target.dataset.source;
    modalImg.src = modalLink;
    modalImg.alt = event.target.description;
    modalImg.dataset.index = event.target.dataset.index;
  }
}

function closeModal() {
  window.removeEventListener("keydown", onCloseEsc);
  window.removeEventListener("keydown", onCloseArrows);
  div.classList.remove("is-open");
  modalImg.src = "";
  modalImg.alt = "";
}

function onOverlayClick(event) {
  if (event.target === event.currentTarget) {
    closeModal();
  }
}

function onContentClick(event) {
  if (event.target === event.currentTarget) {
    divOverlay.click();
  }
}

function onCloseEsc(event) {
  if (event.code === "Escape") {
    closeModal();
  }
}

function onCloseArrows(event) {
  let indexImg = Number(modalImg.dataset.index);
  if (event.code === "ArrowLeft" && indexImg > 0) {
    indexImg -= 1;
    modalImg.src = galleryItems[indexImg].original;
    modalImg.alt = galleryItems[indexImg].description;
    modalImg.dataset.index = indexImg;
  } else if (event.code === "ArrowRight" && indexImg < gallery.length - 1) {
    indexImg += 1;
    modalImg.src = galleryItems[indexImg].original;
    modalImg.alt = galleryItems[indexImg].description;
    modalImg.dataset.index = indexImg;
  }
}
