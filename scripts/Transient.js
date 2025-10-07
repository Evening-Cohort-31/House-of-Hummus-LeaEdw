// Set up a transient state data structure and provide the initial values

const transientState = {
    entreeId: 0,
    veggieId: 0,
    sideId: 0,
    id: 0
};

// Setter functions to modify each property of the transient state object

export const setEntree = (entreeSelection) => {
    transientState.entreeId = entreeSelection
}

export const setVeggie = (veggieSelection) => {
    transientState.veggieId = veggieSelection
}

export const setSide = (sideSelection) => {
    transientState.sideId = sideSelection
}

//  The post function for the user selections

export const saveSelections = async () => {
    // Get the current transient state... 
    const customerSelections = { ...transientState } 

    // Validate before sending
    if(
        customerSelections.entreeId === 0 ||
        customerSelections.veggieId === 0 ||
        customerSelections.sideId === 0 
    ) {
        window.alert("Please complete all selections before submitting");
        return;
    }

    const postSelections = {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },

        body: JSON.stringify(customerSelections),
    };

    // Send the data to the API

    const response = await fetch("http://localhost:8088/purchases", postSelections);

    const newOrder =  new CustomEvent("stateChanged");
    document.dispatchEvent(newOrder)

}