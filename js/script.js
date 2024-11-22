// Random facts during loadingScreen()
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

// ===== Utility Functions =====
// Generates a random value into an interval
function getRandomInt(min, max){
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

// Updates the fact in loading screen
async function updateFact(factIndex) {
    const fact = document.getElementById("loadingFact");

    newIndex = getRandomInt(0, loadingFacts.length - 1);
    while (factIndex == newIndex){
        newIndex = getRandomInt(0, loadingFacts.length - 1);
    }
    factIndex = newIndex;
    fact.innerHTML = loadingFacts[newIndex];

    await new Promise(resolve => setTimeout(resolve, 2000));
}

// Set up and display the loading screen
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

// Get the current time and puts it over the clock
function upDateTime() {
    const now = new Date();

    const weekDays = ['Sun.', 'Mon.', 'Tue.', 'Wed.', 'Thu.', 'Fri.', 'Sat.'];
    let currentDay = weekDays[now.getDay()];
    let currentDate = now.getDate();

    document.getElementById("cd").innerHTML = currentDay + " " + currentDate;

    let hour = now.getHours();
    let minutes = now.getMinutes();

    let timeFormat = "am";
    if (hour > 12) {
        hour = hour % 12;
        timeFormat = "pm";
    }

    minutes = minutes < 10 ? '0' + minutes : minutes;
    document.getElementById("ct").innerHTML = hour + ":" + minutes + " " + timeFormat;
}

// Update the counter
async function updateCounter(counter){
    if(localStorage.count === undefined)
        {
            localStorage.count = 0;
        }
    counter.innerHTML = "Click!";
}

// Toggle menu checked/unchecked
function toggleMenuState() {
    const menu = document.getElementById('toggleMenu');
    menu.checked = !menu.checked;
}

// Toggle audio play/pause
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

// The parameter-specified item will drop when a specified event occures 
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
    }, 2000);
}

