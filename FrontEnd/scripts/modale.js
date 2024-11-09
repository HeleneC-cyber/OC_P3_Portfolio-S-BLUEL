// import { deleteImg, getCategories } from "./utils/api.js"
// import { createTag, getTag } from "./utils/helpers.js"

// == == == == == == == == == == == == == == == == == == == == == == == == == == == == == == == == == ==

// => quand on clique sur "ajouter une photo" on remplace cette div par une autre avec "ajout photo..."
// valeur de input / catégorie doit provenir de l'API
// Les 3 champs doivent être remplis pour pour valider (bouton passe vert)

// Attention la fleche permet un retour à la première div : re-remplace l'"ajout photo" par la div "ajouter une photo"

// == == == == == == == == == == == == == == == == == == == == == == == == == == == == == == == == == ==



// // Gère l'ensemble de la modale : affichage, apparition et disparition de la modale

// export const manageModal = (works) => {
//     const editTool = getTag("#portfolio .edit-tool")

//     // Ecoute le bouton edition, au click sur celui-ci, lance la fonction qui gère la modale
//     editTool.addEventListener("click", () => {
//         // Vérifie si l'overlay existe déjà (si oui s'arrête ici, sinon...)
//         if (getTag("#overlay-body")) return

//         // Appelle generateModal et récupère les éléments
//         const {overlayBody, modal, modalCloseBtn} = generateModal()
       
//         // Passe les éléments récupérés aux autres fonctions
//         setupModalClose(overlayBody, modal, modalCloseBtn)
//         // generateFirstView(works, modal)

//         // Appelle generateFirstView et récupère les éléments
//         const {modalGalleryElements, addPhotoBtnModal, modalContainerFirstView} = generateFirstView(works, modal)

//         // Boucle sur chaque élément pour appeler removeItemFirstView
//         modalGalleryElements.forEach(({ i, imgGalleryParent, imgGallery}) => {
//             removeItemFirstView(i, imgGalleryParent, imgGallery.id)
//         })

//         // Affiche la second view au click sur le bouton et supprime la first view
//         manageSecondView(modal, addPhotoBtnModal, modalContainerFirstView)

//     })

// }




// const generateModal = () => {
//     // OVERLAY dans le DOM
//     const body = getTag("body")
//     const overlayBody = createTag('div', null, 'overlay-body')
//     body.appendChild(overlayBody)

//     // MODALE dans le DOM
//     const modal = createTag('div','modal-background')
//     overlayBody.appendChild(modal)

//     // CROIX dans la modale
//     const modalCloseBtn = `
//         <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
//         <path d="M17.6546 8.05106C18.1235 7.58214 18.1235 6.82061 17.6546 6.35169C17.1856 5.88277 16.4241 5.88277 15.9552 6.35169L12.005 10.3056L8.05106 6.35544C7.58214 5.88652 6.82061 5.88652 6.35169 6.35544C5.88277 6.82436 5.88277 7.58589 6.35169 8.05481L10.3056 12.005L6.35544 15.9589C5.88652 16.4279 5.88652 17.1894 6.35544 17.6583C6.82436 18.1272 7.58589 18.1272 8.05481 17.6583L12.005 13.7044L15.9589 17.6546C16.4279 18.1235 17.1894 18.1235 17.6583 17.6546C18.1272 17.1856 18.1272 16.4241 17.6583 15.9552L13.7044 12.005L17.6546 8.05106Z" fill="black"/>
//         </svg>
//     `
//     modal.innerHTML += modalCloseBtn

//     // Retourne les éléments
//     return { overlayBody, modal, modalCloseBtn }

// }




// // Configure la fermeture de la modale

// export const setupModalClose = (overlayBody, modal, modalCloseBtn) => {

//     const body = getTag("body")

//     //  Ecoute le clique sur l'overlay, au "click"
//     overlayBody.addEventListener("click", () => {
//         // Supprime l'overlay(et son enfant : la modale) du parent body
//         body.removeChild(overlayBody)
//     })

