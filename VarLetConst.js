// VAR
// SCOPE => function
function a() {
    var name = 'frengky'
}

console.log(name)

// MUTABLE = true
var mobil = 'toyota'
mobil = 'ferari'
console.log(mobil)

// LET
// SCOPE => function, conditional, looping
let i = 1
while (i < 2) {
    let gelas = 'besar'
    i++
}
console.log(gelas)

// MUTABLE = true

// CONST
// SCOPE => function, conditional, looping
let j = 1
while (j < 2) {
    const handuk = 'besar'
    j++
}
console.log(handuk)

// MUTABLE = false
const single = false
single = true

console.log(single)