// Updates the slime's values
let lastInd = 0;
let flag = false;
function updateSlime(currentElement){
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

// ===== User Account Management =====
// Tries to register an account into localStorage
async function register() {

    let username = document.getElementById("username").value.trim().toLowerCase();
    const password = document.getElementById("password").value.trim();
    let email = document.getElementById("email").value.trim().toLowerCase();

    const hashedPassword = await hashPassword(password);
    console.log("Hashed Password:", hashedPassword);

    validData = await checkFields(username, email, password);
    if (!validData)
    {
        alert("You must complete all fields!");
        return;
    }

    validMail = await checkMail(email);
    if (!validMail)
    {
        alert("Your email account should be 12 or more characters long and include the @ character!");
        return;
    }

    validPassword = await checkPass(password);
    if (!validPassword)
    {
        alert("Your password is weak!\nKeep in mind that your password should contains at least:\n> 8 characters\n> at least one uppercase character\n> at least one lowercase character\n> at least 1 digit\n> a special character (ex: !@#)");
        return;
    }

    let accounts = JSON.parse(localStorage.getItem('accounts'));
    if (accounts[username]) {
        alert("Sorry! There is another account registered with this username!");
        return;
    }
    
    if (Object.values(accounts).some(acc => acc.email === email)) {
        alert("Sorry! There is another account registered with this email address!");
        return;
    }

    await addAccount(username, email, hashedPassword);
    alert("Your account is now registered. You can sign in!");
}

// Tries to login into an account, without starting the AJAX session
async function loginAccount(username, email, password){
    let accounts = JSON.parse(localStorage.getItem('accounts'));
    username = username.value;
    email = email.value;
    password = password.value;
    validData = await checkFields(username, email, password);
    if (!validData)
    {
        alert("You must complete all fields!");
        return;
    }    

    const hashedPassword = await hashPassword(password);
    if (!accounts[username])
    {
        alert("Account with this username doesn't exist!");
        return;
    }
    if (accounts[username] && accounts[username].email != email)
    {
        alert("This account is not registered with your input email!");
        return;
    }
    if (accounts[username] && accounts[username].email == email && accounts[username].password != hashedPassword)
    {
        alert("All good, except the password!");
        return;
    }
    if (accounts[username] && accounts[username].email == email && accounts[username].password == hashedPassword)
    {
        alert("This account exists!");
        return;
    }
    alert("This account is not registered!");
}

// Function to generate hashed password
async function hashPassword(password) 
{
    const encoder = new TextEncoder();
    const data = encoder.encode(password);
    const hashBuffer = await crypto.subtle.digest('SHA-256', data);
    return Array.from(new Uint8Array(hashBuffer))
        .map(b => b.toString(16).padStart(2, '0'))
        .join('');
}

// Function to set a new account into localStorage
async function addAccount(username, email, password) {
    let accounts = JSON.parse(localStorage.getItem('accounts'));
    accounts[username] = { email: email, password: password };
    localStorage.setItem('accounts', JSON.stringify(accounts));
}

// Checks if all the fields are filled
async function checkFields(username, email, password) {
    if (username.trim() === "" || email.trim() === "" || password.trim() === "") {
        return false;
    }
    return true;
}

// Function which checks is an email is valid
async function checkMail(mail) {
    if (mail.includes("@") && mail.length >= 12) 
    {
        return true;
    }
    return false;
}

// Checks if password exists, in case of login attempt
async function checkPass(password){
    const minLength = 8;
    const hasUppercase = /[A-Z]/.test(password);
    const hasLowercase = /[a-z]/.test(password);
    const hasNumber = /[0-9]/.test(password);
    const hasSpecialChar = /[!@#$%^&*(),.?":{}|<>]/.test(password);
    
    if (password.length < minLength || !hasLowercase || !hasUppercase || !hasNumber || !hasSpecialChar)
    {
        return false;
    }
    return true;
}

// Load these functions only after the DOM Content is loaded
window.onload = async function() {
    
    let factIndex = getRandomInt(0, loadingFacts.length - 1); await updateFact(factIndex);
    await upDateTime(); setInterval(upDateTime, 1000);
    const counter = document.getElementById("count"); await updateCounter(counter);
    await loadingScreen();

    const button = document.getElementById("clickable");
    button.addEventListener("click", function(){
        dropSomething("money");
        localStorage.count++;
        counter.innerHTML = Number(localStorage.count);
    });

    document.addEventListener('keydown', function (event) {

        const exceptActivity = event.target.tagName.toLowerCase();
        if (exceptActivity === 'input' || exceptActivity === 'textarea') {
            return;
        }

        if (event.key.toLowerCase() === 'p'){
            toggleAudio();
            dropSomething("music");
        }

        if (event.key.toLowerCase() === 'm') {
            event.stopPropagation();
            toggleMenuState();
            dropSomething("star");
        }

    });

    const slimeElement = document.getElementById("slime");
    slimeElement.addEventListener("click", function(){
        updateSlime(slimeElement);
    });

    let logButton = document.getElementById("old");
    let regButton = document.getElementById("new");

    if (regButton) {
        regButton.addEventListener('click', (event) => {
            event.stopPropagation();
            const modButton = document.querySelector('.validate');
            if (modButton) {
                modButton.classList.add("register");
                modButton.classList.remove("validate");
                modButton.id = "register";
                modButton.innerHTML = "REGISTER";
            }
        });
    }

    if (logButton) {
        logButton.addEventListener('click', (event) => {
            event.stopPropagation();
            const modButton = document.querySelector('.register');
            if (modButton) {
                modButton.classList.add("validate");
                modButton.classList.remove("register");
                modButton.id = "login";
                modButton.innerHTML = "LOGIN";
            }
        });
    }

    const login = document.getElementById("login");
    if (login != null) {
        login.addEventListener('click', async (event) => {
            event.preventDefault();

            if (!localStorage.getItem('accounts')) {
                localStorage.setItem('accounts', JSON.stringify({}));
            }

            if (login.id === "register") {
                await register();
            } else if (login.id === "login") {
                await loginAccount(username, email, password);
            } else {
                alert(login.id + " button clicked!");
            }
        });
    }
}
