import { previewImgForm } from "./previewImgForm.js"




export const getExtFile = (inputFileBackground, inputFileWrap, inputFile) => {
    // inputFile.addEventListener("change", () => {

    const fileName = inputFile.value
    console.log(fileName)

    // Récupère le caractère après le dernier point du fichier (donc premier caractère de l'extention)
    const idxDot = fileName.lastIndexOf(".") + 1

    // Définit l'extension du fichier comme étant l'ensemble des caractères compris entre le premier après le point et le dernier du fileName
    const extFile = fileName.substr(idxDot, fileName.length).toLowerCase()


    if (extFile === "jpg" || extFile === "jpeg" || extFile === "png"){
        console.log("bon format !")
        previewImgForm(inputFileBackground, inputFileWrap, inputFile)

    }

    // return extFile

    // // Vérifie si l'extension récupéré correspond à jpg ou jpeg ou png
    // if (extFile === "jpg" || extFile === "jpeg" || extFile === "png"){
    //     //TO DO => preview image
    //     console.log("bon format !")
    // }else{
    //     console.log("mauvais format...")
    // }

    // })   
}