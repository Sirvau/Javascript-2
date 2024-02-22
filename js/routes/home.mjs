
import { setAuthListener } from "../ui/listeners/auth.mjs";
import { displayPosts } from "../api/posts/get.mjs";


//Home page function
/**
 * 
 */

export async function homepage() {
    displayPosts();
setAuthListener(); 

}