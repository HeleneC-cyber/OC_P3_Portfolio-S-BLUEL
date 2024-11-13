import { getTag } from "../../../utils/helpers.js"




export const addWorkToGallery = (newWork) => {

    // Récupère la même structure que dans le portfolio
    const divGallery = getTag(".gallery")
    // ...et ajoute les éléments de la nouvelle image via le paramètre
    const figureElement = `
        <figure data-id="${newWork.id}">
            <img src="${newWork.imageUrl}" alt="${newWork.title}">
            <figcaption>${newWork.title}</figcaption>
        </figure>
    `
    divGallery.innerHTML += figureElement
}