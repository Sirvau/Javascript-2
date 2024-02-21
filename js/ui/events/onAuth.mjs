   import { registerUser } from "../../api/auth/register.mjs";
   import { loginUser } from "../../api/auth/login.mjs";
import { getPosts } from "../../api/posts/get.mjs";
   

   //On Auth Function
   export async function onAuth(event) {
    event.preventDefault();
    const name = event.target.name.value;
    const email = event.target.email.value;
    const password = event.target.password.value;

    if (location.pathname.includes("/register")) {
        await registerUser(name, email, password);
    }

    const login = await loginUser(email,password);
    console.log(login);
} 


