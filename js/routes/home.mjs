/* import { getPosts } from "../api/posts/get.mjs"; */
import { setAuthListener } from "../ui/listeners/auth.mjs";
import { setCreatePostListener } from "./ui/listeners/createPost.mjs";



//Home page function
/**
 * 
 */

export async function homepage() {
    setAuthListener(); 
  /*   getPosts(); */
  setCreatePostListener()
}

/* 
if (path === 'profile/login') {
  listeners.setLoginFormListener()} 
  else if (path === 'profile/register/') {
    listeners.setRegisterFormListener()}
    else if (path === '/post/create/') {
      listeners.setCreatePostListener() }
      else if (path === '/post/edit') {
        listeners.setUpdatePostListener()
      }
 */