//     // Empêche la suppression de l'overlay (et de la modale) en cliquant sur la modale
//     // Ecoute le clique sur la modale, au "click" 
//     modal.addEventListener("click", (e) => {
//         // l'événement ne se propage pas au parent (on clique uniquement sur la modale)
//         e.stopPropagation()
//     })

//     // ...en cliquant sur la croix : récupère et écoute le clique sur la croix
//     modalCloseBtn = getTag("div.modal-background svg")
//     modalCloseBtn.addEventListener("click", () => {
//         body.removeChild(overlayBody)
//     })

// }




// // Gère la première vue de la modale : permet  l'affichage de la first view et la suppression des images de la galerie

// export const generateFirstView = (works, modal) => {

//     // FIRST VIEW 
//     const modalContainerFirstView = createTag("div", "modal-container")
//     modal.appendChild(modalContainerFirstView)

//     // TITRE 
//     const modalTitle = createTag("h3")
//     modalTitle.innerText = "Galerie photo"
//     modalContainerFirstView.appendChild(modalTitle)

//     // GALLERIE IMAGE 
//     const modalGalleryWrap = createTag("div", "modal-gallery-wrap")
//     modalContainerFirstView.appendChild(modalGalleryWrap)

//     // Tableau vide (pour stoker les éléments de la galerie par la suite)
//     const modalGalleryElements = []

//     // Récupère les éléments de works et les places dans "modalGalleryWrap"
//     for (let i = 0; i < works.length; i++) {
//         // Récupère à chaque passage de la boucle un item img de la galerie
//         let imgGallery= works[i]

//         // Création et placement du parent de la div parent contenant img de l'api et un svg
//         const imgGalleryParent = createTag("div", "modal-img-gallery")
//         modalGalleryWrap.appendChild(imgGalleryParent)

//         // Création d'un élément img composé de l'url de l'img et du titre de l'imgGallery( récupéré et répété pour chaque objet du tableau works) et on lui associe un svg sibling 
//         const imgGalleryElementModal = `
//         <img src="${imgGallery.imageUrl}" alt="${imgGallery.title}">
//         <svg width="17" height="17" viewBox="0 0 17 17" fill="none" xmlns="http://www.w3.org/2000/svg">
//          <rect width="17" height="17" rx="2" fill="black"/>
//          <path d="M6.71607 3.35558C6.82455 3.13661 7.04754 3 7.29063 3H9.70938C9.95246 3 10.1754 3.13661 10.2839 3.35558L10.4286 3.64286H12.3571C12.7127 3.64286 13 3.93013 13 4.28571C13 4.64129 12.7127 4.92857 12.3571 4.92857H4.64286C4.28728 4.92857 4 4.64129 4 4.28571C4 3.93013 4.28728 3.64286 4.64286 3.64286H6.57143L6.71607 3.35558ZM4.64286 5.57143H12.3571V12C12.3571 12.7092 11.7806 13.2857 11.0714 13.2857H5.92857C5.21942 13.2857 4.64286 12.7092 4.64286 12V5.57143ZM6.57143 6.85714C6.39464 6.85714 6.25 7.00179 6.25 7.17857V11.6786C6.25 11.8554 6.39464 12 6.57143 12C6.74821 12 6.89286 11.8554 6.89286 11.6786V7.17857C6.89286 7.00179 6.74821 6.85714 6.57143 6.85714ZM8.5 6.85714C8.32321 6.85714 8.17857 7.00179 8.17857 7.17857V11.6786C8.17857 11.8554 8.32321 12 8.5 12C8.67679 12 8.82143 11.8554 8.82143 11.6786V7.17857C8.82143 7.00179 8.67679 6.85714 8.5 6.85714ZM10.4286 6.85714C10.2518 6.85714 10.1071 7.00179 10.1071 7.17857V11.6786C10.1071 11.8554 10.2518 12 10.4286 12C10.6054 12 10.75 11.8554 10.75 11.6786V7.17857C10.75 7.00179 10.6054 6.85714 10.4286 6.85714Z" fill="white"/>
//         </svg>
//         </div>
//         `
//         // Placement de élément img et de l'élement svg dans imgGalleryParent
//         imgGalleryParent.innerHTML += imgGalleryElementModal

