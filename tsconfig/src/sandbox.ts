//  --------function types----------
// let greet: Function;

// greet = () => {
//     console.log('hello, world');
// }

// const add = (a: number, b: number, c: number|string = 10) => {
//     console.log(a + b);
//     console.log(c);
// }
// // console.log(add(1, 2, 3)); // error TS2554: Expected
// add(5,10,30);
// add(5,10,'30');
// const minus = (a: number, b: number): number => {
//     return a - b;
// }
// let result = minus(10,7);

// ---------Function signatures--------------
type StringOrNum = string | number
type objWithName = { name: string, uid: StringOrNum};
const logDetail = (uid: StringOrNum, item: string) => {
    console.log(`${item} has a uid of ${uid}`);
}

// const greet = (user: {name: string, uid: string | number}) => {
//     console.log(`${user.name} says hello`);
// }

const greetAgain = (user: objWithName) => {
    console.log(`${user.name} says hello`);
}

// logDetails(22, 'cc')

// ---------DOM && type casting--------------
let greet: (a: string, b: string) => void;

greet = (name: string, greeting: string) => {
    console.log(`${name} says ${greeting}`);
}

let calc: (a: number, b: number, c:string) => number;

calc = (numOne: number, numTwo: number, action: string) => {
    if(action === 'add'){
        return numOne + numTwo;
    } else {
        return numOne - numTwo;
    }
}

let logDetails: (obj: {name: string, age: number}) => void;

type person = {name: string, age: number};

logDetails = (ninja: person) => {
    console.log(`${ninja.name} is ${ninja.age} years old`);
}

logDetails({ name: 'yahya', age: 27 });







