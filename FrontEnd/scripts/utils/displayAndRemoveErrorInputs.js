import { createTag } from "../utils/helpers.js"


// Affiche et crée dynamiquement le message d'erreur de l'input dans une div

export const displayErrorInput = (message, input) => {

    // Récupération de la div parent
    let parentDiv = input.parentElement
    // Récupération de la div ayant la classe .error, dans une variable
    let divError = parentDiv.querySelector(".error")

    // Si la variable divError n'existe pas donc s'il n'y a pas de div avec .error...
    if (!divError) {
        // ... alors on crée l'élément avec la classe .error, on le position dans le DOM et on ajoute un texte (message d'erreur) dans l'élément
        divError = createTag("div", "error")
        // divError.classList.add("error")
        parentDiv.appendChild(divError)
    }

    // La varible existe (a été récupérée ou vient être créée) 
    // Ajout d'un contenu text à la div 
    divError.innerText = message
    // `${input.id} non valide`

}


// Enlève le message d'erreur de l'input en supprimant la divError
export const removeDisplayErrorInput = (input) => {

    let parentDiv = input.parentElement
    let divError = parentDiv.querySelector(".error")

    // Si la div avec la classe.error existe...
    if (divError) {
        // ...alors on la supprime
        parentDiv.removeChild(divError)
    }
}

