"use strict";

let str = "some";
let strObj = new String(str);

console.log(typeof (str));
console.log(typeof (strObj));

console.dir([1, 2, 3]);

const soldier = {
    healts: 400,
    armor: 100,
    sayHello: function () {
        console.log("Hello");
    }
};

const john = Object.create(soldier);

//const john = {
//   healts: 100
//};

// john.__proto__ = soldier;  // сарый код

// Object.setPrototypeOf(john, soldier);

// console.log('john :>> ', john.armor);
john.sayHello();

