// forEach => untuk me-looping isi array
let arr = ['banana', 'orange', 'apple']
arr.forEach(item => {
    console.log(item)
})

// forEach 2 dimension
let arr1 = [['apple', 1], ['orange', 2]]
arr1.forEach(item => {
    item.forEach(item2 => {
        console.log(item2)
    })
})

// map => untuk merubah data di dalam array
let arr2 = [1, 2, 3, 4, 5]
let newArr2 = arr2.map((item, i) => {
    if(i % 2 !== 0) {
        return item * 2
    } else {
        return item
    }
})

console.log(arr2)
console.log(newArr2)

// [[2, 3], [2, 3], [2, 3]]
let a = [1, 2, 3]
let b = a.map(item => {
    return [2, 3]
})
console.log(b)

// filter => untuk menyaring data di dalam array
let arr3 = ['car', 'fan', 'mouse', 'monitor']
let newArr3 = arr3.filter(item => {
    return item.includes('a')
})
console.log(newArr3)