import { Person } from "./Person.js";

//export ->makes the class public
export default class Teacher extends Person {
  //extends -> inherits the Person class
  constructor(name, degree) {
    super(name);
    this.degree = degree;
  }

  teach() {
    console.log("teach");
  }
}

//function export
export function promote() {
  console.log("promote");
}