//         // Ajoute les éléments créés au tableau
//         modalGalleryElements.push({i, imgGalleryParent, imgGallery})
        
//     }
    

//     // LIGNE
//     const modalLine = createTag("div", "modal-line")
//     modalContainerFirstView.appendChild(modalLine)
    
//     // BOUTON
//     const addPhotoBtnModal = createTag("div", "btn-modal background-validate")
//     addPhotoBtnModal.innerText = "Ajouter une photo"
//     modalContainerFirstView.appendChild(addPhotoBtnModal)
    
    
//     return {modalGalleryElements, addPhotoBtnModal, modalContainerFirstView}
// }




// // Supprime l'élément img de la gallerie, associé à l'élément svg

// export const removeItemFirstView = (i, imgParent, idImg) => {

//     // Récupération de l'ensemble des svg (poubelle, chacun associé à une image)
//     const allDeleteBtn = document.querySelectorAll("div.modal-img-gallery svg")
//     // Ecoute le svg sélectionné parmi tous les svg "poubelle", au click : 
//     allDeleteBtn[i].addEventListener("click", async () => {
//         // Récupère le token de la sessionStorage
//         const token = sessionStorage.getItem("token")

//         // Utilisation de deleteImg pour envoyer la requête DELETE et récupère la réponse
//         const response = await deleteImg(idImg, token)

//         // Si la réponse obtenue valide la requête, supprime le bloc parent de l'img (et du svg) ET l'élément (figure) correspondant dans la galerie du portfolio
//         if (response.ok) {
//             imgParent.remove()
//             // Sélection l'élément figure de la gallerie, s'il existe, le supprime
//             const galleryItem = getTag(`.gallery figure[data-id="${idImg}"]`);
//             if (galleryItem) {
//                 galleryItem.remove()
//             }
//         }
        
//     })
// }




// // Affiche la second view au "click" sur le bouton et supprime la first view

// export function manageSecondView(modal, btn, modalContainerFirstView) {
//     btn.addEventListener("click", async () => {
//         modalContainerFirstView.remove() 
//         const {modalContainerSecondView, iconBackArrow} = await generateSecondView(modal)

//         console.log(iconBackArrow)
//         if (iconBackArrow) {
//             // Ecoute la flèche, au "click", 
//             iconBackArrow.addEventListener("click", () => {
//             modal.replaceChild(modalContainerFirstView, modalContainerSecondView)
//                })
//         }
        
//     })
// }



// export const generateSecondView = async (modal) => {

//     // SECOND VIEW Création et placement de la div contenant les éléments de partie deuxième partie dans la modale
//     const modalContainerSecondView = createTag("div", "modal-container")
//     modal.appendChild(modalContainerSecondView)


//     // FLECHE
//     let iconBackArrow = `
//     <svg class="arrow" width="21" height="21" viewBox="0 0 21 21" fill="none" xmlns="http://www.w3.org/2000/svg">
//     <path d="M0.439478 8.94458C-0.146493 9.53055 -0.146493 10.4822 0.439478 11.0681L7.9399 18.5686C8.52587 19.1545 9.47748 19.1545 10.0635 18.5686C10.6494 17.9826 10.6494 17.031 10.0635 16.445L5.11786 11.5041H19.4999C20.3297 11.5041 21 10.8338 21 10.004C21 9.17428 20.3297 8.50393 19.4999 8.50393H5.12255L10.0588 3.56303C10.6447 2.97706 10.6447 2.02545 10.0588 1.43948C9.47279 0.853507 8.52118 0.853507 7.93521 1.43948L0.43479 8.9399L0.439478 8.94458Z" fill="black"/>
//     </svg>
//     `
//     modalContainerSecondView.innerHTML += iconBackArrow
//     iconBackArrow = modal.querySelector("svg.arrow")


//     // TITRE
//     const modalTitle = createTag("h3")
//     modalTitle.innerText = "Ajout photo"
//     modalContainerSecondView.appendChild(modalTitle)


//     // FORMULAIRE 
//     const modalForm = createTag("form", "modal-form", null, {action: "http://localhost:5678/api/works" , method: "post"})
//     modalContainerSecondView.appendChild(modalForm)


