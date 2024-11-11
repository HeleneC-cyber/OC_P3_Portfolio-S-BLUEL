import { switchFirstSecondView } from "./views/switchFirstSecondView.js"
import { setupModalClose } from "./utilsModal/setupModaleClose.js"
import { removeItemFirstView } from "./utilsModal/removeItemFirstView.js"
import { displayValidImg } from "./utilsModal/displayValidImg.js"
import { resetInputsModal } from "./utilsModal/resetInputsModal.js"
import { validateForm} from "./utilsModal/validateInputTitle.js"
import { getTag } from "../utils/helpers.js"
// import { manageForm } from "./utilsModal/validateInputTitle.js"
// import { getTag } from "../utils/helpers.js"

// import { getTag } from "../../utils/helpers.js"
// validateInputCategory, validateInputText 




export const setupEventListenersModal = (modal, overlayBody, modalCloseBtn, modalGalleryElements, addPhotoBtnModal, modalContainerFirstView, modalContainerSecondView, iconBackArrow, inputFileBackground, inputFileWrap, inputFile, descriptionFile, inputTitle, selectCategory, validateBtnModal) => {

    // Configure la fermeture de la modale à l'aide de plusieurs écouteurs(overlayBody et modalCloseBtn)
    setupModalClose(overlayBody, modal, modalCloseBtn)


    // Boucle sur chaque élément du tableau modalGalleryElements pour les récupérer et les utiliser en paramètres de removeItemFirstView (qui supprime l'image dans la first view et dans la gallery du portfolio)
    modalGalleryElements.forEach(({ i, imgGalleryParent, imgGallery }) => {
        removeItemFirstView(i, imgGalleryParent, imgGallery.id)
    })

    // Affiche en alternance première et deuxième vue à l'aide de la classe hidden (cachant l'une ou l'autre selon le bouton cliqué)
    switchFirstSecondView(modal, addPhotoBtnModal, modalContainerFirstView, modalContainerSecondView, iconBackArrow)

    // // Affiche la preview du fichier image valide
    // const previewElement = displayValidImg(inputFileBackground, inputFileWrap, inputFile, descriptionFile)

    
    validateForm(inputFileBackground, inputFileWrap, inputFile, descriptionFile, inputTitle, selectCategory, validateBtnModal)

    // Réinitialisation des inputs lorsque la deuxième vue n'est plus visible
    resetInputsModal(iconBackArrow, descriptionFile, inputFileBackground, inputFileWrap, inputFile, selectCategory)


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