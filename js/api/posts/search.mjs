import { apiV2_BaseUrl, apiV2_Search } from "../constants.mjs";
import { authFetch } from "../fetch.mjs";


/**
 * Sends a GET request to the search API endpoint with the specified search value.
 *
 * This function constructs the search URL with the given search value, sends an authenticated
 * fetch request, and returns the search results as a JSON object if the request is successful.
 * If the request fails, an error is thrown or returned.
 * 
 * @param {string} value - The search query value.
 * @returns {Promise<Object>} A promise that resolves to the search results as a JSON object.
 * @throws {Error} Throws an error if the search request fails.
 * @example
 * searchPost('example query')
 *   .then(result => console.log(result))
 *   .catch(error => console.error(error));
 */


export async function searchPost(value) {
    try {
      let searchURL = new URL(apiV2_BaseUrl + apiV2_Search);
  
      searchURL.searchParams.append('q', value);
  
      console.log(searchURL);
  
      const response = await authFetch(searchURL);
      const result = await response.json();
  
      if (response.ok) {
        return result;
      } else {
        throw new Error(response.status);
      }
    } catch (error) {
      return error;
    }
  }