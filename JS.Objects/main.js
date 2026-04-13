// const person = {
//   name: "Володька",
//   age: 45,
//   profession: "Водитель",
//   hobby: "Настольный теннис",
// };

// console.log("Имя:", person.name);
// console.log("Возраст:", person.age);
// console.log("Профессия:", person.profession);
// console.log("Хобби:", person.hobby);

// function isEmpty(obj) {
//   for (const key in obj) {
//     return false;
//   }
//   return true;
// }
// console.log(isEmpty({}));
// console.log(isEmpty("t"))



// const task = {
//   title: "JS",
//   description: "Пздц как сложно",
//   isCompleted: false,
// };

// function cloneAndModify(obj, modifications) {
//   return {
//     ...obj,
//     ...modifications,
//   };
// }

// const modifications = {
//   title: "HTML/CSS",
//   description: "не так сложно",
//   isCompleted: true,
// };

// const task2 = cloneAndModify(task, modifications);

// for (const key in task2) {
//   console.log(`${key}:`, task2[key]);
// }

const myObject = {
    method1() {
        console.log('Метод 1 вызван');
    },
    method2() {
        console.log('Метод 2 вызван');
    },
    property: 'Это не метод'
};
callAllMethods(myObject);

function callAllMethods(obj) {
  for (let key in obj) {
    if (typeof obj[key] === "function") {
      obj[key]();
    }
  }
}