const $ = require("jquery");

const databaseMethods = Object.create({}, {
    addConcert: {
        value: (concert) => {
            return $.ajax({
                url: "http://localhost:3000/concerts",
                method: "POST",
                data: concert
            })
        }
    },
    getAllConcerts: {
        value: () => {
            return $.ajax("http://localhost:3000/concerts")
        }
    }, getConcert: {
        value: (id) => {
            return $.ajax((`http://localhost:3000/concerts/${id}`))

        }
    }, deleteConcert: {
        value: (id) => {
            return $.ajax({
                url: `http://localhost:3000/concerts/${id}`,
                method: "DELETE"


            })
        }
    }, patchConcert: {
        value: (id) => {
            return $.ajax({
                url: `http://localhost:3000/concerts/${id}`,
                method: "PATCH",
                data: {
                    read: true
                }
            })
        }
    }, putConcert: {
        value: (concert, id) => {
            return $.ajax({
                url: `http://localhost:3000/concerts/${id}`,
                method: "PUT",
                data: {

                }
            })
        }
    },
    addBand: {
        value: (band) => {
            return $.ajax({
                url: "http://localhost:3000/concerts",
                method: "POST",
                data: band
            })
        }
    },



})

module.exports = databaseMethods;