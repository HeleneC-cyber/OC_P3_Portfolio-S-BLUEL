// Récupération des éléments de la gallerie depuis l'API : api/works
export const getWorks = async () => {
    const works = await fetch('http://localhost:5678/api/works').then(works => works.json())
    return works
}



// Récupération les catégories depuis l'API : api/categories
export const getCategories = async () => {
    const categories = await fetch('http://localhost:5678/api/categories').then(categories => categories.json())
    return categories
}



// Envoi la requête à l'API et récupère la réponse dans la variable data
export const loginUser = async (email, password) => {

    // Définit le couple identifiant à envoyer pour la requête
    const identifyingPair = { "email": email, "password": password }

    // Définit et envoie la requête en utilisant la fonction fetch et en fournissant des options dans le deuxième paramètre (objet) de fetch : method headers body
    const response = await fetch('http://localhost:5678/api/users/login', {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        // Change la valeur JavaScript du couple identifiant en chaîne JSON
        body: JSON.stringify(identifyingPair)
    })
    // Récupère la réponse à la rêquete converti au format JSON (avec la méthode json) dans la variable data
    const data = await response.json()
    // Retourne les données
    return data

}




// Envoi une requête DELETE avec fetch en précisant id de l'image à supprimer ainsi que la clé pour vérifier la personne a bien l'authorisation de faire cette requête
export const deleteImg = async (idImg, token) => {

    const response = await fetch(`http://localhost:5678/api/works/${idImg}`, {
        method: "DELETE",
        headers: {
            'accept': '*/*',
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`,
        },
    })
    return response
}




// Envoi une requête POST pour ajouter une image à l'API en lui fournissant en 2e paramètre de fetch des infos (via formData)
export const addImg = async (inputFile, inputTitle, selectCategory) => {

    // Crée un objet FormData
    const formData = new FormData();

    // Ajoute les données au formData :
    formData.append("image", inputFile.files[0]) // image
    formData.append("title", inputTitle.value) // titre
    formData.append("category", selectCategory.selectedIndex) // catégorie

    // Récupère le token de la sessionStorage
    const token = sessionStorage.getItem("token")

    // Envoie les données à l'API avec fetch
    const response = await fetch('http://localhost:5678/api/works', {
        method: "POST",
        headers: {
            'Authorization': `Bearer ${token}`,
        },
        body: formData
    })

    return response

}
