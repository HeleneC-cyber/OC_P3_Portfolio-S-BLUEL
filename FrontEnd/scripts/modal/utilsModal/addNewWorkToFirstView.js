import { addImageToFirstViewTable } from "./removeItemFirstViewFromTable.js"
import { createImageElement } from "./createImageElement.js"




export const addNewWorkToFirstView = (firstViewImages, newWork, modalGalleryWrap) => {
    // const { imgGalleryParent, imgGallery } = addWorkToFirstView(modalGalleryWrap, newWork)

    //     // Calcule l'index pour la nouvelle image (newWork)
    //     const newIndex = modalGalleryElements.length

    //     // Ajouter l'image dans modalGalleryElements
    // modalGalleryElements.push({ i: newIndex, imgGalleryParent, imgGallery })

    //     // Appeler removeItemFirstView avec les bons paramètres
    //     removeItemFirstView(newIndex, imgGalleryParent, imgGallery.id)


    // Crée le bloc image de la first view à partir du newWork, donné par le formulaire d'ajout
    const imgParent = createImageElement(newWork, modalGalleryWrap)

    // Ajoute ce nouvel élément au tableau
    addImageToFirstViewTable(firstViewImages, imgParent, newWork.id)
   

}