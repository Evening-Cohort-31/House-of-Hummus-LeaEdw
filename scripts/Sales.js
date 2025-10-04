export const Purchases = async () => {
    const response = await fetch("http://localhost:8088/purchases?_expand=entree&_expand=veggie&_expand=side");
    const purchases = await response.json()
    return purchases;
    };

export const generatePurchaseHTML = (purchases) => {
    const purchaseId = String(purchase.id).padStart(3, "0");
    
    const purchasesDivs = purchases.map((purchase) => {
        const { entree, veggie, side } = purchase
        const entreeOption = entree?.name
        const entreePrice = entree?.price
        const veggieOption = veggie?.type
        const veggiePrice = veggie?.price
        const sideOption = side?.title
        const sidePrice = side?.price 

        const totalCost = parseFloat(entreePrice) + parseFloat(veggiePrice) + parseFloat(sidePrice);

        return `
            <section class="purchase">
                <h3>Receipt #${purchaseId}</h3>
                    <div>Entree: ${entreeOption} ($${entreePrice})</div>
                    <div>Veggie: ${veggieOption} ($${veggiePrice})</div>
                    <div>Side: ${sideOption} ($${sidePrice})</div>
                    <div class="purchase-total">Total: ${totalCost.toFixed(2)}</div>
            </section>
        `
    });

    return purchasesDivs.join("")

 };
