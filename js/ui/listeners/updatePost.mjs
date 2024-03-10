import { updatePost } from "../../api/posts/update.mjs";


/* export function setUpdatePostListener() {
    const form = document.querySelector("#update-post");

    const url = new URL(location.href);
    const id = url.searchParams.get("id");

    if (form) {
        form.addEventListener("submit", (event) => {
            event.preventDefault()
            const form = event.target;
            const formData = new FormData(form);
            const post = Object.fromEntries(formData.entries())
            post.id = id;

            //send it to the api

            updatePost(post)
        })
    }
} */

export function setUpdatePostFormListener () {
    const form = document.querySelector("#update-post");

    const url = new URL(location.href);
    const id = url.searchParams.get("id");

    if (form) {
    
        form.addEventListener("submit", (event) => {
            event.preventDefault();
            const form = event.target;
            const formData = new FormData(form);
            const post = {
                title: formData.get('title'),
                body: formData.get('body'),
                tags: formData.get('tags').split(','), 
                media: { url: formData.get('media'), }
            };
         post.id = id;
    
            updatePost(post)
        })
}

}

