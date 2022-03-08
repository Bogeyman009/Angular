"use strict";
let age = 32;
let ages = 322;
let user = [32, "John Deo"];
console.log(user);
let str = "Hello John";
console.log(str);
let users = {
    id: "1001",
    name: "JohnDeo",
    dob: new Date("21 Dec 2021"),
    isAdmin: true,
};
console.log(users);
//Generic type
// function addAtBeggining(numbers: Array<number>, val: number) {
//   return [val, ...numbers];
// }
// let nums = [3, 4, 5, 6];
// console.log(addAtBeggining(nums, 10));
function addAtBeggining(arr, val) {
    return [val, ...arr];
}
let fruits = ["banana", "apple"];
let number = [2, 3, 43, 4, 54, 3];
console.log(addAtBeggining(fruits, "Kiwi"));
const numArray = addAtBeggining(number, 12);
console.log(numArray[0]);
