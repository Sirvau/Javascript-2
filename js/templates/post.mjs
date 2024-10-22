
import * as postMethods from "../api/posts/index.mjs";
import {apiV2_BaseUrl, apiV2_Posts } from "../api/constants.mjs"; 
import { authFetch } from "../api/fetch.mjs";





export function postTemplate(postData) {
    
    const title = postData.title;
    const bodyText = postData.body;
    const postImageUrl = postData.media && postData.media.url;
    const imgAltText = postData.media?.alt || "";
    const tag = postData.tags;
    const id = postData.id;
    
     const post = document.createElement("a");
     post.classList.add("container-sm", "d-flex", "flex-column","flex-sm-row","justify-content-center", "w-100" , "mt-3","border-bottom","rounded-1");
     post.href = "#";
     post.addEventListener("click", () => {
        window.location.href = `/post/?id=${id}`;      
    });
   
 
     const postImageAndTagContainer = document.createElement("div");
    postImageAndTagContainer.style.height = "280px"
     postImageAndTagContainer.classList.add("my-2", "mw-100");
     const postImage = document.createElement("img");
     postImage.classList.add("img-fluid", "w-100", "h-100", "object-fit-cover", "rounded-1" );
     postImage.src = postImageUrl;
     postImage.alt = imgAltText;
     postImageAndTagContainer.appendChild(postImage);
 

    const postTitleAndBodyContainer = document.createElement("div");
    postTitleAndBodyContainer.classList.add("col-sm-6", "col-md-8","my-2", "ms-3");
    const postTitle = document.createElement("h2");
    postTitle.textContent = `${title}`;
    postTitle.classList.add("h4", "primary-font", "text-light");
    postTitleAndBodyContainer.appendChild(postTitle);
    const postBodyText = document.createElement("p");
    postBodyText.textContent = `${bodyText}`;
    postBodyText.classList.add("secondary-font", "text-light", "align-top");


    const tagsContainer = document.createElement("div");
    tagsContainer.classList.add("tags-container");


    tag.forEach((singleTag) => {
    const tagBadge = document.createElement("span");
    tagBadge.textContent = singleTag;
    tagBadge.classList.add("text-light", "badge", "border", "border-rounded", "text-bg-primary", "me-1", "fw-semibold", "font-monospace");
    tagsContainer.appendChild(tagBadge);
    });

    postTitleAndBodyContainer.appendChild(postBodyText);
    postTitleAndBodyContainer.appendChild(tagsContainer);

    post.append(postImageAndTagContainer,postTitleAndBodyContainer )
   
return post;
 
};

export async function renderPostTemplate(postData, parent) {
    const filteredPosts = postData.filter(post => post.media && post.media.url);
    filteredPosts.forEach((post) => {
        const postElement = postTemplate(post);
        parent.appendChild(postElement);
    });
};


export async function displayAllPosts() {
    const posts = await postMethods.getPosts();
    const container = document.querySelector("#nav-feed");
    if (posts && posts.data) {
        await renderPostTemplate(posts.data, container);
    }
};


//---------------------------------------------------------------------------------


export function getPostIdFromQuery() {
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
            window.location.href = `../../post/edit/index.html?id=${singlePost.data.id}`;
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


