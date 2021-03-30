"use strict";

let a = 5;
let b = a;

b = b + 5;
console.log('b :>> ', b);
console.log('a :>> ', a);

const obj = {
    a: 5,
    b: 1
};

const copy = obj; // ссылка

copy.a = 10;

console.log('copy :>> ', copy);
console.log('obj :>> ', obj);

function copyrait(mainObj) {
    let objCopy = {};

    let key;
    for (key in mainObj) {
        objCopy[key] = mainObj[key];
    }
    return objCopy;
}

const numbers = {
    a: 2,
    b: 5,
    c: {
        x: 7,
        y: 4
    }
};

const newNumbers = copyrait(numbers);
newNumbers.a = 10;
newNumbers.c.x = 10; // поверхностая копия
console.log('newNumbers :>> ', newNumbers);
console.log('numbers :>> ', numbers);

/// next example ///

const numbers1 = {
    a: 2,
    b: 5,
    c: {
        x: 7,
        y: 4
    }
};

const add = {
    d: 17,
    e: 20
};

const clone = (Object.assign({}, add));
clone.d = 20;
console.log('add :>> ', add);
console.log('clone :>> ', clone);

/// clone array

const oldArray = ['a', 'b', 'c'];
const newArray = oldArray.slice();
newArray[1] = 'dsfdsgas';
console.log('newArray :>> ', newArray);
console.log('oldArray :>> ', oldArray);

///разворот
const video = ['yotube', 'vimeo', 'rutube'],
    blogs = ['wordpress', 'livejournal', 'blogger'],
    internet = [...video, ...blogs, 'vk', 'facebook'];

console.log('internet :>> ', internet);

function log(a, b, c) {
    console.log('a :>> ', a);
    console.log('b :>> ', b);
    console.log('c :>> ', c);
}

const num = [2, 5, 7];
log(...num);

/// 4ый способ

const array = ["a", "b"];
const newAArray = [...array];

const q = {
    one: 1,
    two: 2
};

const newObj = { ...q };