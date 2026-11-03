async function getData() {
  try {
    const data = await fetch("https://dummyjson.com/products");

    const res = await data.json();

    // console.log(res.products);

    // const sum = res.products.reduce((acc, prev) => acc + prev.price, 0);

    // console.log(Math.floor(sum));

    // console.log(res.products[0].price);

    // const getNames = res.products.map((product) => product.category);

    // localStorage.setItem("products", JSON.stringify(res.products))

    // const prod = JSON.parse(localStorage.getItem("products"))

    console.log(prod.filter((t) => t.price < 100));

    // console.log(getNames);
  } catch (error) {
    console.error(error.message);
  }
}

// getData();

// Write JavaScript code that produces this exact output:
// Start
// End
// Promise resolved
// Timer finished

// console.log("start")
// const prac = new Promise((resolve) => {
//   resolve("promise resolved")
// })

// prac.then((res) => console.log(res))

// setTimeout(() => {
//   console.log("Timer finished")
// }, 100);

// console.log("end")

// Task 2: Predict and write the output
// Now write code that produces this exact output:
// A
// D
// B
// C

// console.log("A");

// const prom = new Promise((resolve) => {
//   resolve("B")
// })

// prom.then((res) => console.log(res));

// setTimeout(() => {
//   console.log("C")
// }, 0);

// console.log("D")

// Task 3: Promise chaining
// Difficulty: Intermediate

// Your sir asks you to write code using Promise chaining that produces this exact output:
// 10
// 20
// 25

// const chaining = new Promise((resolve) => {
//   resolve(10);
// });

// chaining
//   .then((res) => res * 2)
//   .then((res) => res + 5)
//   .then((res) => console.log(res));

// Task 4: Promise + setTimeout + chaining
// Difficulty: Intermediate

// Write code that produces this exact output:
// Start
// 5
// End
// 10
// Timer

// console.log("start");
// const exam = new Promise((resolve) => {
//   resolve(5);
// });

// exam
//   .then((res) => {
//     (console.log(res));
//     return 10
//   })
//   .then((res) => console.log(res));

// setTimeout(() => {
//   console.log("Timer");
// }, 0);

// console.log("End");

// Task 1: API response delay
// Scenario: Your application needs to fetch user details, but the server takes 2 seconds to respond. You need to simulate that delay.

// Requirements:
// - Create a function called getUser().
// - Return a Promise from the function.
// - Use setTimeout() to resolve the Promise after 2 seconds.
// - Resolve it with this object: { id: 1, name: "Oshin" }.
// - Call the function and print the returned user details.

// function getUsers() {
//   return new Promise((resolve) => {

//     setTimeout(() => {
//       resolve({id : 1, name: "oshin"});
//     }, 2000);
//   })
// }

// getUsers().then((user) => console.log(user))

// Task 2: Login validation
// Scenario: You're implementing a login feature for your company's application. The server takes 1 second to validate credentials.

// Write a function called login(username, password) that:
// - Returns a Promise.
// - Uses setTimeout() to simulate a 1-second server delay.
// - Resolves with "Login successful" if the username is "admin" and password is "12345".
// - Rejects with "Invalid username or password" otherwise.
// - Handles the result using .then() and .catch().
// Test it with both valid and invalid credentials.

// function login(username, password) {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       if (username === "admin" && password === "12345") {
//         resolve("Login successful");
//       } else {
//         reject("Invalid username or password");
//       }
//     }, 1000);
//   });
// }

// login("admin", "12345")
//   .then((res) => console.log(res))
//   .catch((err) => console.log(err));

// Task 3: API request timeout
// Scenario: You're working on a dashboard. An API request starts, but the server returns an error after 2 seconds. You need to display the error message to the user.

// Write a function named fetchData() that:
// 1. Returns a Promise.
// 2. Uses setTimeout() to simulate a 2-second delay.
// 3. Rejects the Promise with "Server error" after the delay.
// 4. Prints "Request started" immediately when you call the function.
// 5. Uses .then() to handle success and .catch() to display the error.

// function fetchData() {
//   return new Promise((_, reject) => {
//     setTimeout(() => {
//       reject("server error");
//     }, 2000);
//   });
// }
// console.log("Request started")

// fetchData()
//   .then((res) => console.log(res))
//   .catch((error) => console.log(error));

// Task 1: Fetch users from an API
// Scenario: Your sir asks you to fetch user data from an API and display each user's name in the console.

// Requirements:
// - Write an async function named getUsers().
// - Fetch data from https://jsonplaceholder.typicode.com/users.
// - Use await to wait for the API response.
// - Convert the response to JSON.
// - Print only the names of all users.
// - Do not use .then() for this task.

// async function getUsers() {
//   const data = await fetch("https://jsonplaceholder.typicode.com/users")
//   const res = await data.json();
//   // console.log(res);

