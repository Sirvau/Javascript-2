
import { onAuth } from "../events/onAuth.mjs";

//Auth Listener
export function setAuthListener() {
    document.forms.auth.addEventListener("submit", onAuth);
}

/* export function setAuthListener() {
    const authForm = document.querySelector('.form'); 
    authForm.addEventListener("submit", onAuth);
}
 */