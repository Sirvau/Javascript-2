/* 
import { onAuth } from "../events/onAuth.mjs";

//Auth Listener
export function setAuthListener() {
    document.forms.auth.addEventListener("submit", onAuth);
}
 */
/* export function setAuthListener() {
    const authForm = document.querySelector('.form'); 
    authForm.addEventListener("submit", onAuth);
}
 */

/* 
import { onAuth } from "../events/onAuth.mjs";

// Auth Listener for Login Form
export function setLoginAuthListener() {
    const loginForm = document.querySelector("#log-in");
    if (loginForm) {
        loginForm.addEventListener("submit", (event) => {
            onAuth(event, "login"); // Pass "login" as actionType
        });
    } else {
        console.error("Login form not found!");
    }
}

// Auth Listener for Register Form
export function setRegisterAuthListener() {
    const registerForm = document.querySelector("#register-form"); // Replace with the appropriate id
    if (registerForm) {
        registerForm.addEventListener("submit", (event) => {
            onAuth(event, "register"); // Pass "register" as actionType
        });
    } else {
        console.error("Register form not found!");
    }
}
 */