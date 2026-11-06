// async function getUsers() {
//     try {
//         const reponse = await fetch("");
//         const data = reponse.json();

//         console.log(data);
//     } catch (error) {
//         console.log(error)
//     }
    
// }

// const add = (a, b) => {
//     return a + b;
// }

// function sum() {
//     const arr = [1, 2, 3, 4, 5];
//     let sum = 0;

//     for (let i = 0; i < arr.length; i++) {
//         sum += arr[i];
//     }
// }

// console.log(sum())


function sum(a, b){
    return a + b;
}

function multiply(num){
    return num * 2;
}

function subtract(num){
    return num - 5;
}

function calculate(a,b){

    return subtract(multiply(sum(a,b)));
}

// console.log(calculate(10, 20))


function calculateSalary(basic, bonus){
    return basic + bonus;
}

function deductTax(salary){
    return salary * 0.1;
}

function getSalary(basic, bonus){
    const total = calculateSalary(basic, bonus);
    const tax = deductTax(total);

    return total - tax;
}

// console.log(getSalary(20000, 5000));


// Next manager-style task: Shopping Cart Discount
// Create three functions:
// 1. calculateTotal(price, quantity) → returns total price.
// 2. applyDiscount(total) → applies a 20% discount if total is above ₹1000.
// 3. checkout(price, quantity) → calls both functions and returns the final price.


