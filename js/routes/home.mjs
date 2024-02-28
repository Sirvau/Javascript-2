import { getPosts } from "../api/posts/get.mjs";
import { setRegisterAuthListener, setLoginAuthListener } from "../ui/listeners/auth.mjs";


//Home page function
/**
 * 
 */

export async function homepage() {
getPosts();
setRegisterAuthListener()
setLoginAuthListener()
}