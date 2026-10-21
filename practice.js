// callbacks functions
function greet(name) {
  console.log("hello " + name)
};

function user(userName) {
  userName("oshin")
}

user(greet)


function calculate(a, b, callback) {
   return callback(a,b);
}

const result = calculate(3, 4, (x, y) => x * y);

console.log(result)


// Array methods 

const arr = [1,2,3,4]

const newArr = arr.push(5);

console.log(arr);
console.log(newArr);

// splice (targetIndex, deleteCount, newElement) - it modifies the original array and returns the deleted elements
arr.splice(1, 0, 1)
console.log(arr)

// slice (startIndex, endIndex) - it returns a new array with the selected elements
console.log(arr.slice(3,5))

console.log(arr.unshift())
console.log(arr)


console.log(arr.shift())
console.log(arr)

const map1 = arr.map(num => num * 2)
console.log(map1)

const filter1 = arr.filter(num => num % 2 == 0);
console.log(filter1);

const reduce1 = arr.reduce((acc, next) => acc + next, 0);
console.log(reduce1);

const include1 = arr.includes(4);
console.log(include1)

// Promises 

//normal promise
const example = new Promise((resolve, reject) => {
  const data = {name : "apple"};
  resolve(data);
  
})

// promise handling with then and catch
example.then((data) => {
  console.log(data)
}) 
.catch((error) => {
  console.error("error")
})
.finally(() => {
  console.log("finally")
})


//promise methods - all, allSettled, race
const p1 = Promise.resolve("Apple");
const p2 = new Promise((resolve) => { 
   const data = {name:"khushi"}; 
  resolve(data);
});
const p3 = Promise.reject("error");

// it returns an array of results if all promises are resolved, otherwise it returns an error
Promise.all([p1, p2])
   .then((result) => console.log(result))
   .catch((error) => console.error("error"))
   .finally(() => {
     console.log("finally2")
   })

// it returns an array of objects describing the outcome of each promise
Promise.allSettled([p1, p3])
   .then(() => console.log("settled"))
   .catch(() => console.error("error"))


// it returns the first fulfilled promise , even if it is rejected 
Promise.race([p1, p2, p3])
    .then((result) => console.log(result))
    .catch((error) => console.error(error))


// it returns the first fulfilled promise, if all promises are rejected, it returns an error
Promise.any([p1, p3])
    .then((result) => console.log(result))
    .catch((error) => console.error(error));

// callback function
function greet(greeting, punctuation){
  console.log(`${greeting} , my name is ${this.name} ${punctuation}`);
}

const person = { name: "Khushi" };

// call 
greet.call(person, "Hello" , "")

//apply
greet.apply(person, ["hello", "."]);

//bind
const newGreet = greet.bind(person);

newGreet("hello", "!")

//for..in loop
const obj = {name: "khushi", age : "25"};

for(const i in obj){
  console.log(`${i}: ${obj[i]}`)
}

// for..of loop
const nums = [1,2,3,4,5];

for(const i of nums){
  console.log(i)
}


function greet(name) {
  console.log("hello " + name)
};

function user(userName) {
  userName("oshin")
}

user(greet)


//callback function 
function calculate(a, b, callback) {
   return callback(a,b);
}

const result2 = calculate(3, 4, (x, y) => x * y);

console.log(result2)

//string methods
const str = "String 1 + ";

console.log(`${str.at(4)}`)
console.log(`${str.charAt(4)}`)

const str2 = " string 2"

console.log(str.concat("" , str2))

console.log(`The word ${str.includes("fox") ? "is" : "is not"} in the sentence`)


console.log(str.replace("String", "paragraph"))