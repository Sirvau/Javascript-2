
import {apiV2_BaseUrl, apiKey, apiV2_Posts} from "../constants.mjs";
import { headers } from "../headers.mjs";




//Get Posts function
export async function getPosts() {

    const response = await fetch(`${apiV2_BaseUrl}${apiV2_Posts}`, {
        headers: headers()
    });

    
    if (response.ok) {
        const postData = await response.json();
        console.log(postData); 
        return postData;
    } else {
        throw new Error("Failed to fetch posts");
    }
}



