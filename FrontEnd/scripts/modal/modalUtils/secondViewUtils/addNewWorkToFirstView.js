import { addImageToFirstViewTable } from "../firstViewUtils/manageFirstViewFromTable.js"
import { createImageElement } from "../firstViewUtils/createImageElement.js"



export const addNewWorkToFirstView = (firstViewImages, newWork, modalGalleryWrap) => {

    // Crée le bloc image de la first view à partir du newWork, donné par le formulaire d'ajout
    const imgParent = createImageElement(newWork, modalGalleryWrap)

    // Ajoute ce nouvel élément au tableau
    addImageToFirstViewTable(firstViewImages, imgParent, newWork.id)
   
}