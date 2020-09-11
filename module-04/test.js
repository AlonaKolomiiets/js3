// const greeting = function (callback) {
//   let name = "Ivan";
//   callback(name);
// };
// const sayHi = function (name) {
//   console.log(name);
// };

// greeting(sayHi);

// const printSmth = function (n, str) {
//   for (let i = 0; i < n; i += 1) {
//     console.log(`${str} ${i}`);
//   }
// };

// printSmth(11, "Number");

// const myFn = function (n, str) {
//   let i = 0;
//   while (i < n) {
//     console.log(`${str} ${n} больше ${i}`);
//     i += 1;
//   }
// };

// myFn(4, "число");

// const printValue = function (value) {
//   console.log(value);
// };

// const prettyPrint = function (value) {
//   console.log("Logging value: ", value);
// };

// const repeat = function (n, action) {
//   for (let i = 0; i < n; i += 1) {
//     action(i);
//   }
// };

// // Передаем printValue как callback-функцию
// repeat(3, printValue);
// // 0
// // 1
// // 2

// // Передаем prettyPrint как callback-функцию
// repeat(3, prettyPrint);
// // Logging value: 0
// // Logging value: 1
// // Logging value: 2

// const filter = function (array, test) {
//   const filteredElements = [];

//   for (const element of array) {
//     const passed = test(element);

//     if (passed) {
//       filteredElements.push(element);
//     }
//   }

//   return filteredElements;
// };

// const fruits = [
//   { name: "apples", quantity: 200, isFresh: true },
//   { name: "grapes", quantity: 150, isFresh: false },
//   { name: "bananas", quantity: 100, isFresh: true },
// ];

// const bananas = filter(fruits, (fruit) => fruit.name === "bananas");
// console.log(bananas); // массив с объектom bananas

// const community = [
//   { name: "John", salary: 200, isActiveWorker: true },
//   { name: "Derek", salary: 150, isActiveWorker: false },
//   { name: "Anna", salary: 100, isActiveWorker: true },
//   { name: "Mariia", salary: 50, isActiveWorker: false },
//   { name: "Tony", salary: 100, isActiveWorker: true },
// ];

// const isNeedToFire = function (array, isActiveWorker) {
//   const needToFire = [];
//   for (const elem of array) {
//     if (!isActiveWorker(elem)) {
//       needToFire.push(elem);
//     }
//   }
//   return needToFire;
// };

// console.log(
//   isNeedToFire(
//     community,
//     (elem) => elem.isActiveWorker === false && elem.salary < 100
//   )
// );

// const counter = function () {
//   let count = 0;
//   const onIncrement = function () {
//     count += 1;
//     console.log(count);
//   };
//   const onDecrement = function () {
//     count -= 1;
//     console.log(count);
//   };
//   return { onIncrement, onDecrement };
// };
