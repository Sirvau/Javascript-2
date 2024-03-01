import { homepage } from "./routes/home.mjs";
import { updatePost } from "./api/posts/update.mjs";

/* import { createPost } from "./api/posts/create.mjs"; */


homepage();


 updatePost({
    id: 639,
    title: "UPDATED Hello hello",
    body: "UPDATED My first post",
}) 