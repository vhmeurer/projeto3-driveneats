let chosenLunch,chosenBeverage,chosenDessert;

function selectLunch(lunchOption) {
    const lunch = document.querySelector(".lunch .selected");

    if (lunch !== null) {
        lunch.classList.remove("selected");
        lunch.children[4].classList.add("hidden");
    }
    lunchOption.classList.add("selected");
    lunchOption.children[4].classList.remove("hidden");
    chosenLunch = lunchOption.children[1].innerHTML;
    console.log(chosenLunch);
    checkout();
}

function selectBeverage(beverageOption) {
    const beverage = document.querySelector(".beverage .selected");

    if (beverage !== null) {
        beverage.classList.remove("selected");
        beverage.children[4].classList.add("hidden");
    }
    beverageOption.classList.add("selected");
    beverageOption.children[4].classList.remove("hidden");
    chosenBeverage = beverageOption.children[1].innerHTML;
    console.log(chosenBeverage);
    checkout();
}

function selectDessert(dessertOption) {
    const dessert = document.querySelector(".dessert .selected");

    if (dessert !== null) {
        dessert.classList.remove("selected");
        dessert.children[4].classList.add("hidden");
    }
    dessertOption.classList.add("selected");
    dessertOption.children[4].classList.remove("hidden");
    chosenDessert = dessertOption.children[1].innerHTML;
    console.log(chosenDessert);
    checkout();
}

function checkout (){
    if (chosenLunch && chosenBeverage && chosenDessert) {
        const button = document.querySelector("button");
        button.innerHTML = "Fechar Pedido";
        button.style.backgroundColor = "#32B72F";
    }
}