// Import the setter function from the transient state module
import { setSide } from "./Transient.js";

// Create a handler function to update with the users selection
const handleSideChoice = (event) => {
    if(event.target.name === "side") {
        let updatedSideOption = parseInt(event.target.value)
        setSide(updatedSideOption);
        console.log(updatedSideOption)
    }

}

// Create the choice function that receives and uses the data from the database and generates
// the relevant HTML

export const choiceSideDish = async () => {
    const response = await fetch("http://localhost:8088/sides");
    const sideDish = await response.json();

    // The event listener...
    document.addEventListener("change", handleSideChoice)

    // The HTML generator
    let html = `<h2>Side Dishes</h2>`

    // Map the array and generate the html for each item
    const sideDishHTML = sideDish.map((side) => {
        return `
                <div>
                    <input 
                        type="radio"
                        name="side"
                        value="${side.id}
                        data-price="${side.price}"/>
                            ${side.title}
                </div>
        `
    })
    // Below use join and then close the html for the radio options
    html += sideDishHTML.join("");
    return html;
}