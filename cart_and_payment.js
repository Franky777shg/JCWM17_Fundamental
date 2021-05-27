let onEdit = (index) => {
    indexEdit = index
    showData(products)
}

let onCancel = () => {
    indexEdit = null
    showData(products)
}

let onDelete = (index) => {
    products.splice(index, 1)
    showData(products)
}

let onSave = (index) => {
    let newNama = document.getElementById("nama-edit").value
    let newHarga = document.getElementById("harga-edit").value
    let newStok = document.getElementById("stok-edit").value
    // let newId = Date.now()
    products[index].nama = newNama
    products[index].harga = newHarga
    products[index].stok = newStok
    // products[index].id = newId

    indexEdit = null
    showData(products)
}

let showCart = () => {
    let tbody = document.getElementById("table-cart").tBodies[0]
    let res = ''
    cart.forEach((item, index) => {
        if(item.qty === 0) {
            res += ''
        }
        else if(payment === true) {
            res += `
            <tr>
                <td>${item.id}</td>
                <td>${item.kate}</td>
                <td>${item.nama}</td>
                <td>${item.harga}</td>
                <td>${item.qty}</td>
                <td><button onclick="onDeleteCart(${index})" disabled>Delete</button></td>
            </tr>
            `
        } 
        else {
            res += `
            <tr>
                <td>${item.id}</td>
                <td>${item.kate}</td>
                <td>${item.nama}</td>
                <td>${item.harga}</td>
                <td>${item.qty}</td>
                <td><button onclick="onDeleteCart(${index})" >Delete</button></td>
            </tr>
            `
        }
    })
    tbody.innerHTML = res
}

let onTambah = (index) => {
    let buyProduct = { ...products[index] }

    // untuk mengecek apakah ada data product yang sama di keranjang dengan yang kita mau beli
    let ada = null
    cart.forEach(item => {
        if (item.nama === buyProduct.nama) {
            ada = 1
        }
    })
    if (ada == 1) {
        // kalau ada, maka qty kita tambah 1
        cart.forEach(item => {
            if (item.nama === buyProduct.nama) {
                item.qty += 1
            }
        })
    } else {
        // kalau tidak ada, maka kita push data baru
        buyProduct.qty = 1
        delete buyProduct.stok

        cart.push(buyProduct)
    }

    // untuk kurangi stok product jika di beli
    products[index].stok -= 1

    showData(products)
    showCart()
}

let onDeleteCart = (ind) => {
    cart[ind].qty -= 1
    showCart()

    products.forEach(item => {
        if(item.nama === cart[ind].nama) {
            item.stok += 1
        }
    })
    showData(products)
}

let onPayment = () => {
    let div = document.getElementById("trans")
    payment = true
    showCart()

    let res = ''
    cart.forEach(item => {
        let totalPerProduct = item.harga * item.qty
        totalPrice += totalPerProduct

        if(item.qty === 0) {
            res += ''
        } else {
            res += `
            <p>${item.kate} | ${item.nama} | Rp ${item.harga} X ${item.qty} = Rp ${item.harga * item.qty}</p>
            `
        }
    })

    res += `<b>Sub Total : Rp ${totalPrice}</b><br><br>`
    res += `<b>PPN : Rp ${totalPrice / 10}</b><br><br>`
    res += `<b>Total : Rp ${totalPrice + (totalPrice / 10)}</b>`
    div.innerHTML = res
}