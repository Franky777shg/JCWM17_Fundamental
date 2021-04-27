let totalHari = 365,
    tahun = Math.floor(totalHari / 360),
    sisaTahun = totalHari % 360,
    bulan = Math.floor(sisaTahun / 30),
    sisaBulan = sisaTahun % 30,
    minggu = Math.floor(sisaBulan / 7),
    hari = sisaBulan % 30

console.log(`${tahun} Tahun, ${bulan} Bulan, ${minggu} Minggu, ${hari} Hari`)