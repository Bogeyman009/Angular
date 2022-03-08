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
