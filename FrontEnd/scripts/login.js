//    == == == == == == == == == == == == == ==
//  || GESTION DES ERREURS AU SEIN DES INPUTS  ||
//    == == == == == == == == == == == == == ==

// @param input = élément input pour lequel on veut afficher le message d'erreur
// @param regex = Expression régulière choisie

// Affiche et crée dynamiquement le message d'erreur de l'input dans une div
export function displayErrorInput(input) {
    // Récupération de la div parent
    let parentDiv = input.parentElement
    // Récupération de la div ayant la classe .error, dans une variable
    let divError = parentDiv.querySelector(".error")
    // Si la variable divError n'existe pas donc s'il n'y a pas de div avec .error...
    if (!divError) {
        // ... alors on crée l'élément avec la classe .error, on le position dans le DOM et on ajoute un texte (message d'erreur) dans l'élément
        divError = document.createElement("div")
        divError.classList.add("error")
        parentDiv.appendChild(divError)
    }
    // La varible existe (a été récupérée ou vient être créée) 
    // Ajout d'un contenu text à la div 
    divError.innerText = `${input.id} non valide`

}

// Enlève le message d'erreur de l'input en supprimant la divError
export function removeDisplayErrorInput(input) {
    let parentDiv = input.parentElement
    let divError = parentDiv.querySelector(".error")
    if (divError) {
        parentDiv.removeChild(divError)
    }
}

// Teste la valeur de l'input pour savoir si elle comporte des erreur comporte des erreurs ou correspond au format d'input
export function testErrorInput(input, regex) {
    // Ecoute à chaque ajout de caractère dans l'input, la valeur de l'input change...
    input.addEventListener("input", () => {
        // Si la valeur de l'input ne correspond pas à la RegEx
        if (!regex.test(input.value)) {
            // Alors on enlève la classe validate à l'input et on affiche le message d'erreur
            input.classList.remove("validate")
            displayErrorInput(input)
        } else {
            // Sinon la valeur de l'input est valide, on ajoute la classe validate à l'input et on enlève le message d'erreur
            input.classList.add("validate")
            removeDisplayErrorInput(input)
        }
    })
}






//    == == == == == == == == == == == ==
//  || AUTHENTIFICATION DE L'UTILISATEUR ||
//    == == == == == == == == == == == ==

// récupère les valeurs de l'email et du mdp
// on combine les deux dans un objet (=couple d'identifiant) pour correspond au format de la requete : 
// {
//     "email": "string",
//     "password": "string"
//   }
// on fait la requete "fetch" => je reçois la réponse
// si l'objet (couple identifiant) n'est pas validé par la requête 
// alors on affiche le message d'erreur demandé : “Erreur dans l’identifiant ou le mot de passe”
// si le couple identifiant donc le contenu de la requete est considéré par l'api comme valide
// alors  :
// - on récupère l'objet de l'api avec un id et un token
// - Mettre dans le sessioStorage : sessionStorage.setItem("nomdelaclé", value)
// - on redirige vers la page index.html
// - si la personne est toujours co :à verif avec sessionStorage.getItem("nomdelaclé") (perso co ?) => si renvoie null = personne pas co
// -  alors ajout des boutons d'édition + login devient logout
// - sinon : pas ajout : page index.html sans modif

// pour se deco au click du logout => sessionStorage.removeItem("nomdelaclé") ==> connexion au sessionStorage dure jusqu'à la fermeture du navigateur



// Gère l'authentification
export function manageAuthentication(inputId, inputPassword) {
    const form = document.querySelector("form")
    // Après la récupération du form, on écoute le form à l'envoie (submit)
    form.addEventListener("submit", (e) => {
        // A l'événement on empêche le rechargement de la page
        e.preventDefault()
        // Si les valeurs des deux inputs sont valides (donc respecte les Regexp, ici vérifier par l'attribution de la classe validate)...
        if (inputId.classList.contains("validate") && inputPassword.classList.contains("validate")) {
            // Alors l'authentification se lance
            authentication(inputId, inputPassword)
        }
        // Sinon (si l'une des deux valeurs n'est pas valide) il ne se passe rien
    })

}


// Lance l'authentification : envoie la requête POST avec les valeurs des input
export async function authentication(inputId, inputPassword, dataCatching) {
    // Récupère les valeurs des inputs dans des variables
    let email = inputId.value
    let password = inputPassword.value
    // Définit le couple identifiant à envoyer pour la requête
    const identifyingPair = { "email": email, "password": password }
    // Définit la requête en utilisant la méthode fetch et en fournissant des options dans le deuxième paramètre (objet) de fetch : method headers body
    const response = await fetch("http://localhost:5678/api/users/login", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        // Change la valeur JavaScript du couple identifiant en chaîne JSON
        body: JSON.stringify(identifyingPair)
    })
        // récupère la réponse à la rêquete dans un format "illisible" qu'on récupère au format JSON avec la méthode json
        .then(response => response.json())
        // Nouvelle promise, permet de récupérer le corps de la requête dans un objet on le récupère du then en attribuant cet objet au paramètre dataCatching
        .then(data => dataCatching = data)

    console.log(dataCatching)
    console.log(dataCatching.token)

    // Si la propriétée token de l'objet dataCatching n'existe pas, requête échouée...
    if (!dataCatching.token) {
        // Alors affiche un message d'erreur
        displayResponseError()
    } else {
        // Sinon, la rêquete réussie, on récupère le token
        const token = dataCatching.token
        // On enregitre le token (clé et valeur) dans le sessionStorage
        sessionStorage.setItem("token", token)
        // On redirige vers index.html
        document.location.href="./index.html"
    }

}


// Affiche le message d'erreur pour la requête POST et le positionne dans le DOM
export function displayResponseError() {
    const form = document.querySelector("form")
    const errorMessage = document.createElement("p")
    errorMessage.classList.add("error")
    const btnSubmit = form.querySelector('input[type="submit"]')
    const parentErrorMessage = btnSubmit.parentNode
    parentErrorMessage.insertBefore(errorMessage, btnSubmit.nextSibling)
    errorMessage.innerText = "Erreur dans l'identifiant ou le mot de passe"
}




// .then(responseLogin => {
//     if (!responseLogin.ok) {
//        throw new Error(responseLogin.error);
//     }
//     return responseLogin;
//   })
// .catch(error => {
//     displayErrorInput(error)
// })
