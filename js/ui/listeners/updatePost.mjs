import { updatePost } from "../../api/posts/update.mjs";
import { apiV2_BaseUrl, apiV2_Posts } from "../../api/constants.mjs";
import { getPostIdFromQuery } from "../../templates/post.mjs";
import { authFetch } from "../../api/fetch.mjs";


    
export async function prefillEditForm() {
    const postId = getPostIdFromQuery();

    const postSpecificURL = `${apiV2_BaseUrl}${apiV2_Posts}/${postId}`; 
    
    try {
        const response = await authFetch(postSpecificURL);
        if (!response.ok) {
            throw new Error("Failed to fetch post");
        }

        const postData = await response.json();

        // Prefill the form fields
        document.querySelector('input[name="title"]').value = postData.data.title;
        document.querySelector('textarea[name="body"]').value = postData.data.body;
        document.querySelector('input[name="tags"]').value = postData.data.tags.join(',');
        document.querySelector('input[name="media"]').value = postData.data.media.url || '';
        
    } catch (error) {
        console.error("Error fetching post data for prefill:", error);
    }
}

export function setUpdatePostFormListener() {
    const form = document.querySelector("#update-post");

    if (form) {
        form.addEventListener("submit", async (event) => {
            event.preventDefault();
            const formData = new FormData(form);
            const post = {
                title: formData.get('title'),
                body: formData.get('body'),
                tags: formData.get('tags').split(','),
                media: { url: formData.get('media') }
            };

            const url = new URL(location.href);
            const id = url.searchParams.get("id");
            post.id = id;

            try {
                await updatePost(post);
                window.location.href = `/posts/?id=${id}`;
            } catch (error) {
                console.error("Error updating post:", error);
            }
        });

      
        const url = new URL(location.href);
        const id = url.searchParams.get("id");
        if (id) {
            prefillEditForm(id);
        }
    }
}

