
import {apiV2_BaseUrl, apiKey, apiV2_Posts} from "../constants.mjs";
import { authFetch } from "../fetch.mjs";




const action = `${apiV2_Posts}`;



export async function getPosts() {
const getPostsUrl = `${apiV2_BaseUrl}${action}`;

const response = await authFetch(getPostsUrl)

if (response.ok) {
    const postData = await response.json();
    console.log(postData);
    return postData;
} else {
    throw new Error("Failed to fetch posts");
}

}


export async function getPost(id) {
    if (!id) {
        throw new Error("Get requires a postID");
    }
    const getPostUrl = `${apiV2_BaseUrl}${action}/${id}`;
    
    const response = await authFetch(getPostUrl)
    return await response.json();   
    }
    


/**
 * 
 * @returns 
 */





