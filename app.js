const fs = require("fs");
fs.readFile("./card_data.json", "utf8", (err, jsonString) => {
    console.log(jsonString)

});

// function newCards() {

//     let request = new XMLHttpRequest();
//     request.open("GET", "card_data.json", true);
//     request.send();
//     request.onreadystatechange = (e) => {
//         quoteDataText = request.responseText;
//         let card_data = JSON.parse(request.responseText);
//         console.log(card_data.quote);

//         //Update the Page HTML
//         let quoteBoxElement = document.getElementById("cardDisplay")
//         quoteBoxElement.innerText = `"${card_data.quote}"`
//     }
// }