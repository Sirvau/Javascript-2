
/* import { setAuthListener } from "../ui/listeners/auth.mjs"; */
import { displayFeedPosts } from "../content/display-posts.mjs";
import { displayTopButton } from "../ui/buttons/create.mjs";
import { fetchPostDetail } from "../content/display-specific-post.mjs";
/* import { setLoginAuthListener } from "../ui/listeners/auth.mjs";
import { setRegisterAuthListener } from "../ui/listeners/auth.mjs"; */






//Home page function
/**
 * 
 */

export async function homepage() {
    displayFeedPosts();
    fetchPostDetail()

    displayTopButton();
/*     setAuthListener();  */
/*     setLoginAuthListener()
    setRegisterAuthListener() */

}