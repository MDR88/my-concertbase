//Author: Michael Roberts
//Purpose: Prints the object below to the DOM.
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
                        const $concertCard = $("<div>").addClass("concertCardDiv").attr("Id", `${concert.id}`)
                        const $h3Title = $("<h3>").addClass("bandTitle-field-class").attr("id", "bandTitle-field-id").text(`${concert.bandName}`).appendTo($concertCard)
                        const $pElDate = $("<p>").addClass("date-field-class").attr("id", "concert-date-field-id").text(`Date: ${concert.date}`).appendTo($concertCard)
                        const $pElVenue = $("<p>").addClass("venue-field-class").attr("id", "venue-field-id").text(`Venue: ${concert.venue}`).appendTo($concertCard)
                        const $pElmediaLinks = $("<p>").addClass("mediaLinks-field-class").attr("id", "mediaLinks-field-id").text(`Media Links: ${concert.mediaLinksurl}`).appendTo($concertCard)
                        const $pElSetList = $("<p>").addClass("setList-field-class").attr("id", "setList-field-id").text(`The Set List: ${concert.setList}`).appendTo($concertCard)
                        const $pElMyJournal = $("<p>").addClass("myJournal-field-class").attr("id", "myJournal-field-id").text(`My Journal: ${concert.journal}`).appendTo($concertCard)
                        const $editConcertBtn = $("<button>").attr("id", "edit-concert-btn-id").addClass("edit-concert-btn-class").text("Edit").appendTo($concertCard)
                        const $delConcertBtn = $("<button>").attr("id", "del-concert-btn-id").addClass("del-concert-btn-class").text("Delete").appendTo($concertCard)
                        $concertCard.appendTo(concertVault)
                    }



                    )
                }
                )
        }
    }
})
module.exports = addShowToDOMObject;