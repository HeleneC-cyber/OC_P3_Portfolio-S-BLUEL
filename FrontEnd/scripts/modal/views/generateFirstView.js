import { createTag } from "../../utils/helpers.js"
import { createImageElement } from "../utilsModal/createImageElement.js"
import { addImageToTable } from "../utilsModal/manageFirstView.js"
// import { addImageToFirstViewTable } from "../utilsModal/removeItemFirstViewFromTable.js"




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

    // Tableau vide (pour stoker les éléments de la galerie par la suite)
    // const modalGalleryElements = []

    // Récupère les éléments de works et les places dans "modalGalleryWrap"
    for (let i = 0; i < works.length; i++) {
        // Récupère à chaque passage de la boucle un item img de la galerie de l'api
        let work = works[i]

        // // Création et placement du parent de la div parent contenant img de l'api et un svg
        // const imgGalleryParent = createTag("div", "modal-img-gallery")
        // modalGalleryWrap.appendChild(imgGalleryParent)

        // // Création d'un élément img composé de l'url de l'img et du titre de l'imgGallery (récupéré et répété pour chaque objet du tableau works) et on lui associe un svg sibling 
        // const imgGalleryElementModal = `
        // <img src="${imgGallery.imageUrl}" alt="${imgGallery.title}">
        // <svg width="17" height="17" viewBox="0 0 17 17" fill="none" xmlns="http://www.w3.org/2000/svg">
        //  <rect width="17" height="17" rx="2" fill="black"/>
        //  <path d="M6.71607 3.35558C6.82455 3.13661 7.04754 3 7.29063 3H9.70938C9.95246 3 10.1754 3.13661 10.2839 3.35558L10.4286 3.64286H12.3571C12.7127 3.64286 13 3.93013 13 4.28571C13 4.64129 12.7127 4.92857 12.3571 4.92857H4.64286C4.28728 4.92857 4 4.64129 4 4.28571C4 3.93013 4.28728 3.64286 4.64286 3.64286H6.57143L6.71607 3.35558ZM4.64286 5.57143H12.3571V12C12.3571 12.7092 11.7806 13.2857 11.0714 13.2857H5.92857C5.21942 13.2857 4.64286 12.7092 4.64286 12V5.57143ZM6.57143 6.85714C6.39464 6.85714 6.25 7.00179 6.25 7.17857V11.6786C6.25 11.8554 6.39464 12 6.57143 12C6.74821 12 6.89286 11.8554 6.89286 11.6786V7.17857C6.89286 7.00179 6.74821 6.85714 6.57143 6.85714ZM8.5 6.85714C8.32321 6.85714 8.17857 7.00179 8.17857 7.17857V11.6786C8.17857 11.8554 8.32321 12 8.5 12C8.67679 12 8.82143 11.8554 8.82143 11.6786V7.17857C8.82143 7.00179 8.67679 6.85714 8.5 6.85714ZM10.4286 6.85714C10.2518 6.85714 10.1071 7.00179 10.1071 7.17857V11.6786C10.1071 11.8554 10.2518 12 10.4286 12C10.6054 12 10.75 11.8554 10.75 11.6786V7.17857C10.75 7.00179 10.6054 6.85714 10.4286 6.85714Z" fill="white"/>
        // </svg>
        // `
        // // Placement de élément img et de l'élement svg dans imgGalleryParent
        // imgGalleryParent.innerHTML += imgGalleryElementModal

        // // Ajoute les éléments créés au tableau
        // modalGalleryElements.push({i, imgGalleryParent, imgGallery})
        
        const imgParent = createImageElement(work, modalGalleryWrap)
        // console.log(imgParent)
        addImageToTable(firstViewImages,imgParent, work.id)
      
        // return imgParent
    }
    

    // LIGNE
    const modalLine = createTag("div", "modal-line")
    modalContainerFirstView.appendChild(modalLine)
    
    // BOUTON
    const addPhotoBtnModal = createTag("div", "btn-modal background-validate")
    addPhotoBtnModal.innerText = "Ajouter une photo"
    modalContainerFirstView.appendChild(addPhotoBtnModal)
    
    
    return { addPhotoBtnModal, modalGalleryWrap, modalContainerFirstView }
    // modalGalleryElements,
}
