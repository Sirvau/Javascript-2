
import {apiV2_BaseUrl, apiV2_Posts} from "../constants.mjs";
import { authFetch } from "../fetch.mjs";
import {mainTag} from "../constants.mjs";


/**
 * 
 * @returns 
 */


 //Get Posts function
export async function getPosts() {

    const response = await authFetch(`${apiV2_BaseUrl}${apiV2_Posts}${mainTag}`);

    if (response.ok) {
        const postData = await response.json();
        console.log(postData); 
        return postData;

    } else {
        throw new Error("Failed to fetch posts");
    }
}

export async function displayPosts() {
    try {
        const postData = await getPosts();
        console.log("postData:", postData);
        const postsContainer = document.getElementById("posts-feed-container");

       
            postData.data.forEach(post => {
                const postDiv = document.createElement("div");
                postDiv.classList.add("post");
                postDiv.textContent = post.title;
                postsContainer.appendChild(postDiv);
            });
    
    } catch (error) {
        console.error("Error displaying posts:", error.message);
    }
}