//Author: Michael Roberts
//Purpose: User Log-In Page

const $ = require("jquery")
const databaseMethods = require("./databaseMethods.js")

const loginForm = Object.create({}, {
    buildLoginForm: {
        value: () => {

            // Selects the main div class .base-div-conatainer on the index
            const mainDiv = document.querySelector(".base-div-container");
           

            //The Title Of The Registration Form
            const $logInFormDiv = $("<div>").attr("id", "logIn-form-div");
            const $loginTitle = $("<h2>").attr("id", "login-title-h2").text("Login Or Register").appendTo($logInFormDiv);

            //UserName Field
            const $userNamelabel = $("<label>").attr("for", "username-field").text("Username:")
            const $userNameInput = $("<input />").attr("id", "username-field").attr("placeholder", "Username").appendTo($logInFormDiv)
            //Password Field
            //const $paraPassword = $("<p>").text("Password: ")
            const $regPass = $("<input />").attr("type", "password").attr("id", "regPass").attr("placeholder", "Password").appendTo($logInFormDiv);
    

            // Login and Register Buttons
            const $Loginbtn = $("<button>").attr("type", "button").text("Login").attr("id", "login-btn").appendTo($logInFormDiv);
            const $registerbtn = $("<button>").attr("type", "button").text("Register").attr("id", "register-btn").appendTo($logInFormDiv);

            // Appends the login form div to the main div. 
            $logInFormDiv.appendTo(mainDiv);

        }
    }
})

module.exports = loginForm;