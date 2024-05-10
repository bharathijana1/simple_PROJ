/*
const date = new Date();
const curdate = date.getDate();
const month = date.getMonth();
const year = date.getFullYear();
const hours = date.getHours();
const mins = date.getMinutes();
const sec = date.getSeconds();
document.getElementById("clock").innerHTML = hours + ":" + mins + ":" + sec; 
console.log("current date and time: " + date);
console.log("current date: " + curdate);
console.log("current month starys from 0-11: " + month);
console.log("current year: " + year);
console.log("current hours: " + hours);
console.log("current minutes: " + mins);
console.log("current seconds: " + sec);
*/
function digitalclock(){
const date = new Date();
const hours = date.getHours();
const mins = date.getMinutes();
const sec = date.getSeconds();
document.getElementById("clock").innerHTML = hours + "h:" + mins + "m:" + sec + "s"; 
setTimeout(digitalclock,1000);

if(mins<10){
    document.getElementById("clock").innerHTML = hours + "h:" + "0" + mins + "m:" + sec + "s"; 
    
}
if(sec<10){
    document.getElementById("clock").innerHTML = hours + "h:" + "0" + mins + "m:" + "0" + sec + "s"; 
    
}






}
