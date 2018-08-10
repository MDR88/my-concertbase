//Author: Michael Roberts
//Purpose: This adds the form to log the concert.

const $ = require("jquery")
const databaseMethods = require("./databaseMethods")

//This is the object that loads the fields to add the concert details to the database.
const addConcertObject = Object.create({}, {
    addConcertForm: {
        value: () => {

            const baseDiv = document.querySelector(".base-div-container");

            const $addBandLabel = $("<label>").attr("for", "add-band-input").text("Add Band Input");
            const $addBandInput = $("<input />").attr("id", "add-band-input").attr("placeholder", "Add Band")

            const $addBandBtn = $("<button>").attr("id", "band-add-btn").text("Add Band")

            const $concertFormDiv = $("<div>").attr("id", "concert-form-div").appendTo(baseDiv);
            const $pEl = $("<p>").appendTo($concertFormDiv);


            // Drop Down Menu
            const $bandDropdownLabel = $("label").attr("for", "band-dropdown").text("Select Band");

            const $bandDropdown = $("<select>").attr("id", "band-dropdown")


            databaseMethods.getAllBands().then(response => {
                console.log("Data Stored in RESPONSE", response)

                //The for loop runs to go through each band in the array.
                for (var i = 0; i < response.length; i++) {

                    // Create the <option> tag and store into "option".
                    const option = document.createElement("OPTION");

                    // Writes the <option> tag and populates it with the band name.
                    option.innerHTML = response[i].band;

                    //Writes the <option> tag and the value of the bandName in the band table on the JSON server.
                    option.value = response[i].band;

                    //Writes the <SELECT> with the ID "band-dropdown" tag and appends the OPTION tag.
                    $bandDropdown.append(option);

                }
                // Appends the Add Band Button then the Band Drop-down menu to the $concertForm div. 
                $addBandInput.appendTo($concertFormDiv);
                $addBandBtn.appendTo($concertFormDiv);
                $bandDropdown.appendTo($concertFormDiv);






                //const $bandNameLabel = $("<label>").attr("for", "band-name").text("Band Name");
                //const $bandNameInput = $("<input>").attr("id", "band-name").attr("placeholder", "Band Name").appendTo($concertFormDiv);

                const $concertDateLabel = $("<label>").attr("for", "concert-date").text("Concert Date");
                const $concertDateInput = $("<input />").attr("type", "date").attr("id", "concert-date").attr("placeholder", "Concert Date").appendTo($concertFormDiv);

                const $concertVenueLabel = $("<label>").attr("for", "concert-venue").text("Concert Venue");
                const $concertVenueInput = $("<input />").attr("id", "concert-venue").attr("placeholder", "Concert Venue").appendTo($concertFormDiv);

                const $concertSetlistLabel = $("<label>").attr("for", "concert-setlist").text("Concert Setlist");
                const $concertSetlistInput = $("<input />").attr("id", "concert-setlist").attr("placeholder", "Concert Setlist").appendTo($concertFormDiv);

                const $concertLinksLabel = $("<label>").attr("for", "concert-links").text("Concert Setlist");
                const $concertLinksInput = $("<input />").attr("id", "concert-links").attr("placeholder", "Concert Show Links").appendTo($concertFormDiv);

                const $concertJournalLabel = $("<label>").attr("for", "concert-journal").text("Concert Journal");
                const $concertJournalInput = $("<input />").attr("id", "concert-journal").attr("type", "textarea").attr("placeholder", "Concert Journal").appendTo($concertFormDiv);

                const $addConcertBtn = $("<button>").attr("id", "concert-add-btn").text("Add Your Concert").appendTo($concertFormDiv);
                const $logOutBtn = $("<button>").attr("id", "logOut-btn").text("Log Out").appendTo($concertFormDiv);
            })






        }

    }
})
module.exports = addConcertObject;