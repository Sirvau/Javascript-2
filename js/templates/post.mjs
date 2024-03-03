
import * as postMethods from "../api/posts/index.mjs";


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


