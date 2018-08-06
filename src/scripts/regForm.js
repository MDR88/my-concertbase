//Author: Michael Roberts
//Purpose: The registration form.


//added Jquery library
const $ = require("jquery")

const regForm = Object.create({}, {
    buildRegForm: {
        value: () => {

            // Selects the main div class .base-div-container on the index
            const baseDiv = document.querySelector(".base-div-container");

            //The Title Of The Registration Form
            const $formDiv = $("<div>").attr("id", "regForm");
            const $regTitle = $("<h2>").attr("id", "regTitle").text("Registration Form").appendTo($formDiv);

            //The form fields containing the fields and ID's
            const $labelFirstName = $("<label>").attr("for", "first-name-input").text("First Name:")
            const $FirstNameInput = $("<input />").attr("id", "first-name-input").attr("placeholder", "First Name").appendTo($formDiv);

            const $labelLastName = $("<label>").attr("for", "last-name-input").text("Last Name")
            const $LastNameInput = $("<input />").attr("id", "last-name-input").attr("placeholder", "Last Name").appendTo($formDiv);

            const $labelUserName = $("<label>").attr("for", "username-input").text("Username:")
            const $userNameInput = $("<input />").attr("id", "username-input").attr("placeholder", "Username: ").appendTo($formDiv);

            const $labelRegEmail = $("<label>").attr("for", "reg-email-id").text("Email: ")
            const $regEmail = $("<input>").attr("type", "email").attr("id", "reg-email").attr("placeholder", "Email").appendTo($formDiv);

            const $labelPassword = $("<label>").text("Password: ")
            const $regPass = $("<input>").attr("type", "password").attr("id", "regPass").attr("placeholder", "Password").appendTo($formDiv);

            const $bandFavLabel = $("<label>").attr("for", "fav-band-name").text("Band Name")
            const $bandFavInput = $("<input>").attr("id", "fav-band-name").attr("placeholder", "Favorite Band Name").appendTo($formDiv)

            const $regSubBtn = $("<button>").attr("type", "button").text("CLick To Submit and Log-in").attr("id", "reg-sub-btn").appendTo($formDiv);
        
            $formDiv.appendTo(baseDiv);


        }
    }
})

//exports the Registration Form module.
module.exports = regForm;