//     // BACKGROUND GROUP FILE Création et placement de la div contenant un enfant ("wrap") et donne la couleur de fond
//     const inputFileBackground = createTag("div", "input-file-background")
//     modalForm.appendChild(inputFileBackground)


//     // GROUP FILE 
//     // Création et placement de la div contenant les éléments liés à l'input file 
//     // (Div qui sera remplacée par la preview de l'image du fichier choisi)
//     const inputFileWrap = createTag("div", "input-file-wrap")
//     inputFileBackground.appendChild(inputFileWrap)


//     // SVG 
//     const iconInputFile = `
//         <svg width="76" height="76" viewBox="0 0 76 76" fill="none" xmlns="http://www.w3.org/2000/svg">
//         <path d="M63.5517 15.8879C64.7228 15.8879 65.681 16.8461 65.681 18.0172V60.5768L65.0156 59.7118L46.9165 36.2894C46.3176 35.5042 45.3727 35.0517 44.3879 35.0517C43.4031 35.0517 42.4715 35.5042 41.8594 36.2894L30.8136 50.5824L26.7546 44.8998C26.1557 44.0614 25.1975 43.569 24.1595 43.569C23.1214 43.569 22.1632 44.0614 21.5644 44.9131L10.9178 59.8183L10.319 60.6434V60.6034V18.0172C10.319 16.8461 11.2772 15.8879 12.4483 15.8879H63.5517ZM12.4483 9.5C7.75048 9.5 3.93103 13.3195 3.93103 18.0172V60.6034C3.93103 65.3012 7.75048 69.1207 12.4483 69.1207H63.5517C68.2495 69.1207 72.069 65.3012 72.069 60.6034V18.0172C72.069 13.3195 68.2495 9.5 63.5517 9.5H12.4483ZM23.0948 35.0517C23.9337 35.0517 24.7644 34.8865 25.5394 34.5655C26.3144 34.2444 27.0186 33.7739 27.6118 33.1807C28.2049 32.5876 28.6755 31.8834 28.9965 31.1083C29.3175 30.3333 29.4828 29.5027 29.4828 28.6638C29.4828 27.8249 29.3175 26.9943 28.9965 26.2192C28.6755 25.4442 28.2049 24.74 27.6118 24.1468C27.0186 23.5537 26.3144 23.0831 25.5394 22.7621C24.7644 22.4411 23.9337 22.2759 23.0948 22.2759C22.2559 22.2759 21.4253 22.4411 20.6503 22.7621C19.8752 23.0831 19.171 23.5537 18.5779 24.1468C17.9847 24.74 17.5142 25.4442 17.1931 26.2192C16.8721 26.9943 16.7069 27.8249 16.7069 28.6638C16.7069 29.5027 16.8721 30.3333 17.1931 31.1083C17.5142 31.8834 17.9847 32.5876 18.5779 33.1807C19.171 33.7739 19.8752 34.2444 20.6503 34.5655C21.4253 34.8865 22.2559 35.0517 23.0948 35.0517Z" fill="#B9C5CC"/>
//         </svg>
//         `
//     inputFileWrap.innerHTML += iconInputFile


//     // LABEL ET INPUT FICHIER 
//     const labelFile = createTag("div", "label-btn-photo")
//     labelFile.innerText = "Ajouter une photo"
//     inputFileWrap.appendChild(labelFile)

//     const inputFile = createTag("input", null, "input-image", {type: "file", name: "input-image", accept: "image/png, image/jpeg"})
//     inputFileWrap.appendChild(inputFile)
//     // Ajouter le poid max du fichier ... 4mo max = 4000000 octets => sizeMax = 4000000 


//     // GROUP, LABEL ET INPUT TITRE 
//     const groupTitle = createTag("div", "form-group")
//     modalForm.appendChild(groupTitle)

//     const labelTitle = createTag("label", null, null, {for: "title"})
//     labelTitle.innerText = "Titre"
//     groupTitle.appendChild(labelTitle)

//     const inputTitle = createTag("input", null, "title", {type: "text", name: "input-title" } )
//     groupTitle.appendChild(inputTitle)


