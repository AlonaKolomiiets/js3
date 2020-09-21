import users from "./users.js";
//Получить массив имен пользователей по полу (поле gender).

const getUsersWithGender = (users, gender) =>
  // твой код
  users.filter((elem) => elem.gender === gender);

console.log(getUsersWithGender(users, "male")); // [ 'Moore Hensley', 'Ross Vazquez', 'Carey Barr', 'Blackburn Dotson' ]
