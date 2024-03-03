
import { runToTopButton } from "../ui/buttons/toTop.mjs";
import {displayAllPosts} from "../templates/post.mjs";



export function feedpage() {
    displayAllPosts();
    runToTopButton("header-feed");
}

feedpage();