
import { displayFeedPosts } from "../content/display-posts.mjs";
import { fetchPostDetail } from "../content/display-specific-post.mjs";


//Home page function
/**
 * 
 */

export async function homepage() {
displayFeedPosts()
fetchPostDetail()
}