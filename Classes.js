class Person {
  constructor(name) {
    this.name = name;
  }
  //method of the class
  walk() {
    console.log("walk");
  }
}

const person = new Person("Krish");
person.walk();
console.log(person);
