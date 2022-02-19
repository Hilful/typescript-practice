import { Player } from "./classes/player.js";

// // // console.log("Hello");
// // const country = "I Love Bangladesh!!";
// // console.log(country);
// let playerName = "Mashrafi";
// console.log(playerName);

// playerName = 36;
// console.log(playerName);
// function multiply(a: number, b: number) {
//   return a * b;
// }
// console.log(multiply(3, 4));

// let a: string;
// let b: number;
// //for arrays
// let a : string[] = [];
// a.push("this is a value")
// let a : (string | number) [] = [];

// let a: any[] = [];
// a.push("Bangladesh");
// a.push(34);
// console.log(a);

// //object
// let b: {
//   name: any;
//   age: any;
// };
// b = {
//   name: "Bangladesh",
//   age: 45,
// };
// const myFunc = () => {
//   console.log("Hello");
// };
// let myFunc: Function;
// const myFunc = (a: string, b: string, c: string = "true") => {
//   //optional parameters are defined with c?
//   //   return a + b;
//   console.log(`Hello ${a} ${b}`);
// };

// myFunc("1", "2");

//Type Alias
// type stringOrNum = string | number;
// type userType = {
//   name: string;
//   age: number;
// };

// const userDetails = (id: stringOrNum, user: userType) => {
//   console.log(`User id is ${id}, name is ${user.name} and age is ${user.age}`);
// };

// const sayHello = (user: userType) => {
//   console.log(`Hello ${user.age > 50 ? "Sir" : "Mr."}`);
// };

//Function Signature Typescript

// let userDetails: (
//   x: number | string,
//   userInfo: {
//     name: string;
//     age: number;
//   }
// ) => void;
// // calculation = (a: number, b: number, c: string) => {
// //   if (c === "add") {
// //     return a + b;
// //   } else {
// //     return a - b;
// //   }
// // };
// // console.log(calculation(5, 6, "minus"));
// userDetails = (
//   id: number | string,
//   user: {
//     name: string;
//     age: number;
//   }
// ) => {};

//Classes in Typescript

const mashrafi = new Player("Mashrafi", 40, "Bangladesh");
const sakib = new Player("Sakib", 40, "Bangladesh");

// sakib.country = "England";

console.log(sakib.country);
const players: Player[] = [];
players.push(sakib);
players.push(mashrafi);
