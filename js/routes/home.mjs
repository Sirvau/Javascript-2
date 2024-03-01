import { getPosts } from "../api/posts/get.mjs";
import { setAuthListener } from "../ui/listeners/auth.mjs";



//Home page function
/**
 * 
 */

export async function homepage() {
    setAuthListener(); 
    getPosts();

}