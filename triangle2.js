let res = ''

for(let i = 0;i < 5;i++){
    for(let j = 5;j > i;j--){
        res += ' * '
    }
    res += '\n'
}
for(let k = 0;k < 4;k++){
    for(let l = 0;l <= k + 1;l++){
        res += ' * '
    }
    res += '\n'
}

console.log(res)