import {apiV2_BaseUrl ,apiV2_Posts} from "../constants.mjs"
import { authFetch } from "../fetch.mjs";


const action = `${apiV2_Posts}`;
const method = "DELETE";

export async function removePost(id) {
    try {
        if (!id) {
            throw new Error("Delete requires a postID");
        }
    
        const removePostUrl = `${apiV2_BaseUrl}${action}/${id}`;
    
        const response = await authFetch(removePostUrl, {
            method
        });
    
        const result = await response.json();
        if (response.ok) {
            return result
        }
        
    } catch (error) {
        console.error(error);
    }
   
}
