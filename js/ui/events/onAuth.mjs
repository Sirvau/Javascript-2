   import { registerUser } from "../../api/auth/register.mjs";
   import { loginUser } from "../../api/auth/login.mjs";

   



// On Auth Function
 export async function onAuth(event, actionType) {
    event.preventDefault();
    const name = event.target.name.value;
    const email = event.target.email.value;
    const password = event.target.password.value;

    if (actionType === "register") {
        await registerUser(name, email, password);
    } else {
        const login = await loginUser(email, password);
        console.log(login);
    }
} 
