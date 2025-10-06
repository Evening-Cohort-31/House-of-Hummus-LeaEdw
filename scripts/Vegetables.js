// Import the setter function from the transient state module
import { setVeggie } from "./Transient.js";

// Create a handler function to update with the users selection
const handleVeggieChoice = (event) => {
  if (event.target.name === "vegetable") {
    let updatedVeggieOption = parseInt(event.target.value);
    setVeggie(updatedVeggieOption);
    console.log(updatedVeggieOption);
  }
};

// Create the choice function that receives and uses the data from the database and generates
// the relevant HTML

export const choiceVeggies = async () => {
  const response = await fetch("http://localhost:8088/vegetables");
  const vegetables = await response.json();

  // The event listener...
  document.addEventListener("change", handleVeggieChoice);

  // The HTML generator
  let html = `<h2>Vegetables</h2>`;

  // Map the array and generate the html for each item
  const veggieHTML = vegetables.map((vegetable) => {
    return `<div>
                    <input
                        type="radio"
                        name="vegetable"
                        value="${vegetable.id}"
                        data-price="${vegetable.price}"/>
                            ${vegetable.type} 
                </div>`;
  });
  // Below use join and then close the html for the radio options

  html += veggieHTML.join("");
  return html;
};
