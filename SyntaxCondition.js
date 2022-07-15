// IF
let age = 19
// if (age >= 18) console.log(`SIM akan segera di buat`)

// IF AGE
// if (age >=18) {
//     console.log(`SIM akan segera di buat`)
// } else {
//     console.log(`Permohonan SIM di tolak`)
// }

// IF ELSE IF ELSE
let weight = 75
if (weight < 50) {
    console.log(`Mohon tingkatkan berat badan anda`)
} else if (weight >= 50 && weight <= 65) {
    console.log(`Selamat kamu di terima`)
} else {
    console.log("Kamu terlalu gemuk")
}

// IF ELSE NILAI
let nilai = '34'
if (nilai >= 85 && nilai <= 100 && nilai === Number) {
    console.log('A')
} else if (nilai >=75 && nilai <= 84 && nilai === Number) {
    console.log('B')
} else if (nilai >= 60 && nilai <= 74 && nilai === Number) {
    console.log('C')
} else if (nilai >=0 && nilai <= 59 && nilai === Number) {
    console.log('D')
} else {
    console.log("E")
}

// SWITCH CASE
let a = 1
switch (a) {
    case (1) :
        console.log(`Kamu punya 1`)
        break
    case (2) :
        console.log(`Kamu punya 2`)
        break
    case (3) :
        console.log(`Kamu punya 3`)
        break
    default :
        console.log(`Tidak jelas`)
}

let score = 75
switch (score) {
    case (score >= 85 &&  score <= 100) :
        console.log(`A`)
        break
    case (score >=75 && score <= 84) :
        console.log(`B`)
        break
    case (score >= 60 && score <= 74) :
        console.log(`C`)
        break
    case (score >=0 && score <= 59) :
        console.log(`D`)
        break
    default :
        console.log(`F`)
}