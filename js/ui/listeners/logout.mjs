import { logout } from "../../api/auth/logout.mjs";

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
