import users from "./users.js";
//Получить массив только неактивных пользователей (поле isActive).

const getInactiveUsers = (users) =>
  users.filter((elem) => !elem.isActive);
// твой код

console.log(getInactiveUsers(users)); // [объект Moore Hensley, объект Ross Vazquez, объект Blackburn Dotson]
