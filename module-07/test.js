// console.log(navigator);

// let body = document.querySelector("body");
// body.style.background = "pink";
// console.log(body);
//console.log(document);
//let pSelect = document.querySelector(".greeting");
// pSelect.hidden = true;
// console.log(pSelect.hidden);
// console.log(pSelect.value);
// pSelect.style.width = "100px";
// pSelect.style.height = "50px";
// pSelect.style.background = "green";
// pSelect.style.color = "red";
// console.log(pSelect);

// const gif1 = document.querySelector(".gif1");

// gif1.style.width = "500px";
// gif1.style.height = "300px";
// gif1.style.marginTop = "50px";
// gif1.fontSize = "40px";
// gif1.textContent += "kitten";
// gif1.fontSize = "40px";
// console.log(gif1.textContent);
// gif1.classList.add("tittle","tittle2");
// gif1.classList.remove("tittle");
// gif1.classList.toggle('tittle2');
// gif1.classList.toggle('tittle2');
// console.log(gif1.classList);
//console.log(gif1.getAttribute("data"));
// gif1.addEventListener("click", () => {
//   gif1.getAttribute("data");
// });

//gif1.setAttribute("height","20px");

// let arr = ["Bodya","Sasha","Alex","Mark"];
// for (let i = 0; i<arr.length; i+=1){
//   const tittle = document.createElement("h3");

//   tittle.textContent = arr[i];
//   tittle.style.color = "red"
//   body.prepend(tittle);
// }

// let arr = ["Bodya", "Sasha", "Alex", "Mark", "Twen"];
// for (let index = 0; index < arr.length; index++) {
//   const tittle = document.createElement("h3");
//   tittle.textContent = arr[index];
//   tittle.setAttribute("id", `${index}`);
//   // setInterval(() => {
//   //   tittle.style.color = `rgb(${Math.floor(Math.random()*255)},${Math.floor(Math.random()*255)},${Math.floor(Math.random()*255)})`;
//   //   tittle.style.transform = `translate(${Math.floor(Math.random()*10)}px, ${Math.floor(Math.random()*10)}px)`
//   // }, 500);
//   body.prepend(tittle);
// }

// console.log((body.innerHTML = `<p>${arr[4]}</p>`));

// for (let i = 0; i < 5; i += 1) {
//   const img = document.createElement("img");
//   console.log(img);
//   img.setAttribute(
//     "src",
//     "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSiND1tRMbPk65W1geykBOeox7GskVihoVDfA&usqp=CAU"
//   );
//   body.append(img);
// }

// for (let i = 0; i < 5; i += 1) {
//   const img = document.createElement("img");
//   console.log(img);
//   img.setAttribute(
//     "src",
//     `https://picsum.photos/id/${Math.floor(Math.random() * 255)}/200/300`
//   );
//   body.append(img);
// }

// const bodySelector = document.querySelector("body");
// let divS;
// for (let i = 0; i < 3; i += 1) {
//   divS = document.createElement("div");
//   divS.classList.add("divClass");
//   divS.style.background = `rgb(${Math.floor(Math.random() * 255)},${Math.floor(
//     Math.random() * 255
//   )},${Math.floor(Math.random() * 255)})`;
//   divS.style.width = "100px";
//   divS.style.height = "100px";
//   divS.textContent = "Div Color";
//   divS.style.color = "pink";
//   bodySelector.append(divS);
// }
// const divList = document.querySelectorAll(".divClass");
// const div1 = divList[0];
// const div2 = divList[1];
// const div3 = divList[2];

// div1.addEventListener(
//   "click",
//   (e) => (bodySelector.style.background = e.target.style.background)
// );
// div2.addEventListener(
//   "click",
//   (e) => (bodySelector.style.background = e.target.style.background)
// );
// div3.addEventListener(
//   "click",
//   (e) => (bodySelector.style.background = e.target.style.background)
// );
//const body = document.querySelector("body");
// for (let i = 0; i < 10; i += 1) {
//   const cube = document.createElement("div");
//   cube.classList.add("cube");
//   cube.textContent = i + 1;
//   body.append(cube);
//   //   cube.addEventListener("click", () => alert(cube.textContent));
// }
// body.addEventListener("click", (e) => alert(e.target.textContent));
// window.addEventListener("scroll", (e) =>
//   window.scrollY > 200 ? console.log("STOP") : ""
// );

// window.addEventListener("scroll", (e) => {
//   if (window.scrollY < 200) {
//     body.style.background = "pink";
//   } else if (window.scrollY < 300) {
//     body.style.background = "red";
//   } else if (window.scrollY > 350) {
//     body.style.background = "teal";
//   }
// });
// window.addEventListener("scroll", (e) => {
//   window.scrollY < 200
//     ? (body.style.background = "pink")
//     : window.scrollY < 300
//     ? (body.style.background = "red")
//     : window.scrollY > 350
//     ? (body.style.background = "teal")
//     : "";
// });

// body.addEventListener("click", (el) => {
//   console.log(el);
//   body.innerHTML += `<div class="circle" style = "top:${el.clientY}px; left:${el.clientX}px" > 👅</div>`;
// });

// let form = document.querySelector("form");

// form.addEventListener("submit", (e) => {
//   e.preventDefault();
//   console.log(e.target[0].value);
// });

// let form = document.querySelector("form");

// form.addEventListener("submit", (e) => {
//   e.preventDefault();
//   console.log(`Hello my friend ${e.target[0].value} from ${e.target[1].value}`);
// });

// let inputRef = document.querySelector(".input");
// inputRef.addEventListener("focus", (e) => {
//   console.log("Input is in focus");
// });

// let inputRef = document.querySelector(".input");
// inputRef.addEventListener("blur", (e) => {
//   console.log("Input is in blured");
// });

// let inputRef = document.querySelector(".input");
// inputRef.addEventListener("input", (e) => {
//   console.log(e.target.value);
// });
// let inputRef = document.querySelector(".input");
// inputRef.addEventListener("change", (e) => {
//   console.log(e.target.value);
// });

// let inputRef = document.querySelector(".input");
// inputRef.addEventListener("keyup", (e) => {
//   console.log(e.target.value);
// });

// let body = document.querySelector("body");
// body.addEventListener("keypress", (e) => {
//   console.log(e.keyCode);
// });
// let cardRef = document.querySelector(".card");
// const cardChange = (e) => {
//   e.preventDefault();
//   e.target.nodeName === "IMG"
//     ? (e.target.src =
//         "https://img.webmd.com/dtmcms/live/webmd/consumer_assets/site_images/article_thumbnails/slideshows/taking_care_of_kitten_slideshow/1800x1200_taking_care_of_kitten_slideshow.jpg") &&
//       console.log(e.target)
//     : e.target.nodeName === "LI"
//     ? (e.target.style.background = "pink") && console.log(e.target)
//     : e.target.nodeName === "H3"
//     ? (e.target.textContent = "Bye!") && console.log(e.target)
//     : "";
// };
// cardRef.addEventListener("click", cardChange);

// let cardRef = document.querySelector(".ul");
// const cardChange = (e) => {
//   e.preventDefault();
//   e.target.nodeName === "IMG"
//     ? (e.target.style.width = "95px") &&
//       (e.target.style.height = "75px") &&
//       console.log(e.target)
//     : e.target.nodeName === "LI"
//     ? (e.target.style.background = "orange") && console.log(e.target)
//     : e.target.nodeName === "H3"
//     ? (e.target.textContent += "Changed!") && console.log(e.target)
//     : "";
// };
// cardRef.addEventListener("click", cardChange);

// let cardRef = document.querySelector(".example");
