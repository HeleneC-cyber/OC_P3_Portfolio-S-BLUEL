

// 1. Fonction pour ajouter une image au tableau central
const addImageToFirstViewTable = (imgParent, idImg) => {
    
    // Créer l’objet représentant l’image
    const imageObject = {
        parent: imgParent,
        id: idImg,
        deleteBtn: imgParent.querySelector("svg")  // Sélectionne le bouton de suppression associé
    }
    
    firstViewImages.push(imageObject)


}