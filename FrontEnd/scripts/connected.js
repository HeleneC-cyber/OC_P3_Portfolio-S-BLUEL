import { generateEditMode } from "./editMode.js"
import { initaddEvenListenerModal } from "./modale.js"



export function IsAuthenticated() {
// Une fois que la personne s'est loggué : 
if (sessionStorage.getItem("token")) {
    generateEditMode()
    initaddEvenListenerModal()

    const elementLogout = document.querySelector('a[href="index.html"]')

    elementLogout.addEventListener("click", () => {
        sessionStorage.removeItem("token")
    })
}
    // else {
    //     if(!navElementLogin) {
    //         ulParent.replaceChild(navElementLogin, navElementLogout)
    //     }
    // }
    // console.log(sessionStorage)
}
