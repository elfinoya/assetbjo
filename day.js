now = new Date();
if (now.getTimezoneOffset() == 0) (a=now.getTime() + (7*60*60*1000))
else (a=now.getTime());
now.setTime(a);
var tahun=now.getFullYear()
var hari=now.getDay()
var bulan=now.getMonth()
var tanggal=now.getDate()
var hariarray=new Array("Minggu","Senin","Selasa","Rabu","Kamis","Jum'at","Sabtu")
var bulanarray=new Array("Jan","Feb","Mar","Apr","Mei","Jun","Jul","Agst","Sep","Okt","Nov","Des")
document.write(hariarray[hari]+" "+tanggal+" "+bulanarray[bulan]+" "+tahun)
