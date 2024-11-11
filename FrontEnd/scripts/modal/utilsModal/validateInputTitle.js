import { displayErrorInput, removeDisplayErrorInput } from "../../utils/displayAndRemoveErrorInputs.js"
import { getTag } from "../../utils/helpers.js"
import { displayValidImg } from "./displayValidImg.js"


// import { displayValidImg } from "./displayValidImg.js"
// import { validateImgType } from "./validateImgType.js"

// export const validateInputText = (input) => {
//     input.addEventListener("input", () => {
//         const text = input.value
//         console.log(text.length)
//         displayErrorMessage("")
//         if(text.length === 0) {
//             displayErrorMessage("Le titre est trop court.")
//         }
//         if (text.length < 3) {
//             displayErrorMessage("Le titre est trop court.")
//             // throw new Error("Le titre est trop court. ")
//         }
//         // return true
//     })

// }


// export const validateInputCategory = (inputCat) => {
//     inputCat.addEventListener("change", () => {
//         console.log(inputCat.selectedIndex)
//         displayErrorMessage("")
//         if (inputCat.selectedIndex === 0)  {
//             displayErrorMessage("La catégorie n'a pas été choisie.")

//             // throw new Error("La catégorie n'a pas été choisie. ")
//         }
//         // return true
//     })

// }
// export const displayErrorMessage = (message) => {

//     let divMessage = getTag(".modal-form .error-message")

//     if (!divMessage) {

//         divMessage = createTag("div", "error-message")
//         const modalLineSibling = getTag(".modal-form .modal-line")
//         const parentMessage = modalLineSibling.parentNode
//         parentMessage.insertBefore(divMessage, modalLineSibling)
//     }

//     divMessage.innerText = message

// }

// export const displayErrorMessage = (message, input) => {

//     let divMessage = input.nextElementSibling

//     if (!divMessage) {

//         divMessage = createTag("div", "error-message")
//         const parentMessage = input.parentNode
//         parentMessage.insertBefore(divMessage, input.nextSibling)
//     }

//     divMessage.innerText = message

// }

// // Supprime le message d'erreur
// const removeErrorMessage = (input) => {
//     const divMessage = getTag(".modal-form .error-message")
    
//     if (divMessage) {
//         divMessage.remove()
//     }
// }








export const validateForm = (inputFileBackground, inputFileWrap, inputFile, descriptionFile, inputTitle, selectCategory, validateBtnModal) => {
    // if (displayValidImg(inputFileBackground, inputFileWrap, inputFile, descriptionFile)=== true) {
    // } 
    // if(inputTitle.length > 1 &&)


    // Initialise la variable comme true et va permettre de vérifier chaque champ (true/false)
    let isValidInputFile = false
    let isValidInputTitle = false
    let isValidInputSelect = false



    inputFile.addEventListener("change", () => {

        // Affiche la preview du fichier image valide
        displayValidImg(inputFileBackground, inputFileWrap, inputFile, descriptionFile)

        // Vérifie si le fichier a une image valide
        isValidInputFile = getTag(".preview-container")?.classList.contains("active") || false;
        checkAllValid(isValidInputFile, isValidInputTitle, isValidInputSelect, validateBtnModal);
        // if (!getTag(".preview-container") || !getTag(".preview-container").classList.contains("active")) {
        //     // Affiche le message d'erreur après l'inputFile
        //     // displayErrorMessage("Veuillez sélectionner une image.", inputFile)
        //     isValidInputFile = false
        //     console.log(isValidInputFile)
        //     console.log(getTag(".preview-container"))
        // } else {
        //     isValidInputFile = true
        // }
        console.log(isValidInputFile)


    })

    inputTitle.addEventListener("input", () => {

        // Vérifie si le champ titre a au moins une lettre 
        // (méthode trim() enlève les espaces et permet ici de ne pas compter un espace comme un caractère)
        isValidInputTitle = inputTitle.value.trim().length >= 3
        if (!isValidInputTitle) displayErrorInput("Le titre doit contenir au moins trois caractères.", inputTitle)
        else removeDisplayErrorInput(inputTitle)
        checkAllValid(isValidInputFile, isValidInputTitle, isValidInputSelect, validateBtnModal)
        // if (inputTitle.value.trim().length < 3) {
        //     displayErrorInput("Le titre doit contenir au moins trois caractères.", inputTitle)
        //     isValidInputTitle = false
        //     console.log(isValidInputTitle)

        // } else {
        //     removeDisplayErrorInput(inputTitle)
        //     isValidInputTitle = true
            console.log(isValidInputTitle)

        // }
    })

    
    selectCategory.addEventListener("change", () => {

        // Vérifie si une catégorie est sélectionnée
        isValidInputSelect = selectCategory.selectedIndex !== 0;
        if (!isValidInputSelect) displayErrorInput("Veuillez choisir une catégorie.", selectCategory);
        else removeDisplayErrorInput(selectCategory);
        checkAllValid(isValidInputFile, isValidInputTitle, isValidInputSelect, validateBtnModal);

        // if (selectCategory.selectedIndex === 0) {
        //     displayErrorInput("Veuillez choisir une catégorie.", selectCategory)
        //     isValidInputSelect = false
        //     console.log(isValidInputSelect)
        // } else {
        //     removeDisplayErrorInput(selectCategory)
        //     isValidInputSelect = true
        //     console.log(isValidInputSelect)

        // }
            console.log(isValidInputSelect)


    })

}


