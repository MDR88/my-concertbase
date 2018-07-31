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
            const $bandNameEdit = $("<input />").attr("id", "band-name-edit").appendTo($editConcertFormDiv);
            const $bandVenueEdit = $("<input />").attr("id", "band-venue-edit").appendTo($editConcertFormDiv);
            const $concertDateEdit = $("<input />").attr("type", "date").attr("id", "concert-date-edit").appendTo($editConcertFormDiv);
            const $setListEdit = $("<input />").attr("id", "setlist-edit").appendTo($editConcertFormDiv);
            const $mediaLinksEdit = $("<input />").attr("id", "media-links-edit").appendTo($editConcertFormDiv);
            const $journalEdit = $("<input />").attr("id", "journal-edit").appendTo($editConcertFormDiv);
            
            
            
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
