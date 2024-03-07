import { runToTopButton } from "../ui/buttons/toTop.mjs";
import {fetchPostDetail} from "../templates/post.mjs";
import { setRemovePostFormListener } from "../ui/listeners/removePost.mjs";
import { setUpdatePostFormListener } from "../ui/listeners/updatePost.mjs";


export function singlePostpage() {
    runToTopButton("header-single-post");
    fetchPostDetail()
    setUpdatePostFormListener ();
    setRemovePostFormListener ();
}

singlePostpage();