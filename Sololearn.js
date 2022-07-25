// snail
// var x = 42
// var y = 0
// for (; x > 0;x--) {
//     x-= 7
//     y++
//     for (; x > 0;x-=7) {
//         x+=2
//         if (x < 7) {
//             break
//         }
//         y++
//     }
// }
// console.log(y)

// function addnumber(a, b) {
//     var c = a+b;
//     return c;
// }
// console.log(addnumber(40, 2))

var amount = 100
var rate = 1.1
function convert(amount, rate) {
    convert = amount*rate
    return convert
}

console.log(convert(amount, rate));