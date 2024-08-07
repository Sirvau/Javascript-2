import { apiV2_BaseUrl, apiV2_Search } from "../constants.mjs";
import { authFetch } from "../fetch.mjs";

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