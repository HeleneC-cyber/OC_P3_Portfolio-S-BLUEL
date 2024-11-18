import { switchFirstSecondView } from "./views/switchFirstSecondView.js"
import { setupModalClose } from "./modalUtils/setupModaleClose.js"
import { resetForm } from "./modalUtils/secondViewUtils/resetForm.js"
import { validateForm } from "./modalUtils/secondViewUtils/validateForm.js"
import { manageSubmitForm } from "./modalUtils/secondViewUtils/manageSubmitForm.js"
import { removeDisplayErrorInput } from "../utils/displayAndRemoveErrorInputs.js"



export const setupEventListenersModal = (modal, overlayBody, modalCloseBtn,firstViewImages, addPhotoBtnModal, modalGalleryWrap, modalContainerFirstView, modalContainerSecondView, iconBackArrow, modalForm, inputFileBackground, inputFileWrap, inputFile, descriptionFile, inputTitle, selectCategory, validateBtnModal) => {

    // Configure la fermeture de la modale à l'aide de plusieurs écouteurs(overlayBody et modalCloseBtn)
    setupModalClose(overlayBody, modal, modalCloseBtn)
    
    // Affiche en alternance première et deuxième vue à l'aide de la classe hidden (cachant l'une ou l'autre selon le bouton cliqué)
    switchFirstSecondView(modal, addPhotoBtnModal, modalContainerFirstView, modalContainerSecondView, iconBackArrow)
       
    // Vérifie si tous les champs du formulaire sont valides, si oui le bouton "valider" change de style
    validateForm(inputFileBackground, inputFileWrap, inputFile, descriptionFile, inputTitle, selectCategory, validateBtnModal)
    
    // Gère le formulaire à l'envoie (accessible, une fois le formulaire validé)
    manageSubmitForm(firstViewImages, modalGalleryWrap, inputFile, inputTitle, selectCategory, validateBtnModal, modalForm, inputFileBackground, inputFileWrap, descriptionFile)
    
    // Au click sur le bouton "iconBackArrow"
    iconBackArrow.addEventListener("click", () => {
        // Réinitialisation du formulaire (message d'erreur et preview image compris)
        resetForm(modalForm, inputFileBackground, inputFileWrap, inputFile, descriptionFile)
            // Supprime les messages d'erreurs des inputs seulement si la div contenant le message existe
        if(document.querySelectorAll(".form-group .error")) {
            removeDisplayErrorInput(inputTitle)
            removeDisplayErrorInput(selectCategory)
        } 
    })
}