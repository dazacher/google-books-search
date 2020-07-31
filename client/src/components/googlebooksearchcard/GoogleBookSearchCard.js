import React, { useEffect, useState } from "react";
import API from "../utils/API";
import CardContainer from "../components/bookcard/BookCard";
import Row from "../components/Row";

function GoogleBookSearch(props) {

    return (
        <>
            {/* <h3 className="text-center">Click on the arrows to browse users</h3> */}
            <Row>
                <CardContainer
                    author={book.author}
                    title={book.login}
                    description={book.description}
                    image={book.image}
                    link={book.link}
                    handleBtnClick={handleBtnClick}
                />
            </Row>
        </>
    );
};

export default GoogleBookSearch;