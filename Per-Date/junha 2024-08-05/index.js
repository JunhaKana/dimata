let students = ["Abby", "Junha", "Sastra", "De Oka", "Yastu", "Zerina"];

let studentUpperCase = students.map((student) => {
  return student.toUpperCase();
});

console.log(studentUpperCase);

let value = 1;
console.log(value);

function myFunction(cb) {
  cb();
}

myFunction(() => {
  value = 10;
});

console.log(value);
