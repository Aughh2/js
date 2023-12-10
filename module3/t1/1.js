"use strict";

function addHTML() {
    let html = `<li>First item</li>
    <li>Second item</li>
    <li>Third item</li>`
    document.getElementById("target").innerHTML = html;
    document.querySelector("#target").className = "my-list";
}

addHTML();