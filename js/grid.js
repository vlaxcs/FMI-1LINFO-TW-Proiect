window.onload = function() {

    fetch('../data/bachelors.json')
    .then(response => response.json())
    .then(data => {
      console.log(data.name);
      console.log(data.age);
    })
    .catch(error => {
      console.error('Error fetching data:', error);
    });

var characters ={}

function addCharacters(characters, name, birthday, town, adress, isMarried, lovedGift) {
    characters[name] = {
        birthday: birthday,
        town: town,
        adress: adress,
        isMarried: isMarried,
        lovedGift: lovedGift
    };
}

addCharacters(characters, "Alex", "Summer 13", "Pelican Town", "1 River Road", "Yes", "Complete Breakfast")

for (let key in characters){
    console.log(key);
    console.log(characters[key]);
}

};