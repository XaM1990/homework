"use strict";

// const users = [
//   { name: "Alex", age: 24, isAdmin: false },
//   { name: "Bob", age: 13, isAdmin: false },
//   { name: "John", age: 31, isAdmin: true },
//   { name: "Jane", age: 20, isAdmin: false },
// ];

// users.push(
//   { name: "Ann", age: 19, isAdmin: false },
//   { name: "Jack", age: 43, isAdmin: true },
// );

// console.log(users)


// const users = [
//   { name: "Alex", age: 24, isAdmin: false },
//   { name: "Bob", age: 13, isAdmin: false },
//   { name: "John", age: 31, isAdmin: true },
//   { name: "Jane", age: 20, isAdmin: false },
//   { name: "Ann", age: 19, isAdmin: false },
//   { name: "Jack", age: 43, isAdmin: true },
    
// ];

// function getUserAverageAge(users) {
//     let sum = 0;

//     for (let i = 0; i < users.length; i++) {
//         sum += users[i].age;
//     }

//     return sum / users.length;
// }

// console.log(getUserAverageAge(users));



// const users = [
//   { name: "Alex", age: 24, isAdmin: false },
//   { name: "Bob", age: 13, isAdmin: false },
//   { name: "John", age: 31, isAdmin: true },
//   { name: "Jane", age: 20, isAdmin: false },
//   { name: "Ann", age: 19, isAdmin: false },
//   { name: "Jack", age: 43, isAdmin: true },

// ];

// function getAllAdmins(users) {
//     let admins = [];
//     for (let i = 0; i < users.length; i++) {
//         if (users[i].isAdmin === true) {
//             admins.push(users[i]);
//         }
//     }
//     return admins;
// }

// console.log(getAllAdmins(users));


// function first(arr, n) {
//     if (n === undefined) {
//         n = 1;
//     }
    
//     if (n === 0) {
//         return [];
//     }
    
//     let result = [];
//     for (let i = 0; i < n && i < arr.length; i++) {
//         result.push(arr[i]);
//     }
//     return result;
// }