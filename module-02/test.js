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

// let day = prompt("Ведите день недели");

// switch (day) {
//   case "monday":
//   //  console.log("Это будень день");
//   //break;
//   case "tuesday":
//   // console.log("Это будень день");
//   // break;
//   case "wensday":
//   // console.log("Это будень день");
//   //  break;
//   case "thursday":
//   //  console.log("Это будень день");
//   // break;
//   case "friday":
//     console.log("Это будний день");
//     break;

//   case "saturday":
//   // console.log("Выходной");
//   // break;
//   case "sunday":
//     console.log("Выходной");
//     break;

//   default:
//     console.log("Введите валидный день недели");
// }

// if (
//   day === "monday" ||
//   day === "tuesday" ||
//   day === "wensday" ||
//   day === "thursday" ||
//   day === "friday"
// ) {
//   console.log("Это будний день");
// } else if (day === "saturday" || day === "sunday") {
//   console.log("Выходной");
// } else {
//   console.log("Введите валидный день недели");
// }

// for (let i = 0; i < 10; ++i) {
//   console.log(i);
// }

// for (let i = 0; i < 10; i++) {
//   console.log(i);
// }

// for (let i = 0; i < 10; i += 1) {
//   console.log(i);
// }

// const arr = ["Mango", "Poly", "Ajax", 2, 3, false, {a:1}];
// if (arr) {
//   console.log(arr);
// }
// for (let i = 0; i < arr.length; i += 1) {
//   console.log(`елемент массива №${i + 1}: ${arr[i]} `);
// }

// for (const el of arr) {
//   console.log(el);
// }

// const arr2 = [
//   [1, 2, 3],
//   [4, 5, 6],
//   [7, 8, 9],
// ];

// const arr3 = [];
// for (const el of arr2) {
//   for (let i = 0; i < el.length; i++) {
//     console.log(el[i]);
//     arr3.push(el[i]);
//   }
// }
// console.log(arr3);

// let a = 1;
// let b = a;
// a=2;
// b=a;
// console.log(b);

// const obj = { name: "Jone", surname: "Vick" };
// const objCopy = obj;
// console.log("objCopy:", objCopy);
// obj.name = "Ivan";
// console.log("objCopy:", objCopy);

// const str = "Hello world, I am Ivan";
// const str2 = str.split(",");
// let str3 = str2.join("");
// console.log(str3.split(" "));

//const arr = ["Mango", "Poly", "Ajax", 2, 3, false, {a:1}];

//console.log(arr.indexOf({a:1})); //-1 потомучто объекты копируются по ссылке;
//console.log(arr.includes("{a:1}")); //false потомучто объекты копируются по ссылке;
// let arr = [];
// arr.push("1", "2", "3");
// console.log(arr);

// console.log(arr.pop());
// arr.unshift("0");
// console.log(arr);
// arr.shift();
// console.log(arr);

// let str = "AVAg";
// let str2 = str.split('').reverse().join('');
// console.log(str===str2);

// let arr = [2, 3, 1]; create new array
// let newArr = arr.slice(); reate new array [2, 3, 1];
// console.log(arr === newArr);

// let arr = [2, 3, 1];

// arr.splice(2, 1, "Hi");
// console.log(arr);

// const styles = ["Джаз", "Блюз", 1, 2, 3, 4];
// styles.push("Рок-н-ролл");

// console.log(styles);

// styles.splice(Math.round(styles.length / 2), 1, "Классика");

// console.log(styles);

// console.log(styles.shift());
// styles.unshift("Реп", "Регги");
// console.log(styles);

// let default1 = 0;
// const fn = function (a = 0, b = 0, c = 0, d = 0) {
//   console.log(a, b, c, d);
// };

// console.log(fn(1, default1, default1, 3));

// console.log(add(1, 2, 3));
// function add(a, b, c) {
//   return a + b + c;
// }

// const showMeArguments = function () {
//   console.log(arguments);
// };

// showMeArguments("Tor","Windows");

// const showMeArguments = function (...args) {
//     console.log(args);
//   };

//   showMeArguments("Tor","Windows");

// const arr = ["Джаз", "Блюз", 1, 2, 3, 4];

// let arr2 = [5, 6, 7];

// arr2.push(...arr);

// console.log(arr2);

// let newArray = [...arr, ...arr2];

// console.log(newArray);

// const arr = ["Джаз", "Блюз", 1, 2, 3, 4];
// let arr2 = [5, 6, 7];
// let arr3 = arr.concat(arr2);
// console.log(arr);
// console.log(arr3);

// const add = (a, b, c) => a + b + c;
// const oneParam = (a) => a + b + c; //esli v odnu stroky return po ymolchaniu
// const add = (...args) => {
//   for (const el of args) {
//     // console.log(el);
//     return args;
//   }
//   return 1;
// };
// console.log(add(1, 2, 3));
