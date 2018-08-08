//Author: Michael Roberts
//Purpose: This adds the form to log the concert.

const $ = require("jquery")

//This is the object that loads the fields to add the concert details to the database.
const addConcertObject = Object.create({}, {
    addConcertForm: {
        value: () => {
           
            const baseDiv = document.querySelector(".base-div-container");

            function PopulateDropDownList() {
                //Build an array containing Bands
                 const bands = [
                     { BandId: 1, Name: "Select Band"},
                     { BandId: 2, Name: "Oaisis"},
                     { BandId: 3, Name: "They Might Be Giants"},
                     { BandId: 4, Name: "NIN"}
                 ];
                
                 const ddBands = document.getElementById("band-dropdown");
                
                 //Add the Options to the DropDownList.
                 for (var i = 0; i < bands.length; i++) {
                     var option = document.createElement("OPTION");
      
                     //Set the Band Name in Text part.
                     option.innerHTML = bands[i].Name;
      
                     //Set BandId in Value part.
                     option.value = bands[i].BandId;
      
                     //Add the Option element to DropDownList.
                     ddBands.options.add(option);
                 }
                 
             }
             
            const $concertFormDiv = $("<div>").attr("id", "concert-form-div").appendTo(baseDiv);
            const $pEl = $("<p>").appendTo($concertFormDiv);

            // Drop Down Menu
            const $bandDropdownLabel = $("label").attr("for", "band-dropdown").text("Select Band");
            const $bandDropdown = $("<select>").attr("id", "band-dropdown").appendTo($concertFormDiv);

            const $bandNameLabel = $("<label>").attr("for", "band-name").text("Band Name");
            const $bandNameInput = $("<input>").attr("id", "band-name").attr("placeholder", "Band Name").appendTo($concertFormDiv);

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
            PopulateDropDownList()
        }

    }
})
module.exports = addConcertObject;