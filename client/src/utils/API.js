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
                console.log(results);
            
                return results;
                // resolve(results);
                // let books = [];
                // for (let i = 0; i <= response.data.results.length; i++) {
                //     let book = {

                //         author: response.data.results.items.volumeInfo.authors,
                //         title: response.data.results.items.volumeInfo.title,
                //         description: response.data.results.items.volumeInfo.description,
                //         image: response.data.results.items.imageLinks.thumbnail,
                //         link: response.data.results.items.selfLink
                //     }
                //     books.push(book);
                

                // results(books);
            })
            .catch(error => console.log(error));
},

saveBook: (book) => {
    return axios
    .post("/api/books", book)

},

getSavedBooks: () => {
    return axios
    .get("/api/books")
}
}