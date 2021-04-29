// WHILE
let i = 5 // 5 4 3 2 1
while (i > 0) {
    console.log('Looping while')
    i--
}

// DO WHILE
// Do while akan menjalankan task minimal sekali walaupun condition nya salah
let j = 0 // 1 2 3 4 5
do {
    console.log('Looping do while')
    j++
} while (j < 5)

// FOR
for (let k = 0; k < 5;k++) {
    console.log('Looping for')
}

// BREAK AND CONTINUE
// BREAK => untuk memaksa menghentikan looping
// Contoh break untuk WHILE
let a = 0
while (a < 5) {
    console.log(a)
    if (a === 3) break
    a++
} // 0 1 2 3

while (a < 5) {
    if (a === 3) break
    console.log(a)
    a++
} // 0 1 2

// contoh break untuk FOR
for (let b = 0; b < 5; b++) {
    if (b === 3) break
    console.log(b)
} // 0 1 2

for (let b = 0; b < 5; b++) {
    console.log(b)
    if (b === 3) break
} // 0 1 2 3

// CONTINUE => untuk melewatkan task sesuai condition tertentu
// Tolong tampilkan hanya angka ganjil
for (let c = 0; c < 5; c++) {
    if (c % 2 === 0) continue
    console.log(c)
} // 1 3

// Tolong tampilkan huruf selain 'l'
let str = 'hello'
for (let d = 0; d < str.length; d++) {
    if (str.charAt(d) == 'l') continue
    console.log(str.charAt(d))
} // h e o