const person = {
  name: "Krish",
  walk() {
    console.log(this);
  },
};

person.walk();

const walk = person.walk.bind(person); //bind() -> will bind this with the object permanently.
walk();
