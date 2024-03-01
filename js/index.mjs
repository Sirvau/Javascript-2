import { homepage } from "./routes/home.mjs";
/*  import { updatePost } from "./api/posts/update.mjs";  */
/* import { createPost } from "./api/posts/create.mjs"; */
/* import { removePost } from "./api/posts/remove.mjs"; */

import * as post from "./api/posts/index.mjs";
 

homepage();

//post.createPost();
//post.getPosts();
//post.getPost();
//post.updatePost();
//post.removePost();
 

//UPDATE POST
// updatePost({
//   id: 638,
// title: "UPDATED",
// body: "UPDATED post",
// tags: ["tiger"]
//})  


// REMOVE POST
 // removePost(639);

//Get POST
 // post.getPost(638).then(console.log);