// Import the setter function from the transient state module

// Create a handler function to update with the users selection

// Create the choice function that receives and uses the data from the database and generates
// the relevant HTML

export const choiceEntree = async () => {
    const response = await fetch("http://localhost:8088/entrees");
    const entrees = await response.json();

    // The event listener...

    // The HTML generator

    let html = `<h2>Entrees</h2>`

    // Map the array and generate the html for each item
    const entreesHTML = entrees.map((entree) => {
        return `<div>
                    <input 
                        type="radio"
                        name="entree"
                        value="${entree.id}"
                        data-price="${entree.price}"/>
                            
                </div>`
    })
    // Below use join and then close the html for the radio options

    html += entreesHTML.join("")
    html += ``
}