//   for(let names of res){
//     console.log(names.name)
//   }
// }

// getUsers()

// Task 2: Fetch products and filter by price
// Scenario: Your company has a product API. Your sir asks you to display only products costing less than $50.

// API: https://dummyjson.com/products

// Requirements:
// 1. Write an async function called getProducts().
// 2. Fetch the API data and convert it to JSON.
// 3. Loop through the products array.
// 4. Print only the product title and price for products costing less than 50.
// 5. Use async/await and a loop. Don't use .filter() for this task.

// async function getProducts() {
//   const data = await fetch("https://dummyjson.com/products")
//   const res = await data.json();

//   // console.log(res)
//   for(let prod of res.products){
//     if(prod.price < 50){
//       console.log(prod.title, prod.price);
//     }
//   }
// }

// getProducts()

// Task 3: Handle API errors
// Scenario: Your company dashboard fetches products, but sometimes the API request fails. Your sir asks you to handle the error gracefully.

// Write a function getProducts() that:
// 1. Fetches https://dummyjson.com/products.
// 2. Uses async/await.
// 3. Checks response.ok before converting the response to JSON.
// 4. Prints the title of each product.
// 5. Uses try...catch to print "Something went wrong" if the request fails or the server returns an unsuccessful HTTP status.

// async function getProducts() {
//   try {
//     const data = await fetch("https://dummyjson.com/products");
//     if (!data.ok) {
//       throw new Error("error");
//     }
//     const res = await data.json();

//     for (let title of res.products) {
//       console.log(title.title);
//     }
//   } catch (error) {
//     console.error(error)
//   }
// }

// getProducts();

const products = [
  { id: 1, title: "Laptop", price: 1000 },
  { id: 2, title: "Mouse", price: 20 },
  { id: 3, title: "Keyboard", price: 50 },
  { id: 4, title: "Monitor", price: 200 },
];

// Requirements:
// 1. Use filter() to select products costing less than 100.
// 2. Use map() to create a new array containing each selected product's title and discounted price.
// 3. Calculate the discounted price by reducing the original price by 10%.
// 4. Print the final array.

// console.log(
//   products
//   .filter((t) => t.price < 100)
//   .map((product) => ({
//     title: product.title,
//     price: product.price * 0.9
//   }))
// );

// console.log(
//   products
//     .find((product) => product.title === "Keyboard")
// )

// console.log(
//   products.some((product) => product.price > 500)
// )

const cart = [
  { title: "Laptop", price: 1000 },
  { title: "Mouse", price: 20 },
  { title: "Keyboard", price: 50 },
];

// console.log(cart.reduce((acc, prev) => acc + prev.price, 0))

// Your task: Calculate the total price of only those products whose price is less than 100.

// console.log(cart.filter(t => t.price < 100).reduce((acc, prod) => acc + prod.price, 0))

// Next task: Remove duplicate values using Set
// Given this array:
// const numbers = [1, 2, 3, 2, 4, 1, 5, 3];

// Your task: Create a new array containing only unique numbers and print it.

// const mySet = new Set(numbers)

// console.log(mySet)

// const setArray = [...mySet]
// console.log(setArray)

//   Next task: Count character frequency
// Given:
const str = "javascript";

// Print how many times each character appears.

// const obj = {};
// for(let ch of str){
//   if(obj[ch]){
//     obj[ch]++;
//   } else{
//     obj[ch] = 1;
//   }
// }
// console.log(obj)

// const arr = ['d','a','b',"c","b","a","d"]

// const res = {
//   a:2,
//   b:2,
//   c:1,
//   d:2
// }

// const ans = {}

// for(let i of arr){
//   if(ans[i]){
//     ans[i]++;
//   } else {
//     ans[i] = 1
//   }
// }
// console.log(ans)

// async function data(){
//   const prod = await (await fetch("")).json()
//   const order = await (await fetch("")).json()

//   console.log(prod)
// }

// data()

const obj = {
  name: "Jitendra Yadav",
  age: 27,
};

// for(let key in obj){
//   if(key === "name"){
//     console.log(obj[key])
//   }
// }

// Object.keys(obj).forEach((key) => {
//   console.log(obj[key])
// })

// Object.values(obj).forEach((value) => {
//   console.log(value)
// })

// const obj = {
//   name: "Jitendra Yadac",
//   age: 27,
//   role: "Developer"
// };

// console.log(obj.name)

// const {name, age} = obj

// console.log(name)

// const arr1 = [1, 2, 3];
// const arr2 = [4, 5, 6];

// const res = [...arr1, ...arr2, 7]
// console.log(res)

// function sum(...nums){
//   let total = 0;

//   for(let num of nums){
//     total = total + num
//   }
//   console.log(total)
// }

// sum(10,20,30,40)

// function sum(...nums){
//   let total = nums.reduce((acc, prev) => acc + prev, 0)

