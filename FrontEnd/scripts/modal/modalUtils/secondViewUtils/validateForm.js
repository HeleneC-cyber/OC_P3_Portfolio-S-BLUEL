import { displayErrorInput, removeDisplayErrorInput } from "../../../utils/displayAndRemoveErrorInputs.js"
import { getTag } from "../../../utils/helpers.js"
import { displayValidImg } from "./displayValidImg.js"



export const validateForm = (inputFileBackground, inputFileWrap, inputFile, descriptionFile, inputTitle, selectCategory, validateBtnModal) => {

    // Initialise la variable comme true et va permettre de vérifier chaque champ (true/false)
    let isValidInputFile = false
    let isValidInputTitle = false
    let isValidInputSelect = false

    // INPUTFILE
    inputFile.addEventListener("change", () => {
        
        // Evite les erreurs et évite le maintien de la classe lorsque l'input "disparait" (display : none)
        if (getTag(".flash-error")) {
            descriptionFile.classList.remove("flash-error")
        }
        
        // Affiche la preview du fichier image valide
        displayValidImg(inputFileBackground, inputFileWrap, inputFile, descriptionFile)
        

        // Vérifie si le fichier a une image valide: si preview-container contient la classe active = true, sinon false
        isValidInputFile = getTag(".preview-container")?.classList.contains("active") || false
         // Appelle la fonction checkAllValid
        checkAllValid(isValidInputFile, isValidInputTitle, isValidInputSelect, validateBtnModal)

    })

    // INPUTTEXT
    inputTitle.addEventListener("input", () => {

        // Vérifie si le champ titre a au moins une lettre 
        // (méthode trim() enlève les espaces et permet ici de ne pas compter un espace comme un caractère)
        isValidInputTitle = inputTitle.value.trim().length >= 3
        if (!isValidInputTitle) displayErrorInput("Le titre doit contenir au moins trois caractères.", inputTitle)
        else removeDisplayErrorInput(inputTitle)
        checkAllValid(isValidInputFile, isValidInputTitle, isValidInputSelect, validateBtnModal)

    })

    // SELECT
    selectCategory.addEventListener("change", () => {

        // Vérifie si une catégorie est sélectionnée
        isValidInputSelect = selectCategory.selectedIndex !== 0
        if (!isValidInputSelect) displayErrorInput("Veuillez choisir une catégorie.", selectCategory)
        else removeDisplayErrorInput(selectCategory)
        checkAllValid(isValidInputFile, isValidInputTitle, isValidInputSelect, validateBtnModal)

    })

}



// Fonction qui vérifie si tous les champs sont valides et gère le bouton de validation
const checkAllValid = (isValidInputFile, isValidInputTitle, isValidInputSelect, validateBtnModal) => {

    // Si si tous les champs sont true (aucun isValid....===false) alors remplace la classe "bg-unvalid" par "bg-validate"
    if (isValidInputFile === true && isValidInputTitle === true && isValidInputSelect === true) {

        validateBtnModal.classList.replace("background-unvalid", "background-validate")

    } else { //Sinon, enlève la classe "background-valid" (si elle est existe)
        if (validateBtnModal.classList.contains("background-validate")) validateBtnModal.classList.replace("background-validate", "background-unvalid")
    }

}
