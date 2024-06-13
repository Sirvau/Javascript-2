import { apiV2_BaseUrl, apiV2_Search } from "../constants.mjs";

export async function searchPost(value) {
    try {
      let searchURL = new URL(apiV2_BaseUrl + apiV2_Search);
  
      searchURL.searchParams.append('q', value);
  
      console.log(searchURL);
  
      const response = await fetch(searchURL);
      const result = response.json();
  
      if (response.ok) {
        return await result;
      } else {
        throw new Error(response.status);
      }
    } catch (error) {
      return error;
    }
  }