// // snail
// // var x = 42
// // var y = 0
// // for (; x > 0;x--) {
// //     x-= 7
// //     y++
// //     for (; x > 0;x-=7) {
// //         x+=2
// //         if (x < 7) {
// //             break
// //         }
// //         y++
// //     }
// // }
// // console.log(y)

// // function addnumber(a, b) {
// //     var c = a+b;
// //     return c;
// // }
// // console.log(addnumber(40, 2))

// var amount = 100
// var rate = 1.1
// function convert(amount, rate) {
//     convert = amount*rate
//     return convert
// }

// console.log(convert(amount, rate));

// function contact(name, number) {
//     this.name = name;
//     this.number = number;
// }

// var a = new contact("David", 12345);
// var b = new contact("Amy", 987654321);
// // la.name + `: ` + a.number);

// print(a.name + `: ` + a.number);

// console.log(a)
// var date = new Date()
// var date = new Date();
// console.log(date.getMinutes())

function main() {
    var increase = 9;
    var prices = [98.99, 15.2, 20, 1026];
    
    var count = new Array();
    for (i=0; i < prices.length; i++) {
        count[i] = prices[i] + increase
    }
    console.log(count)
}
// main()

// let greeting = () => {
//     let name1 = 'Anton '
//     let name2 = 'Andi'
//     let namaLengkap = name1 + name2

//     return namaLengkap
// }

// console.log(greeting())