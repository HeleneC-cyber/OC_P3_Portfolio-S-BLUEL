// Créer dynamiquement la modale (le fond )
// créer une div avec le titre et les photo =>finalement fait diff
// pour cette premiere div --> div des photos mettre un overflow scroll ? et fixer la taille de la modale
// => quand on clique sur "ajouter une photo" on remplace cette div par une autre avec "ajout photo..."
// valeur de input / catégorie doit provenir de l'API
// Les 3 champs doivent être remplis pour pour valider (bouton passe vert)

// Attention la fleche permet un retour à la première div : re-remplace l'"ajout photo" par la div "ajouter une photo"



// Gère l'ensemble de la modale : affichage, apparition et disparition de la modale
export function manageModal(works) {

    //    == == == == == == == == == == == == == == == == ==
    //  ||  Création des éléments globaux liés à la modale  ||
    //    == == == == == == == == == == == == == == == == ==

    // Création et placement de l'overlay dans le DOM
    const body = document.querySelector("body")
    const overlayBody = document.createElement("div")
    overlayBody.id = "overlay-body"
    body.appendChild(overlayBody)

    // Création et placement de la modale dans le DOM
    const modal = document.createElement("div")
    modal.className = "modal-background"
    overlayBody.appendChild(modal)

    // Création et placement de la croix dans la modale
    const modalCross = `
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M17.6546 8.05106C18.1235 7.58214 18.1235 6.82061 17.6546 6.35169C17.1856 5.88277 16.4241 5.88277 15.9552 6.35169L12.005 10.3056L8.05106 6.35544C7.58214 5.88652 6.82061 5.88652 6.35169 6.35544C5.88277 6.82436 5.88277 7.58589 6.35169 8.05481L10.3056 12.005L6.35544 15.9589C5.88652 16.4279 5.88652 17.1894 6.35544 17.6583C6.82436 18.1272 7.58589 18.1272 8.05481 17.6583L12.005 13.7044L15.9589 17.6546C16.4279 18.1235 17.1894 18.1235 17.6583 17.6546C18.1272 17.1856 18.1272 16.4241 17.6583 15.9552L13.7044 12.005L17.6546 8.05106Z" fill="black"/>
        </svg>
    `
    modal.innerHTML += modalCross

    // Supprime la modale et l'overlay
    removeModal(overlayBody, modal, modalCross)

    // Gère la première vue de la modale
    manageModalFirstView(works, modal)

}


// Supprime la modale de différentes manières...
function removeModal(overlayBody, modal, modalCross) {

    const body = document.querySelector("body")

    //  ...en cliquant sur overlay : récupère et écoute le click sur l'overlay
    overlayBody = document.getElementById("overlay-body")
    overlayBody.addEventListener("click", () => {
        // Supprime l'overlay(et son enfant : la modale) du parent body
        body.removeChild(overlayBody)
    })

    // Empêche la suppression de l'overlay (et de la modale) en cliquant sur la modale
    modal = document.querySelector("div.modal-background")
    // On écoute si on clique sur la modale, l'événement ne se propage pas au parent (ne concerne uniquement que la modale)
    modal.addEventListener("click", (e) => {
        e.stopPropagation()
    })

    // ...en cliquant sur la croix : récupère et écoute le clique sur la croix
    modalCross = document.querySelector("div.modal-background svg")
    modalCross.addEventListener("click", () => {
        body.removeChild(overlayBody)
    })

}


