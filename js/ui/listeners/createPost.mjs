import { createPost } from "../../api/posts/create.mjs";



export function setCreatePostFormListener () {
    const form = document.querySelector("#create-post");

    if (form) {
        form.addEventListener("submit", (event) => {
            event.preventDefault();
            const form = event.target;
            const formData = new FormData(form);
            const post = {
                title: formData.get('title'),
                body: formData.get('body'),
                tags: formData.get('tags').split(','), 
                media: { url: formData.get('media') }
            };
            
    
            createPost(post)
        })
}

}

