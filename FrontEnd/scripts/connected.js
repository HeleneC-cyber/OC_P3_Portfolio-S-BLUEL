import { generateEditMode } from "./editMode.js"
import { works } from "./gallery.js"
import { manageModal } from "./modale.js"
// import { displayModal } from "./modale.js"



export function IsAuthenticated() {
// Une fois que la personne s'est loggué : 
if (sessionStorage.getItem("token")) {
    generateEditMode()
    // displayModal(works)

    const editTool = document.querySelector("#portfolio .edit-tool")
    editTool.addEventListener("click", () => {
        manageModal(works)
        
    })



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
