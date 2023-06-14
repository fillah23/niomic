<?php
echo "Belajar PHP";
echo "<h1>belajar</h1>";
print "<h1>belajar2</h1>";
printf("<h1>Belajar3</h1>");
echo "<br>";
echo "<h2>variabel dan konstanta</h2>";
$nilai1 = 23;
echo "<b>$nilai1</b>";
echo "<br>";
echo "<h2>Tipe data int</h2>";
$nilai=2000;
echo "Nilai Fillah : $nilai";
echo "<h2>Float</h2>";
$nilai_ipk=3.95;
echo "IPK fillah : $nilai_ipk";
echo "<h2>String</h2>";
$nama = "fillah";
echo "Nama saya $nama";
echo "<h2>Boolean</h2>";
$benar=true;
$salah=false;
var_dump($benar);
echo "<br>";
var_dump($salah);
echo "<h2>Array</h2>";
$mahasiswa= array("fillah","zainal","adhe","hendrik","faros","rio");
// echo "$mahasiswa[0]<br>";
// echo "$mahasiswa[5]";
$mahasiswa[6]="salsa";
print_r($mahasiswa);
echo "<h2>Data Objek</h2>";
class mahasiswa{
  public $nama;
  public $umur;
  public $tanggal_lahir;

  function get_nama(){
    return $this-nama;
  }
}
$mahasiswa_abadi =new mahasiswa;
$mahasiswa_abadi->nama="fillah";
$mahasiswa_abadi->umur=19;
$mahasiswa_abadi->tanggal_lahir="14 09 2002";
print_r($mahasiswa_abadi);
echo "<h2>Tipe data null</h2>";
$satu=0;
$dua=null;
$tiga;
var_dump($satu);
var_dump($dua);
var_dump($tiga);
echo "<h2>Tipe Casting</h2>";
$strnilai = (string) $nilai1;
var_dump($strnilai);
echo "<h2>Increment dan Decrement</h2>";
$angka= 10;
echo "Sebelum increment = $angka <br>";
$angka++;
echo "Sesudah increment = $angka<br>";
$angka--;
echo "Sesudah Decrement = $angka";
echo "<h2>Perulangan </h2>";
for($var=0;$var<10;$var++){
  echo "Belajar For <br>";
}
$var1=0;
while($var1<10){
  echo "Belajar while ".($var1+1);
  echo "<br>";
  $var1++;
}
foreach ($mahasiswa as $var2) {
  echo "$var2";
  echo "<br>";
  // code...
}

 ?>
