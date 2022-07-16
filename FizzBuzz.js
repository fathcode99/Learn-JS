// FizzBuzz
for(let i = 1;i <= 20;i++) {
    if (i % 3 == 0 && i % 5 == 0) {
    console.log(`FizzBuzz`)
    } else if (i % 3 == 0) {
        console.log(`Fizz`)
    } else if (i % 5 == 0) {
        console.log(`Buzz`)
    } else {
        console.log(i)
    }
}

// Ganjil Genap
for (let i = 1; i <= 10; i++) {
    if (i % 2 == 0) {
        console.log(`${i} Genap`)
    } else if (i % 2 == 1) {
        console.log(`${i} Ganjil`)
    }
}
