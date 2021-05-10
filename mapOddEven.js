let arr = [1, 3, 5, 4].map((item, index) => {
    if (item % 2 == 0) {
        return 'even'
    } else {
        return 'odd'
    }
})
console.log(arr)