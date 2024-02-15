






































/* 
import {apiV2_BaseUrl, apiV2_AuthUrl, apiV2_RegisterUrl } from "../constants.mjs"


const registerPath = `${apiV2_BaseUrl}${apiV2_AuthUrl}${apiV2_RegisterUrl}`;
const method = "post";

export async function register(profile) {
 const registerURL = registerPath;
 const body = JSON.stringify(profile);

 const response = await fetch(registerURL, {
  headers: {
    "Content-Type": "application/json"
  },
  method,
  body
 })

 const result = await response.json()
  return result
}



 */





/* 
 import { apiV2_BaseUrl, apiV2_AuthUrl, apiV2_RegisterUrl } from "../constants.mjs";


export async function register(name, email, password) {
    const response = await fetch(apiV2_BaseUrl + apiV2_AuthUrl + apiV2_RegisterUrl, {
        method: "POST", 
        headers: {
            "Content-Type": "application/json"
        }, 
        body: JSON.stringify({name, email, password})
    });

    if (response.ok) {
        return await response.json();
    }

    throw new Error("Could not register the account");
}


 


export async function registerUser(url, data) {
    try {
      const postData = {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      };
  
      const response = await fetch(url, postData);
      console.log(response);
      const json = await response.json();
      console.log(json);
      return json;
    } catch (error) {
      console.log(error);
    }
  }
  
  const user = { 
    name: `${firstNameValue}+ ${lastNameValue}`,
    email: `${emailInputValue}`,
    password: `${passwordInputValue}`,
  };
  
  registerUser(`${ApiV2_BaseUrl}${apiV2_AuthUrl}${apiV2_RegisterUrl}`, user); */