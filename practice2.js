// Scenario 1: Product Search in an E-commerce App
// Build a product search feature

// Imagine you're working on an e-commerce website. The backend sends you a list of products, and the user types a product name into a search box.
const products = [
  { id: 1, name: "Laptop", price: 50000 },
  { id: 2, name: "Mouse", price: 500 },
  { id: 3, name: "Keyboard", price: 1500 },
  { id: 4, name: "Laptop Stand", price: 1200 },
];


function fn() {
  const data = products.find(prod => prod.name === "Keyboard")
  console.log(data)
}

fn()

function fn1() {
  const data = products.filter(prod => prod.name === "Keyboard")
  console.log(data)
}
fn1()
// const search = "laptop";

// Your requirements:
// 1. Find products whose names contain the search text.
// 2. Search should be case-insensitive, so "laptop" matches "Laptop".
// 3. Print the matching products.
// 4. If no products match, print "No products found".
// Concepts tested: filter(), includes(), toLowerCase(), conditional logic.

// const search = "laptop";

// const result = products.filter((product) => {
//   return product.name.toLowerCase().includes(search.toLowerCase())
// })

// if(result.length > 0){
//   console.log(result);
// }else{
//   console.log("No products found")
// }

// let timer;

// function debounce(fn, delay) {
//   return function (...args) {
//     clearTimeout(timer);
//     timer = setTimeout(() => {
//       fn.apply(this, args);
//     }, delay);
//   };
// }

// const callFn = debounce(async () => {
//   const data = await fetch("https://dummyjson.com/products")

//   const res = await data.json();
//   console.log(res);
// }, 200)

// callFn()

// Step 2: Write the code yourself
// Use this API: https://dummyjson.com/products/search?q=laptop

// I'll give you the requirements, but you write the code.
// Your coding task
// - Declare let timer.
// - Create function searchProducts(value).
// - Clear the previous timer.
// - Wait 500 ms.
// - Use async/await and fetch() to call the API with the search value.
// - Convert the response using .json().
// - Print data.products.
// - Use try...catch to handle errors.

// let timer;

// function searchProducts(value) {
//   clearTimeout(timer);

//   timer = setTimeout(async () => {
//     const data = await fetch("https://dummyjson.com/products/search?q=laptop")

//     const res = await data.json();
//     console.log(res)
//   }, 500);
// }

// searchProducts("l")
// searchProducts("la")
// searchProducts("lap")

// Scenario 2: The "API Request Timeout"

// The Request: "Our mobile app hangs indefinitely if the user has a poor internet connection. If our profile API request takes longer than 4 seconds, abort it and show a 'Connection timed out' error."

// let timer;
// function fn1() {
//   clearTimeout(timer);

//   timer = setTimeout(async () => {
//     try {
//       const data = await fetch("https://dummyjson.com/products");
//       const res = await data.json();
//       console.log(res.products);
//     } catch (error) {
//       console.error(error)
//     }
//   }, 400);
// }

// fn1()