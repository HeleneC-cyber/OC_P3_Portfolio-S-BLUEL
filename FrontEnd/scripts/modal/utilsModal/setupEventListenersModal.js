import { switchFirstSecondView } from "../views/switchFirstSecondView.js"
import { setupModalClose } from "./setupModaleClose.js"
import { removeItemFirstView } from "./removeItemFirstView.js"
import { displayValidImg } from "./displayValidImg.js"
import { resetInputsModal } from "../utilsModal/resetInputsModal.js"

// import { getTag } from "../../utils/helpers.js"





export const setupEventListenersModal = (modal, overlayBody, modalCloseBtn, modalGalleryElements, addPhotoBtnModal, modalContainerFirstView, modalContainerSecondView, iconBackArrow, inputFileBackground, inputFileWrap, inputFile, descriptionFile, selectCategory) => {

    // Configure la fermeture de la modale à l'aide de plusieurs écouteurs(overlayBody et modalCloseBtn)
    setupModalClose(overlayBody, modal, modalCloseBtn)


    // Boucle sur chaque élément du tableau modalGalleryElements pour les récupérer et les utiliser en paramètres de removeItemFirstView (qui supprime l'image dans la first view et dans la gallery du portfolio)
    modalGalleryElements.forEach(({ i, imgGalleryParent, imgGallery }) => {
        removeItemFirstView(i, imgGalleryParent, imgGallery.id)
    })

    // Affiche en alternance première et deuxième vue à l'aide de la classe hidden (cachant l'une ou l'autre selon le bouton cliqué)
    switchFirstSecondView(modal, addPhotoBtnModal, modalContainerFirstView, modalContainerSecondView, iconBackArrow)

    const previewContainer = displayValidImg(inputFileBackground, inputFileWrap, inputFile, descriptionFile)

    resetInputsModal(iconBackArrow, descriptionFile, inputFileBackground, inputFileWrap, previewContainer, inputFile, selectCategory)

    // const inputfile = getTag("#input-image")


    // console.log(inputfile)
    // console.log(secondViewElements)
    // secondViewElements.forEach((item) => {
    //     console.log(item)
    // displayValidImg(inputFileBackground, inputFileWrap, inputFile)

    // })
}