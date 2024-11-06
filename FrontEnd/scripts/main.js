import { works, generateGallery } from "./gallery.js"
import { filterCategoryFigure, generateCategoryBtn } from "./gallery.filter.js"
import { IsAuthenticated } from "./connected.js"
// import { generateModal, initaddEvenListenerModal } from "./modale.js"
// import { generateEditMode } from "./editMode.js"


// Fonctions appelées au chargement de la page d'accueil index.html
generateGallery(works)
generateCategoryBtn(works)
filterCategoryFigure(works)

// devra surement être appelée ailleurs (ici pour test)
// generateModal(works)

// Une fois et tant que connecté, nouvelles fonctionnalitées et changement dynamique du DOM
IsAuthenticated()