export const checkAllValid = (isValidInputFile, isValidInputTitle, isValidInputSelect,validateBtnModal) => {
         // Si aucun champ n'est false (isValid === true) alors applique la classe si tout est valide
         if (isValidInputFile === true && isValidInputTitle === true && isValidInputSelect === true) {
            console.log(isValidInputFile, isValidInputTitle, isValidInputSelect)
            validateBtnModal.classList.replace("background-unvalid","background-validate")
    
        } else { //Sinon, enlève la classe "background-valid"
            if (validateBtnModal.classList.contains("background-validate")) validateBtnModal.classList.replace("background-validate","background-unvalid")
        }
}




export const manageSubmitForm = (validateBtnModal) => {
    const form = getTag(".modal-form")
    form.addEventListener("submit", (e) => {
        e.preventDefault()

        if (validateBtnModal.classList.contains("background-validate")) {
            // Appeler la fonction API pour FETCH avec un formDATA
            // Rediriger sur la page index.html
            // Vérifier que le formulaire est vide en rouvrant la modale !
            // SI ça fonctionne faire pareil mais sans rediriger ! Dois y avoir l'ajout dynamique sans devoir recharcher ! 
        }





    })
}










// validateImgType(inputFile.files[0])
    // displayErrorMessage("Tous les champs sont requis")
    // validateInputText(inputTitle)
    // validateInputCategory(selectCategory)
    // if ( displayValidImg===true && validateInputText(inputTitle)===true && validateInputCategory(selectCategory)===true ) {
    //     console.log("tout est parfait !")
    //     validateBtnModal.classList.replace("background-unvalid","background-validate")
    // }



    // export const validateForm = (inputFile, inputTitle, selectCategory, validateBtnModal) => {
    //     try {
    //         // Valide chaque champ
    //         validateInputText(inputTitle)
    //         validateInputCategory(selectCategory)

    //         // Si tout est valide, vide le message d'erreur et ajoute la classe au bouton
    //         displayErrorMessage("")
    //         validateBtnModal.classList.add("background-validate")

    //     } 
    //     catch (error) {
    //         // Si une erreur est levée, affiche le message et retire la classe
    //         displayErrorMessage(error.message)
    //         validateBtnModal.classList.remove("background-validate")
    //     }
    // }



// export const manageForm = (inputFile, inputTitle, selectCategory, validateBtnModal) => {
//     // const form = getTag(".modal-form")
//     // form.addEventListener("submit", (e) => {
//     //     e.preventDefault()
//     //     console.log(form)
//     //     try {
            
//     //         if (!validateImgType(inputFile.files[0])) throw new Error("L'image n'a pas été choisie. ")
//     //         validateInputText(inputTitle)
//     //         console.log(inputTitle)
//     //         console.log(inputTitle.value)

//     //         validateInputCategory(selectCategory)
//     //         console.log(inputTitle)
//     //         console.log(inputTitle.value)
//     //         displayErrorMessage("")
//     //         // validateBtnModal.classList.add("background-validate")
//     //         console.log("Formulaire soumis avec succès !")
//     //     } catch (error) {
//     //         displayErrorMessage(error.message)
//     //     }
                
//     // })
//     const form = getTag(".modal-form")
//     const submitButton = form.querySelector("button[type='submit']") // Sélectionne le bouton de soumission

//     const validateForm = (validateBtnModal) => {
//         try {
//             // Valide chaque champ
//             validateInputText(inputTitle)
//             validateInputCategory(selectCategory)

//             // Si tout est valide, vide le message d'erreur et ajoute la classe au bouton
//             displayErrorMessage("")
//             validateBtnModal.classList.add("background-validate")

//         } catch (error) {
//             // Si une erreur est levée, affiche le message et retire la classe
//             displayErrorMessage(error.message)
//             validateBtnModal.classList.remove("background-validate")
//         }
//     }

//     // Écoute les changements sur les champs pour une validation en temps réel
//     inputTitle.addEventListener("input", validateForm(validateBtnModal))
//     selectCategory.addEventListener("change", validateForm(validateBtnModal))


// }