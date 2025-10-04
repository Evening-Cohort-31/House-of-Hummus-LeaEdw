// Import the setter function from the transient state module

// Create a handler function to update with the users selection

// Create the choice function that receives and uses the data from the database and generates
// the relevant HTML

export const choiceVeggies = async () => {
    const response = await fetch();
    const veggies = await response.json();

    // The event listener...

    // The HTML generator

    let html = ``

    // Map the array and generate the html for each item

    // Below use join and then close the html for the radio options

    html += veggiesHTML.join("")
    html += ``

    return html;
}