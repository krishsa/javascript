import Teacher, { promote } from "./Teacher.js"; // Default and Named export

// Teacher -> default export -> import ... from
//{ promote } -> named export ->import { .. } from

const teacher = new Teacher("Krishsa", "BE");
console.log(teacher);
teacher.teach();
teacher.walk();
promote();
