import { choiceEntree } from "./Entrees.js";
import { choiceVeggies } from "./Vegetables.js";
import { choiceSideDish } from "./SideDishes.js";
import { Purchases, PurchaseButton, generatePurchaseHTML } from "./Checkout.js";

export const FoodTruck = async () => {
  const entreesHTML = await choiceEntree();
  const veggieHTML = await choiceVeggies();
  const sidesHTML = await choiceSideDish();
  const purchases = await Purchases();
  const salesHTML = generatePurchaseHTML(purchases);
  const purchaseButton = PurchaseButton();

  return `
        <header class="header">
            <img src="./images/hummus.png" class="logo" />
            <h1 class="title">Laura Kathryn's House of Hummus</h1>
        </header>

        <section class="articles-container">
            <article class="entree options">${entreesHTML}</article>
            <article class="veggie options">${veggieHTML}</article>
            <article class="side options">${sidesHTML}</article>
        </section>
        
        <article class="button">${purchaseButton}</article>

        <aside class="ticket-title">
            <h2>Ticket List</h2>
            <div class="customerOrders">${salesHTML}
</div>
        </aside>

    `;
};
