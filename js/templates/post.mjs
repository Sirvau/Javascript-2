
import * as postMethods from "../api/posts/index.mjs";
 import {apiV2_BaseUrl, apiV2_Posts } from "../api/constants.mjs"; 
import { authFetch } from "../api/fetch.mjs";




const defaultProfileImageUrl = 'https://images.unsplash.com/photo-1516724562728-afc824a36e84?q=80&w=1771&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D';


export function postTemplate(postData) {
    const title = postData.title;
    const bodyText = postData.body;
    const postImageUrl = postData.media && postData.media.url ?postData.media.url : defaultProfileImageUrl;
    const imgAltText = postData.media?.alt || "";
    const tag = postData.tags;
    const id = postData.id;
    

     const post = document.createElement("a");
     post.classList.add("container", "row", "border", "rounded", "my-5");
     post.href = "#";
     post.addEventListener("click", () => {
        window.location.href = `/post/?id=${id}`;
    });
   

     const postImageAndTagContainer = document.createElement("div");
     postImageAndTagContainer.classList.add("col-sm-4", "my-2");
     const postImage = document.createElement("img");
     postImage.classList.add("img-thumbnail");
     postImage.src = postImageUrl;
     postImage.alt = imgAltText;
     postImageAndTagContainer.appendChild(postImage);
     const tags = document.createElement("p");
     tags.textContent = `${tag}`;

    const postTitleAndBodyContainer = document.createElement("div");
    postTitleAndBodyContainer.classList.add("col-sm-7", "col-md-8", "my-2");
    const postTitle = document.createElement("h2");
    postTitle.textContent = `${title}`;
    postTitle.classList.add("h4", "primary-font", "text-light", "text-center");
    postTitleAndBodyContainer.appendChild(postTitle);
    const postBodyText = document.createElement("p");
    postBodyText.textContent = `${bodyText}`;
    postBodyText.classList.add("secondary-font", "text-light", "text-center");
    postTitleAndBodyContainer.appendChild(postBodyText);


post.append(postImageAndTagContainer,postTitleAndBodyContainer )
    
 return post;
}

export async function renderPostTemplate(postsData, parent) {
    postsData.forEach(postData => {
        const postElement = postTemplate(postData);
        parent.appendChild(postElement);
    });
}

export async function displayAllPosts() {
    const posts = await postMethods.getPosts();
    const container = document.querySelector("#nav-feed");
    await renderPostTemplate(posts.data, container);
}


//---------------------------------------------------------------------------------


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

        const singlePostMainContainer = document.getElementById('single-post-main-container');
        const singlePostContainer = document.getElementById('single-post-container');
        const theSinglePost = document.getElementById('single-post');

        const postImage = document.createElement("img");
        postImage.src = singlePost.data.media && singlePost.data.media.url;
        postImage.alt = singlePost.data.media?.alt || "";
        postImage.classList.add("img-thumbnail");

        const postTitle = document.createElement("h2");
        postTitle.textContent = singlePost.data.title;
        postTitle.classList.add("h4", "primary-font", "text-light", "text-center", "my-3");

        const postBodyText = document.createElement("p");
        postBodyText.textContent = singlePost.data.body;
        postBodyText.classList.add("secondary-font", "text-light");

        theSinglePost.appendChild(postImage);
        theSinglePost.appendChild(postTitle);
        theSinglePost.appendChild(postBodyText);
        singlePostContainer.appendChild(theSinglePost);
        singlePostMainContainer.appendChild(singlePostContainer);

        const linkToUpdatePost = document.querySelector("#link-to-update-post");
        linkToUpdatePost.addEventListener("click", () => {
            window.location.href = `../../post/edit/index.html`;
        });

        const linkToRemovePost = document.querySelector("#link-to-remove-post");
        linkToRemovePost.addEventListener("click", () => {
            window.location.href = "#";
        })


        return singlePostContainer;
    } catch (error) {
        Error(error.message);
    }
}


