//your JS code here. If required.
let t=document.getElementById('timer');
let d=new Date().getDate();
let m=new Date().getMonth();
let y=new Date().getFullYear()
let h=new Date().getHours();
let mi=new Date().getMinutes();
let s=new Date().getSeconds();
const ampm = h >= 12 ? 'PM' : 'AM';
t.innerText=`${d}/${m}/${y}, ${h}:${mi}:${s} ${ampm}`;