//Author: Michael Roberts
//Purpose: This adds the form to log the concert.

const $ = require("jquery")


const addConcertObject = Object.create({}, {
    addConcertForm: {
        value: () => {

            const baseDiv = document.querySelector(".base-div-container");

            const $concertFormDiv = $("<div>").attr("id", "concert-form-div").appendTo(baseDiv)
            const $pEl = $("<p>").appendTo($concertFormDiv)
            const $bandNameLabel = $("<label>").attr("for", "band-name").text("Band Name")
            const $bandNameInput = $("<input>").attr("id", "band-name").attr("placeholder", "Band Name").appendTo($concertFormDiv)
            const $concertDateLabel = $("<label>").attr("for", "concert-date").text("Concert Date")
            const $concertDateInput = $("<input>").attr("type", "date").attr("id", "concert-date").attr("placeholder", "Concert Date").appendTo($concertFormDiv)
            const $concertVenueLabel = $("<label>").attr("for", "concert-venue").text("Concert Venue")
            const $bookPagesInput = $("<input>").attr("id", "concert-venue").attr("placeholder", "Concert Venue").appendTo($concertFormDiv)

            const $bookAddSubmit = $("<button>").attr("id", "bookSubmit").text("Add Your Concert").appendTo($concertFormDiv)

        }

    }
})
module.exports = addConcertObject;