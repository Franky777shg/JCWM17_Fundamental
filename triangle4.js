let res = ''

for (let a = 0; a < 10; a++) {
    for(let c = 0;c < a;c++){
        res += '   '
    }
    for(let b = 10;b > a;b--){
        res += ' * '
    }
    for(let d = 9;d > a;d--){
        res += ' * '
    }
    res += '\n'
}

console.log(res)