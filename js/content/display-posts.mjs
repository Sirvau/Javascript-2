import { getPosts } from "../api/posts/get.mjs";

const defaultProfileImageUrl = 'https://images.unsplash.com/photo-1516724562728-afc824a36e84?q=80&w=1771&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D';
// ---------------------------------------------------- DISPLAY FEED POSTS FUNCTION -------------------------------------------------------

export async function displayFeedPosts() {
    try {
        const postData = await getPosts();
        console.log("postData:", postData);
        const postFeedContainer = document.getElementById("nav-feed");

       
           // ...

postData.data.forEach(post => {
    // Maincontainers
    const postMainContainer = document.createElement("div");
    postMainContainer.classList.add("container", "my-5");

    const postSecondMainContainer = document.createElement("a");
    postSecondMainContainer.href = "#";
    postSecondMainContainer.classList.add("row", "border", "rounded");
    postSecondMainContainer.addEventListener("click", () => {
        window.location.href = `/post/?id=${post.id}`;
    });

    // Image and tags 
    const postImageAndTagContainer = document.createElement("div");
    postImageAndTagContainer.classList.add("col-sm-4", "my-2");

    const postImageUrl = post.media  && post.media.url ? post.media.url : defaultProfileImageUrl;

    const postImage = document.createElement("img");
    postImage.src = postImageUrl;
    postImage.alt = post.media?.alt || ""; 
    postImage.classList.add("img-thumbnail");
    postImageAndTagContainer.appendChild(postImage);

    // Title and body text 
    const postTitleAndBodyContainer = document.createElement("div");
    postTitleAndBodyContainer.classList.add("col-sm-7", "col-md-8", "my-2");

    const postTitle = document.createElement("h2");
    postTitle.textContent = post.title;
    postTitle.classList.add("h4", "primary-font", "text-light", "text-center");

    const postBodyText = document.createElement("p");
    postBodyText.textContent = post.body;
    postBodyText.classList.add("secondary-font", "text-light");

    // Author and follow button
    const postAuthorAndFollowButtonContainer = document.createElement("div");
    postAuthorAndFollowButtonContainer.classList.add("d-flex", "justify-content-start", "justify-content-md-center", "ms-3", "ms-md-0");

    // Append
    postFeedContainer.appendChild(postMainContainer);
    postMainContainer.appendChild(postSecondMainContainer);

    postSecondMainContainer.appendChild(postImageAndTagContainer);
    postSecondMainContainer.appendChild(postTitleAndBodyContainer);
    postSecondMainContainer.appendChild(postAuthorAndFollowButtonContainer);

    postTitleAndBodyContainer.appendChild(postTitle); 
    postTitleAndBodyContainer.appendChild(postBodyText);

    
});

    
    } catch (error) {
        console.error("Error displaying posts:", error.message);
    }
}




