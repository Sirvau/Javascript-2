import {apiV2_BaseUrl, apiV2_AuthUrl, apiV2_RegisterUrl} from "../constants.mjs";
import { authFetch } from "../fetch.mjs";


/**
 * 
 * @param {*} name 
 * @param {*} email 
 * @param {*} password 
 * @returns 
 */

//Register User
export async function registerUser(name, email, password) {
  const response = await authFetch(apiV2_BaseUrl + apiV2_AuthUrl + apiV2_RegisterUrl, {
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