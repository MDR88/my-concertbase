// Author: Michael Roberts
//Purpose:This module creates the main landing page and is called in main.js


const $ = require("jquery")


const landingPage = Object.create({}, {
    landingPageForm: {
        value: () => {

            // Selects the main div class .base-div-container on the index
            const baseDiv = document.querySelector(".base-div-container");

            //created a div and gave it the class of landing-div
            const $landingDiv = $("<div>").addClass("landing-div")
            const $pEl = $("<p>").appendTo($landingDiv)


            //Created elements with ID's
            const $h1myConcertBase = $("<h1>").text("MyConcertBase")
            $h1myConcertBase.attr("id", "h1Landing").appendTo($pEl);
            const $loginButton = $("<button>").text("Login");
            $loginButton.attr("id", "login-btn").appendTo($pEl);
            const $registerButton = $("<button>").text("Register");
            $registerButton.attr("id", "register-btn").appendTo($pEl);
            $landingDiv.appendTo(baseDiv);

        }

    }

})

console.log("Landing Page", landingPage)
//exports the landdingPage Object
module.exports = landingPage