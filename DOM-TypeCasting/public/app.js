import { Invoice } from "./classes/invoice.js";
import { ListTemplate } from "./classes/ListTemplates.js";
import { Payment } from "./classes/payment.js";
// let docOne: Hasformatter;
// let docTwo: Hasformatter;
// docOne = new Invoice("yoshi", "web work", 250);
// docTwo = new Payment("mario", "plumbing work", 200);
// let docs: Hasformatter[] = [];
// docs.push(docOne);
// docs.push(docTwo);
// console.log('gh',docs);
// const invOne = new Invoice("mario", "work on the mario website", 250);
// const invTwo = new Invoice("luigi", "work on the luigi website", 300);
// let invoices: Invoice[] = [];
// invoices.push(invOne);
// invoices.push(invTwo);
// invoices.forEach((inv) => {
//   console.log(inv.client, inv.amount, inv.format());
// });
const form = document.querySelector(".new-item-form");
// inputs
const type = document.querySelector("#type");
const tofrom = document.querySelector("#tofrom");
const details = document.querySelector("#details");
const amount = document.querySelector("#amount");
const ul = document.querySelector('ul');
const list = new ListTemplate(ul);
form.addEventListener("submit", (e) => {
    e.preventDefault();
    let doc;
    if (type.value === "invoice") {
        doc = new Invoice(tofrom.value, details.value, amount.valueAsNumber);
    }
    else {
        doc = new Payment(tofrom.value, details.value, amount.valueAsNumber);
    }
    list.render(doc, type.value, "end");
});
// Generics
// The function addUID uses a generic type <T> to allow it to accept an object of any type.
// This makes the function flexible and reusable for different types of objects.
// The function generates a random UID and adds it to the object, then returns the new object with the UID.
const addUID = (obj) => {
    let uid = Math.floor(Math.random() * 100);
    return Object.assign(Object.assign({}, obj), { uid });
};
let docOne = addUID({ name: 'yoshi', age: 40 });
// let docTwo = addUID('hello'); // error
console.log(docOne);
const docThree = {
    uid: 1,
    resourceName: 'person',
    data: 'shaun'
};
const docFour = {
    uid: 2,
    resourceName: 'shoppingList',
    data: ['bread', 'milk', 'toilet roll']
};
console.log(docThree, docFour);
// tuples
let arr = ['ryu', 25, true];
arr[0] = false;
arr[1] = 'yoshi';
arr = [30, false, 'yoshi'];
let tup = ['ryu', 25, true];
// tup[0] = false;
tup[0] = 'ken';
tup[1] = 30;
// tup[2] = false; // error: Type 'boolean' is not assignable to type
