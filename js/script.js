window.onload = function() {
function updateTime() {
    const now = new Date();

    const daysOfWeek = ['Sun.', 'Mon.', 'Tue.', 'Wed.', 'Thu.', 'Fri.', 'Sat.'];
    let dayOfWeek = daysOfWeek[now.getDay()];
    let day = now.getDate();

    document.getElementById("cd").innerHTML = dayOfWeek + " " + day;

    let hour = now.getHours();
    let minutes = now.getMinutes();

    let timeFormat = "am";
    if (hour >= 12) {
        if (hour > 12) {
            hour = hour % 12;
        }
    }
    minutes = minutes < 10 ? '0' + minutes : minutes;
    document.getElementById("ct").innerHTML = hour + ":" + minutes + " " + timeFormat;
}

updateTime();
setInterval(updateTime, 1000);

let count = 0;
const button = document.getElementById("clickable");
const counter = document.getElementById("count");

function dropMoney() {

    const money = document.createElement("img");
    money.classList.add("money");

    let location = new String();
    location = window.location.href;
    if (location.includes("build.html") || location.includes("community.html"))
    {
       money.src = "../assets/images/gold.png";
    }
    else
    {
        money.src = "assets/images/gold.png";
    }
   

    const randomX = Math.random() * window.innerWidth;
    money.style.left = `${randomX}px`;

    document.body.appendChild(money);

    setTimeout(() => {
        money.remove();
    }, 3000);
}

button.addEventListener("click", function(){
    dropMoney();
    count++;
    counter.innerHTML = count;
});
};
