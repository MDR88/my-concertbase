//Author: Michael Roberts
//Purpose: This adds the form to log the concert.

const $ = require("jquery")


const addConcertObject = Object.create({}, {
    addConcertForm: {
        value: () => {

            const mainDiv = document.querySelector(".main-div-container");

            const $formDiv = $("<div>").attr("id", "form-div").appendTo(mainDiv)
            const $pEl = $("<p>").appendTo($formDiv)
            const $bookTitleLabel = $("<label>").attr("for", "book-title").text("Book Title")
            const $bookTitleInput = $("<input>").attr("id", "book-title").attr("placeholder", "Book Title").appendTo($formDiv)
            const $bookSumLabel = $("<label>").attr("for", "book-Sum").text("Summary")
            const $bookSumInput = $("<input>").attr("id", "book-Sum").attr("placeholder", "Book Summary").appendTo($formDiv)
            const $bookPagesLabel = $("<label>").attr("for", "book-pages").text("Pages")
            const $bookPagesInput = $("<input>").attr("id", "book-pages").attr("placeholder", "Pages").appendTo($formDiv)
            const $bookAddSubmit = $("<button>").attr("id", "bookSubmit").text("Submit Your Book").appendTo($formDiv)

        }

    }
})
module.exports = addConcertObject;