import { load } from "../storage/localstorage.mjs";
import { apiKey } from "./constants.mjs";




export function headers(hasBody = false) {
    const headers = new Headers();
    const token = load("token");

    if (token) {
        headers.append("Authorization", `Bearer ${token}`);
    }

    if (apiKey) {
        headers.append("X-Noroff-API-Key", apiKey);
    }

    if (hasBody) {
        headers.append("Content-Type", "application/json");
    }

    return headers;
}