//     // GROUP, LABEL ET INPUT CATEGORIE 
//     const groupCategory = createTag("div", "form-group")
//     groupCategory.className = "form-group"
//     modalForm.appendChild(groupCategory)

//     const labelCategory = createTag("label", null, null, {for: "category"})
//     labelCategory.innerText = "Catégorie"
//     groupCategory.appendChild(labelCategory)

//     const selectCategory = createTag("select", null, "category", {name: "select-category"})
//     groupCategory.appendChild(selectCategory)

//     const optionEmpty = createTag("option", null, null, {value: ""})
//     selectCategory.appendChild(optionEmpty)


//     // Récupère le résultat de la requête GET des catégories
//     const categories = await getCategories()
//     // Récupère les noms des catégories à l'aide de la fonction map
//     const categoriesName = categories.map(categories => categories.name)

//     // Boucle passant sur categoriesName 
//     for(let i = 0; i < categoriesName.length; i++) {

//         // Récupère chaque nom de catégorie du tableau
//         let category = categoriesName[i]

//         // et Créer une balise option dans le select pour chaque catégorie
//         const optionCategory = createTag("option", null, null, {value: category})
//         selectCategory.appendChild(optionCategory)

//         console.log(category)

//     }


//     // LIGNE
//     const modalLine = createTag("div", "modal-line")
//     modalContainerSecondView.appendChild(modalLine)


//     // BOUTON 
//     const validateBtnModal = createTag("button", "btn-modal background-unvalid", null, {type: "submit"})
//     validateBtnModal.innerText = "Valider"
//     modalContainerSecondView.appendChild(validateBtnModal)

//     console.log(iconBackArrow)


//     return  { modalContainerSecondView, iconBackArrow }

// }














































//    == == == == == == == == == == == == == == == == ==
//  ||  Création des éléments globaux liés à la modale  ||
//    == == == == == == == == == == == == == == == == ==

// export function generateModal(works) {

//     // OVERLAY dans le DOM
//     const body = document.querySelector("body")
//     const overlayBody = createTag('div', '', 'overlay-body', {})
//     body.appendChild(overlayBody)

//     // MODALE dans le DOM
//     const modal = document.createElement("div")
//     modal.className = "modal-background"
//     overlayBody.appendChild(modal)

//     // CROIX dans la modale
//     const modalCloseBtn = `
//         <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
//         <path d="M17.6546 8.05106C18.1235 7.58214 18.1235 6.82061 17.6546 6.35169C17.1856 5.88277 16.4241 5.88277 15.9552 6.35169L12.005 10.3056L8.05106 6.35544C7.58214 5.88652 6.82061 5.88652 6.35169 6.35544C5.88277 6.82436 5.88277 7.58589 6.35169 8.05481L10.3056 12.005L6.35544 15.9589C5.88652 16.4279 5.88652 17.1894 6.35544 17.6583C6.82436 18.1272 7.58589 18.1272 8.05481 17.6583L12.005 13.7044L15.9589 17.6546C16.4279 18.1235 17.1894 18.1235 17.6583 17.6546C18.1272 17.1856 18.1272 16.4241 17.6583 15.9552L13.7044 12.005L17.6546 8.05106Z" fill="black"/>
//         </svg>
//     `
//     modal.innerHTML += modalCloseBtn


//     //    == == == == == == == ==
//     //  ||  FONCTIONS ASSOCIEES  ||
//     //    == == == == == == == == 

//     // Supprime la modale et l'overlay
//     setupModalClose(overlayBody, modal, modalCloseBtn)

//     // Gère la première vue de la modale
//     generateFirstView(works, modal)

// }






// export function generateFirstView(works, modal) {


//     // FIRST VIEW Création et placement de la div contenant les éléments de partie galerie dans la modale
//     const modalContainerFirstView = document.createElement("div")
//     modalContainerFirstView.className = "modal-container"
//     modal.appendChild(modalContainerFirstView)

//     // TITRE Création et placement dans la firstview
//     const modalTitle = document.createElement("h3")
//     modalTitle.innerText = "Galerie photo"
//     modalContainerFirstView.appendChild(modalTitle)

