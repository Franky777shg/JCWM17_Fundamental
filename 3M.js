let arr = [1,2,3,2,5,2,7,2]

let mean = (arr) => {
    let sum = arr.reduce((a, b) => a + b)
    console.log(sum / arr.length)
}

let median = (arr) => {
    let sortArr = arr.sort()

    let res
    if (sortArr.length % 2 !== 0) {
        let ind = Math.round(sortArr.length / 2) - 1
        res = arr[ind]
    } else {
        let ind = (sortArr.length / 2)
        res = (sortArr[ind - 1] + sortArr[ind]) / 2
    }

    console.log(res)
}

let mode = (arr) => {
    let total = 0
    let res
    arr.forEach(element => {
        let count = 0
        arr.forEach(item => {
            if (element === item) count++
        })
        if(count > total) {
            total = count
            res = element
        }
    });

    console.log(res)
}

mean(arr)
median(arr)
mode(arr)
