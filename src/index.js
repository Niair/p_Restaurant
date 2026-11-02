import { loadHome } from "./home.js";
import { loadMenu } from "./menu.js";
import { loadContact } from "./contact.js";
import "./style.css";

const buttons = document.querySelectorAll(".nav-btn");
const content = document.querySelector("#content");

const buttonDict = {
    homebutton: loadHome,
    menubutton: loadMenu,
    contactbutton: loadContact
}

function showpage(button) {

    content.innerHTML = "";

    buttons.forEach((btn) => {
        btn.classList.remove("active");
    })

    button.classList.add("active");

    if (buttonDict[button.id]) {
        buttonDict[button.id]();
    
    } else {
        console.log("Unknown button clicked");

    }
}

const homebtn = document.querySelector("#homebutton");
loadHome(homebtn);
homebtn.classList.add("active");

buttons.forEach((button) => {

    button.addEventListener("click", () => {

        showpage(button);
    });
})