// Tolong tampilkan console.log('Hello Everybody!') sebanyak 5 kali
// 1. console.log()sebanyak 5 kali secara manual
console.log('Hello Everybody!')
console.log('Hello Everybody!')
console.log('Hello Everybody!')
console.log('Hello Everybody!')
console.log('Hello Everybody!')

// 2. pakai looping
for(let i = 0;i < 5;i++) {
    console.log('Hello Everybody!')
}

/* Dari segi speed, alternatif pertama menang. Kenapa? karena dalam mengeksekusi
perintahnya, machine hanya perlu menjalankan console.log() tanpa melihat hal yang lain.
Sedangkan alternatif 2, machine perlu melakukan banyak hal, seperti menyimpan variabel di dalam RAM,
melakukan checking condition, melakukan increment, dsb. */

/* Dari segi space, alternatif satu menang dari segi space untuk RAM. Karena, alternatif satu tidak
 memakan banyak space di RAM. Alternatif dua menang dari segi space untuk hardisk. Karena, alternatif 2
 hanya berisi sedikit code dibandingkan dengan alternatif 1. */
 
/* Dari segi maintainability, alternatif dua menang. Karena, contohnya ketika kita mau
 mengganti kata everybody menjadi kata yang lain, alternatif satu butuh untuk mengganti di
 setiap console.log. Sedangkan alternatif dua hanya perlu untuk mengganti stau kali, yaitu
 di dalam task looping. */