"use strict";

function add(x, y) {
    return x + y;
}

function subtract(x, y) {
    return x - y;
}

function divide(x, y) {
    return x/y;
}

function multiply(x, y) {
    return x * y;
}

function main() {
    let button = document.getElementById("start");
    
    button.addEventListener("click", function() {
        let num1 = parseInt(document.getElementById("num1").value);
        let num2 = parseInt(document.getElementById("num2").value);
        let resultField = document.getElementById("result");
    
        let operation = document.getElementById("operation").value;
    
        if (operation === "add") {
            resultField.innerHTML = add(num1, num2);
        } else if (operation === "sub") {
            resultField.innerHTML = subtract(num1, num2);
        } else if (operation === "multi") {
            resultField.innerHTML = multiply(num1, num2);
        } else if (operation === "div") {
            resultField.innerHTML = divide(num1, num2);
        }
    });

}

main();