// Переменные: var, let, const

let y = 5 + 2;

y = "Маша" + 30;

const x = 345 + 2;

console.log(y);
console.log(x);
// Корректные имена
let name;
let _age;
let $salary;
let user123;
// Некорректные имена
// let 123user;   // ошибка: начинается с цифры
// let my-variable;  // ошибка: содержит дефис

// camelCase
// PascalCase
// snake_case
// UPPER_SNAKE_CASE

let userName = "Alex";
let userAge = 30;

const USER_JOB = "programmer";

console.log(userName, userAge, USER_JOB);

// математические операции
const pius = 5 + 3; // 8
const minus = 10 - 4; // 6
const multiply = 6 * 2; // 12
const division = 10 / 2; // 5
const pow = 2 ** 3; // 8
const mod = 5 % 2; // 1

let sum = 5 + 6;

sum += 13 - 10;
console.log(sum++);
console.log(-+sum);

console.log(+"10");

const _variable = 1;
console.log(Int("123"))