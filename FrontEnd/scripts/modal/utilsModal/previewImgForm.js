import { createTag, getTag } from "../../utils/helpers.js"





// Faire une fonction pour afficher l'image
// On doit vérifier 
// - le format : attribut de l'input
// - la taille de l'image : Ajouter le poid max du fichier 4mo max = 4000000 octets => sizeMax = 4000000 
// extension


// sur stackoverFLow : 
{/* <html>
<body>
<input name="image" type="file" id="fileName" accept=".jpg,.jpeg,.png" onchange="validateFileType()"/>
<script type="text/javascript">
    function validateFileType(){
        var fileName = document.getElementById("fileName").value;
        var idxDot = fileName.lastIndexOf(".") + 1;
        var extFile = fileName.substr(idxDot, fileName.length).toLowerCase();
        if (extFile=="jpg" || extFile=="jpeg" || extFile=="png"){
            //TO DO
        }else{
            alert("Only jpg/jpeg and png files are allowed!");
        }   
    }
</script>
</body>
</html> */}

export const previewImgForm = (inputFileBackground, inputFileWrap, inputFile) => {

    // Crée un élément <img> pour afficher la prévisualisation et une div contenant l'élément
    const previewContainer = createTag("div", "preview-container")
    inputFileBackground.appendChild(previewContainer)
    const previewElement = createTag("img", null, "preview-img", { alt: "Preview du fichier image" })
    previewContainer.appendChild(previewElement)

    // Écoute les changements de fichier sur l'input
    inputFile.addEventListener("change", () => {

        // Vérifie si un fichier existe dans la liste des fichiers de l'inputFile
        if (inputFile.files[0]) {

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

        }
    })

}


// FOnctionne ! Ajouter la validation des formats et poids de l'image ! 

