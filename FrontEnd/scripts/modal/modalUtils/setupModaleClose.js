import { getTag } from "../../utils/helpers.js"




// Configure la fermeture de la modale

export const setupModalClose = (overlayBody, modal, modalCloseBtn) => {

    const body = getTag("body")

    //  Ecoute le clique sur l'overlay, au "click"
    overlayBody.addEventListener("click", () => {
        // Supprime l'overlay(et son enfant : la modale) du parent body
        body.removeChild(overlayBody)
    })

    // Empêche la suppression de l'overlay (et de la modale) en cliquant sur la modale
    // Ecoute le clique sur la modale, au "click" 
    modal.addEventListener("click", (e) => {
        // l'événement ne se propage pas au parent (on clique uniquement sur la modale)
        e.stopPropagation()
    })

    // ...en cliquant sur la croix : récupère et écoute le clique sur la croix
    modalCloseBtn = getTag("div.modal-background svg")
    modalCloseBtn.addEventListener("click", () => {
        body.removeChild(overlayBody)
    })

}