let fee = [9100000, 9800000, 9500000, 10300000, 9300000].filter(item => {
    return item - (item * 0.05) > 9_000_000
})
console.log(fee)