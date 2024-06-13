import {removePost} from "../../api/posts/remove.mjs"



export function setRemovePostFormListener() {
    const button = document.getElementById("link-to-remove-post");
    const url = new URL(location.href);
    const id = url.searchParams.get("id");

    button.addEventListener("click", async (event) => {
        event.preventDefault();
        try {
            await removePost(id);
            console.log("The post is removed");
            window.location.pathname = "/posts/";
        } catch (error) {
            console.error('Error removing post:', error);
        }
    });
}