// Gère la première vue de la modale : permet  l'affichage de la first view et la suppression des images de la galerie
function manageModalFirstView(works, modal) {

    //    == == == == == == == == == == == == == == == == ==
    //  ||  Création des éléments globaux liés first view   ||
    //    == == == == == == == == == == == == == == == == ==

    // Création et placement de la div contenant les éléments de partie galerie dans la modale
    const modalContainerFirstView = document.createElement("div")
    modalContainerFirstView.className = "modal-container-firstview"
    modal.appendChild(modalContainerFirstView)

    // Création et placement du titre dans la modale
    const modalTitle = document.createElement("h3")
    modalTitle.innerText = "Galerie photo"
    modalContainerFirstView.appendChild(modalTitle)

    // Création et placement du galerie d'image dans la modale
    const galleryWrap = document.createElement("div")
    galleryWrap.className = "modal-gallery-wrap"
    modalContainerFirstView.appendChild(galleryWrap)

    // Récupère les éléments de la galerie et les places dans "galleryWrap"
    for (let i = 0; i < works.length; i++) {
        // Récupère à chaque passage de la boucle un item img de la galerie
        let imgGallery = works[i]

        // Création et placement du parent de la div parent contenant img de l'api et un svg
        const imgGalleryParent = document.createElement("div")
        imgGalleryParent.className = "modal-img-gallery"
        galleryWrap.appendChild(imgGalleryParent)

        // Création d'un élément img composé de l'url de l'img et du titre de l'imgGallery ( récupéré et répété pour chaque objet du tableau works) et on lui associe un svg sibling 
        const imgGalleryElement = `
        <img src="${imgGallery.imageUrl}" alt="${imgGallery.title}">
        <svg width="17" height="17" viewBox="0 0 17 17" fill="none" xmlns="http://www.w3.org/2000/svg">
         <rect width="17" height="17" rx="2" fill="black"/>
         <path d="M6.71607 3.35558C6.82455 3.13661 7.04754 3 7.29063 3H9.70938C9.95246 3 10.1754 3.13661 10.2839 3.35558L10.4286 3.64286H12.3571C12.7127 3.64286 13 3.93013 13 4.28571C13 4.64129 12.7127 4.92857 12.3571 4.92857H4.64286C4.28728 4.92857 4 4.64129 4 4.28571C4 3.93013 4.28728 3.64286 4.64286 3.64286H6.57143L6.71607 3.35558ZM4.64286 5.57143H12.3571V12C12.3571 12.7092 11.7806 13.2857 11.0714 13.2857H5.92857C5.21942 13.2857 4.64286 12.7092 4.64286 12V5.57143ZM6.57143 6.85714C6.39464 6.85714 6.25 7.00179 6.25 7.17857V11.6786C6.25 11.8554 6.39464 12 6.57143 12C6.74821 12 6.89286 11.8554 6.89286 11.6786V7.17857C6.89286 7.00179 6.74821 6.85714 6.57143 6.85714ZM8.5 6.85714C8.32321 6.85714 8.17857 7.00179 8.17857 7.17857V11.6786C8.17857 11.8554 8.32321 12 8.5 12C8.67679 12 8.82143 11.8554 8.82143 11.6786V7.17857C8.82143 7.00179 8.67679 6.85714 8.5 6.85714ZM10.4286 6.85714C10.2518 6.85714 10.1071 7.00179 10.1071 7.17857V11.6786C10.1071 11.8554 10.2518 12 10.4286 12C10.6054 12 10.75 11.8554 10.75 11.6786V7.17857C10.75 7.00179 10.6054 6.85714 10.4286 6.85714Z" fill="white"/>
        </svg>
        </div>
        `
        // Placement de élément img et de l'élement svg dans imgGalleryParent
        imgGalleryParent.innerHTML += imgGalleryElement

        // Appelle de la fonction. Permet de récupérer le compteur et l'item du tableau en tant que paramètres
        removeItemModalFirstView(i, imgGalleryParent, imgGallery.id)

    }

    // Création et placement de la ligne dans la modale
    const lineModal = document.createElement("div")
    lineModal.className = "modal-line"
    modalContainerFirstView.appendChild(lineModal)

    // Création et placement du bouton dans la modale
    const addPhotoBtnModal = document.createElement("div")
    addPhotoBtnModal.className = "btn-add-photo"
    addPhotoBtnModal.innerText = "Ajouter une photo"
    modalContainerFirstView.appendChild(addPhotoBtnModal)

}

// Supprime l'élément img de la gallerie, associé à l'élément svg
function removeItemModalFirstView(i, imgGalleryP, idImgGallery) {
    // Récupération de l'ensemble des svg (poubelle, chacun associé à une image)
    const allSvgDustbin = document.querySelectorAll("div.modal-img-gallery svg")
    // Ecoute le svg sélectionné parmi tous les svg "poubelle", au click : 
    allSvgDustbin[i].addEventListener("click", async () => {
        console.log(idImgGallery)
        const tokenStorage = sessionStorage.getItem("token")
        const token = `Bearer ${tokenStorage}`
        console.log(JSON.stringify(token))
        const response = await fetch(`http://localhost:5678/api/works/${idImgGallery}`, {
            method: "DELETE",
            headers: {
                'accept': '*/*',
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${tokenStorage}`,
            },
        }).then(response => imgGalleryP.remove())

    })
}

// i,
// console.log("L'image a bien été supprimée !")

// headers: {
//     "accept": "application/json",
//     "Authorization": JSON.stringify(token),
// },

// const response = await fetch(`http://localhost:5678/api/works/${imgGallery}`, {
//     method: "DELETE",
//     headers: {
//         "accept": "application/json",
//         "Authorization": JSON.stringify(token),
//     },

// })
// .then(response => response.json())
// .then(data => console.log(data))



// Pour la partie suppression : au click sur le bouton "poubelle" d'une image
//  - on envoie la requete post delete à l'api
// si la réponse est valide "200 item deleted" alors :
//  - on filtre le tableau "works" des images récupérés : et on affiche toutes les images/id du tableau "works" différentes de celle supprimée
//  - on relance la fonction generate gallery (pour dynamiquement supprimer l'élément de la gallery (changement visible derriere la modale))









// export function displayModal(works) {
//     const editTool = document.querySelector("#portfolio .edit-tool")
//     editTool.addEventListener("click", () => {
//         manageModal(works)
//     })
// }

