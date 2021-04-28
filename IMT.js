let massa = 67,
    tinggi = 1.78,
    res = massa / (tinggi ** 2),
    notif = `Massa ${massa} kg & Tinggi ${tinggi} m \n`

if (res < 18.5) {
    notif += `IMT = ${res}, BERAT BADAN ANDA KURANG`
} else if (res >= 18.5 && res <= 24.9) {
    notif += `IMT = ${res}, BERAT BADAN ANDA IDEAL`
} else if (res >= 25.0 && res <= 29.9) {
    notif += `IMT = ${res}, BERAT BADAN ANDA BERLEBIH`
} else if (res >= 30.0 && res <= 39.9) {
    notif += `IMT = ${res}, BERAT BADAN ANDA SANGAT BERLEBIH`
} else {
    notif += `IMT = ${res}, BERAT BADAN ANDA OBESITAS`
}

console.log(notif)

// let a = 'aku'
// a + " kaya" // a += " kaya"
// console.log(a)