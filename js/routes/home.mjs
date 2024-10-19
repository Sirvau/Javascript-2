import {setAuthListener} from "../ui/listeners/auth.mjs"

export async function homepage() {
  setAuthListener(); 
  getPosts(); 

}

