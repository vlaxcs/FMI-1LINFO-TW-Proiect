const axios = require('axios');
const cheerio = require('cheerio');
const fs = require('fs');
const path = require('path');
const Bachelors = {};
const Bachelorettes = {};
const nonMarriage = {};

bachelorNames = ['Alex', 'Elliot', 'Harvey', 'Sam', 'Sebastian', 'Shane'];
bachelorettesNames = ['Abigail', 'Emily', 'Haley', 'Leah', 'Maru', 'Penny'];
nonMarriageNames = ["Caroline", "Clint", "Demetrius", "Dwarf", "Evelyn", "George", "Gus", "Jas", "Jodi", "Kent", "Krobus", "Leo", "Lewis", "Linus", "Marnie", "Pam", "Pierre", "Robin", "Sandy", "Vincent", "Willy", "Wizard"];

async function fetchVillagerInfo() {
    
    for (let names of bachelorNames){
        const url = 'https://stardewvalleywiki.com/' + names;

        try {
            const {data} = await axios.get(url);
            const $ = cheerio.load(data);

            const name = $('#infoboxheader').text().trim();
            const birthday = $('#infoboxsection:contains("Birthday")').next().text().trim();
            const livesIn = $('#infoboxsection:contains("Lives In")').next().text().trim();
            const address = $('#infoboxsection:contains("Address")').next().text().trim();
            const marriageStatus = $('#infoboxsection:contains("Marriage")').next().text().trim();
            const lovedGiftImgSrc = $('#infoboxsection:contains("Loved Gifts")').next().find('span.nametemplate').first().find('img').attr('src');
            const lovedGift = $('#infoboxsection:contains("Loved Gifts")').next().find('span.nametemplate').first().text().trim();

            Bachelors[name] = {
                birthday,
                livesIn,
                address,
                marriageStatus: marriageStatus === 'Yes',
                lovedGiftImgSrc: "https://stardewvalleywiki.com" + lovedGiftImgSrc,
                lovedGift
            };

        } catch (error) {
            console.error('No data received from Wiki Stardew Valley!', error);
        }
    }

    for (let names of bachelorettesNames){
        const url = 'https://stardewvalleywiki.com/' + names;

        try {
            const {data} = await axios.get(url);
            const $ = cheerio.load(data);

            const name = $('#infoboxheader').text().trim();
            const birthday = $('#infoboxsection:contains("Birthday")').next().text().trim();
            const livesIn = $('#infoboxsection:contains("Lives In")').next().text().trim();
            const address = $('#infoboxsection:contains("Address")').next().text().trim();
            const marriageStatus = $('#infoboxsection:contains("Marriage")').next().text().trim();
            const lovedGiftImgSrc = $('#infoboxsection:contains("Loved Gifts")').next().find('span.nametemplate').first().find('img').attr('src');
            const lovedGift = $('#infoboxsection:contains("Loved Gifts")').next().find('span.nametemplate').first().text().trim();

            Bachelorettes[name] = {
                birthday,
                livesIn,
                address,
                marriageStatus: marriageStatus === 'Yes',
                lovedGiftImgSrc: "https://stardewvalleywiki.com" + lovedGiftImgSrc,
                lovedGift
            };

        } catch (error) {
            console.error('No data received from Wiki Stardew Valley!', error);
        }
    }

    for (let names of nonMarriageNames){
        const url = 'https://stardewvalleywiki.com/' + names;

        try {
            const {data} = await axios.get(url);
            const $ = cheerio.load(data);

            const name = $('#infoboxheader').text().trim();
            const birthday = $('#infoboxsection:contains("Birthday")').next().text().trim();
            const livesIn = $('#infoboxsection:contains("Lives In")').next().text().trim();
            const address = $('#infoboxsection:contains("Address")').next().text().trim();
            const marriageStatus = $('#infoboxsection:contains("Marriage")').next().text().trim();
            const lovedGiftImgSrc = $('#infoboxsection:contains("Loved Gifts")').next().find('span.nametemplate').first().find('img').attr('src');
            const lovedGift = $('#infoboxsection:contains("Loved Gifts")').next().find('span.nametemplate').first().text().trim();

            nonMarriage[name] = {
                birthday,
                livesIn,
                address,
                marriageStatus: marriageStatus === 'Yes',
                lovedGiftImgSrc: "https://stardewvalleywiki.com" + lovedGiftImgSrc,
                lovedGift
            };

        } catch (error) {
            console.error('No data received from Wiki Stardew Valley!', error);
        }
    }

    
    const mascontent = JSON.stringify(Bachelors, null, 2);
    fs.writeFileSync('../data/bachelors.json', mascontent, 'utf-8');
    console.log("Data succesfully written in bachelors.json");
    
    const femcontent = JSON.stringify(Bachelorettes, null, 2);
    fs.writeFileSync('../data/bachelorettes.json', femcontent, 'utf-8');
    console.log("Data succesfully written in bachelorettes.json");
    
    const nmcontent = JSON.stringify(nonMarriage, null, 2);
    fs.writeFileSync('../data/nonMarriageCandidates.json', nmcontent, 'utf-8');
    console.log("Data succesfully written in nonMarriageCandidates.json");
}
fetchVillagerInfo();