let chosenLunch,chosenBeverage,chosenDessert,lunchPrice,beveragePrice,dessertPrice;

function selectLunch(lunchOption) {
    const lunch = document.querySelector(".lunch .selected");

    if (lunch !== null) {
        lunch.classList.remove("selected");
        lunch.children[4].classList.add("hidden");
    }
    lunchOption.classList.add("selected");
    lunchOption.children[4].classList.remove("hidden");
    chosenLunch = lunchOption.children[1].innerHTML;
    lunchPrice = lunchOption.children[3].innerHTML;
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
    beveragePrice = beverageOption.children[3].innerHTML;
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
    dessertPrice = dessertOption.children[3].innerHTML;
    checkout();
}

function checkout (){
    if (chosenLunch && chosenBeverage && chosenDessert) {
        const button = document.querySelector("button");
        button.innerHTML = "Fechar Pedido";
        button.style.backgroundColor = "#32B72F";
        button.removeAttribute("disabled");
    }
}

function orderCheckout() {
    let price = parseFloat (lunchPrice.replace("R$ ","").replace(",",".")) + parseFloat (beveragePrice.replace("R$ ","").replace(",",".")) + parseFloat (dessertPrice.replace("R$ ","").replace(",","."));
    price = price.toFixed(2);

    let orderMessage = `Olá, gostaria de fazer o pedido:
    - Prato: ${chosenLunch}
    - Bebida: ${chosenBeverage}
    - Sobremesa: ${chosenDessert}
    Total: R$ ${price}`;
   
    let encodedMessage = encodeURIComponent(orderMessage);
    let whatsappMessage = `https://wa.me/5532991325938?text=${encodedMessage}`;
    window.open(whatsappMessage, "_blank");
}