import { displayErrorInput, removeDisplayErrorInput } from "../utils/displayAndRemoveErrorInputs.js"



// @param input = élément input pour lequel on veut afficher le message d'erreur
// @param regex = Expression régulière choisie


// Teste la valeur de l'input pour savoir si elle comporte des erreur comporte des erreurs ou correspond au format d'input

export const testErrorInput = (input, regex) => {

    // Ecoute à chaque ajout de caractère dans l'input, la valeur de l'input change...
    input.addEventListener("input", () => {

        // Si la valeur de l'input ne correspond pas à la RegEx
        if (!regex.test(input.value)) {
            // Alors on enlève la classe validate à l'input et on affiche le message d'erreur
            input.classList.remove("validate")
            displayErrorInput(`${input.id} non valide`, input)
            
        } else {
            // Sinon la valeur de l'input est valide, on ajoute la classe validate à l'input et on enlève le message d'erreur
            input.classList.add("validate")
            removeDisplayErrorInput(input)
        }
    })
}