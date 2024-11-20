const loadingFacts = [
    "You can visit Desert Calico!",
    "Extra luck doesn't last forever, watch TV!",
    "Scarecrows are actually scaring crows!",
    "You can unlock the Greenhouse!",
    "The Community Center holds lots of secrets!",
    "There are many mysteries in holes!",
    "Garbage is surprisingly valuable!",
    "Slimes smile in your farm!",
    "Museum is not a work of art and Gunther is neither. At least, not yet.",
    "You can carry up to 36 swords. Visit Pierre!",
    "You should stay away from the blue concrete block.",
    "Maru loves Battery Packs, Diamonds... and you ;)"
];

window.onload = async function() {
    
    await updateFact();
    function getRandomInt(min, max){
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }
    async function updateFact() {
        const fact = document.getElementById("loadingFact");

        let randIndex = getRandomInt(0, loadingFacts.length - 1);
        fact.innerHTML = loadingFacts[randIndex];

        await new Promise(resolve => setTimeout(resolve, 2000));
    }

    async function loadingScreen() {
        const ls = document.getElementsByClassName('loading')[0];
        if (ls) {
            ls.style.transition = 'opacity 0.2s ease';
            ls.style.opacity = '0';

            setTimeout(() => {
                ls.remove();
                const slimenone = document.getElementsByClassName('slime')[0];
                slimenone.style.opacity = '1';
                slimenone.style.left = String(getRandomInt(20, 60)) + 'vw';
                slimenone.style.top = String(getRandomInt(20, 50)) + 'vw';
            }, 200);
        }
    }

    const counter = document.getElementById("count");
    async function setCounter(){
        if(localStorage.count === undefined)
            {
                localStorage.count = 0;
            }
        counter.innerHTML = "Click!";
    }

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

    await updateTime();
    await setCounter();
    await loadingScreen();

    setInterval(updateTime, 1000);

    function dropSomething(item) {

        const money = document.createElement("img");
        money.classList.add("money");

        let location = new String();
        location = window.location.href;

        switch (item){
            case "money":
                if (location.includes("build.html") || location.includes("community.html") || location.includes("login.html"))
                    {   
                        money.src = "../assets/images/gold.png";
                    }
                    else
                    {
                        money.src = "assets/images/gold.png";
                    }
                    break;

            case "star":
                if (location.includes("build.html") || location.includes("community.html") || location.includes("login.html"))
                    {   
                        money.src = "../assets/images/star.png";
                    }
                    else
                    {
                        money.src = "assets/images/star.png";
                    }
                    break;

            case "music":
                if (location.includes("build.html") || location.includes("community.html") || location.includes("login.html"))
                    {   
                        money.src = "../assets/images/fluteblock.png";
                    }
                    else
                    {
                        money.src = "assets/images/fluteblock.png";
                    }
            }
    
        const randomX = Math.random() * window.innerWidth;
        money.style.left = `${randomX}px`;

        document.body.appendChild(money);

        setTimeout(() => {
            money.remove();
        }, 3000);
    }

    const button = document.getElementById("clickable");
    button.addEventListener("click", function(){
        dropSomething("money");
        localStorage.count++;
        counter.innerHTML = Number(localStorage.count);
    });

    function toggleMenuState() {
        const menu = document.getElementById('toggleMenu');
        menu.checked = !menu.checked;
    }

    document.addEventListener('keydown', function (event) {
        if (event.key.toLowerCase() === 'm') {
            toggleMenuState();
            dropSomething("star");
        }
    });

    function toggleAudio(){
        const audio = document.getElementById("audiopt");
        const audioAlert = document.getElementById("audioalert");
        const style = window.getComputedStyle(audioAlert);
        if (String(style.display) == "none")
        {
            audio.play();
            audioAlert.style.display = "flex";
        }
        else if (String(style.display) == "flex")
        {
            audio.pause();
            audioAlert.style.display = "none";
        }

    }

    document.addEventListener('keydown', function (event) {
        if (event.key.toLowerCase() === 'p'){
            toggleAudio();
            dropSomething("music");
        }
    });

    let lastInd = 0;
    let flag = false;
    function updateSlime(currentElement){
        const elementStyles = window.getComputedStyle(currentElement);
        let changeInd = getRandomInt(0, 2); 
        if (flag != true){
            while (changeInd == lastInd)
            {
                changeInd = getRandomInt(0, 2);
            }
            lastInd = changeInd;
        }
        else
        {
            changeInd = 2;
            flag = true;
        }

        let randomvaltop, randomvalleft, randomvalwidth, randomvalheigth;

        switch (changeInd){
            case 0:
                randomvalwidth = String(getRandomInt(3, 6)) + "vw";
                randomvalheigth = String(getRandomInt(3, 6)) + "vw";
                currentElement.style.setProperty('height', randomvalwidth);
                currentElement.style.setProperty('width', randomvalheigth);
                break;
            case 1:
                randomvaltop = String(getRandomInt(10, 150)) + "vh";
                randomvalleft = String(getRandomInt(10, 80)) + "vw";
                currentElement.style.setProperty('top', randomvaltop);
                currentElement.style.setProperty('left', randomvalleft);
                break;
            case 2:
                randomvaltop = String(getRandomInt(10, 150)) + "vh";
                randomvalleft = String(getRandomInt(10, 80)) + "vw";
                randomvalwidth = String(getRandomInt(3, 6)) + "vw";
                randomvalheigth = String(getRandomInt(3, 6)) + "vw";
                currentElement.style.setProperty('top', randomvaltop);
                currentElement.style.setProperty('left', randomvalleft);
                currentElement.style.setProperty('height', randomvalwidth);
                currentElement.style.setProperty('width', randomvalheigth);
                break;
            }
    }

    const slimeElement = document.getElementById("slime");
    slimeElement.addEventListener("click", function(){
        updateSlime(slimeElement);
    });
};