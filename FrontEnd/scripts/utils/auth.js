// LOGGED IN ?
// Vérifie l'authentification (avec l'opérateur ternaire "?")

export const IsAuthenticated = () => {

    // La valeur à tester est le token dans la session storage : s'il existe, return true / s'il n'est pas présent, return false
    return sessionStorage.getItem("token") ? true : false
}



// STILL LOGGED IN ?
// Ecoute l'événement storage (=déclenché quand une maj est faite sur le local ou sessionStorage, détecte ce changement depuis tous les onglets ouverts sur un même site)

window.addEventListener("storage", (e) => {

    // Si la clé modifiée est bien le token ET que la nouvelle valeur associée est null ou undefined...
    if (e.key === "token" && !e.newValue) {
        // ...alors rafraîchit la page si le token est supprimé
        window.location.reload()
    }
})



// LOGOUT

export const logout = () => {

    // Récupère/Sélectionne l'élément "logout" du menu nav
    const elementLogout = document.querySelector('a[href="index.html"]')
    // Si l'élément logout a bien été récupéré...
    if(elementLogout) {
        // ...alors écoute la balise a "logout", au click sur celle-ci 
        elementLogout.addEventListener("click", () => {
            // on supprime le token du sessionStorage
            sessionStorage.removeItem("token")
        })
    }
}