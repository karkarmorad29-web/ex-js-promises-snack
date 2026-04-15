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

/*function getPostWithAuthor(postId) {
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
*/

/**
 * simula il lancio di un dado con una promise.
 * @returns {Promise<number>} - Una promessa che risolve con un numero casuale tra 1 e 6, o si rifiuta con un errore se il dado si incastra (20% di probabilità).
 * */

/*function laciaDado() {
    return new Promise((resolve, reject) => {
        console.log('Lancio del dado...');

        setTimeout(() => {
            // Genera un numero casuale tra 0 e 1 per la probabilità del 20%
            const siIncastra = Math.random() < 0.2; // 20% di probabilità

            if (siIncastra) {
                reject(new Error('Il dado si è incastrato! Riprova.'));
            } else {
                // Genera un numero casuale tra 1 e 6
                const risultato = Math.floor(Math.random() * 6) + 1;
                resolve(risultato);
            }
        }, 1000);// Simula un ritardo di 1 secondo per il lancio del dado
    });
}

// Esempio di utilizzo
laciaDado()
    .then(risultato => {
        console.log(`Hai ottenuto un ${risultato}!`);
    })
    .catch(error => {
        console.error(`Si è verificato un errore: ${error.message}`);
    });
*/

/**
 * Crea una versione di lanciaDado che ricordal'ultimo risultato.
 * @return {function} la closure che gestice la logica dei lanci consecutivi.
 */

function creaLanciaDado() {
    let ultimoRisultato = null;

    return function () {
        return LanciaDado()
            .then(risultato => {

                if (risultato === ultimoRisultato) {
                    console.log(`Hai ottenuto di nuovo un ${risultato}!`);
                }

                // Aggiorna l'ultimo risultato
                ultimoRisultato = risultato;
                return risultato;
            })
            .catch(error => {
                console.error(`Si è verificato un errore: ${error.message}`);
                throw error; // Rilancia l'errore per gestirlo a livello superiore se necessario
            });
    };
}




