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
const login = require("./login")
const regForm = require("./regForm")

// Selecting the class of the base-container-div and adding an event listner for actions when clicking buttons.
const baseContainer = document.querySelector(".base-div-container");
baseContainer.addEventListener("click", () => {
    if (event.target.id === "concert-add-btn") {
        console.log("ADD CONCERT BUTTON CLICKED")
        // Capture the values of the fields and store in a variable. 
        //const $bandNameValue = document.getElementById("band-name").value;

        const $bandNameValue = document.getElementById("band-dropdown").value
        const $concertDateValue = document.getElementById("concert-date").value;
        const $concertVenueValue = document.getElementById("concert-venue").value
        const $concertSetlistValue = document.getElementById("concert-setlist").value;
        const $concertLinksValue = document.getElementById("concert-links").value;
        const $concertJournalValue = document.getElementById("concert-journal").value;

        const loadDatabase = function (localStorageKey) {
            const databaseString = localStorage.getItem(localStorageKey)
            return JSON.parse(databaseString)
        }
        const x = loadDatabase("User ID")
        console.log("Loading The Database", x)

        // Take the variables that store the values and create an object with the fields that are in the Concert table in storage.
        const concert = {
            bandName: $bandNameValue,
            date: $concertDateValue,
            venue: $concertVenueValue,
            setList: $concertSetlistValue,
            mediaLinksurl: $concertLinksValue,
            journal: $concertJournalValue,
            userId: x
        }

        databaseMethods.addConcert(concert).then((response) => {

            clear.clearVault()
            printToDOM.addConcertToDOM()


        })
    } else if (event.target.id === "login-btn") {
        console.log("Login Button Clicked")

        //Storing values of the username and password fields into variables.
        const logInName = $("#username-field").val();
        const logInPass = $("#login-pass-field").val();
        // Get request to my API and passing the paramaters of the login and Password values.
        databaseMethods.getUserName(logInName, logInPass).then(user => {
            console.log(" TEST")
            console.log(user[0].password, logInPass)

            // Conditional Statement, if the value of the users login password match the password the SaveDatabase function runs.
            if (user[0].password === logInPass) {
                console.log("The Passwords Are equal")

                // The SaveDatabase function saves the databaseObject "User's username and password loaded from storage" and the key "the USER ID".
                const saveDatabase = function (databaseObject, localStorageKey) {
                    console.log("LocalStorage Key", localStorageKey)

                    // The stringifiedDatabase varible holds the stringified user ID object.
                    let stringifiedDatabase = JSON.stringify(databaseObject)

                    // Sets the item to show the localStorage key followed by the stringified database. This can be viewed in local storage.
                    localStorage.setItem(localStorageKey, stringifiedDatabase)
                }

                // Calling on the SaveDatabase function with the username and password.
                // "The User is an object and the array are where the propeties are to the USER object.
                // Then making "USER ID" the key.
                saveDatabase(user[0].id, "User ID")


                console.log("USER ID", user[0].id)


                // Clears the DOM
                clear.clearAll()

                // Loads the add concert form.
                addConcert.addConcertForm()

                //loads the concerts already added from stroage.
                printToDOM.addConcertToDOM()


            } else if (user[0].password !== logInPass) {
                alert("Sorry, you have entered an incorrect password, please try again.")

            }

            console.log("user", user)
            console.log("User Password", logInPass)

        })


    } else if (event.target.id === "register-btn") {
        console.log("register-btn Clicked")
        clear.clearAll()
        clear.clearVault()
        regForm.buildRegForm()



    } else if (event.target.id === "reg-sub-btn") {
        console.log("reg-sub-btn Submit Button Clicked!")

        // Capture the values of the input fields.
        const $regFirstNameValue = document.getElementById("first-name-input").value;
        const $regLastNameValue = document.getElementById("last-name-input").value;
        const $regUserNameValue = document.getElementById("username-input").value;
        const $regEmailValue = document.getElementById("reg-email").value;
        const $regPasswordValue = document.getElementById("regPass").value;
        const $regFavBandValue = document.getElementById("fav-band-name").value;

        // Create an object that takes the values and stores in newUser
        const newUser = {
            userName: $regUserNameValue,
            firstName: $regFirstNameValue,
            lastName: $regLastNameValue,
            email: $regEmailValue,
            password: $regPasswordValue,
            favoriteBand: $regFavBandValue,
        }
        console.log("Added User!!", newUser)
        databaseMethods.addUser(newUser).then((user) => {
            console.log("USER CHANGED FROM RESPONSE!!!", user)

            // The SaveDatabase function saves the 
            const saveDatabase = function (databaseObject, localStorageKey) {
                console.log("LocalStorage Key", localStorageKey)
                console.log("database Object!!", localStorageKey)

                // The stringifiedDatabase varible holds the stringified user ID object.
                const stringifiedDatabase = JSON.stringify(databaseObject)

                // Sets the item to show the localStorage key followed by the stringified database. This can be viewed in local storage.
                localStorage.setItem(localStorageKey, stringifiedDatabase)

            }

            saveDatabase(user.id, "User ID")

            clear.clearVault()
            clear.clearAll()
            // Loads the add concert form.
            addConcert.addConcertForm()

            //loads the concerts already added from stroage.
            printToDOM.addConcertToDOM()

            //login.buildLoginForm()


        })


    } else if (event.target.id === "logOut-btn") {
        console.log("logOut-btn Clicked")
        //Clears both div's on the index.
        clear.clearAll()
        clear.clearVault()
        // Loads the login screen
        login.buildLoginForm()

    } else if (event.target.id === "band-add-btn") {
        console.log("Add Button Clicked");

        $bandNameValue = document.getElementById("add-band-input").value;

        const band = {
            band: $bandNameValue
        }
        databaseMethods.addBand(band).then((response) => {
            clear.clearAll()
            clear.clearVault()
            addConcert.addConcertForm()
            printToDOM.addConcertToDOM()

        })
    }


})

