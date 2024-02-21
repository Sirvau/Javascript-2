
//Local Storage save function
/**
 * 
 * @param {*} key 
 * @param {*} value 
 */

export function save(key, value) {
    localStorage.setItem(key, JSON.stringify(value));
}

//Local Storage retrieve function
/**
 * 
 * @param {*} key 
 * @returns 
 */

export function load(key) {
    return JSON.parse(localStorage.getItem(key));
}

