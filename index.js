let timeEle = document.querySelectorAll(".times")

let Day = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday"
]

let Month = [
    "January",
    "Ferbruary",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
]

setInterval(() => {
    let date = new Date;
    timeEle[0].innerHTML = Day[date.getDay()];
    timeEle[1].innerHTML = date.getHours();
    timeEle[2].innerHTML = date.getMinutes();
    timeEle[3].innerHTML = date.getSeconds();
    timeEle[4].innerHTML = date.getDate();
    timeEle[5].innerHTML = Month[date.getMonth()];
    timeEle[6].innerHTML = date.getFullYear();
}, 1000)


let background = document.querySelector(".containerClock")
let handleBg = document.querySelector(".btnChangeBg")

handleBg.addEventListener("click", () => {
    let randomBg = Math.floor(Math.random()*10)+1;
    background.style.backgroundImage = 'url(Na'+randomBg+'.jpeg)'
})

let handleVlt = document.querySelector(".btnVlt")
let vltEle = document.querySelector(".vlt")

handleVlt.addEventListener("click", () => {
    background.style.display = "none";
    vltEle.style.display = "block";
    setInterval(() => {
        let rd1 = Math.floor(Math.random()*256);
        let rd2 = Math.floor(Math.random()*256);
        let rd3 = Math.floor(Math.random()*256);
        vltEle.style.color = 'rgb('+rd1+','+rd2+','+rd3+')'
    }, 500)
    
})