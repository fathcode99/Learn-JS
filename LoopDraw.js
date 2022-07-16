// *****
// Tunggu loopingnya selesai baru di console log
let res = ' '
for(let i = 0; i < 5; i++) {
    res += ' *'
}
console.log(res)

//di consol log masuk dalam looping
let result = ' '
for(let i = 0; i < 5; i++) {
    result += ' *'
    console.log(result)
}

// *
// *
// *
// *
// *

let res2 = ' '
for(let i = 0; i < 5; i++) {
    res2 += ' * \n'
}
console.log(res2)


let res3 = ''
for(let i = 0; i < 5;i++) {
    for(let j=0; j < 5; j++) {
        res3 += ' *'
    }
    res3 += '\n'
}
console.log(res3)

let res4 = ''
for(let i = 0;i < 5; i++) {
    for(let j=0; j <= i; j++) {
        res4 += ' *'
    }
    res4 += '\n'
}
console.log(res4)