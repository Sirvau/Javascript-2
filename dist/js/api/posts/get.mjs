import { apiV2_BaseUrl, apiV2_Posts } from "../constants.mjs";
import { authFetch } from "../fetch.mjs";

const action = `${apiV2_Posts}`;

export async function getPosts() {
    const searchParams = new URLSearchParams(window.location.search);
    const tag = searchParams.get('_tag');

    const getPostsUrl = new URL(apiV2_BaseUrl + action);

    if (tag) {
        getPostsUrl.searchParams.append('_tag', tag);
    }

    getPostsUrl.searchParams.append('_author', true);


    console.log("Final URL with query params:", getPostsUrl.toString());

    try {
        const response = await authFetch(getPostsUrl);

        if (response.ok) {
            const postData = await response.json();
            console.log("API response:", postData);
            return postData;
        } else {
            throw new Error("Failed to fetch posts: " + response.statusText);
        }
    } catch (error) {
        console.error("Error fetching posts:", error);
        throw new Error("Failed to fetch posts");
    }
}
