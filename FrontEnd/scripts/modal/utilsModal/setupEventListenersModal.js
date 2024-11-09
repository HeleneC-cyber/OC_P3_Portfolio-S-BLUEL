import { setupModalClose } from "./setupModaleClose";



export const setupEventListenersModal = (works, modal, overlayBody, modalCloseBtn, addPhotoBtnModal, modalContainerFirstView) => {

        // Configure la fermeture de la modale à l'aide de plusieurs écouteurs(overlayBody et modalCloseBtn)
        setupModalClose(overlayBody, modal, modalCloseBtn);


      
}