let res = ''

for (let a = 0; a < 10; a++) {
    for(let b = 9;b > a;b--){
        res += '   '
    }
    for(let c = 0;c <= a;c++){
        res += ' * '
    }
    for(let d = 1;d <= a;d++){
        res += ' * '
    }
    res += '\n'
}

console.log(res)