/* export const apiV2_BaseUrl = "https://v2.api.noroff.no";
export const apiV2_AuthUrl = "/auth";
export const apiV2_RegisterUrl = "/register";
export const apiV2_LogInUrl = "/login";
export const apiV2KeyUrl = "/create-api-key";
 */
 



























































/* import {load} from "../storage/index.mjs";
 */


/* 
export async function getApiKey() {
    const response = await fetch(apiV2_BaseUrl + apiV2_AuthUrl + apiV2KeyUrl, {
        method: "POST", 
        headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${load("token")}`
        },
        body: JSON.stringify({
            name: "Test key"
        })
    } );

    if (response.ok) {
        return await response.json();
    }
    console.error(await response.json());
    throw new Error("Could not register for an API key.");
}

getApiKey().then(console.log); */