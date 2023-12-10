"use strict";

function task2() {
    let l1 = document.createElement("li");
    l1.innerHTML = "First item";
    
    let l2 = document.createElement("li");
    l2.innerHTML = "Second item";
    
    let l3 = document.createElement("li");
    l3.innerHTML = "Third item";
    
    let ul = document.getElementById("target");
    
    ul.appendChild(l1);
    ul.appendChild(l2);
    ul.appendChild(l3);
    
    document.getElementsByTagName("li")[1].className = "my-item";    
}

task2();