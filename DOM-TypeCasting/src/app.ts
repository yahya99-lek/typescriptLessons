import { Invoice } from "./classes/invoice.js";
import { ListTemplate } from "./classes/ListTemplates.js";
import { Payment } from "./classes/payment.js";
import { Hasformatter } from "./interfaces/HasFormatter.js";

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

const form = document.querySelector(".new-item-form") as HTMLFormElement;

// inputs
const type = document.querySelector("#type") as HTMLSelectElement;
const tofrom = document.querySelector("#tofrom") as HTMLInputElement;
const details = document.querySelector("#details") as HTMLInputElement;
const amount = document.querySelector("#amount") as HTMLInputElement;

const ul = document.querySelector('ul')!;
const list = new ListTemplate(ul);

form.addEventListener("submit", (e: Event) => {
  e.preventDefault();
  let doc: Hasformatter;
  if (type.value === "invoice") {
    doc = new Invoice(tofrom.value, details.value, amount.valueAsNumber);
  } else {
    doc = new Payment(tofrom.value, details.value, amount.valueAsNumber);
  }
  list.render(doc, type.value, "end");
});

// Generics
// The function addUID uses a generic type <T> to allow it to accept an object of any type.
// This makes the function flexible and reusable for different types of objects.
// The function generates a random UID and adds it to the object, then returns the new object with the UID.

const addUID = <T extends Object>(obj: T) => {
  let uid = Math.floor(Math.random() * 100);
  return { ...obj, uid };
}

let docOne = addUID({ name: 'yoshi', age: 40 });
// let docTwo = addUID('hello'); // error
console.log(docOne);
// with interfaces

interface Resource<T> {
  uid: number;
  resourceName: string;
  data: T;
}

const docThree: Resource<string> = {
  uid: 1,
  resourceName: 'person',
  data: 'shaun'
}

const docFour: Resource<string[]> = {
  uid: 2,
  resourceName: 'shoppingList',
  data: ['bread', 'milk', 'toilet roll']
}

console.log(docThree, docFour);




