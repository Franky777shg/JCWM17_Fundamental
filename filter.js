let filterNama = (value) => {
    let harga1 = document.getElementById("harga-1").value
    let harga2 = document.getElementById("harga-2").value
    let kate = document.getElementById("filter-cate").value

    // user hanya isi filter untuk nama
    if(value && !harga1 && !harga2 && !kate) {
        let filterByNama = products.filter(item => {
            return item.nama.toLowerCase().includes(value.toLowerCase())
        })
        showData(filterByNama)
    }
    // user isi filter untuk nama dan min harga
    else if(value && harga1 && !harga2 && !kate) {
        let filterByNama = products.filter(item => {
            return item.nama.toLowerCase().includes(value.toLowerCase()) && item.harga >= harga1
        })
        showData(filterByNama)
    }
    //user isi filter untuk nama dan max harga
    else if(value && !harga1 && harga2 && !kate) {
        let filterByNama = products.filter(item => {
            return item.nama.toLowerCase().includes(value.toLowerCase()) && item.harga <= harga2
        })
        showData(filterByNama)
    }
    //user isi filter untuk nama dan kate
    else if(value && !harga1 && !harga2 && kate) {
        let filterByNama = products.filter(item => {
            return item.nama.toLowerCase().includes(value.toLowerCase()) && item.kate === kate
        })
        showData(filterByNama)
    }
    //user isi filter untuk nama, min harga dan kate
    else if(value && harga1 && !harga2 && kate) {
        let filterByNama = products.filter(item => {
            return item.nama.toLowerCase().includes(value.toLowerCase()) && item.harga >= harga1 && item.kate === kate
        })
        showData(filterByNama)
    }
    //user isi filter untuk nama, min harga dan kate
    else if(value && !harga1 && harga2 && kate) {
        let filterByNama = products.filter(item => {
            return item.nama.toLowerCase().includes(value.toLowerCase()) && item.harga <= harga2 && item.kate === kate
        })
        showData(filterByNama)
    }
    //user isi filter untuk nama, min harga dan max harga
    else if(value && harga1 && harga2 && !kate) {
        let filterByNama = products.filter(item => {
            return item.nama.toLowerCase().includes(value.toLowerCase()) && item.harga >= harga1 && item.harga <= harga2
        })
        showData(filterByNama)
    }
    // user isi semuanya
    else if(value && harga1 && harga2 && kate) {
        let filterByNama = products.filter(item => {
            return item.nama.toLowerCase().includes(value.toLowerCase()) && item.harga >= harga1 && item.harga <= harga2 && item.kate === kate
        })
        showData(filterByNama)
    }

}

