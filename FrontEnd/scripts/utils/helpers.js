// Créer une balise html avec les attributs de notre choix (ou sans) en définissant les éléments en paramètres

export const createTag = (tagName, className = null, idName = null, attributes = {}) => {
    // Création de l'élément (choisir la balise)
    const tag = document.createElement(tagName)

    // Ajoute className seulement s'il est fourni
    if (className) {
        tag.className = className
    }

    // Ajoute idName seulement s'il est fourni
    if (idName) {
        tag.id = idName
    }

    // Ajoute chaque attribut si l'objet attributes n'est pas vide
    // Démarche : 
    // - Créer un tableau à partir des attributes donnés en paramètres(chaque paire d'attribut est aussi retournée en tableau)
    //      => Object.entries() :   [[k,v],[k,v]]
    // - Parcourt ce tableau (const..of ce tableau) et le déstructure pour récupérer k et v
    for (const [key, value] of Object.entries(attributes)) {
    // Attribue k et v en attribut de tag
        tag.setAttribute(key, value)
    }

    return tag
}




// Récupère un élément (le premier du document) ayant les sélecteurs définis en paramètres (selecteurs, classes, id...)

export const getTag = (selectors) => {
    // const body = document.querySelector('body')
    const tag = document.querySelector(selectors)

    return tag
}


