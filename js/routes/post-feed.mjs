
import { runToTopButton } from "../ui/buttons/toTop.mjs";
import {displayAllPosts} from "../templates/post.mjs";
import { setCreatePostFormListener } from "../ui/listeners/createPost.mjs";



export function feedpage() {
    displayAllPosts();
    runToTopButton("header-feed");
  setCreatePostFormListener ()
}

feedpage();