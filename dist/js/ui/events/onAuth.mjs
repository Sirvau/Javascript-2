import { registerUser } from "../../api/auth/register.mjs";
import { loginUser } from "../../api/auth/login.mjs";
import { formValidation } from "../listeners/validation.mjs"; 

// On Auth Function
export async function onAuth(event) {
    event.preventDefault();

    const form = event.target;
    formValidation();
    if (!form.checkValidity()) {
        return; 
    }

    const name = event.target.name.value;
    const email = event.target.email.value;
    const password = event.target.password.value;

    if (location.pathname.includes("/register")) {
        await registerUser(name, email, password);
    }

    const login = await loginUser(email, password);
    console.log(login);
}
