import axios from "axios";


// Export an object containing methods we'll use for accessing the random user API
export default {
    getBooks: (search) => {
        console.log(search);
        return axios
            .get("https://www.googleapis.com/books/v1/volumes?q=" + search.split(' ').join('+'))
            .then(response => {
                // console.log(response);
                const books = response.data.items;
                const results = books.map(book => {
                    return {
                        id: book.id,
                        author: book.volumeInfo.authors,
                        title: book.volumeInfo.title,
                        description: book.volumeInfo.description,
                        image: book.volumeInfo.imageLinks.thumbnail,
                        link: book.volumeInfo.previewLink
                    }
                })
                // console.log(results);

                return results;

            })
            .catch(error => console.log(error));
    },

    saveBook: (book) => {
        return axios.post("/api/books", book)
    },

    getSavedBooks: () => {
        return axios.get("/api/books")
    },

    deleteBook: (id) => {
        return axios.delete("/api/books/" + id);
    }
};