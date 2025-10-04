export const Purchases = async () => {
    const purchases = await fetch("http://localhost:8088/purchase").then(res => res.json())

    let purchasesDivs = purchases.map()

    purchasesDivs = purchasesDivs.join("")

    return purchasesDivs
}

