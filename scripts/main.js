import { FoodTruck } from "./FoodTruck.js";

const mainContainer = document.querySelector("#container");

const renderAllHTML = async () => {
  mainContainer.innerHTML = await FoodTruck();
};

document.addEventListener("stateChanged", (event) => {
  console.log("State of the data has changed... regenerating HTML.");
  renderAllHTML();
});


  renderAllHTML();
