const person = {
  name: "Krish",
  walk: function () {
    console.log("I walk 2 miles everyday...");
  },
  talk() {
    console.log("Hi, my name is Krish! I love to code.");
  }, //ES6 version
};

//access the object
person.talk();
person.name;
console.log(person.name);

person["name"] = "Senthil"; //[] ->dynamic access of the property
console.log(person["name"]);

const targetMemeber = "name";
person[targetMemeber.value] = "Arumugam";
console.log(person[targetMemeber.value]);
