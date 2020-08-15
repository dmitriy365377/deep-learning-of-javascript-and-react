// import React from 'react';
// import ReactDOM from 'react-dom';

// import { App } from './App.js';

// ReactDOM.render(<App />, document.querySelector('.root'));


const obj1 = {
    name: 'Dima',
    x: 123,
    b: {
        b: 'b'
    }
}

const obj2 = {
    name: 'Dima',
    x: 123,
    z: 888,
}

const obj3 = {
    name: 'Dima',
    x: 123,
    b: {
        b: 'b'
    }
}
function isObj(value) {
    return typeof value === 'object' && value !== null;
}

// !(A && B) === !A || !B
    //  1    0

function compareObj(obj1, obj2) {
    if (!isObj(obj1) || !isObj(obj2)) {
        return obj1 === obj2;
    }
    const obj1keys = Object.keys(obj1);
    const obj2keys = Object.keys(obj2);
    if (obj1keys.length !== obj2keys.length) {
        return false
    }
    return obj1keys.every((key) => compareObj(obj1[key], obj2[key]))
}

// for (let key in obj1) {
// for (let key of obj1keys) {
//     if (obj1[key] !== obj2[key]) {
//         return false
//     }
// }
// return true

console.log(compareObj(obj1, obj2)) // true
console.log(compareObj(obj1, obj3)) // false