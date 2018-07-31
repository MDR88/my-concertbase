//Author: Michael Roberts
//Purpose: Prints the object below to the DOM.

const AddConcertForm = require("./addConcert")
const databaseMethods = require("./databaseMethods")
const $ = require("jquery")



//Created an object that accessess the databaseMethods then get's all concerts then a for each loop to go through and will write each value to the DOM.
const addShowToDOMObject = Object.create({}, {
    addConcertToDOM: {
        value: () => {
            console.log("Function Called")
            const concertVault = document.querySelector("#concert-vault-container")

            databaseMethods.getAllConcerts()
                .then((concerts) => {
                    console.log("CONCERTS IN PRINT TO DOM", concerts)
                    concerts.forEach(concert => {
                        const $concertCard = $("<div>").addClass("concertCardDiv").attr("Id", `Concert--${concert.id}`)
                        const $h3Title = $("<h3>").addClass("bandTitle-field-class").attr("id", "bandTitle-field-id").text(`Band: ${concert.bandName}`).appendTo($concertCard)
                        const $pElDate = $("<p>").addClass("date-field-class").attr("id", "concert-date-field-id").text(`Date: ${concert.date}`).appendTo($concertCard)
                        const $pElVenue = $("<p>").addClass("venue-field-class").attr("id", "venue-field-id").text(`Venue: ${concert.venue}`).appendTo($concertCard)
                        const $pElmediaLinks = $("<p>").addClass("mediaLinks-field-class").attr("id", "mediaLinks-field-id").text(`Media Links: ${concert.mediaLinksurl}`).appendTo($concertCard)
                        const $pElSetList = $("<p>").addClass("setList-field-class").attr("id", "setList-field-id").text(`The Set List: ${concert.mediaLinksurl}`).appendTo($concertCard)
                        const $pElMyJournal = $("<p>").addClass("myJournal-field-class").attr("id", "myJournal-field-id").text(`My Journal: ${concert.journal}`).appendTo($concertCard)
                        $concertCard.appendTo(concertVault)
                    }



                    )
                }
                )
        }
    }
})
module.exports = addShowToDOMObject;