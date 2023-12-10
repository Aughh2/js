"use strict";

function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}

function getHouseName(number) {
    switch (number) {
        case 0:
            return "Gryffindor";
            break;
        case 1:
            return "Slytherin";
            break;
        case 2:
            return "Hufflepuff";
            break;
        case 3:
            return "Ravenclaw";
            break;
    }
}
function main() {
    let name = prompt("Enter your name");
    alert(`${name}, you are ${getHouseName(getRandomInt(4))}.`);
}

main();