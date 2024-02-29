
import { onAuth } from "../events/onAuth.mjs";



//Auth Listener
export function setAuthListener() {
    const forms = document.querySelector("form");
    forms.addEventListener("submit", onAuth);

}