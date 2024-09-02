// 1. Mengembalikan Tipe Data Primitif dari Array

function filterPrimitif(arr) {
  // Memfilter elemen yang merupakan tipe data primitif: angka, string, boolean, null, atau undefined
  return arr.filter(
    (item) =>
      typeof item === "number" ||
      typeof item === "string" ||
      typeof item === "boolean" ||
      item === null ||
      typeof item === "undefined"
  );
}

let arr1 = [1, "string", null, false, undefined, 2, "ya", undefined];
console.log(filterPrimitif(arr1));

// 2. Mendapatkan Angka Terkecil Kedua dari Array

function angkaTerkecilKedua(arr) {
  // Menghapus elemen duplikat dengan membuat Set, lalu mengubahnya kembali menjadi array
  let unik = [...new Set(arr)];
  // Mengurutkan array dari kecil ke besar
  unik.sort((a, b) => a - b);
  // Mengembalikan elemen kedua terkecil
  return unik[1];
}

let arr2 = [1, 3, 5, 2, 8, 3, 4];
console.log(angkaTerkecilKedua(arr2));

// 3. Menjumlahkan Semua Angka dalam Array Tipe Data Campuran

function jumlahkanAngka(arr) {
  // Menggunakan reduce untuk menghitung total hanya untuk elemen yang bertipe angka
  return arr.reduce(
    (jumlah, item) => (typeof item === "number" ? jumlah + item : jumlah),
    0
  );
}

let arr3 = [1, 3, false, 5, 2];
console.log(jumlahkanAngka(arr3));

// 4. Menghitung Jumlah Nilai Duplikat dalam Array

function hitungDuplikat(arr) {
  let jumlah = {};
  // Menghitung frekuensi setiap elemen dalam array
  arr.forEach((item) => (jumlah[item] = (jumlah[item] || 0) + 1));
  // Menghitung berapa banyak elemen yang muncul lebih dari sekali
  return Object.values(jumlah).filter((value) => value > 1).length;
}

let arr4 = [10, 20, 40, 10, 50, 30, 10, 60, 10];
console.log(hitungDuplikat(arr4));

// 5. Membuat Permainan Batu, Gunting, Kertas

function batuGuntingKertas(pilihan) {
  // Pilihan yang tersedia dalam permainan
  const pilihanKomputer = ["batu", "gunting", "kertas"];
  // Memilih secara acak salah satu dari pilihan yang tersedia
  const pilihanKomputerAcak = pilihanKomputer[Math.floor(Math.random() * 3)];

  // Menentukan hasil permainan
  if (pilihan === pilihanKomputerAcak) {
    return "Seri"; // Hasil seri jika pilihan sama
  } else if (
    (pilihan === "batu" && pilihanKomputerAcak === "gunting") ||
    (pilihan === "gunting" && pilihanKomputerAcak === "kertas") ||
    (pilihan === "kertas" && pilihanKomputerAcak === "batu")
  ) {
    return "Menang";
  } else {
    return "Kalah";
  }
}

console.log(batuGuntingKertas("batu"));
