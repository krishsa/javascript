//Arrow func with this Keyword...
const person = {
  name: "Krish",
  talk() {
    let self = this;
    //noraml fn
    setTimeout(function () {
      //console.log("this", this); //-> this refers to setTimeout standalone fn and not person object
      console.log("self", self); //-> here this refers to the person object
    }, 1000);

    //Arrow fn
    setTimeout(() => {
      console.log("this", this); // this will automatically inherit the value with the context and refers to the person object
    }, 1000);
  },
};

person.talk();
