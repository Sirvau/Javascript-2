


































/* 
import {apiV2_BaseUrl, apiV2_AuthUrl, apiV2_LogInUrl } from "../constants.mjs"
import * as storage from "../../storage/index.mjs"


const loginPath = `${apiV2_BaseUrl}${apiV2_AuthUrl}${apiV2_LogInUrl}`;
const method = "post";

export async function login(profile) {
  const loginURL = loginPath;
 const body = JSON.stringify(profile);

 const response = await fetch(loginURL, {
  headers: {
    "Content-Type": "application/json"
  },
  method,
  body
 })

 const { accessToken, ...user } = await response.json()

 storage.save("token", accessToken)

 storage.save("profile", user)
 */




  //localStorage.setItem("token", result.accessToken);
 // storage.save("token", result.accessToken);


/* 
import { apiV2_BaseUrl, apiV2_AuthUrl, apiV2_LogInUrl } from "../constants.mjs";


export async function login(email, password) {
    const response = await fetch(apiV2_BaseUrl + apiV2_AuthUrl + apiV2_LogInUrl, {
        method: "POST", 
        headers: {
            "Content-Type": "application/json"},
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