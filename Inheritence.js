class Person {
  constructor(name) {
    this.name = name;
  }
  //method of the class
  walk() {
    console.log("walk");
  }
}

class Teacher extends Person {
  //extends -> inherits the Person class
  constructor(name, degree) {
    super(name);
    this.degree = degree;
  }

  teach() {
    console.log("teach");
  }
}

const teacher = new Teacher("Krish", "BE");
console.log(teacher);
teacher.teach();
teacher.walk();
