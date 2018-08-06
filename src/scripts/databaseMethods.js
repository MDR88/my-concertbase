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
            // pull userID from local storage here. 
            const loadDatabase = function(localStorageKey) {
                const databaseString = localStorage.getItem(localStorageKey)
                return JSON.parse(databaseString)
              }
              const concertUserId = loadDatabase("USER ID")
              console.log("Loads UserID From Database to Add Concert", concertUserId)
            //change query string to use string interpelation using User ID.
            return $.ajax(`http://localhost:3000/concerts?userId=${concertUserId}`)
        }
    }, getConcert: {
        value: (id) => {
            return $.ajax((`http://localhost:3000/concerts/${id}`))

        }
    }, deleteConcert: {
        value: (id) => {
            return $.ajax({
                url: `http://localhost:3000/concerts/${id}`,
                method: "DELETE",
            

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
            console.log("CONCERT", concert)
            return $.ajax({
                url: `http://localhost:3000/concerts/${id}`,
                method: "PUT",
                data: {
                    
                    bandName: concert.bandName,
                    date: concert.date,
                    venue: concert.venue,
                    setList: concert.setList, 
                    mediaLinksurl: concert.mediaLinksurl,
                    journal: concert.journal,
                    userId: concert.userId
        
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
    getUser: {
        value: (id) => {
            return $.ajax(`http://localhost:3000/users/${id}`)
        }
    },
    getAllUsers: {
        value: () => {
            return $.ajax("http://localhost:3000/users")
        }
    },
    getUserName: {
        value: (userName) => {
        return $.ajax({
            url: `http://localhost:3000/users?userName=${userName}`,
            method: "GET",
        
        })
    }
},    addUser: {
    value: (newUser) => {
        return $.ajax({
            url: "http://localhost:3000/users",
            method: "POST",
            data: newUser
        })
    }
}
})

module.exports = databaseMethods;