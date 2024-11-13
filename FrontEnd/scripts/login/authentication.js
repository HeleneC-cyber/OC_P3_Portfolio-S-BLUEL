import { loginUser } from "../utils/api.js"
import { createTag, getTag } from "../utils/helpers.js"



// Gère l'authentification

export const manageAuthentication = (inputId, inputPassword) => {
    const form = getTag("form")

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



// Lance l'authentification : envoie la requête POST avec les valeurs des inputs et redige vers la page index.html ou affiche un message d'erreur

const authentication = async (inputId, inputPassword) => {
    // Récupère les valeurs des inputs dans des variables
    let email = inputId.value
    let password = inputPassword.value

    // Appelle la fonction loginUser avec email et password et récupère les données data dans dataCatching
    const dataCatching = await loginUser(email, password)

    // Si la propriétée token dans la variable dataCatching n'existe pas, requête échouée...
    if (!dataCatching.token) {
        // Alors affiche un message d'erreur
        displayResponseError()

    } else {
        // Sinon, la rêquete réussie, on récupère le token
        const token = dataCatching.token
        // On enregitre le token (clé et valeur) dans le sessionStorage
        sessionStorage.setItem("token", token)
        // On redirige vers index.html
        document.location.href = "./index.html"
        
    }

}




// Affiche le message d'erreur pour la requête POST et le positionne dans le DOM

const displayResponseError = () => {
    const form = document.querySelector("form")

    let errorMessage = form.querySelector(".error")
    if (!errorMessage) {
    const errorMessage = createTag("p", "error")
    errorMessage.innerText = "Erreur dans l'identifiant ou le mot de passe"

    const btnSubmit = form.querySelector('input[type="submit"]')
    const parentErrorMessage = btnSubmit.parentNode
    parentErrorMessage.insertBefore(errorMessage, btnSubmit.nextSibling)
    }

}
