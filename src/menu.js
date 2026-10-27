const items = [
    {
        name: "Spaghetti Carbonara",
        description: "Classic Italian pasta dish made with eggs, cheese, pancetta, and pepper.",
        price: "$12.99"
    },
    {
        name: "Margherita Pizza",
        description: "Traditional pizza topped with fresh tomatoes, mozzarella cheese, and basil.",
        price: "$10.99"
    },
    {
        name: "Caesar Salad",
        description: "Crisp romaine lettuce tossed with Caesar dressing, croutons, and Parmesan cheese.",
        price: "$8.99"
    },
    {
        name: "Grilled Salmon",
        description: "Fresh salmon fillet grilled to perfection and served with a lemon butter sauce.",
        price: "$15.99"
    },
    {
        name: "Chocolate Lava Cake",
        description: "Decadent chocolate cake with a gooey molten center, served with vanilla ice cream.",
        price: "$6.99"
    }
]


function loadMenu() {

    const heading = document.createElement("h1");
    heading.textContent = "MENU";
    
    const menuItems = document.createElement("div");
    
    items.forEach(item => {

        const itemName = document.createElement("h2");
        const itemDescription = document.createElement("p");
        const itemPrice = document.createElement("p");

        const itemContainer = document.createElement("div");

        itemName.textContent = item.name;
        itemDescription.textContent = item.description;
        itemDescription.classList.add("menu-description");
        itemPrice.textContent = item.price;
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