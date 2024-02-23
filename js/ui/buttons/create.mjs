
export function displayTopButton() {
    try {
        const mainContainer = document.getElementById("to-top-feed-button-container");
               
        const toTopLinkButton = document.createElement("a");
        toTopLinkButton.href = "#header-feed-page";
        toTopLinkButton.classList.add("btn", "btn-primary", "border-secondary", "secondary-font");
        toTopLinkButton.setAttribute("id", "btn-to-top");
        toTopLinkButton.textContent = "To top ";

        const arrowIcon = document.createElement("i");
        arrowIcon.classList.add("fa-solid", "fa-angle-up");

        mainContainer.appendChild(toTopLinkButton);
        toTopLinkButton.appendChild(arrowIcon);
    } catch (error) {
        console.error("Error displaying button", error.message);
    }
}



