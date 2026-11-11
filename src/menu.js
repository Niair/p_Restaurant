import items from "./menu.json"

function loadMenu() {

    const heading = document.createElement("h1");
    heading.textContent = "MENU";
    
    const menuItems = document.createElement("div");
    menuItems.classList.add("menu-list");
    
    items.forEach(item => {

        const itemName = document.createElement("h2");
        const itemDescription = document.createElement("p");
        const itemPrice = document.createElement("p");

        const itemContainer = document.createElement("div");

        itemName.textContent = item.name;
        itemDescription.textContent = item.description;
        itemDescription.classList.add("menu-description");
        itemPrice.textContent = `₹${item.price}`;
        itemPrice.classList.add("menu-price");

        itemContainer.classList.add("menu-item");

        itemContainer.appendChild(itemName);
        itemContainer.appendChild(itemDescription);
        itemContainer.appendChild(itemPrice);

        menuItems.appendChild(itemContainer);
    })

    const content = document.querySelector("#content");
    content.appendChild(heading);
    content.appendChild(menuItems);
}

export { loadMenu };