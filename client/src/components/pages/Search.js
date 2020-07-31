import React, { useState } from "react";
// import Input from "react-bootstrap/InputGroup";
import { MDBInput, Row, MDBBtn } from 'mdbreact';
import API from "../../utils/API";
import Container from "react-bootstrap/esm/Container";
import SearchCard from "../searchcard/SearchCard";

function Search() {
    let [search, setSearch] = useState({
        search: ""
    })

    let [result, setResult] = useState([])

    
    // useEffect(() => {
    //     // loadBooks();

    // }, [])

    
    

    function handleInputChange(event) {
        // add code to control the components here
        const { name, value } = event.target;
        
        setSearch({ ...search, [name]: value });
    }
    
    function upDateResults (results) {
        setResult(results);
    }

    function handleSubmit(event) {
        // add code here to post a new book to the api
        event.preventDefault();
        // loadBooks();
        API
        .getBooks(search.search)
        .then(results => {
            console.log(results);
            upDateResults(results);
        })
        // .then(results => console.log(results))
        .catch(error => console.log(error));
    }
    // function loadBooks() {
    //     API
    //         .getBooks(search.search)
    //         .then(results => {
    //             setResult(results);
    //         })
    //         // .then(results => console.log(results))
    //         .catch(error => console.log(error));
    // };




    return (
        <>
            <Row>
                <h1> Book Search</h1>
                <MDBInput
                    label='Search'
                    name="search"
                    value={search.search}
                    onChange={handleInputChange}
                    icon='text'
                    group
                    type='text'
                    placeHolder="Enter Your Search Request"
                />
                <MDBBtn
                    color="purple"
                    onClick={handleSubmit}
                    // onClick={loadBooks}
                >
                    Search
                </MDBBtn>
            </Row>
            <Container>
                    {
                        result.map(item => {
                            return <SearchCard
                                key={item.id}
                                author={item.author.join("")}
                                title={item.title}
                                description={item.description}
                                image={item.image}
                                link={item.link}
                            />

                        })
                        
                    }
            </Container>
        </>
    )
}

export default Search;