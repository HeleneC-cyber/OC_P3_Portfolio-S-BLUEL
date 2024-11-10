import { getTag } from "../../utils/helpers.js"



// Réinitialise tous les inputs du formulaire de la modale
export const resetInputsModal = (iconBackArrow, descriptionFile, inputFileBackground, inputFileWrap, previewContainer, inputFile, selectCategory) => {

    // Au click sur la flèche "iconBackArrow"
    iconBackArrow.addEventListener("click", () => {


        // Cible tous les inputs (type texte, et en principe file) du formulaire de la modale
        const inputs = document.querySelectorAll('.modal-form input')
        console.log(inputs)
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
        if (getTag("#preview-img").src) {

            // Supprime l'attribut src
            getTag("#preview-img").removeAttribute("src")

            // Enlève la classe active à la <div> contenant <img>
            previewContainer.classList.remove("active")

            // Reset de l'inputFile explicite pour pallier les possibles restriction de sécurité des navigateurs (ex : utile pour chrome et opéra)
            inputFile.value = ""

            // Réaffiche inputFileWrap en le reliant à son parent
            inputFileBackground.appendChild(inputFileWrap)
        }

        
        // Reset de la catégorie choisie
        selectCategory.selectedIndex = 0



        // // Remplace l'input file pour vider la FileList
        // const newInputFile = inputFile.cloneNode(false); // Clone le champ d'origine
        // inputFile.parentNode.replaceChild(newInputFile, inputFile); // Remplace l'ancien input file

     
        console.log(inputFile.file)

    })
}