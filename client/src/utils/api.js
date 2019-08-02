import axios from "axios"

const randomWord= ["history", "science", "politics", "sport", "religion", "music", "art", "computer", "programming"];

export default {
    // Get book from google search 
    getGoogleSearchBooks: function (query) {
        return axios.get("https://www.googleapis.com/books/v1/volumes?q=" + query)
    },

    // Gets all random books
    getBooks: function () {
        return axios.get("https://www.googleapis.com/books/v1/volumes?q=" + randomWord[Math.floor(Math.random() * randomWord.length)]);
    },

    // Gets all saved books
    getSavedBooks: function () {
        return axios.get("/api/books/");
    },

    // Gets the book with the given id
    getBook: function (id) {
        return axios.get("/api/books/" + id);
    },

    // Saves a book to the database
    saveBook: function (savedBooks) {
        return axios.post("/api/books/", savedBooks);
    },

    // Deletes the book with the given id
    deleteBook: function (id) {
        return axios.delete("/api/books/" + id);
    }

}