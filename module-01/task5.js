// Пользователь может оформить доставку товара к себе в страну, указав ее при посещении страницы в prompt.
// Учти, пользователь может ввести имя страны не только буквами нижнего регистра, а к примеру 'кИтАЙ'.

// Напиши скрипт который выводит сообщение о стоимости доставки в указанную страну.
// Обязательно используй switch. Формат сообщения: 'Доставка в [страна] будет стоить [цена] кредитов'.

// Но доставка есть не везде, если указанной страны нет в списке, то выводи в alert сообщение
// 'В вашей стране доставка не доступна'.

// Ниже приведен список стран и стоимость доставки.

// Китай - 100 кредитов
// Чили - 250 кредитов
// Австралия - 170 кредитов
// Индия - 80 кредитов
// Ямайка - 120 кредитов
let cost = 0;
let country = prompt("Введите страну доставки");
let countryLowerCase;

if (country === null) {
  console.log("Отменено пользователем");
} else {
  countryLowerCase = country.toLowerCase();
  switch (countryLowerCase) {
    case "китай":
      cost = 100;
      console.log(
        `Доставка в ${
          countryLowerCase[0].toUpperCase() + countryLowerCase.substring(1)
        } будет стоить ${cost} кредитов`
      );
      break;

    case "чили":
      cost = 250;
      console.log(
        `Доставка в ${
          countryLowerCase[0].toUpperCase() + countryLowerCase.substring(1)
        } будет стоить ${cost} кредитов`
      );
      break;

    case "австралия":
      cost = 170;
      console.log(
        `Доставка в ${
          countryLowerCase[0].toUpperCase() + countryLowerCase.substring(1)
        } будет стоить ${cost} кредитов`
      );
      break;

    case "индия":
      cost = 80;
      console.log(
        `Доставка в ${
          countryLowerCase[0].toUpperCase() + countryLowerCase.substring(1)
        } будет стоить ${cost} кредитов`
      );
      break;

    case "ямайка":
      cost = 120;
      console.log(
        `Доставка в ${
          countryLowerCase[0].toUpperCase() + countryLowerCase.substring(1)
        } будет стоить ${cost} кредитов`
      );
      break;

    default:
      console.log("В вашей стране доставка не доступна");
  }
}
