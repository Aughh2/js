"use strict";

let button = document.getElementById("start");

button.addEventListener("click", async function(event) {
    try {
        event.preventDefault();
        let value_from_input = document.getElementById("query").value;

        const proxy = 'https://users.metropolia.fi/~ilkkamtk/proxy.php?url=';
        const search = `https://api.chucknorris.io/jokes/search?query=${value_from_input}`;
        const url = proxy + encodeURIComponent(search);
        const response = await fetch(url);

        const data = await response.json();
        console.log(data);

        for (let i = 0; i < data.result.length; i++) {
            let article = document.createElement("article");
            let joke = document.createElement("p");
            joke.innerHTML = data.result[i].value;
            article.appendChild(joke);
            document.body.appendChild(article);
        }

    } catch (error) {
        console.error("Error:", error.message);
    }
});
