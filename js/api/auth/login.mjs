import {apiV2_BaseUrl, apiV2_AuthUrl, apiV2_LogInUrl} from "../constants.mjs";
import { save } from "../../storage/localstorage.mjs";
import { headers } from "../headers.mjs";




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