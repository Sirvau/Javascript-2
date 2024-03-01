
import {apiV2_BaseUrl, apiKey, apiV2_Posts} from "../constants.mjs";
import { authFetch } from "../fetch.mjs";


/**
 * 
 * @returns 
 */


//Get Posts function
export async function getPosts() {

    const response = await authFetch(`${apiV2_BaseUrl}${apiV2_Posts}`);

    if (response.ok) {
        const postData = await response.json();
        console.log(postData); 
        return postData;
    } else {
        throw new Error("Failed to fetch posts");
    }
}



export async function getPost(id) {}