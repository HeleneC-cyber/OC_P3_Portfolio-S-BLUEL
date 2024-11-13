import { deleteImg } from "../../../utils/api.js"
import { getTag } from "../../../utils/helpers.js"



// Fonction pour ajouter une image au tableau central
export const addImageToFirstViewTable = (firstViewImages, imgParent, idImg) => {
    
    // Créer l’objet représentant l’image
    const imageObject = {
        parent: imgParent,
        id: idImg,
        deleteBtn: imgParent.querySelector("svg")  // Sélectionne le bouton de suppression associé
    }
    
    // Ajoute l’image au tableau firstViewImages
    firstViewImages.push(imageObject)

    // Ecoute le clique sur le bouton de suppression de l'image
    imageObject.deleteBtn.addEventListener("click", async () => {
        const token = sessionStorage.getItem("token")

        // Suppression de l'image via l'API (requête DELETE et récupère la réponse)
        const response = await deleteImg(idImg, token)

        // Si la suppression est réussie
        if (response.ok) {
            // Supprime le bloc parent de l'img (et du svg) dans la modale
            removeImageFromFirstView(imgParent)

            // Supprime l’élément correspondant dans la galerie du portfolio
            removeImageFromGallery(idImg)

            // Retire l'image du tableau central
            removeImageFromFirstViewTable(firstViewImages, idImg)
        }
    })
}



// Supprime le bloc parent/image de la First View visuellement
const removeImageFromFirstView = (imgParent) => {
    imgParent.remove()
}



// Supprime l’élément correspondant dans la galerie du portfolio
const removeImageFromGallery = (idImg) => {
    const galleryItem = getTag(`.gallery figure[data-id="${idImg}"]`)
    if (galleryItem) galleryItem.remove()
}



// Retire une image du tableau
const removeImageFromFirstViewTable = (firstViewImages, idImg) => {
    // index correspond à la première image ayant l'id correspondant à idImg (méthode findIndex)
    const index = firstViewImages.findIndex(img => img.id === idImg)
    // Si index ne vaut pas -1 (-1 pour la méthode findIndex correspond à tous les éléments false)
    if (index !== -1) firstViewImages.splice(index, 1);  // Supprime l’image du tableau (à partir de index, 1 élément suppr)
}
