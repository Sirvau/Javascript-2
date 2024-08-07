
import { runToTopButton } from "../ui/buttons/toTop.mjs";
import {displayAllPosts} from "../templates/post.mjs";
import { setCreatePostFormListener } from "../ui/listeners/createPost.mjs";
import { createSearchListener } from "../ui/listeners/search.mjs";




export function feedpage() {
    displayAllPosts();
    runToTopButton("header-feed");
  setCreatePostFormListener ()
  createSearchListener() 

}

feedpage();