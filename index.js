function clock(){
    let hoursCard = document.querySelector(".hour")
    let minutesCard = document.querySelector(".minute")
    let secondsCard = document.querySelector(".second")
    let amPmCard = document.querySelector(".ghaura")

    let hour = new Date().getHours();
    let minute = new Date().getMinutes();
    let second = new Date().getSeconds();
    let am = "AM";

    if(hour > 12){
        hour = hour - 12;
        am = "PM";
    }

    hour = hour < 10? `0${hour}`: hour;
    minute = minute < 10? `0${minute}`: minute;
    second = second < 10? `0${second}`:second;


    hoursCard.textContent = hour;
    minutesCard.innerHTML = minute;
    secondsCard.innerHTML = second;
    amPmCard.innerHTML = am;

}

setInterval(clock, 1000)