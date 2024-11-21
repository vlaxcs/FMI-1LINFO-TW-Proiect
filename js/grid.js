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

function populate(chindex) {
    let gridItem = document.querySelector('#grid-div');
    const nameSpan = gridItem.querySelector('#name');
    nameSpan.textContent = names[chindex];

    gridItem = document.querySelector('#grid-div2');
    const birthdaySpan = gridItem.querySelector('#birthday');
    birthdaySpan.textContent = characters[chindex].birthday;

    const townSpan = gridItem.querySelector('#town');
    townSpan.textContent = characters[chindex].livesIn;

    const adressSpan = gridItem.querySelector('#address');
    adressSpan.textContent = characters[chindex].address;

    const marriageSpan = gridItem.querySelector('#marriage');

    if (characters[chindex].marriageStatus) {
        marriageSpan.className = 'marriageTrue';
    } else {
        marriageSpan.className = 'marriageFalse';
    }

    document.querySelector('#giftimage').src = characters[chindex].lovedGiftImgSrc;
    document.querySelector('#profilepic').src = characters[chindex].profilePic;

    const giftSpan = gridItem.querySelector("#gift span");
    giftSpan.textContent = characters[chindex].lovedGift;
}

function increaseChindex() {
    chindex++;
    if (chindex >= characters.length) {
        chindex = 0;
    }
    populate(chindex);
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