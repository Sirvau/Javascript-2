import { createPost } from "../../api/posts/create.mjs";
import { formValidation } from "./validation.mjs";

export function setCreatePostFormListener() {
    const form = document.querySelector("#create-post");

    if (form) {
        form.addEventListener("submit", async (event) => {
            event.preventDefault();

           
            formValidation();

            if (!form.checkValidity()) {
                return;  
            }

            const formData = new FormData(form);
            const post = {
                title: formData.get('title'),
                body: formData.get('body'),
                tags: formData.get('tags') ? formData.get('tags').split(',') : [],
                media: { url: formData.get('media') || "" }
            };

            try {
                await createPost(post);
                window.location.reload((window.location.pathname = "/posts/"));
            } catch (error) {
                console.error('Error creating new post:', error);
            }
        });
    }
}
