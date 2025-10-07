// Import the setter function from the transient state module
import { setEntree } from "./Transient.js"

// Create a handler function to update with the users selection
const handleEntreeChoice = (event) => {
    if(event.target.name === "entree") {
        let updatedEntreeOption = parseInt(event.target.value)
        setEntree(updatedEntreeOption)
        console.log(updatedEntreeOption)
    }
}

// Create the choice function that receives and uses the data from the database and generates
// the relevant HTML

export const choiceEntree = async () => {
    const response = await fetch("http://localhost:8088/entrees");
    const entrees = await response.json();
    
    // The event listener...
    document.addEventListener("change", handleEntreeChoice)

    // The HTML generator
    let html = `<h2>Entrees</h2>`

    // Map the array and generate the html for each item
    const entreesHTML = entrees.map((entree) => {
        return `<div>
                    <input 
                        type="radio"
                        class="choices"
                        name="entree"
                        value="${entree.id}"
                        data-price="${entree.price}"/>
                            ${entree.name}
                </div>`
    })

    // Below use join and then close the html for the radio options
    html += entreesHTML.join("")
    return html;
};