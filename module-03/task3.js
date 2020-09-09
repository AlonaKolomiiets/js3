// Напиши функцию findBestEmployee(employees), которая принимает объект сотрудников и возвращает имя
// самого продуктивного (который выполнил больше всех задач). Сотрудники и кол-во выполненых задач
// содержатся как свойства объекта в формате "имя":"кол-во задач".

const findBestEmployee = function (employees) {
  // твой код
  const keys = Object.keys(employees);
  const value = Object.values(employees);
  let maxValue = value[0];
  let bestEmpl;
  for (const key of keys) {
    if (employees[key] >= maxValue) {
      maxValue = employees[key];
      bestEmpl = key;
    }
  }
  return `Best employee is ${bestEmpl}, score: ${maxValue}`;
};

// const findBestEmployee = function (employees) {
//   // твой код
//   const array = Object.entries(employees);
//   let bestEmpl = array[0][0];
//   let bestScore = array[0][1];
//   for (let i = 0; i < array.length; i += 1) {
//     const innerArray = array[i];
//     let name = innerArray[0];
//     let score = innerArray[0];
//     if (bestScore < score) {
//       bestScore = score;
//       bestEmpl = name;
//     }
//   }
//   return bestEmpl;
// };
/*
 * Вызовы функции для проверки работоспособности твоей реализации.
 */
console.log(
  findBestEmployee({
    ann: 29,
    david: 35,
    helen: 1,
    lorence: 99,
  })
); // lorence

console.log(
  findBestEmployee({
    poly: 12,
    mango: 17,
    ajax: 4,
  })
); // mango

console.log(
  findBestEmployee({
    lux: 147,
    david: 21,
    kiwi: 19,
    chelsy: 38,
  })
); // lux
