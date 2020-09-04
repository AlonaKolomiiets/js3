//let b = 1;
// = - оператор присвоения;//
//b=2;
//console.log(b);
//alert("hello world");
// let a = 24;
// let b = "1";
// console.log(typeof(a+b));

//console.log("first:", 1 < 2 < 3, "second:", 3 > 2 > 1);
//console.log((1.1 * 10 + 1.3 * 10) / 10);
// let a = "hello";
// console.log(isNaN(+a));
//NaN - number;//

//Math.rnndom - выдает в случайном порядке число от 0 до 1//

// let randomNumber = Math.floor(Math.random()*100);

// console.log(randomNumber);

// let str = "Hello world";
// console.log(str[0]);
// console.log(str.length);

//Конкатенация//
// let str = "Hello world";
// let str2 = "Allo";
// console.log(str + " " + str2);
//Или использовать шаблонную строку//
// console.log(`${str} says: ${str2}`);

//Логические операторы//
//let a, b, c;
//  a = "" || 1; оператор ИЛИ(||) работает до первого true, если нет вариантов true, возвращает последний false;
//  console.log(a);
//b = 2 && 1 && null; //если любое из значений false, то в результате будет false; возвращает первый false;
//console.log(b);

//const name = "Alona";
// let age = prompt("Enter your age");
// // age = +age;
// age = Number(age);
// console.log(typeof age);
// console.log(age);

// let message = "Добрый день," + " " + name;
// console.log(message);

// let newMessage = `My age is ${age}`;

// newMessage = `My age is ${age}`;
// age = 44;

// console.log(age);
// console.log(typeof age);

// console.log(newMessage);

// let message = "Вы хотите уйти раньше?";
// const answer = confirm(message);

// console.log(typeof answer);
// console.log(answer);
// let newQuestion= "Do you like JS?"
// let newAnswer = confirm(newQuestion);

// console.log(typeof newAnswer);

// let num = 10;
// let boolNum = Boolean(num);
// console.log(boolNum);
// num = 0;
// boolNum = Boolean(num);
// console.log(boolNum);

// let str = "Sasha";
// let boolSrt = Boolean(str);
// console.log(boolSrt);
// str = "";
// boolSrt = Boolean(str);
// console.log(boolSrt);

// let isOpen;
// console.log(isOpen);
// console.log(typeof isOpen);

// let boolUnd = Boolean(isOpen);
// console.log(boolUnd);
// console.log(typeof boolUnd);

// isOpen = null;
// console.log(isOpen);
// console.log(typeof isOpen);

// let boolNull = Boolean(isOpen);
// console.log(boolNull);
// console.log(typeof boolNull);

// let ivan = {
//   age: 16,
//   dad: "politician",
// };

// if (ivan.age >= 18) {
//   alert("GO");
// } else if (ivan.dad === "politician") {
//   alert("YES");
// } else {
//   alert("GO AWAY");
// }

// if(ivan.age >= 18) {
//     alert("GO!")
// } else {
//     alert("Go away!!!")
// }

// if (ivan.age >= 18 || ivan.dad === "politician") {
//   alert("GO");
// } else {
//   alert("GO AWAY");
// }

// ivan.age >= 18 || ivan.dad === "politician" ? alert("GO") : alert("GO AWAY");

// const PASSWORD = "ilikejs";

// let prompt1 = prompt("Enter your password");
// console.log(prompt1);

// if (prompt1 === null) {
//   console.log(`Cancel by user`);
// } else if (prompt1 === PASSWORD) {
//   console.log(`Welcome`);
// } else {
//   console.log("incorrect password");
// }
// if (prompt1) {
//   prompt1 === PASSWORD ? console.log("Welcome") : console.log("Wrong password");
// } else {
//   console.log("enter password");
// }

//область видимости...//
// let a = 1;
// let b = 2;
// let c = 3;

// if(true) {
//     c = 4;
// }

// console.log(c);

// let q;

// while (q !== null) {
//   q = prompt("enter your name");
//   console.log(q);
// }

// while (true) {
//   console.log(1);
// }

// let a = 0;
// do {
//   // a = a+1;
//   a += 1;
//   console.log(a);
//   // a++;
// } while (a < 10);

//let ilyaAge = 21;
//let alonaage = 31;
//let sum = ilyaAge + alonaage;
//console.log(sum);

//let radius = 10;
//const PI = 3.14;
//console.log(PI * Math.pow(radius, 2));

// let numberBootcamp = "Bootcamp 24";
// const myName = "Alona";
// let age = 31;

// console.log(`Меня зовут ${myName} мне ${age}, я учусь на ${numberBootcamp}`);