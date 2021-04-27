// untuk membuat variabel, kita bisa pakai 3 keyword: var, let, const
var name // kita buat sebuah variable
name = "John" // kita assign variable name dengan isinya "John"
console.log(name) // seharusnya isinya => John

// kita bisa langsung isi variabelnya
let name2 = "Hirdzan" // kalau let bisa di ganti isinya
// cara assign ulang variable
name2 = "Jimmy"
console.log(name2)

const name3 = "Jagad" // kalau const TIDAK BISA diganti isinya
// name3 = "Ade"
console.log(name3)

// Aturan untuk membuat variable di javascript
// 1. tidak boleh mengandung space/spasi
// example: total price, stok barang
// 2. hanya bisa dimulai dengan huruf, underscore, dollar sign
// example: name, _name, $name
// 3. di dalam nama variable, hanya bisa mengandung huruf, angka, underscore, dollar sign
// example: name, name4, total_barang, stok$barang, a_b$4
// 4. penamaaan variable di javascript itu case sensitive
// example: HasilNilai berbeda dengan hasilnilai

// Berbagai cara penulisan variable di javascript
// 1. Camel Case
    let totalBarang, stockProduct // user javascript
// 2. Snake Case
    let total_barang, stock_product // user python

// Kapan kita menggunakan variable?
// ketika kita mau menggunakan data tersebut lebih dari 1 kali
// example:
console.log("Javascript is the best")
console.log("Javascript is the best")
console.log("Javascript is the best")
console.log("Javascript is the best")
console.log("Javascript is the best")

let kalimat = "Javascript is the best"
console.log(kalimat)
console.log(kalimat)
console.log(kalimat)
console.log(kalimat)
console.log(kalimat)

// Data Types
// String
let data = "1234"
let data3 = '1234'
let data4 = `1234`

// Numbers: terdiri dari 2 jenis, yaitu integers dan float
// integers
let data1 = 1
//float
let data2 = 1.5

// Boolean
// True or False
let data5 = true

// Object
let data6 = {
    name: "John",
    age: 12,
    single: true
}

// Array
let data7 = ["John", 12, true]

// Undefined and Null
// contoh undefined
let contoh
console.log(contoh)
// contoh null
let contoh2 = null
console.log(contoh2)

// typeof
console.log(typeof "laptop")
let uji = {
    name: "Andra"
}
console.log(typeof uji)