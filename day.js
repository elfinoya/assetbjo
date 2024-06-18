// My clock 2018-07-25, 00:26:00 (GMT+7)
let date = new Date(); // 2018-07-24:17:26:00 (Look like GMT+0)
const myTimeZone = 7; // my timeZone 
// my timeZone = 7h = 7 * 60 * 60 * 1000 (millisecond);
// 2018-07-24:17:26:00 = x (milliseconds)
// finally, time in milliseconds (GMT+7) = x + myTimezone 
date.setTime( date.getTime() + myTimeZone * 60 * 60 * 1000 );
// date.toISOString() = 2018-07-25, 00:26:00 (GMT+7)





//now = new Date();
//if (now.getTimezoneOffset() == 0) (a=now.getTime() + (7*60*60*1000))
//else (a=now.getTime());
//now.setTime(a);
//var tahun=now.getFullYear();
//var hari=now.getDay();
//var bulan=now.getMonth();
//var tanggal=now.getDate();
//var hariarray=new Array("Minggu","Senin","Selasa","Rabu","Kamis","Jum'at","Sabtu");
//var bulanarray=new Array("Jan","Feb","Mar","Apr","Mei","Jun","Jul","Agst","Sep","Okt","Nov","Des");
//document.write(hariarray[hari]+", "+tanggal+" "+bulanarray[bulan]+" "+tahun);
