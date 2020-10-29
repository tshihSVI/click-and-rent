import React from "react";
import Container from "react-bootstrap/Container"
import Row from "react-bootstrap/Row"
import styled from "styled-components";

import footer_links from "~/src/static/footer/links.js"

import Column from "./Column"

const Links = () => {
    const Columns = footer_links.map(({title,content},index) =>(
        <Column key={index} label={title} content={content}/>
    ))
    return (
        <Container>
            <Row>
                {Columns}
            </Row>
        </Container>
    )
}


export default Links