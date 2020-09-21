// let word = "oKo";
// let result = word.toLowerCase().split("").reverse().join("");
// console.log(word.toLowerCase() === result);

// const isPalendrom = (word) =>
//   word.toLowerCase() === word.toLowerCase().split("").reverse().join("");

// console.log(isPalendrom(word));

const users = [
  {
    id: "701b29c3-b35d-4cf1-a5f6-8b12b29a5081",
    name: "Moore Hensley",
    email: "moorehensley@indexia.com",
    eyeColor: "blue",
    friends: ["Sharron Pace"],
    isActive: false,
    balance: 2811,
    skills: ["ipsum", "lorem"],
    gender: "male",
    age: 37,
  },
  {
    id: "7a3cbd18-57a1-4534-8e12-1caad921bda1",
    name: "Sharlene Bush",
    email: "sharlenebush@tubesys.com",
    eyeColor: "blue",
    friends: ["Briana Decker", "Sharron Pace"],
    isActive: true,
    balance: 3821,
    skills: ["tempor", "mollit", "commodo", "veniam", "laborum"],
    gender: "female",
    age: 34,
  },
  {
    id: "88beb2f3-e4c2-49f3-a0a0-ecf957a95af3",
    name: "Ross Vazquez",
    email: "rossvazquez@xinware.com",
    eyeColor: "green",
    friends: ["Marilyn Mcintosh", "Padilla Garrison", "Naomi Buckner"],
    isActive: false,
    balance: 3793,
    skills: ["nulla", "anim", "proident", "ipsum", "elit"],
    gender: "male",
    age: 24,
  },
  {
    id: "249b6175-5c30-44c6-b154-f120923736f5",
    name: "Elma Head",
    email: "elmahead@omatom.com",
    eyeColor: "green",
    friends: ["Goldie Gentry", "Aisha Tran"],
    isActive: true,
    balance: 2278,
    skills: ["adipisicing", "irure", "velit"],
    gender: "female",
    age: 21,
  },
  {
    id: "334f8cb3-eb04-45e6-abf4-4935dd439b70",
    name: "Carey Barr",
    email: "careybarr@nurali.com",
    eyeColor: "blue",
    friends: ["Jordan Sampson", "Eddie Strong"],
    isActive: true,
    balance: 3951,
    skills: ["ex", "culpa", "nostrud"],
    gender: "male",
    age: 27,
  },
  {
    id: "150b00fb-dd82-427d-9faf-2879ea87c695",
    name: "Blackburn Dotson",
    email: "blackburndotson@furnigeer.com",
    eyeColor: "brown",
    friends: ["Jacklyn Lucas", "Linda Chapman"],
    isActive: false,
    balance: 1498,
    skills: ["non", "amet", "ipsum"],
    gender: "male",
    age: 38,
  },
  {
    id: "e1bf46ab-7168-491e-925e-f01e21394812",
    name: "Sheree Anthony",
    email: "shereeanthony@kog.com",
    eyeColor: "brown",
    friends: ["Goldie Gentry", "Briana Decker"],
    isActive: true,
    balance: 2764,
    skills: ["lorem", "veniam", "culpa"],
    gender: "female",
    age: 39,
  },
];

// const arreNames = users.map((currentValue)=> currentValue.name);
// console.log(arreNames);
// let array = [];
// users.forEach((currentValue) => array.push(currentValue.name));
// console.log(array);

// const colorOfeye = (array, str) =>
//   array.filter((currentValue) => currentValue.eyeColor === str);

// console.log(colorOfeye(users, "brown"));

// const colorOfeye = (array, str) =>
//   array.find((currentValue) => currentValue.email === str);

// console.log(colorOfeye(users, "shereeanthony@kog.com"));

// const age = (array, minAge, maxAge) =>
//   array.filter((user) => user.age > minAge && user.age < maxAge);

// console.log(age(users, 30, 35));

// const BrianaDeckerFriends = (array, str) =>
//   array.filter((user) => user.friends.includes(str));

// console.log(BrianaDeckerFriends(users, "Briana Decker"));

// const getSkills = (arr) =>
//   arr.reduce((allSkills, elem) => {
//     allSkills.push(...elem.skills);
//     return allSkills;
//   }, []);

// const allSkills = getSkills(users);
// //console.log(getSkills(users));

// const filter = (arr) =>
//   arr.filter((elem, index) => arr.indexOf(elem) === index);

// console.log(filter(allSkills));


// ===================== ADDITIONAL ========================== //
// Данно масив з обєктами. Виконати всі поставлені задачі використовуючи функціональні методи масивів

const arr = [
  { name: "Albert", surname: "Einstein", born: 1879, dead: 1955, id: 1 },
  { name: "Isaac", surname: "Newton", born: 1643, dead: 1727, id: 2 },
  { name: "Galileo", surname: "Galilei", born: 1564, dead: 1642, id: 3 },
  { name: "Marie", surname: "Curie", born: 1867, dead: 1934, id: 4 },
  { name: "Johannes", surname: "Kepler", born: 1571, dead: 1630, id: 5 },
  { name: "Nicolaus", surname: "Copernicus", born: 1473, dead: 1543, id: 6 },
  { name: "Max", surname: "Planck", born: 1858, dead: 1947, id: 7 },
  { name: "Katherine", surname: "Blodgett", born: 1898, dead: 1979, id: 8 },
  { name: "Ada", surname: "Lovelace", born: 1815, dead: 1852, id: 9 },
  { name: "Sarah E.", surname: "Goode", born: 1855, dead: 1905, id: 10 },
{ name: "Lise", surname: "Meitner", born: 1878, dead: 1968, id: 11 },
{ name: "Hanna", surname: "Hammarström", born: 1829, dead: 1909, id: 12 }
];

// // == task-1 == //
// отримати масив вчених що народилися в 19 ст

// // == task-2 == //
// знайти суму років скільки прожили всі вченні

// // == task-3 == //
// Відсортувати вчених по алфавіту

// // == task-4 == //
// Відсортувати вчених по кількості прожитих років

// // == task-4 == //
// Видалити з масива вчених що народилися в 15 або 16 або 17 столітті

// // == task-5 == //
// Знайти вченого який народився найпізніше.

// // == task-6 == //
// Знайти рік народження Albert Einstein

// // == task-7 == //
// знайти вчених прізвище яких починається на літеру С

// // == task-8 == //
// Видалити з масива всіх вчених імя яких починається на A

// // == task-9 == //
// Знайти вченого який прожив найбільше і вченого який прожив найменьше

// // == task-10 == //
// Знайти вчених в яких співпадають перші літери імені і прізвища

// // == task-11 == //
// Дізнатися чи всі вченні працювали в 19 столітті