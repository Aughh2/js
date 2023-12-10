"use strict";

let button = document.getElementById("start");

button.addEventListener("click", async function clicked() {
    try {
        let value_from_input = document.getElementById("query").value;
        console.log(value_from_input);
        const proxy = 'https://users.metropolia.fi/~ilkkamtk/proxy.php?url=';
        const search = `https://api.chucknorris.io/jokes/search?query=${value_from_input}`;
        const url = proxy + encodeURIComponent(search);
        const response = await fetch(url);

        const data = await response.json();
        console.log(data);

        
    } catch (error) {
        console.error("Error:", error.message);
    }
});
