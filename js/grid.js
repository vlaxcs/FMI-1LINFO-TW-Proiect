let chindex = 0;
let characters = [];
let names = [];

async function AjaxBachelors() {
    try {
        const response = await fetch('../data/bachelors.json');
        const bachelorsDict = await response.json();

        for (let key in bachelorsDict) {
            characters.push(bachelorsDict[key]);
            names.push(key);
        }

        console.log("Data from bachelors.json loaded!");
    } catch (error) {
        console.error('Error fetching data from bachelors.json:', error);
    }
}

async function AjaxBachelorettes() {
    try {
        const response = await fetch('../data/bachelorettes.json');
        const bachelorettesDict = await response.json();

        for (let key in bachelorettesDict) {
            characters.push(bachelorettesDict[key]);
            names.push(key);
        }

        console.log("Data from bachelorettes.json loaded!");
    } catch (error) {
        console.error('Error fetching data from bachelorettes.json:', error);
    }
}

async function AjaxNMCandidates() {
    try {
        const response = await fetch('../data/nonMarriageCandidates.json');
        const nmcandidatesDict = await response.json();

        for (let key in nmcandidatesDict) {
            characters.push(nmcandidatesDict[key]);
            names.push(key);
        }

        console.log("Data from nonMarriageCandidates.json loaded!");
    } catch (error) {
        console.error('Error fetching data from nonMarriageCandidates.json:', error);
    }
}

async function updateGrid(nameSpan, birthdaySpan, townSpan, adressSpan, marriageSpan, giftSpan){
    birthdaySpan.textContent = characters[chindex].birthday;
    townSpan.textContent = characters[chindex].livesIn;
    adressSpan.textContent = characters[chindex].address;
    if (characters[chindex].marriageStatus) {
        marriageSpan.className = 'marriageTrue';
    } else {
        marriageSpan.className = 'marriageFalse';
    }

    document.querySelector('#giftimage').src = characters[chindex].lovedGiftImgSrc;
    giftSpan.textContent = characters[chindex].lovedGift;
}

function populate(chindex) {
    let gridItem = document.querySelector('#grid-div');
    const nameSpan = gridItem.querySelector('#name');
    document.querySelector('#profilepic').src = characters[chindex].profilePic;
    nameSpan.textContent = names[chindex];
    
    gridItem = document.querySelector('#grid-div2');
    const birthdaySpan = gridItem.querySelector('#birthday');
    const townSpan = gridItem.querySelector('#town');
    const adressSpan = gridItem.querySelector('#address');
    const marriageSpan = gridItem.querySelector('#marriage');
    const giftSpan = gridItem.querySelector("#gift span");
    updateGrid(nameSpan, birthdaySpan, townSpan, adressSpan, marriageSpan, giftSpan);
}

async function increaseChindex() {
    chindex++;
    if (chindex >= characters.length) {
        chindex = 0;
    }
    await populate(chindex);
}

async function eventButton(){
    const nextButton = document.getElementById('nextbutton');
    if (nextButton) {
        nextButton.addEventListener('click', increaseChindex);
    } else {
        console.error('Next button not found');
    }
}

async function main() {
    await AjaxBachelors();
    await AjaxBachelorettes();
    await AjaxNMCandidates();
    await eventButton();

    populate(0);
}

document.addEventListener('DOMContentLoaded', async () => {
    await main();
});