/**
 * Recupera il titolo di un postdato il suo ID
 * @param {number} postId - L'ID del post di cui recuperare il titolo
 * @returns {Promise<string>} - Una promessa che risolve con il titolo del post
 */

/*function getPostTitle(postId) {
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
    */

/**
 * Recupero un post completo e vi aggiunge i dati dell'autore
 * @param {number} postId - L'ID del post da recuperare
 * @returns {Promise<Object>} - Una promessa che risolve con un oggetto contenente i dati del post e dell'autore
 */

function getPostWithAuthor(postId) {
    return fetch(`https://dummyjson.com/posts/${postId}`)
        .then(response => response.json())
        .then(post => {
            // Recupera i dati dell'autore del post
            return fetch(`https://dummyjson.com/users/${post.userId}`)
                .then(response => response.json())
                .then(user => {
                    // Aggiungi i dati dell'autore al post
                    return { ...post, author: user };
                });
        });
}

// Esempio di utilizzo
getPostWithAuthor(1)
    .then(postWithAuthor => {
        console.log('Post con dati dell\'autore:', postWithAuthor);
    })
    .catch(error => {
        console.error('Si è verificato un errore:', error);
    });

