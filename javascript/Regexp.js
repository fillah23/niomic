function panggilRegexp(value) {
    var ambilData = value.match(/\w/g)
    console.log(ambilData)
 }
 
 panggilRegexp("Bulan ke 1 sd ke 4");

 
function panggilRegexp1(value) {
    var ambilData = value.match(/\W/g)
    console.log(ambilData)
 }
 
 panggilRegexp1("Bulan ke 1 sd ke 4");