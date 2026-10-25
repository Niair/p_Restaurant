import { loadHome, loadMenu, loadContact } from "./home.js";

console.log("it works");

/*
const x = document.querySelector("#thatid");
console.log(x.appendChild(document.createElement("div")));
*/

loadHome();

buttons = document.querySelectorAll("nav-btn");

buttons.addEventListener("click", (event) => {

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

loadMenu();
loadContact();