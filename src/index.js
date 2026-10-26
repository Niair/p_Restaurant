import { loadHome } from "./home.js";
import { loadMenu } from "./menu.js";
import { loadContact } from "./contact.js";

console.log("it works");

/*
const x = document.querySelector("#thatid");
console.log(x.appendChild(document.createElement("div")));
*/

loadHome();

const buttons = document.querySelectorAll("nav-btn");

buttons.forEach((button) => {

    button.addEventListener("click", (event) => {

        if (event.target.id === "home") {
            loadHome();
        } else if (event.target.id === "menu") {
            loadMenu();
        } else if (event.target.id === "contact") {
            loadContact();
        } else {
            console.log("Unknown button clicked");
        }

    });
})