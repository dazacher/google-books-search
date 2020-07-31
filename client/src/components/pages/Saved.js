import React, { useState, useEffect } from "react";
// import Input from "react-bootstrap/InputGroup";
// import { MDBInput, Row, MDBBtn } from 'mdbreact';
import API from "../../utils/API";
import Container from "react-bootstrap/esm/Container";
import SearchCard from "../searchcard/SearchCard";

function Saved() {
    // let [search, setSearch] = useState({
    //     search: ""
    // })

    let [result, setResult] = useState([])

    
    useEffect(() => {
        loadBooks();

    }, [])

    
    

    // function handleInputChange(event) {
    //     // add code to control the components here
    //     const { name, value } = event.target;
        
    //     setSearch({ ...search, [name]: value });
    // }
    
    // function upDateResults (results) {
    //     setResult(results);
    // }

    // function handleSubmit(event) {
    //     // add code here to post a new book to the api
    //     event.preventDefault();
    //     // loadBooks();
    //     API
    //     .getBooks()
    //     .then(results => {
    //         console.log(results);
    //         upDateResults(results);
    //     })
    //     // .then(results => console.log(results))
    //     .catch(error => console.log(error));
    // }

    function loadBooks() {
        API
            .getSavedBooks()
            .then(results => {
                setResult(results.data);
                console.log(results);
            })
            // .then(results => console.log(results))
            .catch(error => console.log(error));
    };

    return (
        <>
            <Container>
                    {
                        result.map(item => {
                            return <SearchCard
                                key={item._id}
                                author={item.author}
                                title={item.title}
                                description={item.description}
                                image={item.image}
                                link={item.link}
                                saved={true}
                            />

                        })
                        
                    }
            </Container>
        </>
    )
}

export default Saved;