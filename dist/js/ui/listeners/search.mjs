import { searchPost } from "../../api/posts/search.mjs";
import { renderPostTemplate } from "../../templates/post.mjs";


/**
 * Adds a submit event listener to the search form to handle search queries.
 *
 * This function attaches a submit event listener to the DOM element with the ID 'search-form'.
 * When the form is submitted, it prevents the default form submission, retrieves the search query,
 * sends the query to the `searchPost` function, and renders the search results using the `renderPostTemplate` function.
 *
 * @throws {Error} Throws an error if adding the event listener fails.
 * @example
 * createSearchListener();
 */

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
