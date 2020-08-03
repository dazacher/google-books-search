import React, { useState } from "react";
import "./SearchCard.css"
import API from "../../utils/API";
import { Row, Col } from 'mdbreact';

function SearchCard(props) {
    console.log(props);

    let [result, setResult] = useState([])

    // function loadBooks() {
        //     API.getSavedBooks()
        //         .then(results =>
        //             setResult(results.data)
        //         )
        //         .catch(err => console.log(err));
        // };
        
// Deletes a book from the database with a given id, then reloads books from the db
    function deleteBook(id) {
        console.log(id)
        API.deleteBook(id)
            .then(res => props.onDeleteBook())
            .catch(err => console.log(err));
    }



    return (

        <Row className="rowBoarders">
            <Col lg={12}>
                <Row>
                    <Col lg={8}>

                        <label className="title">
                            {props.title}
                        </label><br></br>
                        <label className="author">
                            {props.author}
                        </label>
                    </Col>
                    <Col lg={2} className="alignCenter">
                        <button className="submitButton">
                            <a className="anchorFormat"  href={props.link} target="_blank" rel="noopener noreferrer">View</a>
                        </button>
                        </Col>
                        <Col lg={2} className="alignCenter">
                            {(props.save)
                                ? <button
                                    className="submitButton"
                                    onClick={() => {
                                        API.saveBook (
                                            {
                                                author: props.author.join(" "),
                                                title: props.title,
                                                description: props.description,
                                                image: props.image,
                                                link: props.link
                                            }
                                        )
                                    }}>
                                    Save
                                    </button>

                                : <button
                                    className="submitButton"
                                    onClick={() => deleteBook(props.id)}>
                                    Delete
                                </button>}
                        </Col>
                </Row>
                <Row>
                    <Col lg={3}>
                        <img src={props.image} alt="test" />
                    </Col>
                    <Col lg={9}>
                        <label>
                            {props.description}
                        </label>
                    </Col>
                </Row>
            </Col>
        </Row>
    )
};

export default SearchCard;