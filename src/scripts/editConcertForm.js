//Author Michael Roberts
//Purpose: When the user selects the EDIT Button, this edit form will load.

const $ = require("jquery")

const editConcertFormObject = Object.create({}, {
    editConcertForm: {
        value: (concertId) => {

            console.log(concertId)

            // captures the ID of the concert using string interpolation to add the text label "concert" in front of the ID.
            const mainConcertCard = document.getElementById(`${concertId.id}`);
            console.log(concertId.id)
            //created a div that will hold the form fields. This appends to the mainConcertCard.
            const $editConcertFormDiv = $("<div>").attr("id", "edit-concert-Form-div");
            const $pEl = $("<p>").appendTo($editConcertFormDiv);

            //Creates the input fields and ID's.
            const $bandNameEdit = $("<input />").attr("id", "band-name-edit").attr("placeholder", "Band Name").appendTo($editConcertFormDiv);
            const $concertDateEdit = $("<input />").attr("type", "date").attr("id", "concert-date-edit").appendTo($editConcertFormDiv);
            const $bandVenueEdit = $("<input />").attr("id", "band-venue-edit").attr("placeholder", "Concert Venue").appendTo($editConcertFormDiv);
            const $mediaLinksEdit = $("<input />").attr("id", "media-links-edit").attr("placeholder", "Media Links").appendTo($editConcertFormDiv);
            const $setListEdit = $("<input />").attr("id", "setlist-edit").attr("placeholder", "Concert Setlist").appendTo($editConcertFormDiv);
            const $journalEdit = $("<input />").attr("id", "journal-edit").attr("type", "textarea").attr("placeholder", "My Journal").appendTo($editConcertFormDiv);

            
            
            
            
            //The value of the Input Fields
            $bandNameEdit.val(concertId.bandName)
            $bandVenueEdit.val(concertId.venue)
            $concertDateEdit.val(concertId.date)
            $setListEdit.val(concertId.setList)
            $mediaLinksEdit.val(concertId.mediaLinksurl)
            $journalEdit.val(concertId.journal)
            console.log("concertId.journal", concertId.journal)

            // Save Button
            const $saveEditBtn = $("<button>").addClass("save-btn").text("Save Changes").appendTo($editConcertFormDiv)
            $editConcertFormDiv.appendTo(mainConcertCard)
            

        }

    }
    })

module.exports = editConcertFormObject;
