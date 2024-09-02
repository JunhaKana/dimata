let student1 = {
  "first name": "Junha",
};

student1.age = 17;
student1["Junha"];

let student = {
  "first name": "Junha",
  grade: "A",
  age: 17,
  sayHi() {
    return this["first name"];
  },
  sayGrade() {
    return this.grade;
  },
};

console.log(student.age);
console.log(student["first name"]);

delete student.age;
delete student["first name"];

console.log(student);

let newStudent = {
  province: "Bali",
  adress: "Denpasar",
};

console.log(newStudent.province);
console.log(newStudent.adress);

for (let kunci in student) {
  console.log(kunci);
  console.log(student[kunci]);
}

console.log(student);

console.log(student.sayGrade());
console.log(student["sayGrade"]());
