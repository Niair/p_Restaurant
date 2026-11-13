// import items from "./menu.json"

async function loadMenu() {

    const heading = document.createElement("h1");
    heading.textContent = "MENU";
    
    const menuItems = document.createElement("div");
    menuItems.classList.add("menu-list");

    const content = document.querySelector("#content");
    
    try {
        const response = await fetch("http://localhost:8000/menu")

        const items = await response.json()

        if (!response.ok) {
            throw new Error("Failed to fetch menu");
        }

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

        content.appendChild(heading);
        content.appendChild(menuItems);

    } catch (error) {

        console.error("Error in loading menu", error);
        content.textContent = "Unable to load menu."
    }
}

export { loadMenu };