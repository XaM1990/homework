//  задача 1
 const number = +prompt("Ведите число, 0");

 if (isNaN(number)) {
   alert("Упс..");
 } else if (number % 2 === 0) {
   alert("Четное число");
 } else {
  alert("Нечетное число");
}

// задача 2
// тернарный оператор
const age = +prompt("Возраст, 0");
const discount = age < 18 ? 10 : age >= 65 ? 30 : 20;
alert(`Скидка ${discount}%`);

// switch case
// const age = +prompt("Возраст, 0");
// let discount;

// switch (discount) {
//   case age < 18:
//     discount = 10;
//     break;
//   case age >= 65:
//     discount = 30;
//     break;
//   default:
//     discount = 20;
// }

// alert(`Скидка ${discount}%`);

// задача 3
const userName = prompt("Имя пользователя");
const password = +prompt("Пароль");

if ((userName === "admin" || userName === "user") && password === +"123456") {
  alert("Доступ разрешен");
} else {
  alert("Доступ запрещен!!!");
}

// задача 4

const parcelWeight = +prompt("Вес посылки,кг");
if (parcelWeight <= 0) {
  alert("Некорректный вес посылки");
} else {
  const deliveryType = prompt("Тип доставки (Стандарт, Экспресс, Премиум)");
  if (
    deliveryType == "Стандарт" ||
    deliveryType == "Экспресс" ||
    deliveryType == "Премиум"
  ) {
    const baseCost = parcelWeight < 1 ? 5 : parcelWeight > 5 ? 15 : 10;
    let coefficient;

    switch (deliveryType) {
      case "Стандарт":
        coefficient = 1;
        break;
      case "Экспресс":
        coefficient = 1.5;
        break;
      case "Премиум":
        coefficient = 2;
        break;
    }
    const totalCost = baseCost * coefficient;
    alert(`Итоговая стоимость ${totalCost}$`);
  } else {
    alert("Неверный тип доставки");
  }
}