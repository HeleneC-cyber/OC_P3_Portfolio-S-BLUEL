import { deleteImgFromApi } from "../../utils/api.js"
import { getTag } from "../../utils/helpers.js"





export const addImageToTable = (firstViewImages, imgParent, idImg) => {

    // Création de l’objet représentant l’image
    const imageObject = {
        parent: imgParent,
        id: idImg,
        deleteBtn: imgParent.querySelector("svg")  // Sélectionne le bouton de suppression associé
    }

    // Ajoute l’image au tableau firstViewImages
    firstViewImages.push(imageObject)

}


export const setupDeleteImg = (firstViewImages) => {

    for (let i = 0; i < firstViewImages.length; i++) {

        console.log(firstViewImages[i])
        firstViewImages[i].deleteBtn.addEventListener("click", async () => {
            console.log("coucou")
            // Suppression de l'image via l'API (requête DELETE et récupère la réponse)
            const response = await deleteImgFromApi(firstViewImages[i].id)

            // Si la suppression est réussie
            if (response.ok) {
                // Supprime le bloc parent de l'img (et du svg) dans la first view de la modale
                removeImageFromFirstView(firstViewImages[i].parent)

                // Supprime aussi l’élément correspondant dans la galerie du portfolio
                removeImageFromGallery(firstViewImages[i].id)

                // Retire l'image du tableau central
                removeImageFromTable(firstViewImages, firstViewImages[i].id)
            }
        })
    }
}


// Supprime le bloc parent/image de la First View visuellement
const removeImageFromFirstView = (imgParent) => {
    imgParent.remove()
}


// Supprime aussi l’élément correspondant dans la galerie du portfolio
const removeImageFromGallery = (idImg) => {
    const galleryItem = getTag(`.gallery figure[data-id="${idImg}"]`)
    if (galleryItem) galleryItem.remove()
}


// Retire une image du tableau central
const removeImageFromTable = (firstViewImages, idImg) => {
    // index correspond à la première image ayant l'id correspondant à idImg (méthode findIndex)
    const index = firstViewImages.findIndex(img => img.id === idImg)
    // Si index ne vaut pas -1 (-1 pour la méthode findIndex correspond à tous les éléments false)
    if (index !== -1) firstViewImages.splice(index, 1);  // Supprime l’image du tableau (à partir de index, 1 élément suppr)
}
