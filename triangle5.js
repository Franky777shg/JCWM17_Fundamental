let res = ''

for (let a = 0; a < 5; a++) {
    for(let b = 4;b > a;b--){
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

for (let a = 0; a < 5; a++) {
    for(let c = 0;c < a;c++){
        res += '   '
    }
    for(let b = 5;b > a;b--){
        res += ' * '
    }
    for(let d = 4;d > a;d--){
        res += ' * '
    }
    res += '\n'
}

console.log(res)