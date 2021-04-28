// IF
let age = 18
if (age >= 18) console.log('SIM akan segera dibuat')

// IF ELSE
if (age >= 18) {
    console.log('SIM akan segera dibuat')
} else {
    console.log('Permohonan SIM ditolak')
}

// IF ELSE IF ELSE
let weight = 55
if (weight < 50) {
    console.log('Mohon tingkatkan berat badan Anda')
} else if (weight >= 50 && weight <= 60) {
    console.log('Selamat! Kamu diterima')
} else {
    console.log('Mohon kurangi berat badan Anda')
}

// Contoh IF ELSE untuk nilai
let score
if (score >= 85 && score <= 100) {
    console.log('A')
} else if (score >= 75 && score <= 84) {
    console.log('B')
} else if (score >= 60 && score <= 74) {
    console.log('C')
} else if (score >= 0 && score <= 59) {
    console.log('D')
} else {
    console.log('F')
}

// SWITCH CASE
switch (true) {
    case (score >= 85 && score <= 100):
        console.log('A')
        break
    case (score >= 75 && score <= 84):
        console.log('B')
        break
    case (score >= 60 && score <= 74):
        console.log('C')
        break
    case (score >= 0 && score <= 59):
        console.log('D')
        break
    default:
        console.log('F')
}