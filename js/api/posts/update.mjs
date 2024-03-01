





import {apiV2_BaseUrl ,apiV2_Posts} from "../constants.mjs"
import { authFetch } from "../fetch.mjs";

const action = `${apiV2_Posts}`;
const method = "PUT";




export async function updatePost(postData) {
const updatePostUrl = `${apiV2_BaseUrl}${action}/${postData.id}`;

const response = await authFetch(updatePostUrl, {
    method,
    body: JSON.stringify(postData)
})

return await response.json();

}