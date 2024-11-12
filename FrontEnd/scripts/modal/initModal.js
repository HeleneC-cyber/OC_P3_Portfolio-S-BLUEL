import { getTag, createTag } from "../utils/helpers.js"
import { generateFirstView } from "./views/generateFirstView.js"
import { setupEventListenersModal } from "./setupEventListenersModal.js"
import { generateSecondView } from "./views/generateSecondView.js"
// import { switchFirstSecondView } from "./views/switchFirstSecondView.js"
// import { manageSecondView } from "./views/switchFirstSecondView.js"
// import { previewImgForm } from "./utilsModal/previewImgForm.js"
// import { removeItemFirstView } from "./utilsModal/removeItemFirstView.js"
// import { setupModalClose } from "./utilsModal/setupModaleClose.js"
// import { generateSecondView } from "./views/generateSecondView.js"



// Génère la modale (l'élément globale)

const generateModal = () => {
    // OVERLAY dans le DOM
    const body = getTag("body")
    const overlayBody = createTag('div', null, 'overlay-body')
    body.appendChild(overlayBody)

    // MODALE dans le DOM
    const modal = createTag('div','modal-background')
    overlayBody.appendChild(modal)

    // CROIX dans la modale
    const modalCloseBtn = `
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M17.6546 8.05106C18.1235 7.58214 18.1235 6.82061 17.6546 6.35169C17.1856 5.88277 16.4241 5.88277 15.9552 6.35169L12.005 10.3056L8.05106 6.35544C7.58214 5.88652 6.82061 5.88652 6.35169 6.35544C5.88277 6.82436 5.88277 7.58589 6.35169 8.05481L10.3056 12.005L6.35544 15.9589C5.88652 16.4279 5.88652 17.1894 6.35544 17.6583C6.82436 18.1272 7.58589 18.1272 8.05481 17.6583L12.005 13.7044L15.9589 17.6546C16.4279 18.1235 17.1894 18.1235 17.6583 17.6546C18.1272 17.1856 18.1272 16.4241 17.6583 15.9552L13.7044 12.005L17.6546 8.05106Z" fill="black"/>
        </svg>
    `
    modal.innerHTML += modalCloseBtn

    // Retourne les éléments
    return { overlayBody, modal, modalCloseBtn }

}




// Gère l'ensemble de la modale : affichage, apparition et disparition de la modale

export const manageModal = (works) => {
    
    const editTool = getTag("#portfolio .edit-tool")

    // Ecoute le bouton edition, au click sur celui-ci, lance la fonction qui gère la modale
    editTool.addEventListener("click", async () => {

        
        // Vérifie si l'overlay existe déjà (si oui s'arrête ici, sinon...)
        if (getTag("#overlay-body")) return
        
        // Appelle generateModal qui génère la modale et récupère les éléments
        const {overlayBody, modal, modalCloseBtn} = generateModal()

        
        // Initialiser un tableau global pour centraliser les images de la First View
        const firstViewImages = []
        
        // Appelle generateFirstView qui génère la première vue et récupère les éléments
        const {modalGalleryElements, addPhotoBtnModal,modalGalleryWrap, modalContainerFirstView} = generateFirstView(works, modal, firstViewImages)

        const{iconBackArrow, modalContainerSecondView, modalForm, inputFileBackground, inputFileWrap, inputFile, descriptionFile, inputTitle, selectCategory, validateBtnModal} = await generateSecondView(modal)

        // Configure et gére les écouteurs en passant tous les éléments nécessaires à la fonction d'écouteurs en paramètres
        setupEventListenersModal(modal, overlayBody, modalCloseBtn, firstViewImages, modalGalleryElements, addPhotoBtnModal, modalGalleryWrap, modalContainerFirstView, modalContainerSecondView, iconBackArrow, modalForm, inputFileBackground, inputFileWrap, inputFile, descriptionFile, inputTitle, selectCategory, validateBtnModal)
        
        console.log(firstViewImages)


        // // Boucle sur chaque élément pour appeler removeItemFirstView
        // modalGalleryElements.forEach(({ i, imgGalleryParent, imgGallery}) => {
        //     removeItemFirstView(i, imgGalleryParent, imgGallery.id)
        // })

        // Gère la seconde vue: récupère en paramètre la modale, le bouton, et la div contenant la première vue Affiche la second view au click sur le bouton et supprime la first view
        // manageSecondView(modal, addPhotoBtnModal, modalContainerFirstView)


    })

}




