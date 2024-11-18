import { getWorks } from "./utils/api.js"
import { generateGallery } from "./gallery.js"
import { filterCategoryFigure, generateCategoryBtn } from "./gallery.filter.js"
import { getTag } from "./utils/helpers.js"
import { IsAuthenticated, logout } from "./utils/auth.js"
import { generateEditMode } from "./editMode.js"
import { manageModal } from "./modal/initModal.js"

async function main() {
    
    // Lance la fonction getWorks(fetch des travaux) et les récupère dans works
    const works = await getWorks()
    
    // Fonctions appelées au chargement de la page d'accueil index.html
    generateGallery(works)
    generateCategoryBtn(works)
    filterCategoryFigure(works)

    // Ne recharge pas la page au click sur le bouton envoyer (Formulaire non fonctionnel)
    getTag('#contact input[type="submit"]').addEventListener("click", (e) => {
        e.preventDefault()
    })

    
// Vérifie sur la personne est bien authentifiée, si oui...
    if (IsAuthenticated() === true) {
        // ... génère le mode edition
        generateEditMode()
        // ...permet d'accéder à la modale et ces fonctionnalités
        manageModal(works)
        // ...permet à l'utilisateur de se déconnecter
        logout()

    }
    // Sinon (si pas de token), alors il ne se passe rien, affichage classique de la page index.html
}

main()