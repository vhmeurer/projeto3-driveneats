let lunch,beverage,dessert;

function selectLunch(lunchOption) {
    const lunch = document.querySelector(".lunch .selected");

    if (lunch !== null) {
        lunch.classList.remove("selected");
        lunch.children[4].classList.add("hidden");
    }
    lunchOption.classList.add("selected");
    lunchOption.children[4].classList.remove("hidden");
    
}

function selectBeverage(beverageOption) {
    const beverage = document.querySelector(".beverage .selected");

    if (beverage !== null) {
        beverage.classList.remove("selected");
        beverage.children[4].classList.add("hidden");
    }
    beverageOption.classList.add("selected");
    beverageOption.children[4].classList.remove("hidden");
    
}

function selectDessert(dessertOption) {
    const dessert = document.querySelector(".dessert .selected");

    if (dessert !== null) {
        dessert.classList.remove("selected");
        dessert.children[4].classList.add("hidden");
    }
    dessertOption.classList.add("selected");
    dessertOption.children[4].classList.remove("hidden");
    
}