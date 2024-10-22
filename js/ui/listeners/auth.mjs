import { onAuth } from "../events/onAuth.mjs";

// Auth Listener
export function setAuthListener() {
    const form = document.querySelector("form");
    
    if (form) {  
        form.addEventListener("submit", onAuth);
    } else {
        console.error("Form element not found on this page");
    }
}