//     // GALLERIE IMAGE Création et placement dans la firstview
//     const modalGalleryWrap = document.createElement("div")
//     modalGalleryWrap.className = "modal-gallery-wrap"
//     modalContainerFirstView.appendChild(modalGalleryWrap)

//     // Récupère les éléments de la galerie et les places dans "modalGalleryWrap"
//     for (let i = 0; i < works.length; i++) {
//         // Récupère à chaque passage de la boucle un item img de la galerie
//         let imgGallery= works[i]

//         // Création et placement du parent de la div parent contenant img de l'api et un svg
//         const imgGalleryParent = document.createElement("div")
//         imgGalleryParent.className = "modal-img-gallery"
//         modalGalleryWrap.appendChild(imgGalleryParent)

//         // Création d'un élément img composé de l'url de l'img et du titre de l'imgGallery( récupéré et répété pour chaque objet du tableau works) et on lui associe un svg sibling 
//         const imgGalleryElementModal = `
//         <img src="${imgGallery.imageUrl}" alt="${imgGallery.title}">
//         <svg width="17" height="17" viewBox="0 0 17 17" fill="none" xmlns="http://www.w3.org/2000/svg">
//          <rect width="17" height="17" rx="2" fill="black"/>
//          <path d="M6.71607 3.35558C6.82455 3.13661 7.04754 3 7.29063 3H9.70938C9.95246 3 10.1754 3.13661 10.2839 3.35558L10.4286 3.64286H12.3571C12.7127 3.64286 13 3.93013 13 4.28571C13 4.64129 12.7127 4.92857 12.3571 4.92857H4.64286C4.28728 4.92857 4 4.64129 4 4.28571C4 3.93013 4.28728 3.64286 4.64286 3.64286H6.57143L6.71607 3.35558ZM4.64286 5.57143H12.3571V12C12.3571 12.7092 11.7806 13.2857 11.0714 13.2857H5.92857C5.21942 13.2857 4.64286 12.7092 4.64286 12V5.57143ZM6.57143 6.85714C6.39464 6.85714 6.25 7.00179 6.25 7.17857V11.6786C6.25 11.8554 6.39464 12 6.57143 12C6.74821 12 6.89286 11.8554 6.89286 11.6786V7.17857C6.89286 7.00179 6.74821 6.85714 6.57143 6.85714ZM8.5 6.85714C8.32321 6.85714 8.17857 7.00179 8.17857 7.17857V11.6786C8.17857 11.8554 8.32321 12 8.5 12C8.67679 12 8.82143 11.8554 8.82143 11.6786V7.17857C8.82143 7.00179 8.67679 6.85714 8.5 6.85714ZM10.4286 6.85714C10.2518 6.85714 10.1071 7.00179 10.1071 7.17857V11.6786C10.1071 11.8554 10.2518 12 10.4286 12C10.6054 12 10.75 11.8554 10.75 11.6786V7.17857C10.75 7.00179 10.6054 6.85714 10.4286 6.85714Z" fill="white"/>
//         </svg>
//         </div>
//         `
//         // Placement de élément img et de l'élement svg dans imgGalleryParent
//         imgGalleryParent.innerHTML += imgGalleryElementModal


        
//         // Appelle de la fonction. Permet de récupérer le compteur et l'item du tableau en tant que paramètres
//         removeItemFirstView(i, imgGalleryParent, imgGallery.id)
        
        
//     }
    
//     // LIGNE Création et placement dans la modale
//     const modalLine = document.createElement("div")
//     modalLine.className = "modal-line"
//     modalContainerFirstView.appendChild(modalLine)
    
//     // BOUTON Création et placement dans la modale
//     const addPhotoBtnModal = document.createElement("div")
//     addPhotoBtnModal.className = "btn-modal"
//     addPhotoBtnModal.classList.add("background-validate")
//     addPhotoBtnModal.innerText = "Ajouter une photo"
//     modalContainerFirstView.appendChild(addPhotoBtnModal)
    
    
//     // Affiche la second view au click sur le bouton et supprime la first view
//     manageSecondView(modal, addPhotoBtnModal, modalContainerFirstView)
    
// }