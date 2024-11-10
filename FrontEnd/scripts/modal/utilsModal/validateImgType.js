// import { previewImgForm } from "./previewImgForm.js"




export const validateImgType = (inputFile) => {
    // inputFile.addEventListener("change", () => {

    // Récupère la valeur de l'attribut name de l'inputFile
    const fileName = inputFile.name

    // Récupère le caractère après le dernier point du fichier (donc premier caractère de l'extention)
    const idxDot = fileName.lastIndexOf(".") + 1

    // Définit l'extension du fichier comme étant l'ensemble des caractères compris entre le premier après le point et le dernier du fileName
    const extFile = fileName.substr(idxDot, fileName.length).toLowerCase()

    // Si l'extension correspond à jpg ou jpeg ou png 
    if (extFile === "jpg" || extFile === "jpeg" || extFile === "png" ) {
        // Et si l'image fait moins de 4mo alors return true
        if (inputFile.size < 4000000) return true 

    } 
    
}
