// contoh string
let str = "Javascript"

// escape character
let a = "Wait, I'll be in there a second"
console.log(a)
let b = 'Wait, I\'ll be in there a second' // escape character untuk menambahkan kutip
console.log(b)
let c = `Wait, I'll be in there a second`
console.log(c)
let d = "Hello \n Guys!" // escape character untuk membuat line/garis baru (enter)
console.log(d)
let e = "Hello \t Guys!" // escape character untuk membuat spasi tab
console.log(e)

// Concatinate String
let firstName = "Nicole"
let lastName = "Sadjoli"
console.log(firstName + lastName)
console.log(firstName + ' ' + lastName)

let angka = "8"
let str2 = 12
console.log(angka + str2, typeof (angka + str2))

// Backtick
let first_name = 100
let last_name = "Afif"
console.log(`${first_name} ${last_name}`)
/* backtick memudahkan kita dalam memanggil variabel lain untuk dimasukan
ke dalam string */

// String Properties and Method
let x = 'Hello World'
// index adalah urutan, dimulai dari 0
console.log(x.length) // menghitung panjang dari sebuah string
console.log(x.indexOf('World')) // mencari index dari sebuah kata
console.log(x.substr(6, 3)) // output => Wor
console.log(x.slice(6, 11)) // output => World
console.log(x.split(' ')) // output => ['Hello', 'World']
console.log(x.split('c')) // output => ['Hello World'] tidak akan ter split kalau parameter nya tidak ada di string

let y = 'hello'
let z = 'WORLD'
console.log(y.toUpperCase())
console.log(z.toLowerCase())
console.log(y.replace('l', 'n'))
console.log(y.replace(/l/g, 'n')) // regEx untuk mencari seluruh huruf l
console.log(y.replace('ll', 'n'))

// contoh replace untuk mengganti huruf e dan o
let res = y.replace('e', 'n')
let res2 = res.replace('o', 'n')
console.log(res2)

let text = 'Hello World'
console.log(text.includes('Hello'))
console.log(text.includes('Hellos'))
console.log(text.includes('world'))