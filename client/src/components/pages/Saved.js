import React, { useState, useEffect } from "react";
import API from "../../utils/API";
import Container from "react-bootstrap/esm/Container";
import SearchCard from "../searchcard/SearchCard";

function Saved() {

    let [result, setResult] = useState([])

    
    useEffect(() => {
        loadBooks();

    }, [])

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
                            />
                        })  
                    }
            </Container>
        </>
    )
}

export default Saved;