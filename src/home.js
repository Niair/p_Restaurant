
function loadHome() {

    heading = document.createElement("h1");
    heading.textContent = "HOME PAGE";

    bodydescribe = document.createElement("h1");
    bodydescribe.textContent = "Welcome to our restaurant! we have a great variety of food and drinks to choose from. Our chefs are highly skilled and use only the freshest ingredients to create delicious meals that will satisfy your taste buds. Come and experience our warm and inviting atmosphere, where you can relax and enjoy a memorable dining experience with friends and family.";

    content = document.querySelector("#content");
    content.appendChild(heading);
    content.appendChild(bodydescribe);

}

export { loadHome };