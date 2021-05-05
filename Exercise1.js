let tanggal = new Date()
let bulan = tanggal.getMonth()
let base = 'Saat ini bulan'
if (bulan === 0) {
    console.log(`${base} 0 : Janurai`)
}
else if (bulan === 1) {
    console.log(`${base} 1 : Februari`)
}
else if (bulan === 2) {
    console.log(`${base} 2 : Maret`)
}
else if (bulan === 3) {
    console.log(`${base} 3 : April`)
}
else if (bulan === 4) {
    console.log(`${base} 4 : Mei`)
}
else if (bulan === 5) {
    console.log(`${base} 5 : Juni`)
}
else if (bulan === 6) {
    console.log(`${base} 6 : Juli`)
}
else if (bulan === 7) {
    console.log(`${base} 7 : Agustus`)
}
else if (bulan === 8) {
    console.log(`${base} 8 : September`)
}
else if (bulan === 9) {
    console.log(`${base} 9 : Oktober`)
}
else if (bulan === 10) {
    console.log(`${base} 10 : November`)
}
else if (bulan === 11) {
    console.log(`${base} 11 : Desember`)
}

console.log(tanggal.getDay())