let res = ''
for (let i = 1; i <= 5; i++) {
    for(let j = i; j >= 1; j--) {
        res += j + ' '
    }
    res += '\n'
}

console.log(res)
/*
1
2 1
3 2 1
4 3 2 1
5 4 3 2 1
*/