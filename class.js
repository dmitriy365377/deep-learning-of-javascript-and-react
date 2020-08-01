// https://www.codewars.com/kata/588a00ad70720f2cd9000005
// https://learn.javascript.ru/internal-external-interface
// const Router = function() {
//     let dataOBJ = Object.create(null);

//     function bind(url,method,action) {
//         dataOBJ[url + method] = action   
//     }
 
//     function runRequest(url,method) {
//         const key = url + method
//         if(key in dataOBJ) {
//             return dataOBJ[key]()
//         }
//         return 'Error 404: Not Found';
//     }

//     return {
//         bind,
//         runRequest,
//     };
// }

// class Router2 {
//   constructor() {
//     this.dataOBJ = Object.create(null)
//   }

//   bind(url,method,action) {
//     this.dataOBJ[url + method] = action  
//   }

//   runRequest(url,method) {
//     const key = url + method
//      if(key in this.dataOBJ) {
//       return this.dataOBJ[key]()
//     }
//     return 'Error 404: Not Found';
//   }

// }

// const r = new Router2()

// https://www.codewars.com/kata/55a144eff5124e546400005a/train/javascript

// class Person {
//   constructor(name,age) {
//     this.name = name;
//     this.age = age;
//   }
//   get info () {
//     return `${this.name}s age is ${this.age}`
//   }
// }

// function Person(name, age) {
//   this.name = name;
//   this.age = age;
// }

// Object.defineProperty(Person.prototype, 'info', {
//   get: function () {
//     return `${this.name}s age is ${this.age}`
//   }
// });

//https://www.codewars.com/kata/55a14aa4817efe41c20000bc/train/javascript


// class Animal {
//   constructor(name) {
//     this.name = name;
//   }

//   sayName() {
//     console.log(this.name);
//   }
// }

function Animal(x, y) {
  this.name = x
  this.age = y
}

Animal.prototype.sayName = function() {
  console.log(this.name)
}



function Cat(...args) {
  // tis = { __proto__: Cat.prototype }
  Animal.apply(this, args);
  // return this
}

//Animal.prototype.__proto__  === Object.prototype
//Cat.prototype.__proto__  === Object.prototype
Cat.prototype.__proto__ = Animal.prototype
Cat.prototype.speak = function() {
  return `${this.name} meows`
}

cat.sayName()
// cat.__proto__.__proto__.sayName

const cat = new Cat('Mr Whiskers');
cat.sayName();

// class Cat extends Animal {
//   speak() {
//     return `${this.name} meows`
//   }
// }

// class Dog extends Animal {
//   speak() {
//     return `${this.name} спикс гав-гав`
//   }
// }


// Person.prototype = {
//   get:info() {
    
//   }
// }

// /'johns age is 34'

// const john = new Person('john', 34)
// console.log(john.info)

// const mmmmm = new Person('mmmmm', 34)
// console.log(mmmmm.info)

// const whosOnline = (friends) => {
//   return friends.reduce((total, obj) => ({
//   if (obj['status'] === 'online' && obj['lastActivity'] <= 10) {
//   total = { online: [obj['username']] }
//   }
//   if (obj['status'] === 'offline') {
//   total = { offline: [obj['username']] }
//   }
//   if (obj['status'] === 'online' && obj['lastActivity'] > 10) {
//   total = { away: [obj['username']] }
//   }
//   }), {})
//   }

//   // {
//   //   online: ['David'],
//   //   offline: ['Lucy'],
//   //   away: ['Bob']
//   // }
// const friends = [{
//   username: 'David',
//   status: 'online',
//   lastActivity: 10
// }, {
//   username: 'Lucy', 
//   status: 'offline',
//   lastActivity: 22
// }, {
//   username: 'Bob', 
//   status: 'online',
//   lastActivity: 104
// }]


// whosOnline(friends)

// function Router() {
//     this.dataOBJ = Object.create(null);
// }

// Router.prototype.bind = function(url,method,action) {
//   this.dataOBJ[url + method] = action   
// };

// Router.prototype.runRequest = function(url,method) {
//   const key = url + method
//   if(key in this.dataOBJ) {
//     return this.dataOBJ[key]()
//   }
//   return 'Error 404: Not Found';
// }

// const r = new Router();
// const r2 = new Router();

// r.__proto__.bind

// r2.__proto__.bind === r1.__proto__.bind
r.bind('/hello', 'GET', function(){ return 'hello world'; });
// r.bind('/hello', 'POST', function(){ return 'hello post'; });
// r.bind('/qwerty', 'POST', function(){ return 'qwerty'; });

console.log(r.runRequest('/hello', 'GET')) // returns 'hello world';
// console.log(r.runRequest('/qwerty', 'POST')) // returns 'qwerty';

// const a = {
//     x: 1,
//     y: 2,
// };

// const b = {
//     z: 3,
// };

// a extends b
// a.__proto__ = b

// a === {
//     x: 1,
//     y: 2,
//     __proto__: {
//         z: 5,
//     }
// }


// console.log(a.z);
// b.z = 5;
// console.log(a.z);
// a.z = 10;
// console.log(b.z);
// a.z = 1000;
// delete a.z
// console.log(a.z);


// function constructor() {

// }
// console.log(new.target);

// function g(a, b) {
//     return a + b
// }

// const f = new Function('a', 'b', 'return a + b');

// console.log(f(1,2));
// console.log(f.toString());
// console.log(g.toString());

// const arr = [];
// const arr = new Array();

// arr.map

// arr.__proto__ === Array.prototype

// f.__proto__ === Function.prototype
// f.prototype === {
//     constructor: f,
//     __proto__: Object.prototype,
// }
 
// f.prototype.xxx = 123;

// https://en.wikipedia.org/wiki/Prototype-based_programming#Languages_supporting_prototype-based_programming

// const m1 = new f;
// const m2 = {};

// m1.toString === m1.__proto__.__proto__.toString
//prototype
// console.log(m1.__proto__ === f./////////////////////////////////////////////////////////);
// console.log(m2.__proto__ === Object.prototype);

// // m2.

// console.log(m1.__proto__ === ???);
// console.log(m2.__proto__ === ???);
