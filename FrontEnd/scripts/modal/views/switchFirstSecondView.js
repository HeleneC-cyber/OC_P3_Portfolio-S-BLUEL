import { getTag } from "../../utils/helpers.js"


// Affiche en alternance la première vue et la deuxième vue
export const switchFirstSecondView =  ( modal, btn, modalContainerFirstView, modalContainerSecondView, iconBackArrow ) => {

    // Cache initialement la deuxième vue
     modalContainerSecondView.classList.add("hidden") 

    // Ecoute le bouton "ajouter une photo", au "click", 
    btn.addEventListener("click", async () => {

        // Si la seconde vue à la classe hidden (Correspond à la première apparition de la second vue)
        if(getTag("div.second-view.hidden")) {
            // Alors enlève la classe hidden : affiche la deuxième vue
        modalContainerSecondView.classList.remove("hidden")
        }
        // Supprime la première vue et ajoute la deuxième vue
        modalContainerFirstView.remove()
        modal.appendChild(modalContainerSecondView)


        // Ecoute la flèche, au "click", 
        iconBackArrow.addEventListener("click", () => {

            // Inverse : Supprime la deuxième vue et ajoute la première vue
            modalContainerSecondView.remove()
            modal.appendChild(modalContainerFirstView)
        })

    }) 

}
