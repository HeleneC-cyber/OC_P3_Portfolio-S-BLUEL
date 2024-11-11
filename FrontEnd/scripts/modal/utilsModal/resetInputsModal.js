import { getTag } from "../../utils/helpers.js"
// import { displayErrorMessage } from "./validateInputTitle.js"



// Réinitialise tous les inputs du formulaire de la modale
export const resetInputsModal = (iconBackArrow, descriptionFile, inputFileBackground, inputFileWrap, inputFile, selectCategory) => {

    // Au click sur la flèche "iconBackArrow"
    iconBackArrow.addEventListener("click", () => {


        // Cible tous les inputs (type texte, et en principe file) du formulaire de la modale
        const inputs = document.querySelectorAll('.modal-form input')
        // Réinitialise chaque input
        inputs.forEach(input => {
            input.value = ""
        })


        // Reset la couleur de la description de l'image si le fichier n'était pas valide
        if (getTag(".flash-error")) {
            descriptionFile.classList.remove("flash-error")
        }


        // Reset de l'affichage inputFile/PreviewImg : 
        // Si une image est previsualisée (affichée car valide) alors :
        if (getTag(".preview-container").classList.contains("active")) {
            console.log(getTag("#preview-img"))
            // Supprime l'attribut src
            getTag("#preview-img").removeAttribute("src")

            // Enlève la classe active à la <div> contenant <img> ==> previewContainer repasse en display none
            getTag(".preview-container").classList.remove("active")

            // Reset de l'inputFile explicite pour pallier les possibles restriction de sécurité des navigateurs (ex : utile pour chrome et opéra)
            inputFile.value = ""

            // Réaffiche inputFileWrap en le reliant à son parent
            inputFileBackground.appendChild(inputFileWrap)
        }


        // Reset de la catégorie choisie
        selectCategory.selectedIndex = 0

        // Reset le message dans la div .error-message (la div existe encore)
        // displayErrorMessage("")

    })
}