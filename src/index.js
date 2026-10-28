import { loadHome } from "./home.js";
import { loadMenu } from "./menu.js";
import { loadContact } from "./contact.js";
import "./style.css";

const buttons = document.querySelectorAll(".nav-btn");
const content = document.querySelector("#content");


function showpage(button) {

    content.innerHTML = "";

    buttons.forEach((btn) => {
        btn.classList.remove("active");
    })

    button.classList.add("active");

    if (button.id === "homebutton") {
        loadHome();
    } else if (button.id === "menubutton") {
        loadMenu();
    } else if (button.id === "contactbutton") {
        loadContact();
    } else {
        console.log("Unknown button clicked");
    }
}

const homebtn = document.querySelector("#homebutton");
loadHome(homebtn);

buttons.forEach((button) => {

    button.addEventListener("click", () => {

        showpage(button);
    });
})