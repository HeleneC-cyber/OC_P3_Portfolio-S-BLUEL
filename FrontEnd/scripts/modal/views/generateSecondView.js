import { getCategories } from "../../utils/api.js"
import { createTag } from "../../utils/helpers.js"




export const generateSecondView = async (modal) => {

    // SECOND VIEW Création et placement de la div contenant les éléments de partie deuxième partie dans la modale
    const modalContainerSecondView = createTag("div", "modal-container second-view")
    modal.appendChild(modalContainerSecondView)


    // FLECHE
    let iconBackArrow = `
    <svg class="arrow" width="21" height="21" viewBox="0 0 21 21" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M0.439478 8.94458C-0.146493 9.53055 -0.146493 10.4822 0.439478 11.0681L7.9399 18.5686C8.52587 19.1545 9.47748 19.1545 10.0635 18.5686C10.6494 17.9826 10.6494 17.031 10.0635 16.445L5.11786 11.5041H19.4999C20.3297 11.5041 21 10.8338 21 10.004C21 9.17428 20.3297 8.50393 19.4999 8.50393H5.12255L10.0588 3.56303C10.6447 2.97706 10.6447 2.02545 10.0588 1.43948C9.47279 0.853507 8.52118 0.853507 7.93521 1.43948L0.43479 8.9399L0.439478 8.94458Z" fill="black"/>
    </svg>
    `
    modalContainerSecondView.innerHTML += iconBackArrow
    iconBackArrow = modalContainerSecondView.querySelector("svg.arrow")


    // TITRE
    const modalTitle = createTag("h3")
    modalTitle.innerText = "Ajout photo"
    modalContainerSecondView.appendChild(modalTitle)


    // FORMULAIRE 
    const modalForm = createTag("form", "modal-form", null, { action: "http://localhost:5678/api/works", method: "post" })
    modalContainerSecondView.appendChild(modalForm)


    // BACKGROUND GROUP FILE Création et placement de la div contenant un enfant ("container") et donne la couleur de fond
    const inputFileBackground = createTag("div", "input-file-background")
    modalForm.appendChild(inputFileBackground)


    // DIV  InputFileWrap
    // DIV INPUTFILEWRAP contenant tous les éléments visibles du inpuFileBackground
    // (Div qui sera remplacée par la preview de l'image du fichier choisi)
    const inputFileWrap = createTag("div", "input-file-wrap")
    inputFileBackground.appendChild(inputFileWrap)

    // SVG 
    const iconInputFile = `
        <svg width="76" height="76" viewBox="0 0 76 76" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M63.5517 15.8879C64.7228 15.8879 65.681 16.8461 65.681 18.0172V60.5768L65.0156 59.7118L46.9165 36.2894C46.3176 35.5042 45.3727 35.0517 44.3879 35.0517C43.4031 35.0517 42.4715 35.5042 41.8594 36.2894L30.8136 50.5824L26.7546 44.8998C26.1557 44.0614 25.1975 43.569 24.1595 43.569C23.1214 43.569 22.1632 44.0614 21.5644 44.9131L10.9178 59.8183L10.319 60.6434V60.6034V18.0172C10.319 16.8461 11.2772 15.8879 12.4483 15.8879H63.5517ZM12.4483 9.5C7.75048 9.5 3.93103 13.3195 3.93103 18.0172V60.6034C3.93103 65.3012 7.75048 69.1207 12.4483 69.1207H63.5517C68.2495 69.1207 72.069 65.3012 72.069 60.6034V18.0172C72.069 13.3195 68.2495 9.5 63.5517 9.5H12.4483ZM23.0948 35.0517C23.9337 35.0517 24.7644 34.8865 25.5394 34.5655C26.3144 34.2444 27.0186 33.7739 27.6118 33.1807C28.2049 32.5876 28.6755 31.8834 28.9965 31.1083C29.3175 30.3333 29.4828 29.5027 29.4828 28.6638C29.4828 27.8249 29.3175 26.9943 28.9965 26.2192C28.6755 25.4442 28.2049 24.74 27.6118 24.1468C27.0186 23.5537 26.3144 23.0831 25.5394 22.7621C24.7644 22.4411 23.9337 22.2759 23.0948 22.2759C22.2559 22.2759 21.4253 22.4411 20.6503 22.7621C19.8752 23.0831 19.171 23.5537 18.5779 24.1468C17.9847 24.74 17.5142 25.4442 17.1931 26.2192C16.8721 26.9943 16.7069 27.8249 16.7069 28.6638C16.7069 29.5027 16.8721 30.3333 17.1931 31.1083C17.5142 31.8834 17.9847 32.5876 18.5779 33.1807C19.171 33.7739 19.8752 34.2444 20.6503 34.5655C21.4253 34.8865 22.2559 35.0517 23.0948 35.0517Z" fill="#B9C5CC"/>
        </svg>
        `
    inputFileWrap.innerHTML += iconInputFile

    //LABEL, INPUT FICHIER ET DESCRIPTION

    const labelFile = createTag("div", "label-btn-photo")
    labelFile.innerText = "+ Ajouter photo"
    inputFileWrap.appendChild(labelFile)
    
    const inputFile = createTag("input", null, "input-image", { type: "file", name: "input-image", accept: "image/png, image/jpg, image/jpeg" })
    inputFileWrap.appendChild(inputFile)

    const descriptionFile = createTag("p", "desc-file")
    descriptionFile.innerText = "jpg, png : 4mo max"
    inputFileWrap.appendChild(descriptionFile)


    // GROUP, LABEL ET INPUT TITRE 
    const groupTitle = createTag("div", "form-group")
    modalForm.appendChild(groupTitle)

    const labelTitle = createTag("label", null, null, { for: "title" })
    labelTitle.innerText = "Titre"
    groupTitle.appendChild(labelTitle)

    const inputTitle = createTag("input", null, "title", { type: "text", name: "input-title", maxlength: "35" })
    groupTitle.appendChild(inputTitle)


    // GROUP, LABEL ET INPUT CATEGORIE 
    const groupCategory = createTag("div", "form-group")
    groupCategory.className = "form-group"
    modalForm.appendChild(groupCategory)

    const labelCategory = createTag("label", null, null, { for: "category" })
    labelCategory.innerText = "Catégorie"
    groupCategory.appendChild(labelCategory)

    const iconFakeSelect = `<svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M5.09654 8.87851C5.36949 9.15146 5.81276 9.15146 6.08571 8.87851L10.2782 4.68601C10.5512 4.41306 10.5512 3.96979 10.2782 3.69684C10.0053 3.42389 9.56199 3.42389 9.28904 3.69684L5.59003 7.39585L1.89102 3.69902C1.61807 3.42607 1.1748 3.42607 0.901855 3.69902C0.628906 3.97197 0.628906 4.41524 0.901855 4.68819L5.09436 8.88069L5.09654 8.87851Z" fill="#6C6C6C"/>
</svg>
`
    groupCategory.innerHTML += iconFakeSelect

    const selectCategory = createTag("select", null, "category", { name: "select-category" })
    groupCategory.appendChild(selectCategory)

    const optionEmpty = createTag("option", null, null, { value: "" })
    selectCategory.appendChild(optionEmpty)


    // Récupère le résultat de la requête GET des catégories
    const categories = await getCategories()
    // Récupère les noms des catégories à l'aide de la fonction map
    const categoriesName = categories.map(categories => categories.name)

    // Boucle passant sur categoriesName 
    for (let i = 0; i < categoriesName.length; i++) {

        // Récupère chaque nom de catégorie du tableau
        let category = categoriesName[i]

        // et Créer une balise option dans le select pour chaque catégorie
        const optionCategory = createTag("option", null, null, { value: category })
        optionCategory.innerText = category
        selectCategory.appendChild(optionCategory)

    }


    // LIGNE
    const modalLine = createTag("div", "modal-line")
    modalForm.appendChild(modalLine)


    // BOUTON 
    const validateBtnModal = createTag("button", "btn-modal background-unvalid", null, { type: "submit" })
    validateBtnModal.innerText = "Valider"
    modalForm.appendChild(validateBtnModal)


    return { modalContainerSecondView, iconBackArrow, modalForm, inputFileBackground, inputFileWrap, inputFile, descriptionFile, inputTitle, selectCategory, validateBtnModal }

}