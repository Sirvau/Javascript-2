import {apiV2_BaseUrl, apiV2_AuthUrl, apiV2_LogInUrl} from "../constants.mjs";
import { save } from "../../storage/localstorage.mjs";
import { headers } from "../headers.mjs";


/**
 * Sending a POST request containing email and password values to the login API endpoint. 
 * If successful, saves the token and profile in local storage and redirects to the profile page.
 * @param {string} email - The email adress of the user.
 * @param {string} password - The password of the user
 * @returns {Promise<Object>} A promise that resolves to the user's profile data. 
 * @throws {Error} Throws an error if the login request fails.
 * @example 
 * loginUser('user@example.com', 'passwordExample123')
  .then(profile => console.log(profile))
  .catch(error => console.error(error));
 */


//Log In User
export async function loginUser(email, password) {
	const response = await fetch(apiV2_BaseUrl + apiV2_AuthUrl + apiV2_LogInUrl, {
		headers: headers(true),
		method: "POST",
		body: JSON.stringify({ email, password })
	});



		if (response.ok) {
			const { accessToken, ...profile } = (await response.json()).data;
			save("token", accessToken);
			save("profile", profile);
            window.location.href = "profile/index.html";
			return profile;
		}
		throw new Error("Could not login");
	}