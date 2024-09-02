// 1. Konversi Celsius ke Fahrenheit
/*
    Pseudocode:
    1. Ekstrak nilai numerik dari string Celsius.
    2. Konversi nilai yang diekstrak ke Fahrenheit menggunakan rumus (Celsius * 9/5) + 32.
    3. Cetak nilai Fahrenheit.
*/

let celsius = 25;
let fahrenheit = (celsius * 9) / 5 + 32;
console.log(fahrenheit);

// 2. Memeriksa apakah sebuah angka ganjil atau genap
/*
    Pseudocode:
    1. Periksa apakah angka modulo 2 sama dengan 0.
    2. Jika benar, angka tersebut adalah genap; jika tidak, angka tersebut adalah ganjil.
    3. Cetak hasilnya.
*/

let angka1 = 2;
let angka2 = 3;
let AngkaGenap = angka1 % 2 === 0;
let AngkaGanjil = angka2 % 2 === 0;

console.log(AngkaGenap);
console.log(AngkaGanjil);

// 3. Memeriksa apakah sebuah angka adalah bilangan prima
/*
    Pseudocode:
    1. Jika angka kurang dari atau sama dengan 1, kembalikan false.
    2. Loop dari 2 hingga akar kuadrat dari angka.
    3. Jika angka habis dibagi dengan angka dalam loop, kembalikan false.
    4. Jika tidak ditemukan pembagi, kembalikan true.
*/

let angkaPrima1 = 7;
let angkaPrima2 = 10;
let isPrima1 = true;
let isPrima2 = true;

if (angkaPrima1 <= 1) isPrima1 = false;
for (let i = 2; i <= Math.sqrt(angkaPrima1); i++) {
  if (angkaPrima1 % i === 0) isPrima1 = false;
}

if (angkaPrima2 <= 1) isPrima2 = false;
for (let i = 2; i <= Math.sqrt(angkaPrima2); i++) {
  if (angkaPrima2 % i === 0) isPrima2 = false;
}

console.log(isPrima1);
console.log(isPrima2);

// 4. Temukan jumlah angka dari 1 hingga N
/*
    Pseudocode:
    1. Inisialisasi variabel total dengan nilai 0.
    2. Loop dari 1 hingga N, tambahkan setiap angka ke total.
    3. Kembalikan total.
    4. Cetak hasilnya.
*/

let N = 3;
let jumlah = 0;

for (let i = 1; i <= N; i++) {
  jumlah += i;
}

console.log(jumlah);

// 5. Temukan faktorial dari sebuah angka
/*
    Pseudocode:
    1. Jika angka adalah 0 atau 1, kembalikan 1.
    2. Inisialisasi variabel hasil dengan nilai 1.
    3. Loop dari 2 hingga angka, kalikan hasil dengan setiap angka.
    4. Kembalikan hasil.
    5. Cetak hasilnya.
*/

let angkaFaktorial = 3;
let faktorial = 1;

for (let i = 1; i <= angkaFaktorial; i++) {
  faktorial *= i;
}

console.log(faktorial);

// 6. Cetak N angka Fibonacci pertama
/*
    Pseudocode:
    1. Jika N kurang dari atau sama dengan 0, kembalikan array kosong.
    2. Jika N adalah 1, kembalikan array dengan satu elemen 0.
    3. Inisialisasi array dengan dua angka Fibonacci pertama [0, 1].
    4. Gunakan loop untuk menghasilkan angka Fibonacci berikutnya hingga panjang array adalah N.
    5. Kembalikan array.
    6. Cetak hasilnya.
*/

let Nfib = 10;
let a = 0,
  b = 1,
  berikutnya;
let deretFib = [];

for (let i = 0; i < Nfib; i++) {
  deretFib.push(a);
  berikutnya = a + b;
  a = b;
  b = berikutnya;
}

console.log(deretFib);
