import { getTag } from "../../../utils/helpers.js"



// Réinitialise tous les inputs du formulaire de la modale
export const resetForm = (modalForm, inputFileBackground, inputFileWrap, inputFile, descriptionFile, inputTitle, selectCategory) => {

    // Restaure les valeurs par défaut des éléments du formulaire (inputs titre et catégorie)
    modalForm.reset()

    // Reset la couleur de la description de l'image si le fichier n'était pas valide
    if (getTag(".flash-error")) {
        descriptionFile.classList.remove("flash-error")
    }

    // Reset de l'affichage inputFile/PreviewImg : 
    // Si une image est previsualisée (affichée car valide) alors...
    if (getTag("div.preview-container.active")) {
        
        // Supprime l'attribut src
        getTag("#preview-img").removeAttribute("src")

        // Enlève la classe active à la <div> contenant <img> ==> previewContainer repasse en display none
        getTag(".preview-container").classList.remove("active")

        // Reset de l'inputFile explicite pour pallier les possibles restriction de sécurité des navigateurs (ex : utile pour chrome et opéra)
        inputFile.value = ""

        // Réaffiche inputFileWrap en le reliant à son parent
        inputFileBackground.appendChild(inputFileWrap)
    }
}