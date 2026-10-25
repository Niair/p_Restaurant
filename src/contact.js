function loadContact() {

    const heading = document.createElement("h1");
    heading.textContent = "CONTACT US";

    const description = document.createElement("p");

    const address = "123 Main Street, Anytown, INDIA";
    const phone = "+91 123-456-7890";
    const operatingHours = "Mon-Fri: 9am - 9pm, Sat-Sun: 10am - 8pm";

    description.textContent = `Address: ${address}\nPhone: ${phone}\nOperating Hours: ${operatingHours}`;

    const content = document.querySelector("#content");
    content.innerHTML = ""; // Clear existing content before appending new elements
    content.appendChild(heading);
    content.appendChild(description);

}

export { loadContact };