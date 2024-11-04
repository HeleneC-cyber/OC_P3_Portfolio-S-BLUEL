import { generateGallery, works } from "./gallery.js"

// Génère les boutons en fonction du nombre de catégorie
export function generateCategoryBtn(works) {
    // Génère un nouveau tableau contenant uniquement les différents noms de catégories
    const listCategory = works.map(work => work.category.name)
    const setListCategory = new Set(listCategory)
    const arrayListCategory = Array.from(setListCategory)
    console.log(setListCategory)

    // Création et placement de la div contenant les boutons
    const btnAll = document.createElement('div')
    btnAll.classList.add('btn-container')
    const titlePortfolio = document.querySelector('#portfolio h2')
    const parentDiv = titlePortfolio.parentNode
    parentDiv.insertBefore(btnAll, titlePortfolio.nextSibling)

    // Création du bouton-radio "TOUS" (gallerie non filtrée)
    const btnAllCategory = `
    <div class="btn-radio-container">
        <input type="radio" id="all"  name="btnCategory" value="TOUS" />
        <label for="all" class="btn-filter">TOUS</label>
    </div>
    `
    btnAll.innerHTML += btnAllCategory

    // Création d'un bouton-radio pour chaque catégorie du tableau généré (arrayListCategory)
    for (let i = 0; i < arrayListCategory.length; i++) {
        const btnCategoryFilter = `
        <div class="btn-radio-container">
        <input type="radio" id="${arrayListCategory[i].toLowerCase()}"  name="btnCategory" value="${arrayListCategory[i]}" />
        <label for="${arrayListCategory[i].toLowerCase()}" class="btn-filter">${arrayListCategory[i]}</label>
        </div>
        `
        btnAll.innerHTML += btnCategoryFilter
    }
}

// Filtre les catégories des figures par rapport au bouton ciblée (checked)
export function filterCategoryFigure(works) {
    // Récupère les input des boutons-radio sous forme de tableau
    const btnCategoryFilter = document.querySelectorAll('.btn-container input')

    // Boucle compteur parcourant le tableau input/bouton-radio (pour récupérer les catégories)
    for (let i = 0; i < btnCategoryFilter.length; i++) {

        // Ecoute le changement d'état (checked) des différents boutons de catégorie, au changement d'état :
        btnCategoryFilter[i].addEventListener("change", () => {
            const categoryFilter = btnCategoryFilter[i].value
            // On filtre le tableau des figures (works) en retournant uniquement les figures ayant la même catégorie que celles de l'input/buton-radio
            let categoryFiltered = works.filter((figure) => {
                return figure.category.name === categoryFilter
            })
            // Si la valeur du bouton est "TOUS", alors on retourne toutes les figures dans le tableau works
            if (categoryFilter === "TOUS") {
                categoryFiltered = works
            }
            // Affiche les catégories filtrées (ou non pour le bouton TOUS) dans le DOM donc on réutilise la fonction generateGally mais sur le tableau "works" filtré (=categoryFiltred).
            generateGallery(categoryFiltered)
        })
    }
}

