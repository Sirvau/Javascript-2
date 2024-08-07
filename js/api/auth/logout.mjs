import { remove } from "../../storage/localstorage.mjs";

export function logout() {
    remove('token');
    remove('profile');
  }
