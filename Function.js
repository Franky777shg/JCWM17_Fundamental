// SYNTAX FUNCTION
// FUNCTION DECLARATION
function myFunction() {
    console.log('Ini Function Decalration')
}

// FUNCTION EXPRESSION
let myFunction2 = function() {
    console.log('Ini Function Expression')
}

// FUNCTION EXPRESSION WITH ARROW FUNCTION '=>'
let myFunction3 = () => {
    console.log('Arrow Function')
}

// CALL FUNCTION
myFunction()
myFunction2()
myFunction3()

let greeting = () => {
    let name1 = 'Andra '
    let name2 = 'Andaru'
    let namaLengkap = name1 + name2

    console.log(namaLengkap)
}

greeting()

// WITH PARAMETER
let hello = (a, b) => {
    console.log(`Hello ${a + b}`)
}

hello('Yusuf ', 'Hilman')

// RETURN
// Return digunakan ketika kita mau memakai sebuah hasil dari function
// Return juga untuk menghentikan proses dari si function
let number1 = () => {
    let a = 2**2
    return a
    console.log('Jalan')
}

let number2 = () => {
    let b = 3**2
    return b
    console.log('Jalan')
}

console.log(number1() * number2())

// PARAMETER AND RETURN
let power = (input1, input2) => {
    return input1 ** input2
}

console.log(power(2, 3))

// PARAMETER OR ARGUMENT
// Parameter => adalah variabel yang kita buat SAAT MEMBUAT FUNCTION
// Argument => adalah value yang kita buat SAAT MEMANGGIL FUNCTION

// DEFAULT PARAMETER
let sum = (a, b, c = 5) => {
    return a + b + c
}

console.log(sum(3, 4, 3))

// CALLBACK FUNCTION
let minus = (a, b) => {
    // a = 20
    // b = 10 (hasil dari return function angka())
    return a - b
}

let angka = () => {
    return 10
}
// Ketika function dipanggil menjadi argument, maka itu adalah callback function
console.log(minus(20, angka()))

// CALLING OTHER FUNCTION
let addition = (a, b) => {
    return a + b
}

let substraction = (a, b) => {
    return a - b
}

let multiplication = (a, b) => {
    return a * b
}

let divison = (a, b) => {
    return a / b
}

let showResult = (b, a) => {
    console.log(addition(a, b)) // 15
    console.log(substraction(a, b)) // -5
    console.log(multiplication(a, b)) // 50
    console.log(divison(a, b)) // 0.5
}

showResult(10, 5)

// RECURSIVE FUNCTION
// Function yang memanggil dirinya sendiri
let countdown = (counter) => {
    console.log(counter)
    counter--
    if (counter >= 0) {
        countdown(counter)
    }
}

countdown(3)