const concertVault = document.querySelector("#concert-vault-container");
concertVault.addEventListener("click", () => {


    if (event.target.className === "edit-concert-btn-class") {
        console.log("Edit Button Clicked")

        let concertId = (event.target.parentNode.id)
        console.log("EDIT CLICKED CONCERT ID", concertId)
        databaseMethods.getConcert(concertId)
            .then((concert) => {
                console.log("The ID On Click")
                console.log("EDIT CONCERT", concert)

                editConcertForm.editConcertForm(concert)
            })


    } else if (event.target.id === "del-concert-btn-id") {
        console.log("Delete Button Clicked")
        const id = $(event.target).parent().attr("id");
        databaseMethods.deleteConcert(id).then(() => {
            clear.clearVault()
            printToDOM.addConcertToDOM()
        })

        // When you click the band Button, it will load the url of the mediaLinksUrl.
        //START BAND BUTTON
    } else if (event.target.id === "band-btn-id") {
        console.log("Band Button Clicked!")
       
        // END BAND BUTTON

    } else if (event.target.className === "save-btn") {

        // Captures the values of the edited fields.
        const $editedBandNameValue = document.getElementById("band-name-edit").value;
        const $editedDateValue = document.getElementById("concert-date-edit").value;
        const $editedVenueValue = document.getElementById("band-venue-edit").value;
        const $editedLinksValue = document.getElementById("media-links-edit").value;
        const $editedSetlistValue = document.getElementById("setlist-edit").value;
        const $editedJournalValue = document.getElementById("journal-edit").value;
        // Loads the users ID from local storage.
        const loadDatabase = function (localStorageKey) {
            const databaseString = localStorage.getItem(localStorageKey)
            return JSON.parse(databaseString)
        }
        // Stores the user ID in the concertUserId varible. The user ID links the concert that was added by the user.
        const $concertUserId = loadDatabase("User ID")

        const editedConcert = {
            bandName: $editedBandNameValue,
            date: $editedDateValue,
            venue: $editedVenueValue,
            journal: $editedJournalValue,
            setList: $editedSetlistValue,
            mediaLinksurl: $editedLinksValue,
            userId: $concertUserId

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


    }

})
