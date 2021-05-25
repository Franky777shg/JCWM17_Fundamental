let products = [
    {
        id: 1621812363864,
        kate: "Fast Food",
        nama: "Noodle",
        harga: 3500,
        stok: 9
    },
    {
        id: 1621890331864,
        kate: "Electronic",
        nama: "Headset",
        harga: 300000,
        stok: 8
    },
    {
        id: 1621889363823,
        kate: "Cloth",
        nama: "Hoodie",
        harga: 150000,
        stok: 7
    },
    {
        id: 1621872343860,
        kate: "Fruit",
        nama: "Apple",
        harga: 10000,
        stok: 8
    }
]

class Product {
    constructor(id, kate, nama, harga, stok){
        this.id = id
        this.kate = kate
        this.nama = nama
        this.harga = harga
        this.stok = stok
    }
}

let indexEdit = null

let cart = [
    // {
    //     id: 1621889363823,
    //     kate: "Cloth",
    //     nama: "Hoodie",
    //     harga: 150000,
    //     qty: 7
    // },
    // {
    //     id: 1621872343860,
    //     kate: "Fruit",
    //     nama: "Apple",
    //     harga: 10000,
    //     qty: 8
    // }
]

let totalPrice = 0