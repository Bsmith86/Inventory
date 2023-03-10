console.log("Display Page");

let containerElement = document.getElementById('container')
let homeLink = document.getElementById('home')

homeLink.addEventListener('click', () => {
    // change HTML files (from index to display_food.html)
    window.location.href = "../index.html"
})

const getData = async () => {
    let data = await fetch("/get_data");
    data.json().then((parsedData) => {
        console.log(parsedData); // array of objects
        // map through and put in HTML
        // push each individual one,  or push an array of HTML 
        parsedData.forEach((object) => {
            // if not ready to eat- red text
            let pTag = document.createElement("p"); // <p></p>
            pTag.textContent = object.name + ", " + " Price: " + object.price + ", " + "In Stock: " + object.inventory; // <p>apple</p>
    
            containerElement.appendChild(pTag);
        })
    })
}

getData()