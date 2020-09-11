const person = {
  name: "Krishsa",
  walk() {
    console.log(this);
  },
};

person.walk();

const walk = person.walk; // walk -> getting a reference to person.walk()
console.log(walk);
walk(); // calling the walk const - this refers to the window object
