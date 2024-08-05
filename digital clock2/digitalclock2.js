let dateTime2 = new Date();
const months = ["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"] 
const days = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"] 

let dt = dateTime2.getDate();
let d = days[dateTime2.getDay()];
let y = dateTime2.getFullYear();
let m = months[dateTime2.getMonth()];

console.log(dt);
console.log(m);
console.log(y);
console.log(d);

document.getElementById("demo").innerHTML = dt + "/" + m + "/" +y + " " + d

function times(){
    let dateTime1 = new Date();

    let hr = dateTime1.getHours();
    let min = zero(dateTime1.getMinutes());
    let sec = zero(dateTime1.getSeconds());
    if(hr>12){
        hr= hr-12;
        document.getElementById("ampm").innerHTML = "PM"
    }
    else{
        document.getElementById("ampm").innerHTML = "AM"
    }
    document.getElementById("hours").innerHTML = zero(hr);
    document.getElementById("mins").innerHTML = min;
    document.getElementById("secs").innerHTML = sec;
}
function zero(num){
    return num<10 ? "0"+num : num;

}
setInterval(times,1000)
