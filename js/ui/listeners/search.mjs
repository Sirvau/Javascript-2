import { searchPost } from "../../api/posts/search.mjs";
import { renderPostTemplate } from "../../templates/post.mjs";

export function createSearchListener() {
  try {
    const searchForm = document.getElementById('search-form');
    const postContainer = document.getElementById('nav-feed');

    searchForm.addEventListener('submit', async (event) => {
      event.preventDefault();
      const formData = new FormData(searchForm);
      const search = formData.get('search');
      const postsResult = await searchPost(search);
      postContainer.innerHTML = ``;
      await renderPostTemplate(postsResult.data, postContainer);
    });
  } catch (error) {
    console.log('Error adding search listener:', error);
  }
}