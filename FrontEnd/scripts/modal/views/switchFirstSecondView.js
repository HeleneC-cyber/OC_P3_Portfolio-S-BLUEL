import { previewImgForm } from "../utilsModal/previewImgForm.js"

// import { getExtFile } from "../utilsModal/validateImgType.js"
import { generateSecondView } from "./generateSecondView.js"




// Affiche la second view au "click" sur le bouton et supprime la first view

export const manageSecondView = (modal, btn, modalContainerFirstView) => {

    btn.addEventListener("click", async () => {
        modalContainerFirstView.remove() 
        // Génère la deuxième vue et récupère des éléments
        const { modalContainerSecondView, iconBackArrow, inputFileBackground, inputFile, inputFileWrap } = await generateSecondView(modal)


        if (iconBackArrow) {
            // Ecoute la flèche, au "click", 
            iconBackArrow.addEventListener("click", () => {
            modal.replaceChild(modalContainerFirstView, modalContainerSecondView)
  
               })
        }
        previewImgForm(inputFileBackground, inputFileWrap, inputFile)

        // getExtFile(inputFileBackground, inputFileWrap, inputFile)

        
//         if (inputFile) {
//         inputFile.addEventListener("change", () => {
            
//             const extFile = getExtFile(inputFile)
//             if (extFile === "jpg" || extFile === "jpeg" || extFile === "png"){
//                     console.log("bon format !")
                    // previewImgForm(inputFileBackground, inputFileWrap, inputFile)

//                 }

//     })

// }

    })
    
}