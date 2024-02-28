 import { apiV2_BaseUrl, apiV2_Posts } from "../api/constants.mjs"; 
 import { authFetch } from "../api/fetch.mjs";


 function getPostIdFromQuery() {
    const urlParams = new URLSearchParams(window.location.search);
    const id = urlParams.get("id");
    return id;
}

const postId = getPostIdFromQuery();
const postSpecificURL = `${apiV2_BaseUrl}${apiV2_Posts}/${postId}`; 



export async function fetchPostDetail() {
    if (!postId) {
        throw new Error("Post ID is missing");
    }

    try {
        const response = await authFetch(postSpecificURL);
        console.log("Response status:", response.status);

        if (!response.ok) {
            throw new Error("Failed to fetch post");
        }

        const singlePost = await response.json();
        console.log("Fetched post data:", singlePost);

        const singlePostContainer = document.getElementById('single-post-container');
        const singlePostDiv = document.createElement("div");

        const postImage = document.createElement("img");
        postImage.src = singlePost.data.media && singlePost.data.media.url;
        postImage.alt = singlePost.data.media?.alt || "";
        postImage.classList.add("img-thumbnail");

        const postTitle = document.createElement("h2");
        postTitle.textContent = singlePost.data.title;
        postTitle.classList.add("h4", "primary-font", "text-light", "text-center");

        const postBodyText = document.createElement("p");
        postBodyText.textContent = singlePost.data.body;
        postBodyText.classList.add("secondary-font", "text-light");

        singlePostDiv.appendChild(postImage);
        singlePostDiv.appendChild(postTitle);
        singlePostDiv.appendChild(postBodyText);
        singlePostContainer.appendChild(singlePostDiv);

        return singlePostContainer;
    } catch (error) {
        Error(error.message);
    }
}




/* 
export async function fetchPostDetail() {
    if (!postId) {
        throw new Error("Post ID is missing");
    }

    try {
        const response = await fetch(postSpecificURL);

        if (!response.ok) {
            throw new Error("Failed to fetch post");
        }

        const singlePost = await response.json();
        console.log(singlePost);

        const singlePostContainer = document.getElementById('single-post-container');

        const singlePostDiv = document.createElement("div");

        const postImage = document.createElement("img");
        postImage.src = singlePost.media;
        postImage.alt = singlePost.media?.alt || "";
        postImage.classList.add("img-thumbnail");

        const postTitle = document.createElement("h2");
        postTitle.textContent = singlePost.title;
        postTitle.classList.add("h4", "primary-font", "text-light", "text-center");

        const postBodyText = document.createElement("p");
        postBodyText.textContent = singlePost.body;
        postBodyText.classList.add("secondary-font", "text-light");

        singlePostDiv.append(postImage, postTitle, postBodyText);
        singlePostContainer.appendChild(singlePostDiv);
        return singlePostContainer;
    } catch (error) {
        showError(error.message);
    }
}
  */

