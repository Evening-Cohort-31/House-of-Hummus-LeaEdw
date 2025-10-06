import { Purchases } from "./Sales.js"
import { choiceEntree } from "./Entrees.js"
import { choiceVeggies } from "./Vegetables.js"
import { choiceSideDish } from "./SideDishes.js"
import { saveSelections } from "./Transient.js"
import { Purchases, generatePurchaseHTML} from "./Sale.js"



export const FoodTruck = async () => {
    const entreesHTML = await choiceEntree()
    const veggieHTML = await choiceVeggies()
    const sidesHTML = await choiceSideDish()
    const salesHTML = await Purchases()

    return `
        <header class="header">
            <img src="./images/hummus.png" class="logo" />
            <h1 class="title">Laura Kathryn's House of Hummus</h1>
        </header>

        <article class="entrees">
            ${entreesHTML}
        </article>

        <article class="veggies">
            ${veggieHTML}
        </article>

        <article class="sides">
            ${sidesHTML}
        </article>

        <article>
            <button id="purchase">Purchase Combo</button>
        </article>

        <article class="customerOrders">
            <h2>Monthly Sales</h2>
            ${salesHTML}
        </article>

    `
}
