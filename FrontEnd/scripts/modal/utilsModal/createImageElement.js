import { createTag } from "../../utils/helpers.js";

// utilisé pour générer la first view depuis le portfolio ET depuis ajout du formulaire validé

// Créer le bloc contenant l'image de la first view (et le place dans le DOM)
export const createImageElement = (work, modalGalleryWrap) => {
    // Création du bloc parent de l'image (et du svg)
    const imgParent = createTag("div", "modal-img-gallery")
    // Associe l’ID de l’image (en data-id au parent) pour faciliter la suppression
    imgParent.setAttribute("data-id", work.id)  


    // Création de l’élément image
    const imgElement = createTag("img", null, null, {src:`${work.imageUrl}`, alt:`${work.imageUrl}`});
    // imgElement.src = work.imageUrl;  // Définir la source de l’image
    // imgElement.alt = work.title;     // Définir un texte alternatif

    // Placement de l’image dans le conteneur
    imgParent.appendChild(imgElement)


    // Création l'icône de suppression (svg)
    const deleteBtn = createTag("svg")
    deleteBtn.innerHTML = `
        <svg width="17" height="17" viewBox="0 0 17 17" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect width="17" height="17" rx="2" fill="black"/>
            <path d="M6.71607 3.35558C6.82455 3.13661 7.04754 3 7.29063 3H9.70938C9.95246 3 10.1754 3.13661 10.2839 3.35558L10.4286 3.64286H12.3571C12.7127 3.64286 13 3.93013 13 4.28571C13 4.64129 12.7127 4.92857 12.3571 4.92857H4.64286C4.28728 4.92857 4 4.64129 4 4.28571C4 3.93013 4.28728 3.64286 4.64286 3.64286H6.57143L6.71607 3.35558ZM4.64286 5.57143H12.3571V12C12.3571 12.7092 11.7806 13.2857 11.0714 13.2857H5.92857C5.21942 13.2857 4.64286 12.7092 4.64286 12V5.57143ZM6.57143 6.85714C6.39464 6.85714 6.25 7.00179 6.25 7.17857V11.6786C6.25 11.8554 6.39464 12 6.57143 12C6.74821 12 6.89286 11.8554 6.89286 11.6786V7.17857C6.89286 7.00179 6.74821 6.85714 6.57143 6.85714ZM8.5 6.85714C8.32321 6.85714 8.17857 7.00179 8.17857 7.17857V11.6786C8.17857 11.8554 8.32321 12 8.5 12C8.67679 12 8.82143 11.8554 8.82143 11.6786V7.17857C8.82143 7.00179 8.67679 6.85714 8.5 6.85714ZM10.4286 6.85714C10.2518 6.85714 10.1071 7.00179 10.1071 7.17857V11.6786C10.1071 11.8554 10.2518 12 10.4286 12C10.6054 12 10.75 11.8554 10.75 11.6786V7.17857C10.75 7.00179 10.6054 6.85714 10.4286 6.85714Z" fill="white"/>
        </svg>
    `
    // Placement du svg de suppression dans le conteneur
    imgParent.appendChild(deleteBtn)

    // Placement et lie imgParent au DOM, dans le conteneur ".modal-gallery-wrap" de la First View
    modalGalleryWrap.appendChild(imgParent)

    // Retourne l'élément principal avec tous ses enfants
    return imgParent
}