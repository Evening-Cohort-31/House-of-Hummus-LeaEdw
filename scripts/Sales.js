export const Purchases = async () => {
    const purchases = await fetch("http://localhost:8088/purchases?_expand=entree&_expand=veggie&_expand=side").then(res => res.json())

    let purchasesDivs = purchases.map((purchase) => {
        let purchaseId = String(purchase.id).padStart(3, "0");

        const entreeOption = purchase.entree?.name || "Something went wrong...";
        const entreePrice = purchase.entree?.price || "Something went wrong...";
        const veggieOption = purchase.veggie?.type || "Something went wrong...";
        const veggiePrice = purchase.veggie?.price || "Something went wrong...";
        const sideOption = purchase.side?.title || "Something went wrong...";
        const sidePrice = purchase.side?.price || "Something went wrong...";

        const totalCost = entreePrice + veggiePrice + sidePrice;

        return `
            <section class="purchase>
                <h3>Receipt #${purchaseId}</h3>
                    <div>${entreeOption}</div>
                    <div>${veggieOption}</div>
                    <div>${sideOption}</div>
                    <div>${totalCost}</div>
            </section>
        `
    });

    purchasesDivs = purchasesDivs.join("")

    return purchasesDivs
}

