/**
 * Recupera il titolo di un postdato il suo ID
 * @param {number} postId - L'ID del post di cui recuperare il titolo
 * @returns {Promise<string>} - Una promessa che risolve con il titolo del post
 */

function getPostTitle(postId) {
    return fetch(`https://dummyjson.com/posts/${postId}`)
        .then(response => {
            if (!response.ok) {
                throw new Error(`Errore nella richiesta: ${response.status}`);
            }
            return response.json();
        })
        .then(data => data.title);
}

// Esempio di utilizzo
getPostTitle('./posts/1')
    .then(title => console.log(`Il titolo del post è: ${title}`))
    .catch(error => console.error(`Si è verificato un errore: ${error.message}`));