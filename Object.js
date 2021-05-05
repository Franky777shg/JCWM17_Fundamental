// OBJECT
// SYNTAX OBJECT
let obj = {
    name: 'Apple',
    price: 10000,
    stock: 9
}

// HOW TO ACCESS VALUE IN OBJECT
console.log(obj.name)
console.log(obj["price"])

// MAKE OBJECT WITH NEW KEYWORD
let obj2 = new Object() // let obj2 = {}
obj2.username = "Juan"
console.log(obj2)

// METHOD
let obj3 = {
    name: "Hirdzan",
    greet() {
        console.log('hello')
    }
}
// HOW TO ACCEESS METHOD
obj3.greet()

// THIS => keyword yang kita gunakan untuk mengambil value di dalam object
let obj4 = {
    name: 'kuroky',
    intro: function () {
        console.log("Hello! My name is " + this.name)
    }
}
obj4.intro()

// CLASS 
// WHAT => cetakan untuk membuat object dengan property yang sama persis dan bisa value nya berbeda
// WHEN => ketika kita butuh untuk membuat object dengan prop yang sama berkali-kali
// WHY => tentu mempermudah dalam membuat object yang sama sehingga tidak perlu membuat object dengan prop yang sama berkali-kali
class Artis {
    constructor(nama, lagu, rilis) {
        this.nama = nama,
            this.lagu = lagu,
            this.tahun = rilis
    }

    intro = () => {
        console.log('I am a singer')
    }
}

let artis1 = new Artis('Isyana', 'Angan-Anganku', 2018)
let artis2 = new Artis('Afgan', 'Sadis', 2015)
console.log(artis1)
console.log(artis2)
artis1.intro()

// INHERITANCE => class untuk membuat class lainnya (cetakan untuk class)
class LivingThings {
    constructor(name, age) {
        this.name = name,
            this.age = age,
            this.alive = true
    }

    eat = () => {
        console.log('eating')
    }

    breed = () => {
        console.log('breed')
    }
}
// INHERITANCE dari livingthings (livingthings => human)
class Human extends LivingThings {
    constructor(name, age, pet) {
        super(name, age)
        this.pet = pet
    }

    work = () => {
        console.log('work')
    }
}

// inheritance dari human (livingthings => human => animal)
class Animal extends Human {
    constructor(name, age, pet, fly) {
        super(name, age, pet)
        this.fly = fly
    }

    tail = () => {
        console.log('tail')
    }
}

let human1 = new Human('Budi', 20, 'dog')
let animal1 = new Animal('Monkey', 5, false, false)
console.log(human1)
console.log(animal1)

// INHERITANCE FROM 2 CLASS => TIDAK BISA, Kenapa?
// Karena extends hanya bisa sekali dipakai dalam inheritance
// class A1 {
//     constructor(nama) {
//         this.nama = nama
//     }
// }

// class B2 {
//     constructor(umur) {
//         this.umur = umur
//     }
// }

// class Fusion extends A1 extends B2 { // ERROR
//     constructor(nama, umur, hobi){
//         super(nama)
//         super(umur)
//         this.hobi = hobi
//     }
// }

// let hasil = new Fusion('Budi', 20, 'Coding')
// console.log(hasil)