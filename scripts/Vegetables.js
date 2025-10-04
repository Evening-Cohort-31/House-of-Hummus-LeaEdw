// Import the setter function from the transient state module
import { setVeggie } from "./Transient.js";

// Create a handler function to update with the users selection
const handleVeggieChoice = (event) => {
  if (event.target.name === "veggie") {
    let updatedVeggieOption = parseInt(event.target.value);
    setVeggie(updatedVeggieOption);
    console.log(updatedVeggieOption);
  }
};

// Create the choice function that receives and uses the data from the database and generates
// the relevant HTML

export const choiceVeggies = async () => {
  const response = await fetch("http://localhost:8088/vegetables");
  const veggies = await response.json();

  // The event listener...
  document.addEventListener("change", handleVeggieChoice);

  // The HTML generator
  let html = `<h2>Veggies</h2>`;

  // Map the array and generate the html for each item
  const veggieHTML = veggies.map((veggie) => {
    return `<div>
                    <input
                        type="radio"
                        name="veggie"
                        value="${veggie.id}"
                        data-price="${veggie.price}"/>
                            ${veggie.type} 
                </div>`;
  });
  // Below use join and then close the html for the radio options

  html += veggieHTML.join("");
  return html;
};
