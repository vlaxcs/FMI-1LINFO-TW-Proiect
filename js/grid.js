fetch('../data/bachelors.json')
  .then(response => response.json())
  .then(bachelorsDict => {

    const bachelors = bachelorsDict;

    for (let bachelor in bachelors) {
      console.log(bachelor + ": " + bachelors[bachelor].lovedGift);
    }
  })
  .catch(error => {
    console.error('Error fetching data:', error);
  });

console.log("Data from bachelors.json loaded!");

fetch('../data/bachelorettes.json')
  .then(response => response.json())
  .then(bachelorettesDict => {

    console.log(bachelorettesDict)
    const bachelorettes = bachelorettesDict;

    for (girl in bachelorettes){
        console.log(girl, bachelorettes[girl]);
        for (key in bachelorettes[girl]){
            value = bachelorettes[girl][key];
            console.log(value);
        }
    }

  })
  .catch(error => {
    console.error('Error fetching data:', error);
  });

console.log("Data from bachelorettes.json loaded!");


console.log(characters);