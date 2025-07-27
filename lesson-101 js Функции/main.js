// 1)
function sayHello(name) {
    return `hello ${name}`
}

// ---------------------------------------------------
// 2)
console.log(sayHello('Alex'))



const numbers = [16, 3, 12, 8, 11, 14, 21];

function numbersGreaterThanTen(array) {
    for (let i = 0; i < array.length; i++) {
        if (array[i] > 10) {
            console.log(array[i]);
        }
    }
}

numbersGreaterThanTen(numbers);

// ------------------------------------------------------------


// 3)

function calculate(number1, number2, operator) {
    if (operator === 'minus') {
        return number1 - number2;
    }  if (operator === 'plus') {
        return number1 + number2;
    }  if (operator === 'multiplication') {
        return number1 * number2;
    } if (operator === 'division') {
        return number1 / number2;
        } 
}


let result1 = calculate(2, 3, 'minus');     
let result2 = calculate(6, 4, 'plus');     
let result3 = calculate(3, 8, 'multiplication');  
let result4 = calculate(6, 2, 'division');    



console.log(result1);
console.log(result2);
console.log(result3);
console.log(result4);