import { switchFirstSecondView } from "./views/switchFirstSecondView.js"
import { setupModalClose } from "./utilsModal/setupModaleClose.js"
// import { removeItemFirstView } from "./utilsModal/removeItemFirstView.js"
// import { displayValidImg } from "./utilsModal/displayValidImg.js"
import { resetForm } from "./utilsModal/resetForm.js"
import { validateForm } from "./utilsModal/validateForm.js"
import { manageSubmitForm } from "./utilsModal/manageSubmitForm.js"
// import { getTag } from "../utils/helpers.js"
// import { manageForm } from "./utilsModal/validateInputTitle.js"
// import { getTag } from "../utils/helpers.js"

// import { getTag } from "../../utils/helpers.js"
// validateInputCategory, validateInputText 




export const setupEventListenersModal = (modal, overlayBody, modalCloseBtn,firstViewImages, modalGalleryElements, addPhotoBtnModal, modalGalleryWrap, modalContainerFirstView, modalContainerSecondView, iconBackArrow, modalForm, inputFileBackground, inputFileWrap, inputFile, descriptionFile, inputTitle, selectCategory, validateBtnModal) => {

    // Configure la fermeture de la modale à l'aide de plusieurs écouteurs(overlayBody et modalCloseBtn)
    setupModalClose(overlayBody, modal, modalCloseBtn)

    
    // // Boucle sur chaque élément du tableau modalGalleryElements pour les récupérer et les utiliser en paramètres de removeItemFirstView (qui supprime l'image dans la first view et dans la gallery du portfolio)
    // modalGalleryElements.forEach(({ i, imgGalleryParent, imgGallery }) => {
    //     removeItemFirstView(i, imgGalleryParent, imgGallery.id)
    // })
    

    // Affiche en alternance première et deuxième vue à l'aide de la classe hidden (cachant l'une ou l'autre selon le bouton cliqué)
    switchFirstSecondView(modal, addPhotoBtnModal, modalContainerFirstView, modalContainerSecondView, iconBackArrow)
    
    // // Affiche la preview du fichier image valide
    // const previewElement = displayValidImg(inputFileBackground, inputFileWrap, inputFile, descriptionFile)
    
    
    // Vérifie si tous les champs du formulaire sont valides, si oui le bouton "valider" change de style
    validateForm(inputFileBackground, inputFileWrap, inputFile, descriptionFile, inputTitle, selectCategory, validateBtnModal)
    
    
    // Gère le formulaire à l'envoie (accessible, une fois le formulaire validé)
    manageSubmitForm(firstViewImages, modalGalleryWrap, inputFile, inputTitle, selectCategory, validateBtnModal, modalForm, inputFileBackground, inputFileWrap, descriptionFile)
    
    
    // Au click sur le bouton "iconBackArrow"
    iconBackArrow.addEventListener("click", () => {
        // Réinitialisation du formulaire (message d'erreur et preview image compris)
        resetForm(modalForm, inputFileBackground, inputFileWrap, inputFile, descriptionFile, inputTitle, selectCategory)
    })


    // const form = getTag(".modal-form")
    // form.addEventListener("submit", (e) => {
    //     e.preventDefault()
    //     console.log(form)
    // manageForm(inputFile, inputTitle, selectCategory, validateBtnModal)
    // validateInputText(inputTitle)
    // validateInputCategory(selectCategory)



    // // Ajoute les écouteurs d'événements pour la validation en temps réel
    // inputFile.addEventListener("change", validateForm(inputFile, previewElement, inputTitle, selectCategory,validateBtnModal))
    // inputTitle.addEventListener("input", validateForm(inputFile, previewElement, inputTitle, selectCategory,validateBtnModal))
    // selectCategory.addEventListener("change", validateForm(inputFile, previewElement, inputTitle, selectCategory,validateBtnModal))

// })


}