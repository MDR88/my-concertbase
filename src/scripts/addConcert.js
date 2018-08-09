//Author: Michael Roberts
//Purpose: This adds the form to log the concert.

const $ = require("jquery")
const databaseMethods = require("./databaseMethods")

//This is the object that loads the fields to add the concert details to the database.
const addConcertObject = Object.create({}, {
    addConcertForm: {
        value: () => {

            const baseDiv = document.querySelector(".base-div-container");

            const $concertFormDiv = $("<div>").attr("id", "concert-form-div").appendTo(baseDiv);
            const $pEl = $("<p>").appendTo($concertFormDiv);

            // Drop Down Menu
            const $bandDropdownLabel = $("label").attr("for", "band-dropdown").text("Select Band");

            const $bandDropdown = $("<select>").attr("id", "band-dropdown")
            databaseMethods.getAllBands().then(response => {
                console.log("RESPONSE", response)

                //Add the Options to the DropDownList.
                for (var i = 0; i < response.length; i++) {
                    var option = document.createElement("OPTION");

                    //Write the band name to the DOM.
                    option.innerHTML = response[i].band;

                    //Set the band value. 
                    option.value = response[i].band;

                    //Add the Option element to DropDownList.
                    $bandDropdown.append(option);
                   
                }
                $bandDropdown.appendTo($concertFormDiv);
                //const $bandNameLabel = $("<label>").attr("for", "band-name").text("Band Name");
                //const $bandNameInput = $("<input>").attr("id", "band-name").attr("placeholder", "Band Name").appendTo($concertFormDiv);

                const $concertDateLabel = $("<label>").attr("for", "concert-date").text("Concert Date")
                const $concertDateInput = $("<input>").attr("type", "date").attr("id", "concert-date").attr("placeholder", "Concert Date").appendTo($concertFormDiv);

                const $concertVenueLabel = $("<label>").attr("for", "concert-venue").text("Concert Venue");
                const $concertVenueInput = $("<input>").attr("id", "concert-venue").attr("placeholder", "Concert Venue").appendTo($concertFormDiv);

                const $concertSetlistLabel = $("<label>").attr("for", "concert-setlist").text("Concert Setlist");
                const $concertSetlistInput = $("<input>").attr("id", "concert-setlist").attr("placeholder", "Concert Setlist").appendTo($concertFormDiv);

                const $concertLinksLabel = $("<label>").attr("for", "concert-links").text("Concert Setlist");
                const $concertLinksInput = $("<input>").attr("id", "concert-links").attr("placeholder", "Concert Show Links").appendTo($concertFormDiv);

                const $concertJournalLabel = $("<label>").attr("for", "concert-journal").text("Concert Journal");
                const $concertJournalInput = $("<input>").attr("id", "concert-journal").attr("type", "textarea").attr("placeholder", "Concert Journal").appendTo($concertFormDiv);

                const $addConcertBtn = $("<button>").attr("id", "concert-add-btn").text("Add Your Concert").appendTo($concertFormDiv);
                const $logOutBtn = $("<button>").attr("id", "logOut-btn").text("Log Out").appendTo($concertFormDiv);
            })






        }

    }
})
module.exports = addConcertObject;