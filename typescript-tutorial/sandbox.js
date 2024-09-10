// ------------types------------------------
// let character = 'yahya';
// let age = 30;
// let isBlackBelt = false;
// character = 'luigi';
// age = 40;
// isBlackBelt = true; 
// const circ = (diameter : number) => {
//     return diameter * Math.PI; 
// }
// console.log(circ(7.5));
// ------------arrays------------------------
var names = ['luigi', 'mario', 'yoshi'];
names.push('toad');
// console.log(names);
// names.push(3); // error
// names[0] = 3; // error
var numbers = [10, 20, 30, 40];
numbers.push(25);
// console.log(numbers);
// let mixed = ['ken', 4, 'yahya', 8, 9];
// mixed.push('ryu');
// mixed.push(10);
// console.log(mixed);
var ninja = {
    name: 'mario',
    belt: 'black',
    age: 30
};
ninja.age = 40;
ninja.name = 'ryu';
// ninja.age = '30'; // error
// ninja.skills = ['fighting', 'sneaking']; // error
//console.log(ninja);
// ------------Dynamic types------------------------
var character;
var age;
var isLoggedIn;
age = 24;
isLoggedIn = true;
var ninjas = [];
// ninjas = [1, 2, 3]; // error
ninjas.push('yahya');
//console.log(ninjas);
// ---------mixed types---------------
var mixed = [];
mixed.push('hello');
mixed.push(20);
//console.log(mixed);
var uid;
uid = '123';
uid = 123;
// -----------objects-----------
var ninjaOne;
ninjaOne = { name: 'yahya', age: 30 };
ninjaOne = [];
// ninjaOne = 123; // error
var ninjaTwo;
ninjaTwo = {
    name: 'ken',
    age: 30,
    beltColor: 'black'
};
// ---------------any type----------------
var ageAny = 25;
console.log(ageAny);
ageAny = true;
console.log(ageAny);
ageAny = 'hello';
console.log(ageAny);
ageAny = { name: 'luigi' };
console.log(ageAny);
var type;
type = { name: 'ken', age: 25 };
console.log(type);
