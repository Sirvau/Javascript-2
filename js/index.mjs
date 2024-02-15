/* import { apiV2KeyUrl } from "./api/constants.mjs"; */

export const apiV2_BaseUrl = "https://v2.api.noroff.dev";
export const apiV2_AuthUrl = "/auth";
export const apiV2_RegisterUrl = "/register";
export const apiV2_LogInUrl = "/login";
/* export const apiV2KeyUrl = "/create-api-key"; */



export function save(key, value) {
    localStorage.setItem(key, JSON.stringify(value));
}

export function load(key) {
    return JSON.parse(localStorage.getItem(key));
}


/*  export async function getPosts() {
    const response = await fetch(apiV2_BaseUrl + "/social/posts", {
        headers: {
            Authorization: `Bearer ${load("token")}`
        }
    });
    return await response.json();
} */
 

/* export async function getApiKey() {
    const response = await fetch(apiV2_BaseUrl + apiV2_AuthUrl + apiV2KeyUrl, {
        method: "POST", 
        headers: {
            "Content-Type": "application/json", 
            Authorization: `Bearer ${load("token")}`
        }, 
        body: JSON.stringify({
            name: "Test Key"
        })
    });

    if (response.ok) {
        return await response.json();
    }

    console.error(await response.json());
    throw new Error("Could not register for an API key");
}
 */









export async function registerUser(name, email, password) {
    const response = await fetch(apiV2_BaseUrl + apiV2_AuthUrl + apiV2_RegisterUrl, {
        headers: {
            "Content-Type": "application/json"
        }, 
        method: "POST",
        body: JSON.stringify({name, email, password}),
    });

    const data = response.json();
    console.log(data);

    if (response.ok) {
        return data;
    }
    throw new Error("Could not register the account");
}


 /*  export async function login(email, password) {
    const response = await fetch(apiV2_BaseUrl + apiV2_AuthUrl + apiV2_LogInUrl, {
        headers: {
            "Content-Type": "application/json"
        }, 
        method: "POST", 
        body: JSON.stringify({email, password})
    });

    if (response.ok) {
        const { accessToken, ...profile } = (await response.json()).data;
        save("token", accessToken);
        save("profile", profile);
        return profile; 
    }

    throw new Error("Could not login the account");
} 
 */


 export async function onAuth(event) {
    event.preventDefault();
    const name = event.target.name.value;
    const email = event.target.email.value;
    const password = event.target.password.value;

    if (location.pathname.includes("/register")) {
        await registerUser(name, email, password);
    }

   /*  registerUser(name, email, password); */

   /*  if (event.submitter.dataset.auth === "login") {
        await login(email, password);
    } else {

        await registerUser(name, email, password);
        await loginUser(email, password);
    }

    const posts = await getPosts();
    console.log(posts); */
} 



 export function setAuthListener() {
    document.forms.auth.addEventListener("submit", onAuth);
}

setAuthListener();

 

 



























/* import * as constants from "./api/constants.mjs";

//console.log(constants.apiV2_BaseUrl);

 import { setRegisterFormListener } from "./handlers/register.mjs";
import { setLoginFormListener } from "./handlers/login.mjs";

const path = location.pathname;

if (path === `/profile/login`) {
    setLoginFormListener()
} else if (path === `/profile/register/`) {
    setRegisterFormListener
}

 */