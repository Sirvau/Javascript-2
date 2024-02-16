import {apiV2_BaseUrl, apiV2_AuthUrl, apiV2_RegisterUrl} from "../constants.mjs";
import { headers } from "../headers.mjs";



//Register User
export async function registerUser(name, email, password) {
  const response = await fetch(apiV2_BaseUrl + apiV2_AuthUrl + apiV2_RegisterUrl, {
    headers: headers(true),
      method: "POST",
      body: JSON.stringify({name, email, password}),
  });

  const data = response.json();
  console.log(data);

  if (response.ok) {
      window.location.href = "../index.html";
      return data;

  }
  throw new Error("Could not register the account");
}