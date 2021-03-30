'use strict';

if (4 == 9) {
    console.log('ok!');
} else {
    console.log('error');
}

const num = 50;
if (num < 49) {
    console.log('Error');
} else if (num > 100) {
    console.log('Many');
} else {
    console.log('ok');
}

(num === 50) ? console.log('ok') : console.log('Error');

let numer = 50;
switch (numer) {
    case 49:
        console.log('Error');
        break;
    case 100:
        console.log('Error');
        break;
    case 52:
        console.log('ok');
        break;
    default:
        console.log('check more');
        break;
}

let numb = 50;
while (numb <= 55) {
    console.log(num);
    numb++;
}

let numr = 50;
do {
    console.log(numr);
    numr++;
}
while (num < 55);

let nums = 50;
for (let i = 1; i < 8; i++) {
    console.log(nums);
    nums++;
}

for (let i = 1; i < 10; i++) {
    if (i === 6) {
        break;
    }
    console.log(i);
}

for (let i = 1; i < 10; i++) {
    if (i === 6) {
        continue;
    }
    console.log(i);
}