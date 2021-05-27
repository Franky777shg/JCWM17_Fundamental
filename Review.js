// Parameter => value yang dibutuhkan oleh function
// Argument => value yang dikirim ketika sebuah function dipanggil

// Example
let greeting = (name) => { // name = parameter
    console.log(`Hello ${name}`)
}

greeting('Frengky') // 'Frengky' = argument

//##########################################################

// return => mengeluarkan value dari sebuah function dan menghentikan proses function nya
let sum = (a, b) => {
    return a + b
}

console.log(sum(2, 3))