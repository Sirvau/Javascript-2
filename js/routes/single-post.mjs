import { runToTopButton } from "../ui/buttons/toTop.mjs";
import {fetchPostDetail} from "../templates/post.mjs";


export function singlePostpage() {
    runToTopButton("header-single-post");
    fetchPostDetail()
    setUpdatePostFormListener ()
}

singlePostpage();