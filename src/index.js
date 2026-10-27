import { loadHome } from "./home.js";
import { loadMenu } from "./menu.js";
import { loadContact } from "./contact.js";
import "./style.css";

console.log("it works");

/*
const x = document.querySelector("#thatid");
console.log(x.appendChild(document.createElement("div")));
*/

loadHome();

const buttons = document.querySelectorAll(".nav-btn");

console.log(buttons.length);

buttons.forEach((button) => {

    const content = document.querySelector("#content");

    button.addEventListener("click", (event) => {

        content.innerHTML = "";

        console.log(event.target.id);
        
        if (event.target.id === "homebutton") {
            loadHome();
        } else if (event.target.id === "menubutton") {
            loadMenu();
        } else if (event.target.id === "contactbutton") {
            loadContact();
        } else {
            console.log("Unknown button clicked");
        }

    });
})