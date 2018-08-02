//Author: Michael Roberts
//Purpose: The new user registration page. 

// const $ = require("jquery")
// const databaseMethod = require("./databaseMethods.js")
// const welcome = require("./welcome")

// const loginForm = Object.create({}, {
//     buildLoginForm: {
//         value: () => {

//             // Selects the main div class .div--container on the index
//             const divRef = document.querySelector(".base-div-container");

//             //The Title Of The Registration Form
//             const $formDiv = $("<div>").attr("id", "loginFormContainer");
//             const $regTitle = $("<h2>").attr("id", "loginTitle").text("Login").appendTo($formDiv);

//             //The form fields containing the fields and ID's
//             const $paraName = $("<p>").text("Name:")
//             const $nameInput = $("<input />").attr("id", "nameInput").attr("placeholder", "Name").appendTo($paraName);
//             $paraName.appendTo($formDiv)

//             const $paraPassword = $("<p>").text("Password: ")
//             const $regPass = $("<input />").attr("type", "password").attr("id", "regPass").attr("placeholder", "Password").appendTo($paraPassword);
//             $paraPassword.appendTo($formDiv)

//             const $submitLoginButton = $("<button>").attr("type", "button").text("Login").attr("id", "submitLoginButton").appendTo($formDiv);

//             //created a div and gave it the class of div-welcome
//             $formDiv.appendTo(divRef);

//         }
//     }
// })

// module.exports = loginForm;