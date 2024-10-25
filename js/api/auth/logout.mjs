import { remove } from "../../storage/localstorage.mjs";

/**
 * Clears the user's authentication token and profile data from local storage. 
 */

export function logout() {
    remove('token');
    remove('profile');
  }
