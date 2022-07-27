let products = [
    {
        id : 1234567890,
        kate : "Fast Food",
        nama : "Noodle",
        harga : 3500,
        stok :9
    },
    {
        id : 1234567891,
        kate : "Electronic",
        nama : "Headset",
        harga : 300000,
        stok : 8
    },
    {
        id : 1234567892,
        kate : "Cloth",
        nama : "Hoodie",
        harga : 150000,
        stok : 7
    },
    {
        id : 1234567893,
        kate : "Fruit",
        nama : "Apple",
        harga : 10000,
        stok : 8
    }
]

class Product {
    constructor(id, kate, nama, harga, stok) {
        this.id = id
        this.kate = kate
        this.nama = nama
        this.harga = harga
        this.stok = stok
    }
}

let indexEdit = null

let cart = []

let totalPrice = 0