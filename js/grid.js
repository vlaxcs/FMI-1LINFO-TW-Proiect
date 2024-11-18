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

async function main() {
    await AjaxBachelors();
    await AjaxBachelorettes();
    await AjaxNMCandidates();

    function populate(chindex) {
        let gridItem = document.querySelector('#grid-div');
        const nameSpan = gridItem.querySelector('#name');
        nameSpan.textContent = names[chindex];

        gridItem = gridItem.nextElementSibling;
        const birthdaySpan = gridItem.querySelector('#birthday');
        birthdaySpan.textContent = characters[chindex].birthday;

        const townSpan = gridItem.querySelector('#town');
        townSpan.textContent = characters[chindex].livesIn;

        const adressSpan = gridItem.querySelector('#address');
        adressSpan.textContent = characters[chindex].address;

        const marriageSpan = gridItem.quertSelector('#marriage');
        if (characters[chindex]) 
        {
            gridItem.classList.add('marriageTrue');
        }
        else
        {
            gridItem.classList.add('marriageFalse');
        } 
    }
    populate(0);
}

main();