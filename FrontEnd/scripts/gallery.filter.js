import { generateGallery } from "./gallery.js"
import { createTag, getTag } from "./utils/helpers.js"


// REMARQUE : 
// Les boutons de filtres apparissent dans l'ordre des catégories des images
// Si la 1ere image est un "appartement" la 2e un "objet" et la 3e "hotel & restaurant"
// Alors l'ordre des boutons catégories sera le même. Donc ajout de la méthode .sort()
// On peut aussi faire une nouvelle requête auprès de l'API afin d'obtenir 
// les 3 catégories dans l'ordre 1 objet, 2 appartement, 3 hotel & restaurants


// Génère les boutons catégories, à partir des catégories présentes dans les images de la galerie (donc à partir de "works")
export function generateCategoryBtn(works) {
    // Définit la variable comme étant un nouvel objet SET
    const setById = new Set() //Récupère une fois un élément, évite les doublons
    // Inialise une variable récupérant "works"(réponse de l'api sous forme de tableau)
    const listCategory = works
    //Extrait la catégorie {id:"",name:"} de chaque item de works (=work)
    .map(work => work.category) 
    // Filtre en gardant uniquement les catégories dont id n'a pas encore été ajouté dans le Set
    .filter(category =>{
        // Si id de la catégorie n'existe pas on l'ajoute au SET et on garde l'élément filtré
        if (!setById.has(category.id)) {
            setById.add(category.id)
            return true // Garder cet élément
        }
        return false // Sinon ignore les doublons
    })
    // méthode sort() permet de trier les boutons dans l'ordre croissant de l'id catégorie
    .sort((a, b) => a.id - b.id)
// Résultat : listCategory = [{id:"", name:""},{},...] ordre croisant id=1,id=2,...


    // Création et placement de la div contenant les boutons
    const btnContainer = createTag("div", "btn-container")
    const titlePortfolio = getTag('#portfolio h2')
    const parentDiv = titlePortfolio.parentNode
    parentDiv.insertBefore(btnContainer, titlePortfolio.nextSibling)

    // Création du bouton-radio "TOUS" (gallerie non filtrée)
    const btnAllCategory = `
    <div class="btn-radio-container" >
        <input type="radio" id="all"  name="btnCategory" value="tous" checked />
        <label for="all" class="btn-filter">TOUS</label>
    </div>
    `
    btnContainer.innerHTML += btnAllCategory

    // Création d'un bouton-radio pour chaque catégorie du tableau (listCategory)
    for (let i = 0; i < listCategory.length; i++) {
        const btnCategoryFilter = `
        <div class="btn-radio-container">
        <input type="radio" id="${listCategory[i].id}"  name="btnCategory" value="${listCategory[i].name.toLowerCase()}" />
        <label for="${listCategory[i].id}" class="btn-filter">${listCategory[i].name}</label>
        </div>
        `
        btnContainer.innerHTML += btnCategoryFilter
    }
}



// Filtre les catégories des figures par rapport au bouton ciblé (checked)
export function filterCategoryFigure(works) {
    // Récupère les input des boutons-radio sous forme de tableau
    const btnCategoryFilter = document.querySelectorAll('.btn-container input')

    // Boucle compteur parcourant le tableau input/bouton-radio (pour récupérer les catégories)
    for (let i = 0; i < btnCategoryFilter.length; i++) {

        // Ecoute le changement d'état (checked) des différents boutons de catégorie, au changement d'état :
        btnCategoryFilter[i].addEventListener("change", () => {
            // Définit la catégorie filtrante (correspond à l'id du bouton)
            // Opérateur ternaire conditionnel : Si l'id du bouton correspond à all laisse la chaine de caractère all sinon (false) transforme la chaine de caractère en un nombre en base décimal (10)
            const categoryFilter = btnCategoryFilter[i].id === "all" ? "all" : parseInt(btnCategoryFilter[i].id, 10)
            // On filtre le tableau des figures (works) en retournant uniquement les figures ayant la même catégorie que celles de l'input/buton-radio
            let categoryFiltered = works.filter((figure) => {
                return figure.category.id === categoryFilter
            })
            // Si l'id du bouton est "all", alors on retourne toutes les figures dans le tableau works
            if (categoryFilter === "all") {
                categoryFiltered = works
            }
            // Affiche les catégories filtrées (ou non pour le bouton TOUS) dans le DOM 
            // Réutilise la fonction generateGallery mais sur le tableau "works" filtré (=categoryFiltred).
            generateGallery(categoryFiltered)
        })
    }
}

