import { addImg } from "../../../utils/api.js"
import { addNewWorkToFirstView } from "./addNewWorkToFirstView.js"
import { addWorkToGallery } from "./addWorkToGallery.js"
import { resetForm } from "./resetForm.js"



export const manageSubmitForm = (firstViewImages, modalGalleryWrap, inputFile, inputTitle, selectCategory, validateBtnModal,modalForm, inputFileBackground, inputFileWrap, descriptionFile) => {

    modalForm.addEventListener("submit", async (e) => {
        e.preventDefault()

        if (validateBtnModal.classList.contains("background-validate")) {

            // Envoie une requête POST pour ajouter une image à l'API et récupère la réponse
            const response = await addImg(inputFile, inputTitle, selectCategory)
            
            //   Si le statut de la réponse est ok alors...
            if (response.ok) {
                
                // Récupère les données de l'image ajoutée à partir de la réponse de l'API
                const newWork = await response.json()

                // Ajoute la nouvelle image dans la galerie du portfolio
                addWorkToGallery(newWork)

                // Gère l'ajout d'une nouvelle image dans la première vue (ajout et suppresion newWork)
                addNewWorkToFirstView(firstViewImages, newWork, modalGalleryWrap)

                // Réinitialisation du formulaire (de la seconde view)
                resetForm(modalForm, inputFileBackground, inputFileWrap, inputFile, descriptionFile)

            } 
        }
    })
}
