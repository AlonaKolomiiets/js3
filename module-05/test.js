// const hotel1 = {
//   name: "Rixos",
//   stars: "5",
//   capacity: 300,
// };

// const hotel2 = {
//   name: "SOL",
//   stars: "4",
//   capacity: 3000,
// };
// const hotel3 = {
//   name: "Sentido",
//   stars: "4+",
//   capacity: 100,
// };

// const greetingFn = function (guestName) {
//   console.log(
//     `Dear ${guestName} welcome in our hotel ${this.stars} stars ${this.name}`
//   );
// };

// // const newFnBind = greetingFn.bind(hotel1);
// // newFnBind("Ivan");

// // greetingFn.call(hotel2, "Alona");

// greetingFn.apply(hotel2, ["Lyolya"]);

// let ladder = {
//   step: 0,
//   up() {
//     this.step++;
//     return this;
//   },
//   down() {
//     this.step--;
//     return this;
//   },
//   showStep: function () {
//     // показывает текущую ступеньку
//     console.log(this.step);
//     return this;
//   },
// };
// // Теперь, если нам нужно сделать несколько последовательных вызовов, мы можем выполнить это так:
// // ladder.up();
// // ladder.up();
// // ladder.down();
// // ladder.showStep(); // 1
// // Измените код методов up, down и showStep таким образом, чтобы их вызов можно было сделать по цепочке, например так:
// ladder.up().up().up().down().showStep(); // 2

// const makeShef = function (name) {
//   /*
//    * Параметр name это локальная переменная для функции makeShef.
//    * Это значит что она будет доступна функции makeDish через замыкание.
//    */
//   return function makeDish(dish) {
//     console.log(`${name} is cooking ${dish}`);
//   };
// };

// const mango = makeShef("Mango");
// mango("apple pie"); // Mango is cooking apple pie
// mango("beef stew"); // Mango is cooking beef stew

// const poly = makeShef("Poly");
// poly("pancakes"); // Poly is cooking pancakes
// poly("eggs and bacon"); // Poly is cooking eggs and bacon

// const actorOfFilm = function (name, actorFilms) {
//   return function (film) {
//     console.log(`${name} играл в фильме ${film}`);
//     actorFilms.push(film);
//   };
// };
// let bradPittFilms = [];
// const bradPitt = actorOfFilm("Brad", bradPittFilms);

// bradPitt("Fight club", bradPittFilms);
// bradPitt("Троя", bradPittFilms);
// bradPitt("Мисте и миссис Смит", bradPittFilms);

// console.log(bradPittFilms);

// const johnnyDappFilms = [];
// const johnnyDapp = actorOfFilm("Johnny", johnnyDappFilms);

// johnnyDapp("Эдвард руки-ножницы");
// console.log(johnnyDappFilms);

// let actorsFilms = {
//   Pitt: ["Mister"],
//   Jennyfer: ["Miss"],
// };

// const actorOfFilm = function (name) {
//   actorsFilms[name] = [];
//   return function (film) {
//     actorsFilms[name].push(film);
//   };
// };

// const bradPitt = actorOfFilm("Pitt");

// bradPitt("Fight club");
// bradPitt("Troy");

// console.log(actorsFilms);

// const jennyferGarner = actorOfFilm("Jennyfer");
// jennyferGarner("Hello");

// console.log(actorsFilms);

//-------------//

// const Car = function (
//   name = "noName",
//   age = "0",
//   color = "white",
//   fuelType = "default",
//   weight = "default",
//   speed = "default"
// ) {
//   this.name = name;
//   this.age = age;
//   this.color = color;
//   this.fuelType = fuelType;
//   this.weight = weight;
//   this.speed = speed;
//   this.checkAcceleration = function () {
//     this.acceleration = this.weight * this.speed;
//     console.log(this.acceleration);
//   };
// };

// console.log(Car);
// const mercedes = new Car("gla", 1, "red", "oil", 1200, 220);

// mercedes.checkAcceleration();

// const Project = function (name, goal, pricePerMd, manager, mD) {
//   this.name = name;
//   this.goal = goal;
//   this.pricePerMd = pricePerMd;
//   this.manager = manager;
//   this.mD = mD;
//   this.amountBudget = function () {
//     this.budget = this.pricePerMd * this.mD;
//     console.log(this.budget);
//   };
//   this.object = function () {
//     console.log(this);
//   };
// };

// const createCreditCard = new Project(
//   "Credit card",
//   "Get money",
//   320,
//   "Mister",
//   267
// );

// createCreditCard.amountBudget();
// createCreditCard.object();

// const nBuProject = new Project("FRS9", "must be implement", 200, "Miss", 5900);
// nBuProject.amountBudget();

// console.log(createCreditCard);

// const Friends = function (name, age, intelligence) {
//   this.name = name;
//   this.age = age;
//   this.intelligence = intelligence;
// };

// Friends.prototype.getSalary = function (amount) {
//   this.salary = amount * this.intelligence;
//   console.log(this.salary);
// };

// console.log(Friends);
// // == task-1 == //
// Створити простенький калькулятор за допомогою класу.

// Цей клас буде мати такі методи:

// 1. Метод що запитує у користувача 2 числа
// 2. Метод що додає ці числа
// 3. Метод що віднімає ці числа
// 4. Метод що перемножує ці числа
// 5. Метод що ділить ці числа
// 6. Метод що виводить результат арефметичної операції на екран в форматі `Результат операції ${value}`
// цей метод запускаєтьсяв кінці кожного з методів 2-5
// 7. Метод що додає в калькулятор новий функціонал (Приймає аргументом колбек в якому описаний новий метод)
// 8. Передати в метод №7 колбек ф-ю що підносить числа в степінь
// 9. Написати всі методи і перевірити чи вони працюють

