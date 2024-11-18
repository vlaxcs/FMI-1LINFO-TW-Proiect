import { names, characters } from './grid.js';

async function main() {
    function printRandomValues() {
        console.log("Names:", names); 
        console.log("Characters:", characters); 
    }

    function populate() {
        let chindex = 0;
        const gridItem = document.querySelector('#grid-div');

        if (!gridItem) {
            console.error("Grid item not found!");
            return;
        }

        const nameSpan = gridItem.querySelector('#name');
        if (!nameSpan) {
            console.error("#name span not found!");
            return;
        }

        // Ensure `names` has values
        if (names && names[chindex]) {
            nameSpan.textContent = names[chindex];
            console.log("Populated Name:", names[chindex]);
        } else {
            console.error("Names array is empty or undefined.");
        }
    }

    printRandomValues(); // Print names and characters to console
    populate(); // Populate the grid item
}

main();
