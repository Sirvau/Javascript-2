import { logout } from "../../api/auth/logout.mjs";


/**
 * Adds an event listener to a DOM element that logs out the user when the element is clicked.
 *
 * This function attaches a click event listener to the specified DOM element. When the element
 * is clicked, the user is logged out by calling the `logout` function, which removes the user's
 * authentication token and profile from local storage.
 */

export function logoutListener() {
    const logoutButton = document.getElementById('logout-button');

    logoutButton.addEventListener('click', (event) => {
        event.preventDefault();
        try {
            logout();
            console.log("User is logged out");
            window.location.pathname = './index.html';
        } catch (error) {
            console.error('User is not logged out:', error)
        }
      
      });
      
    
}
