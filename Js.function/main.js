
function calculateFinalPrice(basePrice, discountPercentage, taxRate) {
  let discountAmount = basePrice * (discountPercentage / 100);

  let priceAfterDiscount = basePrice - discountAmount;

  let taxAmount = priceAfterDiscount * (taxRate / 100);

  let finalPrice = priceAfterDiscount + taxAmount;

  return finalPrice;
}

console.log(calculateFinalPrice(100, 10, 20));

const checkAccess = (userName, password) => {
  if (userName === "Admin" && password === 123456) {
    return "Доступ разрешен";
  } else {
    return "Доступ запрещен";
  }
};

console.log(checkAccess("Admin", 123456));

const getTimeOfDay = (num) => {
  if (num < 0 || num > 23) return "Некорректное время";
  if (num <= 5) return "Ночь";
  if (num <= 11) return "Утро";
  if (num <= 17) return "День";
  if (num <= 23) return "Вечер";
};

console.log(getTimeOfDay());

const findFirstEven = (start, end) => {
  for (let i = start; i <= end; i++) {
    if (i % 2 === 0) {
      return i;
    }
  }
  return "Четных чисел нет";
} 

console.log(findFirstEven(1, 10))
console.log(findFirstEven(9, 9))
