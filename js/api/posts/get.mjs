
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
        console.log("postData:", postData); // Log postData to see its structure
        const postsContainer = document.getElementById("posts-feed-container");

        if (postData && postData.data && Array.isArray(postData.data)) {
            postData.data.forEach(post => {
                const postDiv = document.createElement("div");
                postDiv.classList.add("post");
                postDiv.textContent = post.title;
                postsContainer.appendChild(postDiv);
            });
        } else {
            console.error("Invalid postData format:", postData);
        }
    } catch (error) {
        console.error("Error displaying posts:", error.message);
    }
}










/* // Define an async function to wrap your code
async function displayPosts() {
    try {
        // Call the getPosts function to fetch the data
        const apiData = await getPosts();

        // Access the data and display it
        const postContent = apiData;

        const container = document.getElementById('post-feed-container');

        postContent.data.forEach(item => {
            const titleElement = document.createElement('h2');
            titleElement.textContent = item.title;

            container.appendChild(titleElement);
        });
    } catch (error) {
        console.error("Error fetching or displaying posts:", error);
    }
}

// Call the async function to display posts
displayPosts();
 */







/* getPosts().then(apiData => {
    const postContent = apiData;

    const container = document.getElementById('post-feed-container');

    postContent.data.forEach(item => {
        const titleElement = document.createElement('h2');
        titleElement.textContent = item.title;

        container.appendChild(titleElement);
    });
}); */


