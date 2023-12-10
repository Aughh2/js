"use strict";


function main() {
    let headerElement = document.createElement("h1");
    if (confirm("Should I calculate the square root?") == true) {
        let number = prompt("Enter a number:");
        if (number < 0) {
            headerElement.innerHTML = "The square root of a negative number is not defined";
        } else {
            headerElement.innerHTML = Math.sqrt(number);
        }
    } else {
        headerElement.innerHTML = "The square root is not calculated.";
    }

    document.body.appendChild(headerElement);
}

main();