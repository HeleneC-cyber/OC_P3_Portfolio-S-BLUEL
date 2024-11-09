import { createTag } from "../utils/helpers.js"




// @param input = élément input pour lequel on veut afficher le message d'erreur
// @param regex = Expression régulière choisie


// Affiche et crée dynamiquement le message d'erreur de l'input dans une div

const displayErrorInput = (input) => {

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
    divError.innerText = `${input.id} non valide`

}




// Enlève le message d'erreur de l'input en supprimant la divError
const removeDisplayErrorInput = (input) => {

    let parentDiv = input.parentElement
    let divError = parentDiv.querySelector(".error")

    // Si la div avec la classe.error existe...
    if (divError) {
        // ...alors on la supprime
        parentDiv.removeChild(divError)
    }
}




// Teste la valeur de l'input pour savoir si elle comporte des erreur comporte des erreurs ou correspond au format d'input

export const testErrorInput = (input, regex) => {

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