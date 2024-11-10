import { createTag } from "../../utils/helpers.js"
import { validateImgType } from "./validateImgType.js"


// Faire une fonction pour afficher l'image
// On doit vérifier 
// - le format : attribut de l'input
// - la taille de l'image : Ajouter le poid max du fichier 4mo max = 4000000 octets => sizeMax = 4000000 
// extension


// Affiche le fichier image s'il existe et s'il est valide, à l'écoute de l'inputFile
export const displayValidImg = (inputFileBackground, inputFileWrap, inputFile, descriptionFile) => {

    // Crée un élément <img> pour afficher la prévisualisation et une div contenant l'élément
    const previewContainer = createTag("div", "preview-container")
    inputFileBackground.appendChild(previewContainer)
    const previewElement = createTag("img", null, "preview-img", { alt: "Preview du fichier image" })
    previewContainer.appendChild(previewElement)
    // let previewCatching = ``

    // Écoute les changements de fichier sur l'input
    inputFile.addEventListener("change", () => {

        // Vérifie si un fichier existe dans la liste des fichiers de l'inputFile et qu'il est conforme aux attentes ()
        if (inputFile.files[0] && validateImgType(inputFile.files[0])) {

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


        }else{
            console.log("mauvais format...")
            // Ajoute une classe à la description (<p>) dans les cas où le fichier n'est pas valide 
            descriptionFile.classList.add("flash-error")
        }
    })

    return previewContainer
    
}


// FOnctionne ! Ajouter la validation des formats et poids de l'image ! 

