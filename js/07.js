"use strict";

const arr = [1, 24, 9, 3, 6, 8];
arr.sort(compareNum);
console.log('arr :>> ', arr);

function compareNum(a, b) {
    return a - b;
}

console.log('arr.length :>> ', arr.length);

arr.pop();
arr.push(10);
console.log('arr :>> ', arr);

for (let i = 0; i < arr.length; i++) {
    console.log('arr[i] :>> ', arr[i]);
}

for (let value of arr) {
    console.log('value :>> ', value);
}

arr.forEach(function (item, i, arr) {
    console.log(`${i}: ${item} внутри массива ${arr}`);
});

const str = prompt("", "");
const product = str.split(", ");
product.sort();
console.log(product);