import {createPost} from "../../../post/create.mjs";


export function setCreatePostFormListener () {
    const form = document.querySelector("#create-post");

    if(form) {
        form.addEventListener("submit", (event) => {
            event.preventDefault()
            const form = event.target;
            const formData = new FormData(form);
            const post = Object.fromEntries(formData.entries())


            //Send it to the API
            createPost(post)
        })
    }
}