// class Calc {
//   constructor(a, b, value) {
//     this.a = a;
//     this.b = b;
//     this.value = value;
//   }
//   getTwoNumbers() {
//     this.a = Number(prompt("Введите первое число"));
//     this.b = Number(prompt("Введите второе число"));
//   }
//   plusNumbers(a, b) {
//     this.value = a + b;
//     this.showValue();
//   }
//   minusNumbers(a, b) {
//     this.value = a - b;
//     this.showValue();
//   }
//   multiNumbers(a, b) {
//     this.value = a * b;
//     this.showValue();
//   }
//   divideNumbers(a, b) {
//     this.value = a / b;
//     this.showValue();
//   }
//   showValue() {
//     console.log(`Результат операції ${this.value}`);
//   }
//   newFunctionality(callback) {
//     this.callback = callback;
//     this.value = callback(this.a, this.b);
//     this.showValue();
//   }
// }

// const newFn = new Calc();
// newFn.getTwoNumbers();
// newFn.newFunctionality(Math.pow);

// class Cats {
//   constructor(
//     whiskers = "default",
//     teeth = "default",
//     tail = "default",
//     claws = "default"
//   ) {
//     this.whiskers = whiskers;
//     this.teeth = teeth;
//     this.tail = tail;
//     this.claws = claws;
//   }
//   static catsInfo() {
//     console.log(`Every one in Cats class has mrrrr-engine`);
//   }
// }
// class Lions extends Cats {
//   constructor(whiskers, teeth, tail, claws, mane = "default") {
//     super(whiskers, teeth, tail, claws);
//     this.mane = mane;
//   }
//   get getMeRoar() {
//     console.log("Roar");
//   }
//   set setName(name) {
//     this.name = name;
//   }
//   get getName() {
//     console.log(this.name);
//   }
// }

// let jack = new Lions(1, 2, 3, 4, 5);
// console.log(jack);
// jack.getMeRoar;
// jack.setName = "Jack";
// jack.getName;
// jack.setName = "Ivan";
// jack.getMeRoar;

// class DomesticCats extends Cats {
//   constructor(whiskers, teeth, tail, claws, skills) {
//     super(whiskers, teeth, tail, claws);
//     this.skills = skills;
//   }
//   set setName(name) {
//     this.name = name;
//   }
//   get getName() {
//     console.log(this.name);
//   }

// }

// const lyolya = new DomesticCats("nice", "healthy", true, true, [
//   "jump",
//   "wake up",
//   "rrrrr",
// ]);

// lyolya.setName = "Lyolya";
// lyolya.getName;
// console.log(lyolya);

// let boris = {
//   name: "Boris",
//   xp: 220,
// };

// class Hero {
//   constructor({ name, xp }) {
//     this.name = name;
//     this.xp = xp;
//   }
// }
// let hero1 = new Hero(boris);
// console.log(hero1);

// // == task-2 == //
// Створити класи Library та Book

// 1. Клас Library буде описувати нашу бібліотеку книжок. Всі книжки будуть зберігатися в масиві.
// Також цей клас буде мати такі методи:

// - Метод buy - це метод що приймає аргументом обєкт книги і додає її в бібліотеку якщо її там ще немає.
//Якщо книга вже є показує повідомлення що книга вже куплена
// - Метод sell - це метод що приймає аргументом назву книги і видаляє її з бібліотеки
// - Метод addToFavourite - це метод що приймає аргументом назву книги і додає обєкт книги в список улюблених
// - Метод removeFromFavourite - це метод що приймає назву книги і видаляє її з списку улюблених
// - Гетер сountFavouriteBooks - це гетер що показує кількість книжок що додані в улюблені
// - Гетер finishedBook - це гетер що містить колекцію всіх прочитаних книжок
// - Метод totalCost - це метод що рахує вартість всіх книжок в бібліотеці

class Library {
  constructor() {}
}
// 2. Клас Book буде описувати окрему книгу. Кожна книга це буде обєкт з такими ключами
// - author
// - title
// - price
// - totalPages
// - currentPage

// Також цей клас буде мати такі методи:

// - Метод read - це метод що приймає кількість сторінок що було прочитано і міняє значення currentPage
// - Гетер bookProgres - гетер що переводить кількість прочитаних сторінок в відсотки
// - Сетер bookProgres - сетер що переводить відсоток прочитаних сторінок в кількість
// Клас Book приймає один аргумент - обєкт з парметрами книги. В середині класу використовувати
//деструктуризацію обєкта

class Book {
  constructor({ author, title, price, totalPages, currentPage = 0 }) {
    (this.author = author),
      (this.title = title),
      (this.price = price),
      (this.totalPages = totalPages),
      (this.currentPage = currentPage);
  }
  read(numberOfpagesWasRead) {
    this.currentPage = numberOfpagesWasRead;
  }
  get bookProgres() {
    return (this.currentPage * 100) / this.totalPages;
  }
  set bookProgres(percent) {
    this.currentPage = (this.totalPages * percent) / 100;
  }
}

const myBook = new Book({
  author: "Tolstoy",
  title: "War and Peace",
  price: 300,
  totalPages: 500,
  currentPage: 0,
});

myBook.read(250);
console.log(myBook.bookProgres);
myBook.bookProgres = 1;
console.log(myBook.bookProgres);
