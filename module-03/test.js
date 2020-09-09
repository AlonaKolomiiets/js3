// const testObj = {
//   test: 123,
// };

// testObj.test = "test";
// console.log(testObj.test);
// console.log(testObj["test"]);
// // delete testObj.test;
// console.log(testObj);

// let obj = {
//   a: { m: 0 },
// };
// let a = 1;
// const testObj = {
//     test: 123,
//   };

//   testObj['a'] = a;
//   console.log(testObj);

// let name = "Resort Hotel";
// let stars = 5;

// // Эта ES5 запись избыточна
// const es5hotel = {
//   name: name,
//   stars: stars,
//   capacity: 100,
// };

// /*
//  * ES6 Shorthand properties
//  * Имя ключа будет аналогично имени переменной
//  * Значение свойства будет равно значению переменной
//  */
// const es6hotel = {
//   name,
//   stars,
//   capacity: 100,
// };

// console.log(es6hotel); // {name: "Resort Hotel", stars: 5, capacity: 100}

// const obj = {
//   defaultValue: 0,
//   plus: function (n) {
//     this.defaultValue += n;
//   },
//   minus: function (n) {
//     this.defaultValue -= n;
//   },
//   multi: function (n) {
//     this.defaultValue *= n;
//   },
//   devide: function (n) {
//     this.defaultValue /= n;
//   },
// };

// obj.plus(5);
// obj.minus(1);
// obj.multi(2);
// obj.devide(4);
// console.log(obj.defaultValue);

// const obj = {
//   a: 1,
//   b: 2,
//   c: 3,
// };
// let total = 0;
// for (const key in obj) {
//   console.log(`${key} is equal to ${obj[key]}`);
//   total += obj[key];
// }

// console.log(total);

//console.log(Object.entries(obj)[1][1]);
// console.log(Object.keys(obj));
// console.log(Object.values(obj));

// let obj2 = {
//   b: 4,
//   e: 5,
// };

// let obj3 = {
//   ...obj,
//   obj2,
// };

// console.log(obj3);

// const add = function (value, a, b, c, ...args) {
//   console.log(value); // первый аргумент
//   console.log(args); // массив всех остальных аргументов
// };

// add(10, 1, 2, 3);
// add(15, 1, 2, 3, 4, 5);

// let obj2 = {
//   b: 4,
//   e: 5,
// };

// const obj = {
//   a: 1,
//   b: 2,
//   c: 3,
// };

// let obj3 = Object.assign({}, obj2);

// console.log(obj3);

// console.log(obj3 === obj2);

// const hotel = {
//   name: "Resort Hotel",
//   stars: 5,
//   capacity: 100,
//   status: "mass",
// };

// // console.log(name);
// const { name, stars, capacity, status = "VIP" } = hotel;

// console.log(name, stars, capacity, status);
// console.log(hotel);
