//Author: Michael Roberts
//Purpose: The Event listner module

//This registers JQuery and other modules
const $ = require("jquery");
const databaseMethod = require("./databaseMethods")
const addConcert = require("./addConcert")
const PrintToDOM = require("./printToDOM")
const homePage = require("./home")

// Selecting the BODY tag and adding an event listner for actions when clicking buttons.
const body = document.querySelector("body");
body.addEventListener("click", () => {
    if (event.target.id === "concert-add-btn") {
        console.log("ADD CONCERT BUTTON CLICKED")
        
    }})