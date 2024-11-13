import { createTag, getTag } from "../../../utils/helpers.js"
import { validateImgTypeAndSize } from "./validateImgTypeAndSize.js"



// Affiche la preview du fichier image s'il existe et s'il est valide, à l'écoute de l'inputFile
export const displayValidImg = (inputFileBackground, inputFileWrap, inputFile, descriptionFile) => {

    let previewContainer = getTag("div.preview-container")
    let previewElement = getTag("#preview-img")


    // Si previewContainer et previewElement n'existent pas...
    if (!previewContainer && !previewElement) {
        // Crée un élément <img> pour afficher la prévisualisation et une div contenant l'élément
        previewContainer = createTag("div", "preview-container")
        inputFileBackground.appendChild(previewContainer)
        previewElement = createTag("img", null, "preview-img", { alt: "Preview du fichier image" })
        previewContainer.appendChild(previewElement)
    }


    // Vérifie si un fichier existe dans la liste des fichiers de l'inputFile et qu'il est conforme aux attentes ()
    if (inputFile.files[0] && validateImgTypeAndSize(inputFile.files[0])) {

        console.log("bon format !")
        // Créer et récupère un nouvel objet FileReader
        const reader = new FileReader()
        // onload = "à chaque fois qu'une opération de lecture est menée à bien"
        // Au chargement du nouveau fichier
        reader.onload = () => {
            // Ajoute un src à l'image preview qui correpsond au résultat de reader.result
            previewElement.src = reader.result
        }
        // Lit le fichier comme une URL de données avec la méthode readAsDataURL
        // On obtient donc dans le src de l'image, l'url du fichier ajouté
        reader.readAsDataURL(inputFile.files[0])

        // Ajoute la classe active pour visualiser la div contenant l'image
        previewContainer.classList.add("active")
        // Supprime inputFileWrap (contenant svg, label, input, et p)
        inputFileWrap.remove()


    } else {
        console.log("mauvais format...")
        // Ajoute une classe à la description (<p>) dans les cas où le fichier n'est pas valide 
        descriptionFile.classList.add("flash-error")
    }

}
