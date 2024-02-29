import {apiV2_BaseUrl, apiV2_AuthUrl, apiV2_LogInUrl} from "../constants.mjs";
import { save } from "../../storage/localstorage.mjs";
import { authFetch } from "../fetch.mjs";




//Log In User

/**
 * 
 * @param {*} email 
 * @param {*} password 
 * @returns 
 */

export async function loginUser(email, password) {
	const response = await authFetch(apiV2_BaseUrl + apiV2_AuthUrl + apiV2_LogInUrl, {
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