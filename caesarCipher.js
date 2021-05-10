let caesarCipher = (str, num) => {
    let arr = []
    str.split(' ').forEach(element => {
        let a = []
        element.split('').forEach(val => {
            a.push(val.charCodeAt(0))
        })
        arr.push(a)
    });
    
    let result = []
    arr.forEach(item => {
        let a = ''
        item.forEach(element => {
            let ind
            if (element >= 65 && element <= 90) {
                if (element + num > 90) {
                    ind = 64 + ((element + num) - 90)
                } else {
                    ind = element + num
                }
            } else {
                if (element + num > 122) {
                    ind = 96 + ((element + num) - 122)
                }
                else {
                    ind = element + num
                }
            }

            a += String.fromCharCode(ind)
        })
        result.push(a)
    })
    console.log(result.join(' '))
}
caesarCipher('Zunday Zix', 3)