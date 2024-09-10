"use strict";
//  --------function types----------
// let greet: Function;
const logDetail = (uid, item) => {
    console.log(`${item} has a uid of ${uid}`);
};
// const greet = (user: {name: string, uid: string | number}) => {
//     console.log(`${user.name} says hello`);
// }
const greetAgain = (user) => {
    console.log(`${user.name} says hello`);
};
// logDetails(22, 'cc')
// ---------DOM && type casting--------------
let greet;
greet = (name, greeting) => {
    console.log(`${name} says ${greeting}`);
};
let calc;
calc = (numOne, numTwo, action) => {
    if (action === 'add') {
        return numOne + numTwo;
    }
    else {
        return numOne - numTwo;
    }
};
let logDetails;
logDetails = (ninja) => {
    console.log(`${ninja.name} is ${ninja.age} years old`);
};
logDetails({ name: 'yahya', age: 27 });
