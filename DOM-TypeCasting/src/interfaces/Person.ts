export interface IsPerson {
  name: string;
  age: number;
  speak(a: string): void;
  spend(a: number): number;
}
// const me: IsPerson = {
//   name: "shaun",
//   age: 30,

//   speak(text: string): void {
//     console.log(text);
//   },
//   spend(amount: number): number {
//     console.log("I spent", amount);
//     return amount;
//   },
// };
// console.log("hhhh", me);
// const greetPerson = (person: IsPerson) => {
//   console.log("hello", 24, person.name, person.age);
// };

// greetPerson(me);