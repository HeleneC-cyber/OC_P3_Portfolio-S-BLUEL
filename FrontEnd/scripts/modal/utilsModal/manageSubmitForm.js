import { addImg } from "../../utils/api.js"
// import { createTag, getTag } from "../../utils/helpers.js"
import { addNewWorkToFirstView } from "./addNewWorkToFirstView.js"
import { addWorkToGallery } from "./addWorkToGallery.js"
// import { createImageElement } from "./createImageElement.js"
// import { removeItemFirstView } from "./removeItemFirstView.js"
import { resetForm } from "./resetForm.js"


export const manageSubmitForm = (firstViewImages, modalGalleryWrap, inputFile, inputTitle, selectCategory, validateBtnModal,modalForm, inputFileBackground, inputFileWrap, descriptionFile) => {

    modalForm.addEventListener("submit", async (e) => {
        e.preventDefault()

        if (validateBtnModal.classList.contains("background-validate")) {

            // Envoie une requête POST pour ajouter une image à l'API et récupère la réponse
            const response = await addImg(inputFile, inputTitle, selectCategory)
            
            //   Si le statut de la réponse est ok alors...
            if (response.ok) {
                console.log("Formulaire envoyé avec succès !")

                // Récupère les données de l'image ajoutée à partir de la réponse de l'API
                const newWork = await response.json()

                // Ajoute la nouvelle image dans la galerie du portfolio
                addWorkToGallery(newWork)

                // Ajoute la nouvelle image dans la first view
                // addWorkToFirstView(modalGalleryWrap, newWork)

                // Gère l'ajout d'une nouvelle image dans la première vue (ajout et suppresion newWork)
                addNewWorkToFirstView(firstViewImages, newWork, modalGalleryWrap)

                // Réinitialisation du formulaire (de la seconde view)
                resetForm(modalForm, inputFileBackground, inputFileWrap, inputFile, descriptionFile)

            } else {
                console.error(`Erreur ${response.status} : Échec de l'envoi du formulaire.`)
            }


        }
    })
}




// export const addWorkToFirstView = (modalGalleryWrap, newWork) => {

//     // Crée la div parent de l'image dans la first view et la place dans la first view
//     const imgGalleryParent  = createTag("div", "modal-img-gallery")
//     modalGalleryWrap.appendChild(imgGalleryParent)

//     // ...et ajoute les éléments de la nouvelle image via le paramètre
//     const imgGallery = createTag("img", null, `${newWork.id}`, {src:`${newWork.imageUrl}`, alt:`${newWork.title}` } )
//     imgGalleryParent.appendChild(imgGallery)

//     console.log(imgGallery)

//     const svgGallery  = `
//     <svg width="17" height="17" viewBox="0 0 17 17" fill="none" xmlns="http://www.w3.org/2000/svg">
//      <rect width="17" height="17" rx="2" fill="black"/>
//      <path d="M6.71607 3.35558C6.82455 3.13661 7.04754 3 7.29063 3H9.70938C9.95246 3 10.1754 3.13661 10.2839 3.35558L10.4286 3.64286H12.3571C12.7127 3.64286 13 3.93013 13 4.28571C13 4.64129 12.7127 4.92857 12.3571 4.92857H4.64286C4.28728 4.92857 4 4.64129 4 4.28571C4 3.93013 4.28728 3.64286 4.64286 3.64286H6.57143L6.71607 3.35558ZM4.64286 5.57143H12.3571V12C12.3571 12.7092 11.7806 13.2857 11.0714 13.2857H5.92857C5.21942 13.2857 4.64286 12.7092 4.64286 12V5.57143ZM6.57143 6.85714C6.39464 6.85714 6.25 7.00179 6.25 7.17857V11.6786C6.25 11.8554 6.39464 12 6.57143 12C6.74821 12 6.89286 11.8554 6.89286 11.6786V7.17857C6.89286 7.00179 6.74821 6.85714 6.57143 6.85714ZM8.5 6.85714C8.32321 6.85714 8.17857 7.00179 8.17857 7.17857V11.6786C8.17857 11.8554 8.32321 12 8.5 12C8.67679 12 8.82143 11.8554 8.82143 11.6786V7.17857C8.82143 7.00179 8.67679 6.85714 8.5 6.85714ZM10.4286 6.85714C10.2518 6.85714 10.1071 7.00179 10.1071 7.17857V11.6786C10.1071 11.8554 10.2518 12 10.4286 12C10.6054 12 10.75 11.8554 10.75 11.6786V7.17857C10.75 7.00179 10.6054 6.85714 10.4286 6.85714Z" fill="white"/>
//     </svg>
//     `
//     imgGalleryParent.innerHTML += svgGallery

//     // Obtenir l'index de la nouvelle (nombres d'enfant de modalGalleryWrap - 1 car js commence par 0 et non 1)
//     // const index = modalGalleryWrap.childElementCount - 1

//     // Appeler removeItemFirstView pour ajouter l'écouteur de clic
//     // removeItemFirstView(index, imgGalleryParent, newWork.id)

//     return { imgGalleryParent, imgGallery }

// }



