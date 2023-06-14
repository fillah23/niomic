function tugas25(){
    var angka = [2, 39, 76, 50, 9, 7, 41, 2, 24, 1, 16 ];
    console.log("Sebelum :",angka.toString());

    angka = angka.sort();
    console.log("Ascending :",angka.toString());

    angka = angka.reverse();
    console.log("Descending :",angka.toString());

    const filter = angka.filter(angka =>{
        return angka > 10;
    });
    console.log("Filter :",filter.toString());
}
tugas25();