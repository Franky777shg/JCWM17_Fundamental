let arr = [4,2,1,5,3]

let revClone = (input) => {
    let res = input
    let a
    for(let i = 0;i < res.length;i++){
        // console.log(res[i])
        for(let j = 0;j<res.length;j++){
            if(res[j] < res[j+1]) {
                a = res[j]
                res[j] = res[j+1]
                res[j+1] = a
            }
        }
    }
    return res
}

console.log(revClone(arr))