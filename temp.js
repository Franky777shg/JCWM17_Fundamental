while (true) {
    var qtyApel = +prompt(`🍎 Apel = Rp${apel.toLocaleString()}/buah. Stock = ${stokApel}. Berapa jumlah Apel yang ingin dibeli?`)
    if (qtyApel > stokApel) {
        alert(`Pembelian untuk Apel melebihi stok`)
    } else if (qtyApel <= stokApel) {
        break
    }
}

while (true) {
    var qtyAnggur = +prompt(`🍇 Anggur = Rp${anggur.toLocaleString()}/buah. Stock = ${stokAnggur}. Berapa jumlah Anggur yang ingin dibeli?`)
    if (qtyAnggur > stokAnggur) {
        alert(`Pembelian untuk Anggur melebihi stok`)
    } else if (qtyAnggur <= stokAnggur) {
        break
    }
}

while (true) {
    var qtyPisang = +prompt(`🍌 Pisang = Rp${pisang.toLocaleString()}/buah. Stock = ${stokPisang}. Berapa jumlah Pisang yang ingin dibeli?`)
    if (qtyPisang > stokPisang) {
        alert(`Pembelian untuk Pisang melebihi stok`)
    } else if (qtyPisang <= stokPisang) {
        break
    }
}

totalPrice += (apel * qtyApel) + (anggur * qtyAnggur) + (pisang * qtyPisang)

while (true) {
    let nominal = +prompt(`List belanja Anda:
    1.🍎 Apel, Rp${apel.toLocaleString()} x ${qtyApel} = Rp${(apel * qtyApel).toLocaleString()}
    2.🍇 Anggur, Rp${anggur.toLocaleString()} x ${qtyAnggur} = Rp${(anggur * qtyAnggur).toLocaleString()}
    3.🍌 Pisang, Rp${pisang.toLocaleString()} x ${qtyPisang} = Rp${(pisang * qtyPisang).toLocaleString()}
    Total belanja Anda = Rp${totalPrice.toLocaleString()}
    Tolong input nominal uang untuk pembayaran:`)

    if (nominal < totalPrice) {
        alert(`Mohon input nilai yang sesuai dengan total belanja yaitu Rp${totalPrice.toLocaleString()}`)
    } else if (nominal == totalPrice) {
        alert(`Terima Kasih`)
        break
    } else if (nominal > totalPrice) {
        alert(`Terima kasih, uang kembalian anda Rp${(nominal - totalPrice).toLocaleString()}`)
        break
    }
}