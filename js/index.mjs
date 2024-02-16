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


const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MTkyLCJuYW1lIjoiUmVpZGFyIiwiZW1haWwiOiJyZWlkYXJAbm9yb2ZmLm5vIiwiYmlvIjpudWxsLCJjcmVhdGVkIjoiMjAyNC0wMi0xNlQwNzo0NjowNC4xNDNaIiwidXBkYXRlZCI6IjIwMjQtMDItMTZUMDc6NDY6MDQuMTQzWiIsImNyZWRpdHMiOjEwMDAsInZlbnVlTWFuYWdlciI6ZmFsc2UsImF2YXRhciI6eyJpZCI6IjY5MjcxMThlLThkZTEtNDViOS04YzQ0LTM2MjIxZGZkYmZkMiIsInVybCI6Imh0dHBzOi8vaW1hZ2VzLnVuc3BsYXNoLmNvbS9waG90by0xNTc5NTQ3OTQ1NDEzLTQ5N2UxYjk5ZGFjMD9jcm9wPWVudHJvcHkmY3M9dGlueXNyZ2ImZml0PWNyb3AmZm09anBnJnE9ODAmaD00MDAmdz00MDAiLCJhbHQiOiJBIGJsdXJyeSBtdWx0aS1jb2xvcmVkIHJhaW5ib3cgYmFja2dyb3VuZCIsInNvY2lhbFBvc3RJZCI6bnVsbCwiYXVjdGlvbkxpc3RpbmdJZCI6bnVsbCwiaG9saWRhemVWZW51ZUlkIjpudWxsLCJ1c2VyQXZhdGFySWQiOjE5MiwidXNlckJhbm5lcklkIjpudWxsLCJib29rSWQiOm51bGwsIm9sZEdhbWVJZCI6bnVsbCwib25saW5lU2hvcFByb2R1Y3RJZCI6bnVsbCwicmFpbnlEYXlzUHJvZHVjdElkIjpudWxsLCJnYW1lSHViUHJvZHVjdElkIjpudWxsLCJzcXVhcmVFeWVzUHJvZHVjdElkIjpudWxsfSwiYmFubmVyIjp7ImlkIjoiYzM4MjczZjQtM2Q1ZC00Mjg2LWI1OGMtMmQxNmMzMDJjODg1IiwidXJsIjoiaHR0cHM6Ly9pbWFnZXMudW5zcGxhc2guY29tL3Bob3RvLTE1Nzk1NDc5NDU0MTMtNDk3ZTFiOTlkYWMwP2Nyb3A9ZW50cm9weSZjcz10aW55c3JnYiZmaXQ9Y3JvcCZmbT1qcGcmcT04MCZoPTUwMCZ3PTE1MDAiLCJhbHQiOiJBIGJsdXJyeSBtdWx0aS1jb2xvcmVkIHJhaW5ib3cgYmFja2dyb3VuZCIsInNvY2lhbFBvc3RJZCI6bnVsbCwiYXVjdGlvbkxpc3RpbmdJZCI6bnVsbCwiaG9saWRhemVWZW51ZUlkIjpudWxsLCJ1c2VyQXZhdGFySWQiOm51bGwsInVzZXJCYW5uZXJJZCI6MTkyLCJib29rSWQiOm51bGwsIm9sZEdhbWVJZCI6bnVsbCwib25saW5lU2hvcFByb2R1Y3RJZCI6bnVsbCwicmFpbnlEYXlzUHJvZHVjdElkIjpudWxsLCJnYW1lSHViUHJvZHVjdElkIjpudWxsLCJzcXVhcmVFeWVzUHJvZHVjdElkIjpudWxsfSwiaWF0IjoxNzA4MDY5NjE3fQ.FXU44FliOvLPckQyvTDkIRdDOKRTOPfutzh5kyQoG1w";






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


export async function loginUser(email, password) {
	const response = await fetch(apiV2_BaseUrl + apiV2_AuthUrl + apiV2_LogInUrl, {
		headers: {
			"Content-Type": "application/json"
		},
		method: "POST",
		body: JSON.stringify({ email, password })
	});
 
	// console.log(response);
 
		if (response.ok) {
			const { accessToken, ...profile } = (await response.json()).data;
			save("token", accessToken);
			save("profile", profile);
			return profile;
		}
		throw new Error("Could not login");
	}



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
}  */
 


 






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