
import {apiV2_BaseUrl ,apiV2_Posts} from "../constants.mjs"
import { authFetch } from "../fetch.mjs"

const action = `${apiV2_Posts}`;
const method = "POST";


export async function createPost(postData) {
const createPostUrl = `${apiV2_BaseUrl}`+ action;
try {

const response = await authFetch(createPostUrl, {
    method,
    body: JSON.stringify(postData)
})
console.log(`Success creating new post`)
    return await response.json();


} catch (error) {
    console.error(`Error creating new post`, error)
}};