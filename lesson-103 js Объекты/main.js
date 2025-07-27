const descriptionUser = {
    Tolik: {
        age: '34',
        whereFrom: 'Россия',
        hobbies: 'катание на сап-борде'
    }
}


console.log(descriptionUser.Tolik)
// ---------------------------------------------------------



const greeting = {
    sayHello: function (name) {
        return `Hello ${name}`
    }
}

console.log(greeting.sayHello('Tom'))
// --------------------------------------------------------------



const users = [
    {
        name: 'Alex',
        age: 23,
        isAdmin: false
    },
    {
        name: 'Boris',
        age: 27,
        isAdmin: true
    },
    {
        name: 'Victor',
        age: 40,
        isAdmin: false
    },
    {
        name: 'Valentin',
        age: 99,
        isAdmin: false
    }
]

let simpleUsersCount = 0;

for (let i = 0; i < users.length; i++) {
    let user = users[i]
    if (user.isAdmin === false) {
        simpleUsersCount = simpleUsersCount + 1;
    }
}


console.log('Количество простых пользователей:', simpleUsersCount);



