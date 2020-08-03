import React, { useState, useEffect } from "react";
import { MDBInput, Row, Col } from 'mdbreact';
import API from "../../utils/API";
import Container from "react-bootstrap/esm/Container";
import SearchCard from "../searchcard/SearchCard";

function Search() {
    let [search, setSearch] = useState({
        search: ""
    })

    let [result, setResult] = useState([])

    useEffect(() => {
        // loadBooks()
    }, [])

    // function loadBooks() {
    //     API.getBooks()
    //         .then(results =>
    //             setResult(results.data)
    //         )
    //         .catch(error => console.log(error));
    // };

    function handleInputChange(event) {
        // add code to control the components here
        const { name, value } = event.target;

        setSearch({ ...search, [name]: value });
    }

    function upDateResults(results) {
        setResult(results);
    }

    function handleSubmit(event) {
        // add code here to post a new book to the api
        event.preventDefault();

        API
            .getBooks(search.search)
            .then(results => {
                // console.log(results);
                upDateResults(results);
            })
            .catch(error => console.log(error));
    }

    return (
        <>
            <Container>
                <Row>
                    <Col lg={12}>
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
                        <button
                            type="submit"
                            className="submitButton"
                            onClick={handleSubmit}>
                            Search
                </button>
                    </Col>
                </Row>
            </Container>
            <Container>
                {
                    result.map(item => {
                        return <SearchCard
                            key={item.id}
                            author={item.author}
                            title={item.title}
                            description={item.description}
                            image={item.image}
                            link={item.link}
                            save={true}
                        />

                    })
                }
            </Container>
        </>
    )
}

export default Search;