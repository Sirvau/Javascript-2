
import { setAuthListener } from "../ui/listeners/auth.mjs";
import { displayFeedPosts } from "../content/display-posts.mjs";
import { displayTopButton } from "../ui/buttons/create.mjs";


//Home page function
/**
 * 
 */

export async function homepage() {
    displayFeedPosts();
    displayTopButton();
setAuthListener(); 

}