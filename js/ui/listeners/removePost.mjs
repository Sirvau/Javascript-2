import {removePost} from "../../api/posts/remove.mjs"


export function setRemovePostFormListener () {
    const button = document.querySelector("#link-to-remove-post");

    const url = new URL(location.href);
    const id = url.searchParams.get("id");

    if (id) {
    
        button.addEventListener("click", (event) => {
            event.preventDefault();
            removePost(id)
            console.log("The post is removed"); {
            }
           
        })
        } if (!id) {
            window.location.href="/posts/";
            throw new Error("Could not remove the post");
        }
       
        }   


