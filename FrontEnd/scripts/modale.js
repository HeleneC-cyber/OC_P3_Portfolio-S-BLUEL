// Créer dynamiquement la modale (le fond )
// créer une div avec le titre et les photo 
// pour cette premiere div --> div des photos mettre un overflow scroll ? et fixer la taille de la modale
// => quand on clique sur "ajouter une photo" on remplace cette div par une autre avec "ajout photo..."
// valeur de input / catégorie doit provenir de l'API
// Les 3 champs doivent être remplis pour pour valider (bouton passe vert)

// Attention la fleche permet un retour à la première div : re-remplace l'"ajout photo" par la div "ajouter une photo"


export function generateModal() {
    const body = document.querySelector("body")
    const overlayBody = document.createElement("div")
    overlayBody.classList.add("overlay-body")
    
    const modal = document.createElement("div")
    const galleryWrapTitle = document.createElement("h3")
    // const galleryWrap = 
    console.log(overlayBody)

    // body.innerHTML += overlayBody
    body.appendChild(overlayBody)


}


export function initaddEvenListenerModal() {
    const editTool = document.querySelector("#portfolio .edit-tool")
    console.log(editTool)
}