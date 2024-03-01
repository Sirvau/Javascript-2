import { homepage } from "./routes/home.mjs";
import { createPost } from "./api/posts/create.mjs";

homepage();


createPost({
    title: "Hello hello",
    body: "My first post"
})