// Récupération des éléments de la gallerie depuis l'API : api/works
export const works = await fetch('http://localhost:5678/api/works').then(works => works.json())

// Fonction pour générer dynamiquement les éléments de la div gallery
export function generateGallery(works) {
    // Récupère l'élément du DOM gallery
    const divGallery = document.querySelector('.gallery')
    // Supprime les éléménts HTML présents dans la div .gallery
    divGallery.innerHTML = ''

    // Boucle pour parcourir le tableau JSON works et en récupérer des éléments
    for (let i = 0; i < works.length; i++) {
        // récupère chaque objet du tableau
        let figure = works[i]
        // Insertion du HTML en interpolant
        const figureElement = `
            <figure>
                <img src="${figure.imageUrl}" alt="${figure.title}">
                <figcaption>
                    ${figure.title}
                </figcaption>
            </figure>
        `
        divGallery.innerHTML += figureElement
    }
}

