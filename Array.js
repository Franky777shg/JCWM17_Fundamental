// ARRAY
// SYNTAX ARRAY
let things = [5, "Book", true, undefined, null, [], {}]

// ACCESS ARRAY
console.log(things[1])

// CHANGE DATA IN ARRAY
things[3] = "Pencil"
console.log(things)

// CREATE NEW INDEX
console.log(things.length)
console.log(things)
things[8] = true
console.log(things)
console.log(things[7])
console.log(things.length)

// PUSH AND POP
let fruit = ["apel", "melon", "pisang"]
fruit.push(["durian", "kiwi"]) // push => untuk menambah data baru di akhir array
console.log(fruit)
fruit[3].pop() // pop => menghapus satu item di index terakhir di dalam array
console.log(fruit)

// UNSHIFT AND SHIFT
let a = ["gitar", "bola", "celana"]
a.unshift(10, 20) // unshift => untuk menambah data baru di awal array
console.log(a)
a.shift() // shift => menghapus satu item di index pertama di dalam array
console.log(a)

// SPLICE
let number = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
// (start, deleteCount, optional => new data)
// SPLICE FOR DELETE
number.splice(1, 3)
console.log(number)
// SPLICE FOR DELETE AND REPLACE
number.splice(1, 3, 5)
console.log(number)
// SPLICE FOR INSERT
number.splice(2, 0, 7, 8) // dimasukan dari index ke-2, dihapus 0 data, di insert angka 7 dan 8
console.log(number)

// DELETE => untuk menghapus data TANPA menghapus index yang digunakan
let b = [1, 2, 3, 4]
delete b[1]
console.log(b)

// SLICE => untuk mengambil isi array
let c = [1, 2, 3, 4, 5, 6]
let c2 = c.slice(1, 3) // diambil dari index ke 1 sampai index ke 3 tapi index ke 3 nya tidak diambil
let c3 = c.slice(2, 4) // diambil dari index ke 2 sampai index ke 4 tapi index ke 4 nya tidak diambil
console.log(c2)
console.log(c3)

// INCLUDES
let d = [1, 2, 3, 4, 5]
console.log(d.includes(2)) // true
console.log(d.includes(6)) // false

// indexOf
let e = ["book", "pencil", "eraser", "sharpener"]
console.log(e.indexOf("pencil")) // cari index dari item "pencil"
console.log(e.indexOf("car")) // jika yang dicari tidak ada, maka hasilnya -1

// SORT => mengurutkan data
let word = ["pencil", "car", "melon", "budi", "ball"]
console.log(word.sort())
let campur = ["word", 1, true, "abc", 2, false, undefined, null, [1, 2], ["a", "z"]]
console.log(campur.sort())

let f = [3, 5, 2, 1, 4]
console.log(f.sort((a, b) => b - a)) // sorting descending

// REVERSE => membalikan posisi item di dalam array
let g = ["pencil", "car", "melon", "budi", "ball"]
console.log(g.reverse())

// JOIN => menggabungkan data di dalam array menjadi string
let h = ["Ade", "Andra", "Dimas", "Gandang"]
console.log(h.join())
console.log(h.join(" - "))
console.log(h.join(" / "))

// Menggunakan banyak method pada sekali eksekusi array
let i = ["Gandang", "Andra", "Ade", "Dimas", "Nafis"]
let i2 = i.slice(1).sort().join(" - ")
console.log(i2)

// CONCATINATING ARRAY => untuk menggabungkan data di array yang berbeda menjadi satu array
let arr1 = ["apel", "mangga"]
let arr2 = ["pensil", "pulpen"]
let arr3 = ["rabbit", "bear"]

let arr4 = arr1.concat(arr2)
console.log(arr4)
let arr5 = arr4.concat(arr3)
console.log(arr5)

// ARRAY 2 DIMENSION
let j = [[1, 2], [3, 4], [[5, 6, [9, 10]], 7, 8]]
// how to get item 5
console.log(j[2][0][0])
//how to get item 8
console.log(j[2][2])
// how to get item 10
console.log(j[2][0][2][1])

// LOOP WITH ARRAY
let categories = ["Horror", "Sci-Fi", "Thriller", "Adventure", "Animation", "Romance"]
let info = `Terdapat ${categories.length} kategori film :\n`

for (let i = 0; i < categories.length; i++) {
    info += categories[i] + '\n'
}

console.log(info)

// CONTOH LEBIH KOMPLEKS
let film = [["Horror", "The Nun", 126], ["Romance", "Dilan", 150], ["Sci-Fi", "Interstellar", 120]]
let infoFilm = `List film hari ini :\n`

for (let i = 0; i < film.length; i++) { // 0 1
    let temp = `${i + 1}. `
    for (let j = 0; j < film[i].length; j++) { // 0 1 2 3
        if (j == film[i].length - 1) {
            temp += `${film[i][j]} minutes \n`
        } else {
            temp += `${film[i][j]}, `
        }
    }
    // console.log(temp)
    infoFilm += temp 
}

console.log(infoFilm)
// result:
// List film hari ini:
// 1. Horror, The Nun, 126 minutes
// 2. Romance, Dilan, 150 minutes
// 3. Sci-File, Interstellar, 120 minutes