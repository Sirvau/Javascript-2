import {setAuthListener} from "../ui/listeners/auth.mjs"
import { getPosts } from "../api/posts/get.mjs";

export async function homepage() {
  setAuthListener(); 
  getPosts(); 

}

