// forEach => untuk me-looping isi array
let arr = [`banana`,`orange`, `apple`]
arr.forEach(item => {
    console.log(item)
})

// forEach 2 dimention
let arr2 = [[`Apple`, 10], [`Anggur`, 15]]
arr2.forEach(item => {
    item.forEach(item2 =>{
        console.log(item2)
    })
})

// map untuk merubah data di dalam array 
let arr3 = [1,2,3,4,5].map(item => {
    return item * 2
})
console.log(arr3)

let arr4 = [1,2,3,4,5].map((item,index) => {
    if(index % 2 !== 0) {
        return item * 2
    } else {
        return item
    }
})
console.log(arr4)

// Agar agar data original tidak terganti tapi menghasilkan data yg berbeda
let arr5 = [1,2,3,4,5]
let newArr5 =arr5.map((item,index) => {
    if(index % 2 !== 0) {
        return item * 2
    } else {
        return item
    }
})
console.log(arr5)
console.log(newArr5)

// filter => untuk menyaring data di dalam Array
let arr6 = [`car`, `fan`, `mouse`, `monitor`]
let newArr6 = arr6.filter(item => { 
    return item.includes(`a`)
})
console.log(newArr6)