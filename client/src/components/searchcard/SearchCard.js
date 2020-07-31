import React, { useState } from "react";
// import { Row, Col, Button } from "react-bootstrap/";
// import Row from "react-bootstrap/Row";
// import Col from "react-bootstrap/Col";
import "./SearchCard.css"
// import { Link } from "react-router-dom";
import API from "../../utils/API";
import { Row, Col } from 'mdbreact';

// const imagecontext = require.context("../../assets/images", true)



function SearchCard(props) {
    console.log(props);

    let [result, setResult] = useState([])

    // Deletes a book from the database with a given id, then reloads books from the db
    function loadBooks() {
        API.getSavedBooks()
            .then(results =>
                setResult(results.data)
            )
            .catch(err => console.log(err));
    };

    function deleteBook(id) {
        API.deleteBook(id)
            .then(res => loadBooks())
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
                                        API.saveBookclassName = "submitButton"(
                                            {
                                                author: props.author,
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
                                    // color="primary"
                                    onClick={() => { API.deleteBook({ id: props.id }) }}>
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




    // <label
    // >
    // </label>
    // {/* author: book.volumeInfo.authors,
    //                         title: book.volumeInfo.title,
    //                         description: book.volumeInfo.description,
    //                         image: book.volumeInfo.imageLinks.thumbnail,
    //                         link: book.selfLink */}
    // </Row>
    //         <Col sm={6} md={4}>
    //             <img responsive="true" variant="top" src={imagecontext("./" + props.image)} alt="" />
    //         </Col>
    //         <Col sm={6} md={4}>

    //         </Col>
    //         <ListGroup>
    //               {books.map(book => {
    //                 return (
    //                   <ListGroup.Item key={book.title}>
    //                     <a href={"/books/" + book.title}>
    //                       <strong>
    //                         {book.title} by {book.author}
    //                       </strong>
    //                     </a>
    //                     <Button onClick={() => deleteBook(book._id)} />
    //                   </ListGroup.Item>
    //                 );
    //               })}
    //             </ListGroup>
    //         <Col sm={6} md={4}>
    //             <Card className="cardBody">
    //                 <Card.Img responsive="true" variant="top" src={imagecontext("./" + props.image)} alt={props.altTag} />
    //                 <Card.Body className="text">
    //                     <Card.Title className="cardTitle">{props.cardTitle}</Card.Title>
    //                     <Card.Text>
    //                         {props.cardText}
    //                         <br></br>
    //                         {props.cardApplications}
    //                     </Card.Text>
    //                 </Card.Body>
    //             </Card>
    //         </Col>
    //         </>
    //     );
};

export default SearchCard;