let filterHarga = () => {
    let nama = document.getElementById("filter-nama").value
    let harga1 = document.getElementById("harga-1").value
    let harga2 = document.getElementById("harga-2").value
    let kate = document.getElementById("filter-cate").value

    // harga min
    if(harga1 && !harga2 && !nama && !kate) {
        let filterMinHarga = products.filter(item => {
            return item.harga >= harga1
        })
        showData(filterMinHarga)
    }
    // harga maks
    else if (!harga1 && harga2 && !nama && !kate) {
        let filterMaxHarga = products.filter(item => {
            return item.harga <= harga2
        })
        showData(filterMaxHarga)
    }
    // harga min dan nama
    else if (harga1 && !harga2 && nama && !kate) {
        let filterMinHarga = products.filter(item => {
            return item.harga >= harga1 && item.nama.toLowerCase().includes(nama.toLowerCase())
        })
        showData(filterMinHarga)
    }
    // harga min dan kategori
    else if (harga1 && !harga2 && !nama && kate) {
        let filterMinHarga = products.filter(item => {
            return item.harga >= harga1 && item.kate === kate
        })
        showData(filterMinHarga)
    }
    // harga maks dan nama
    else if (!harga1 && harga2 && nama && !kate) {
        let filterMaxHarga = products.filter(item => {
            return item.harga <= harga2 && item.nama.toLowerCase().includes(nama.toLowerCase())
        })
        showData(filterMaxHarga)
    }
    // harga maks dan kate
    else if (!harga1 && harga2 && !nama && kate) {
        let filterMinHarga = products.filter(item => {
            return item.harga <= harga2 && item.kate === kate
        })
        showData(filterMinHarga)
    }
    // harga min dan harga maks
    else if (harga1 && harga2 && !nama && !kate) {
        let filterByHarga = products.filter(item => {
            return item.harga >= harga1 && item.harga <= harga2
        })
        showData(filterByHarga)
    }
    // harga min, nama, dan kate
    else if (harga1 && !harga2 && nama && kate) {
        let filterMinHarga = products.filter(item => {
            return item.harga >= harga1 && item.nama.toLowerCase().includes(nama.toLowerCase()) && item.kate === kate
        })
        showData(filterMinHarga)
    }
    // harga maks, nama, dan kate
    else if (!harga1 && harga2 && nama && kate) {
        let filterMinHarga = products.filter(item => {
            return item.harga <= harga2 && item.nama.toLowerCase().includes(nama.toLowerCase()) && item.kate === kate
        })
        showData(filterMinHarga)
    }
    // harga min, harga maks, nama
    else if (harga1 && harga2 && nama && !kate) {
        let filterByHarga = products.filter(item => {
            return item.harga >= harga1 && item.harga <= harga2 && item.nama.toLowerCase().includes(nama.toLowerCase())
        })
        showData(filterByHarga)
    }
    // harga min, harga maks, kate
    else if (harga1 && harga2 && !nama && kate) {
        let filterByHarga = products.filter(item => {
            return item.harga >= harga1 && item.harga <= harga2 && item.kate === kate
        })
        showData(filterByHarga)
    }
    else if (!harga1 && !harga2 && !nama && !kate) {
        showData(products)
    }
}

let filterKate = () => {
    let nama = document.getElementById("filter-nama").value
    let harga1 = document.getElementById("harga-1").value
    let harga2 = document.getElementById("harga-2").value
    let kate = document.getElementById("filter-cate").value

    // kate
    if (kate && !nama && !harga1 && !harga2) {
        let filterByKate = products.filter(item => {
            return item.kate === kate
        })
        showData(filterByKate)
    }
    // kate dan nama
    else if (kate && nama && !harga1 && !harga2) {
        let filterByKate = products.filter(item => {
            return item.kate === kate && item.nama.toLowerCase().includes(nama.toLowerCase())
        })
        showData(filterByKate)
    }
    // kate dan harga1
    else if (kate && !nama && harga1 && !harga2) {
        let filterByKate = products.filter(item => {
            return item.kate === kate && item.harga >= harga1
        })
        showData(filterByKate)
    }
    // kate dan harga2
    else if (kate && !nama && !harga1 && harga2) {
        let filterByKate = products.filter(item => {
            return item.kate === kate && item.harga <= harga1
        })
        showData(filterByKate)
    }
    // kate, nama, harga1
    else if (kate && nama && harga1 && !harga2) {
        let filterByKate = products.filter(item => {
            return item.kate === kate && item.nama.toLowerCase().includes(nama.toLowerCase()) && item.harga >= harga1
        })
        showData(filterByKate)
    }
    // kate, nama, harga2
    else if (kate && nama && !harga1 && harga2) {
        let filterByKate = products.filter(item => {
            return item.kate === kate && item.nama.toLowerCase().includes(nama.toLowerCase()) && item.harga <= harga2
        })
        showData(filterByKate)
    }
    // kate, harga1, harga2
    else if (kate && !nama && harga1 && harga2) {
        let filterByKate = products.filter(item => {
            return item.kate === kate && item.harga >= harga1 && item.harga <= harga2
        })
        showData(filterByKate)
    }
    // tidak filter apapun
    else if (!kate && !nama && harga1 && harga2) {
        showData(products)
    }
}

let onReset = () => {
    showData(products)
    document.getElementById("filter-nama").value = ''
    document.getElementById("harga-1").value = ''
    document.getElementById("harga-2").value = ''
    document.getElementById("filter-cate").value = ''
}