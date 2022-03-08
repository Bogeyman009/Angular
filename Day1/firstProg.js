// console.log("Hello World!");

// setTimeout(function () {
//   console.log("Timer works !");
// }, 2000);

// setTimeout(function () {
//   console.log("Timer works1 !");
// }, 0);

// console.log("End!");

//first synchronous then Asynchronous

//with {};

//Map

var newArray = [1, 2, 3, 4, 5, 6];
// var multiArray = newArray.map(function (val) {
//   console.log(val);
//   return val * 2;
// });
// console.log("multiarray: " + multiArray);

//foreach to iterate throgh
// newArray.forEach((element) => {
//   console.log(element);
// });

//filter         give you the array greater than 5
// var filterValue = newArray.filter((val) => val > 5);
// console.log("Filter value : " + filterValue);

//findIndex

// var index = newArray.findIndex((val) => val === 5);
// console.log("Find by index " + index);
//some

//for of loop
// for (var val of newArray) {
//   console.log(val);
// }

// console.log(newArray.some((val) => val >= 3)); //check if any element is equal or greter
// console.log(newArray.every((val) => val >= 3)); //check all elements are equal or greater

// Destructuring-----------------------------------

// var fruits = ["apple", "banana", "guave", "kiwi"];

// var [f1, f2, f3, f4] = fruits;
// console.log(f3);

// // Object destructuring
// var box = {
//   width: 10,
//   height: 12,
//   length: 12,
// };
// box.height = 13;
// var { length, width, height } = box;
// console.log(length);

// var { length: l, width: w, height: h } = box;
// console.log(h);

// // Work

// var user = {
//   firstName: "John",
//   lastName: "doe",
//   address: {
//     city: "Bengaluru",
//     street: "201,Main Road",
//   },
//   friends: ["jenny", "james"],
// };

// var {
//   lastName: l,
//   firstName,
//   address: { city, street },
//   address,
//   friends: [f1, f2],
// } = user;

// console.log(address, f1, city);

// var user = [
//   { email: "john@test.com", age: 32 },
//   { email: "Don@test.com", age: 30 },
//   { email: "Honk@test.com", age: 42 },
// ];

// var [{ email: e1, age: a1 }, { email: e2, age: a2 }, { email: e3, age: a3 }] =
//   user;

// console.log(e1 + "  :  " + e2 + "  :  " + e3);

//Spread and Rest (...  Operartor)----------------------------------------------------------------------------------
//Rest
// function display(name, ...args) {
//   console.log(args[0]);
// }

// display("Sam", 32, "london", true);

// Spread

// var col = [1, 2, 3, 4, 5];
// var newcol = [10, 12, ...col, 14, 16];
// var newcol1 = [10, 12, col, 14, 16];

// console.log(newcol);
// console.log(newcol1);

// var userOne = {
//   name: "john",
//   isAdmin: true,
//   dob: new Date("Dec 21,2000"),
// };
// var userTwo = {
//   ...userOne,
//   name: "jenny",
// };

// console.log(userTwo);

//  Template literals-------------------------------
// (``) backtick operator
// var userName = "John doe";
// var age = 32;
// var str = `Hello from ${userName}
// I'm noOne
// `;
// console.log(str);

//Block Scoping--------------------------------------------------------
// const user = {
//   name: "John Deo",
// };

// //Object.freeze will freeze the value of object
// const user1 = Object.freeze({
//   name: "John Deo",
// });

// user1.name = "jenny";
// console.log(user1);

//MAP And SETS-----------------------------------------------------------------

let map = new Map();
map.set("name", "John Deo");
map.set(true, 1);
map.set(new Date(), "21 Dec 2021");

for (var key of map.keys()) {
  console.log(key);
}
console.log("Map size :- " + map.size);
//SET does not accept repeat values
let set = new Set();
set.add("john");
set.add("jenny");
set.add("john");
set.add("Deo");

console.log("Set size :- " + set.size);
