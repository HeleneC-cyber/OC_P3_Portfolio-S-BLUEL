import { deleteImg } from "../../utils/api.js"
import { getTag } from "../../utils/helpers.js"




// Supprime l'élément img de la gallerie, associé à l'élément svg

export const removeItemFirstView = (i, imgParent, idImg) => {

    // Récupération de l'ensemble des svg (poubelle, chacun associé à une image)
    const allDeleteBtn = document.querySelectorAll("div.modal-img-gallery svg")
    // console.log(allDeleteBtn[i])

    // Ecoute le svg sélectionné parmi tous les svg de suppression, au click : 
    allDeleteBtn[i].addEventListener("click", async () => {
        console.log(allDeleteBtn[i])
        // Récupère le token de la sessionStorage
        const token = sessionStorage.getItem("token")

        // Utilisation de deleteImg pour envoyer la requête DELETE et récupère la réponse
        const response = await deleteImg(idImg, token)

        // Si la réponse obtenue valide la requête, supprime le bloc parent de l'img (et du svg) ET l'élément (figure) correspondant dans la galerie du portfolio
        if (response.ok) {
            imgParent.remove()
            // Sélection l'élément figure de la gallerie, s'il existe, le supprime
            const galleryItem = getTag(`.gallery figure[data-id="${idImg}"]`);
            if (galleryItem) {
                galleryItem.remove()
            }
        }
        
    })
}
