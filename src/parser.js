const axios = require('axios');
const cheerio = require('cheerio');
const fs = require('fs');
const path = require('path');
const Bachelors = {};
const Bachelorettes = {};

bachelorNames = ['Alex', 'Elliot', 'Harvey', 'Sam', 'Sebastian', 'Shane'];
bachelorettesNames = ['Abigail', 'Emily', 'Haley', 'Leah', 'Maru', 'Penny'];

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
            console.error('Nu exista date pe Wiki Stardew Valley!:', error);
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
            console.error('Nu exista date pe Wiki Stardew Valley!:', error);
        }
    }

    const mascontent = JSON.stringify({
        Bachelors: Bachelors
    }, null, 2);

    const femcontent = JSON.stringify({
        Bachelorettes: Bachelorettes
    }, null, 2);

    fs.writeFileSync('../data/bachelors.json', mascontent, 'utf-8');
    fs.writeFileSync('../data/bachelorettes.json', femcontent, 'utf-8');

}
fetchVillagerInfo();