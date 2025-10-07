import { saveSelections } from "./Transient.js";

// This module will give functionality to the Purchase Combo Button

const handleSelectionSubmission = (clickEvent) => {
  if (clickEvent.target.id === "purchase-button") {
    saveSelections();
    console.log("Button Clicked");
  }
};

export const PurchaseButton = () => {
  document.addEventListener("click", handleSelectionSubmission);
  return `<button id="purchase-button">Purchase Combo</button>
`;
};

export const Purchases = async () => {
  const response = await fetch(
    "http://localhost:8088/purchases?_expand=entree&_expand=veggie&_expand=side"
  );
  const purchases = await response.json();
  return purchases;
};

export const generatePurchaseHTML = (purchase) => {
  const purchasesDivs = purchase.map((purchase) => {
    let purchaseId = String(purchase.id).padStart(3, "0");

    const { entree, veggie, side } = purchase;
    const entreeOption = entree?.name;
    const entreePrice = entree?.price;
    const veggieOption = veggie?.type;
    const veggiePrice = veggie?.price;
    const sideOption = side?.title;
    const sidePrice = side?.price;

    const totalCost =
      parseFloat(entreePrice) + parseFloat(veggiePrice) + parseFloat(sidePrice);

    return `
            <section class="purchase">
                <h3>Receipt #${purchaseId}</h3>
                    <div class="receipt-items">
                        <div>Entree: ${entreeOption}</div><div class="price">$${entreePrice}</div>
                        <div>Veggie: ${veggieOption}</div><div class="price">$${veggiePrice}</div>
                        <div>Side: ${sideOption}</div><div class="price">$${sidePrice}</div>
                        <div class="purchase-total">Total:</div><div class="price">$${totalCost.toFixed(2)}</div>
                    </div>
            </section>
        `;
  });

  return purchasesDivs.join("");
};
