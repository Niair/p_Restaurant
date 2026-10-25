
function loadMenu() {

    const heading = document.createElement("h1");
    heading.textContent = "MENU";

    const description = document.createElement("p");
    description.textContent = "Check out our delicious menu! We offer a wide range of dishes made with the freshest ingredients and the highest quality standards.";

    const content = document.querySelector("#content");
    content.appendChild(heading);
    content.appendChild(description);
}