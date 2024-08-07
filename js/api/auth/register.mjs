import {apiV2_BaseUrl, apiV2_AuthUrl, apiV2_RegisterUrl} from "../constants.mjs";
import { headers } from "../headers.mjs";

/**
 * Sending a POST request containing name, email and password values to the register API endpoint. 
 * If successful, the user data is being returned as an object. If not a success, error is consoled and an error message is being thrown.
 * @param {string} name - The name of the user
 * @param {string} email - The email adress of the user.
 * @param {string} password - The password of the user. 
 * @returns {Promise<Object>} A promise that resolves to the user's profile data. 
 *  @throws {Error} Throws an error if the registration request fails.
 * @example
 * registerUser('Example User', 'example.user@example.com', 'passwordExample123')
 *   .then(profile => console.log(profile))
 *   .catch(error => console.error(error));
 */


//Register User
export async function registerUser(name, email, password) {
  const response = await fetch(apiV2_BaseUrl + apiV2_AuthUrl + apiV2_RegisterUrl, {
    headers: headers(true),
      method: "POST",
      body: JSON.stringify({name, email, password}),
  });

  const data = await response.json();
  console.log(data);

  if (response.ok) {
      window.location.href = "../index.html";
      return data;}
else {  
  
 console.error('Error', data);
  throw new Error("Could not register the account");}
      
}
  