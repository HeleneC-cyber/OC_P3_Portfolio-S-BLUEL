import { createTag } from "../../utils/helpers.js"
import { createImageElement } from "../modalUtils/firstViewUtils/createImageElement.js"
import { addImageToFirstViewTable } from "../modalUtils/firstViewUtils/manageFirstViewFromTable.js"



// Gère la première vue de la modale : permet  l'affichage de la first view et la suppression des images de la galerie

export const generateFirstView = (works, modal, firstViewImages) => {

    // FIRST VIEW 
    const modalContainerFirstView = createTag("div", "modal-container first-view")
    modal.appendChild(modalContainerFirstView)


    // TITRE 
    const modalTitle = createTag("h3")
    modalTitle.innerText = "Galerie photo"
    modalContainerFirstView.appendChild(modalTitle)


    // GALLERIE IMAGE 
    const modalGalleryWrap = createTag("div", "modal-gallery-wrap")
    modalContainerFirstView.appendChild(modalGalleryWrap)


    // Récupère les éléments de works et les places dans "modalGalleryWrap"
    for (let i = 0; i < works.length; i++) {
        // Récupère à chaque passage de la boucle un item "work" de la galerie de l'api
        let work= works[i]
        
        // Créer un élément contenant l'image de la first view (et le place dans le DOM)
        const imgParent = createImageElement(work, modalGalleryWrap)
        addImageToFirstViewTable(firstViewImages,imgParent, work.id)
        
    }

    // LIGNE
    const modalLine = createTag("div", "modal-line")
    modalContainerFirstView.appendChild(modalLine)
    
    // BOUTON
    const addPhotoBtnModal = createTag("div", "btn-modal background-validate")
    addPhotoBtnModal.innerText = "Ajouter une photo"
    modalContainerFirstView.appendChild(addPhotoBtnModal)
    
    return { addPhotoBtnModal, modalGalleryWrap, modalContainerFirstView}
}
