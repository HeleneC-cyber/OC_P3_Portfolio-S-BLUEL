
import { manageAuthentication } from "./authentication.js"
import { testErrorInput } from "./testErrorInput.js"

const inputEmail = document.getElementById("email")
const inputPassword = document.getElementById("password")
const regexEmail = new RegExp("[a-z0-9._-]+@[a-z0-9._-]+\\.[a-z0-9._-]+")
const regexPassword = new RegExp(/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])\S{6,12}$/)



testErrorInput(inputEmail, regexEmail)
testErrorInput(inputPassword, regexPassword)

manageAuthentication(inputEmail, inputPassword)