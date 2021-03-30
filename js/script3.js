'use strict';

let num = 20;

function showFirstMessage(text) {
    console.log(text);
    let num = 10;
    console.log(num);
}

showFirstMessage("Hello World");
console.log(num);

function calc(a, b) {
    return (a + b);
}

console.log(calc(4, 3));
console.log(calc(7, 12));
console.log(calc(3, 9));

function ret() {
    let num = 50;

    //


    return num;
}

const anotherNum = ret();
console.log(anotherNum);


const logger = function () {
    console.log("Hello")
};
logger();

const calc = (a, b) => {
    console.log('1')
    return a + b;
}

const str = "test";

console.log(str[2] = 'd');
console.log(str.toUpperCase());
console.log(str.tolowerCase());


const arr = [1, 2, 4];
console.log(str[2] = 'd');
console.log(str);

const fruit = "Some fruit"
console.log(fruit.indexOf("q"));

const logg = "Helo World";
console.log(logg.slice(5, 11));
console.log(logg.substring(5, 11));
console.log(logg.substr(6, 5));

const num = 12.2;
console.log(Math.round(num));

const test = "12.2px";
console.log(parseInt(test));
console.log(parseFloat(test));