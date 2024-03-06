import { createPost } from "../../api/posts/create.mjs";

export function setCreatePostListener() {
    const form = document.querySelector("#create-post");

    if (form) {
        form.addEventListener("submit", async (event) => {
            event.preventDefault();
            const formData = new FormData(form);
            const post = Object.fromEntries(formData.entries());
            try {
                await createPost(post);
                alert("Post created successfully!");
                // You can redirect the user to another page or perform any other action here after successful creation.            } catch (error) {
                console.error("Error creating post:", error.message);
                // Handle error appropriately, show a message to the user, or log it.
            }
            catch (error) {
                    Error(error.message);
            }
        });
    }
}







/* import { createPost } from "../../api/posts/create.mjs";


export function setCreatePostListener() {
    const form = document.querySelector("#create-post");

    if (form) {
        form.addEventListener("submit", (event) => {
            event.preventDefault()
            const form = event.target;
            const formData = new FormData(form);
            const post = Object.fromEntries(formData.entries())

            //send it to the api

            createPost(post)
        })
    }
} */