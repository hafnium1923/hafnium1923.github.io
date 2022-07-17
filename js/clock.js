const clock1 = document.querySelector("h1#clock");
const clock2 = document.querySelector("h2#clock");
const dayday = ["Sun","Mon","Tue","Wed","Thu","Fri","Sat","Sun"];
function getClock(){
    const date = new Date();
    const hours = String(date.getHours()).padStart(2,"0");
    const minutes = String(date.getMinutes()).padStart(2,"0");
    const seconds = String(date.getSeconds()).padStart(2,"0");
    const year = String(date.getFullYear());
    const month = String(date.getDate() + 1);
    const day = String(date.getDate());
    const word = dayday[date.getDay()];

    clock1.innerText =`${hours} : ${minutes} : ${seconds}`;
    clock2.innerText = `${year}Y ${month}M ${day}D Today is ${word} `
}

getClock();
setInterval(getClock,1000);