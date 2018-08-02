//Author: Michael Roberts
//Purpose: The Event listner module

//This registers JQuery and other modules
const $ = require("jquery");
const databaseMethods = require("./databaseMethods")
const addConcert = require("./addConcert")
const printToDOM = require("./printToDOM")
const homePage = require("./home")
const editConcertForm = require("./editConcertForm")
const clear = require("./clear")

// Selecting the BODY tag and adding an event listner for actions when clicking buttons.
const body = document.querySelector("body");
body.addEventListener("click", () => {
    if (event.target.id === "concert-add-btn") {
        console.log("ADD CONCERT BUTTON CLICKED")
        // Capture the values of the fields and store in a variable. 
        const $bandNameValue = document.getElementById("band-name").value;
        const $concertDateValue = document.getElementById("concert-date").value;
        const $concertVenueValue = document.getElementById("concert-venue").value
        const $concertSetlistValue = document.getElementById("concert-setlist").value;
        const $concertLinksValue = document.getElementById("concert-links").value;
        const $concertJournalValue = document.getElementById("concert-journal").value;

        // Take the variables that store the values and create an object with the fields that are in the Concert table in storage.
        const concert = {
            bandName: $bandNameValue,
            date: $concertDateValue,
            venue: $concertVenueValue,
            setList: $concertSetlistValue,
            mediaLinksurl: $concertLinksValue,
            journal: $concertJournalValue
        }

        databaseMethods.addConcert(concert).then((response) => {

            printToDOM.addConcertToDOM()


        })
    }

})
const concertVault = document.querySelector("#concert-vault-container");
concertVault.addEventListener("click", () => {


    if (event.target.className === "edit-concert-btn-class") {
        console.log("Edit Button Clicked")

        let concertId = (event.target.parentNode.id)
        console.log(concertId)
        databaseMethods.getConcert(concertId)
            .then((concert) => {
                console.log("The ID On Click")
                console.log(concert)

                editConcertForm.editConcertForm(concert)
            })


    } else if (event.target.id === "del-concert-btn-id") {
        console.log("Delete Button Clicked")
        const id = $(event.target).parent().attr("id");
        databaseMethods.deleteConcert(id).then(() => {
            clear.clearVault()
            printToDOM.addConcertToDOM()
        })


    } else if (event.target.className === "save-btn") {

        const $editedBandNameValue = document.getElementById("band-name-edit").value;
        const $editedDateValue = document.getElementById("concert-date-edit").value;
        const $editedVenueValue = document.getElementById("band-venue-edit").value;
        const $editedLinksValue = document.getElementById("media-links-edit").value;
        const $editedSetlistValue = document.getElementById("setlist-edit").value;
        const $editedJournalValue = document.getElementById("journal-edit").value;

        const editedConcert = {
            bandName: $editedBandNameValue,
            date: $editedDateValue,
            venue: $editedVenueValue,
            journal: $editedJournalValue,
            setList: $editedSetlistValue,
            mediaLinksurl: $editedLinksValue

        }
        console.log("Edited concert", editedConcert)

        // ConcertID stores the value of the location of the concert ID.
        let concertId = (event.target.parentNode.parentNode.id)

        // This runs the PUT Method which edits the table in storage.
        databaseMethods.putConcert(editedConcert, concertId).then(response => {
            console.log("DatabaseMethod putConcert", databaseMethods.putConcert)
            // Clears the div that stores the list of concert logs.
            clear.clearVault()
            //Loads the list of added concert logs from storage to the DOM
            printToDOM.addConcertToDOM()

        })
        if (event.target.id === "login-btn") {
            console.log("Login Button Clicked")


        } else if (event.target.id === "login-btn") {
            console.log("register-btn")
        }

     
    }

})

const baseContainer = document.querySelector(".base-div-container");
baseContainer.addEventListener("click", () => {
    if (event.target.id === "login-btn") {
        console.log("Login Button Clicked")


    } else if (event.target.id === "register-btn") {
        console.log("register-btn Clicked")
    }



})