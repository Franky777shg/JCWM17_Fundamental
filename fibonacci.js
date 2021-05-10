let fibo = (x) => {
    let arr = [1, 1]
    for (let i = 0; i < x - 2; i++) {
        arr.push(arr[i] + arr[i + 1])
    }
    console.log(arr[x - 1])
}

fibo(10)