//   console.log(total)
// }

// sum(10,20,30,40)

// function even(...nums){
//   let filterEven = nums.filter(even => even % 2 === 0)

//   console.log(filterEven)
// }

// even(10,15, 20, 25)

// function numbers(...nums){
//   let filterNum = nums.filter(num => num > 20).map((num) => num * 2)

//   console.log(filterNum)
// }

// numbers(10,20,30,40,50)

// Scenario 1: Employee salary analysis
// You are given employee records from a company.

// Your task is to:
// - Store employee details in an array of objects.
// - Find employees whose salary is greater than ₹20,000.
// - Print only their names.

// const data = [
//   { name: "Alice", salary: 75000 },
//   { name: "Bob", salary: 15000 },
//   { name: "Charlie", salary: 30000 },
//   { name: "David", salary: 18000 }
// ]

// const highestSalary = data.filter((emp) => emp.salary > 25000).map(emp => emp.name);
// const totalSalary = data.reduce((acc, curr) => acc + curr.salary, 0);
// console.log(highestSalary);
// console.log(totalSalary);

const cart2 = [
  { name: "Laptop", price: 50000, quantity: 1 },
  { name: "Mouse", price: 500, quantity: 2 },
  { name: "Keyboard", price: 1500, quantity: 1 },
  { name: "Monitor", price: 10000, quantity: 2 },
];

// Your manager asks you to:
// 1. Calculate the total price of each product (price × quantity).
// 2. Calculate the complete cart amount.
// 3. Find products whose individual total price is greater than ₹5,000.
// 4. Print only their names.

// const total = cart2.reduce((acc, curr) => acc + ( curr.price * curr.quantity), 0)
// console.log(total);

// const names = cart2.filter(num => num.price * num.quantity > 5000).map(emp => emp.name)
// console.log(names)

const users = [
  { id: 1, name: "Rahul", age: 24, active: true },
  { id: 2, name: "Amit", age: 30, active: false },
  { id: 3, name: "Priya", age: 22, active: true },
  { id: 4, name: "Neha", age: 28, active: true },
  { id: 5, name: "Rohit", age: 19, active: false },
];

// Your manager gives you these requirements:
// 1. Find only active users.
// 2. Print only their names.
// 3. Find users whose age is greater than 25.
// 4. Calculate the average age of all users.
// 5. Find a user whose ID is 3.
// Rules:
// - Write the complete code yourself.
// - Use appropriate array methods.
// - Don't hardcode the answers.
// - Print each result separately.
// - Be prepared to explain why you chose each method.

// const activeUsers = users.filter(user => user.active === true).map(user => user.name)
// console.log(activeUsers)

// const age = users.filter(user => user.age > 25)
// console.log(age)

// const avg = users.reduce((acc, curr) => (acc + curr.age) , 0) / users.length;
// console.log(avg)

// const userId = users.find(id => id.id === 3)
// console.log(userId)

// Scenario 4 — API data handling
// Intermediate to advanced
// You are developing a product listing page for an e-commerce website.

// You need to:
// 1. Fetch products from https://dummyjson.com/products.
// 2. Print all product titles.
// 3. Find products whose price is less than 100.
// 4. Find the most expensive product.
// 5. Calculate the average product price.
// 6. Handle errors using try...catch.
// 7. Check whether the API response is successful using response.ok.
// Rules:
// - Write the complete code from scratch.
// - Use async/await.
// - Use destructuring wherever appropriate.
// - Don't copy a ready-made solution.

async function prod() {
  try {
    const data = await fetch("https://dummyjson.com/products");
    if (!data.ok) {
      throw new Error("Error while fetching data");
    }

    const { products } = await data.json();
    // console.log(products);

    const title = products.map((title) => title.title);
    // console.log("Title : ", title);

    const price = products.filter((price) => price.price < 100);
    // console.log("Price : ", price);

    const expensive = products.find(
      (price) => price.price === Math.max(...products.map((p) => p.price)),
    );
    // console.log("Expensive : ", expensive);

    const avg = products.reduce((acc, curr) => acc + curr.price, 0) / products.length;
    // console.log("Average : ", avg);

  } catch (error) {
    // console.error(error);
  }
}

// prod();




const students = [
  { id: 1, name: "Rahul", marks: 85, subject: "Maths" },
  { id: 2, name: "Priya", marks: 92, subject: "Science" },
  { id: 3, name: "Amit", marks: 45, subject: "Maths" },
  { id: 4, name: "Neha", marks: 76, subject: "Science" },
  { id: 5, name: "Rohit", marks: 32, subject: "Maths" }
];


// Write complete JavaScript code to:
// 1. Display the names of students who scored more than 75.
// 2. Display students who failed (marks below 40).
// 3. Calculate the average marks of all students.
// 4. Find the student who scored the highest marks.
// 5. Display only the names of students whose subject is Maths.


