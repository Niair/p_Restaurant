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

        itemName.textContent = item.name;
        itemDescription.textContent = item.description;
        itemPrice.textContent = item.price;

        menuItems.appendChild(itemName);
        menuItems.appendChild(itemDescription);
        menuItems.appendChild(itemPrice);
    })

    const content = document.querySelector("#content");
    content.appendChild(heading);
    content.appendChild(menuItems);
}

export { loadMenu };