import React from "react";
import styled from "styled-components";
import Col from "react-bootstrap/Col"

const Link = styled.a`
    display:block;
    color:white;
    &:hover {
        color:white;
    }
`;

const Column = ({label,content}) => {
    const links = content.map(
        ({url,text},index) => <Link key={index} href={url}>{text}</Link>
    )
    return (
        <Col>
            <h6>{label}</h6>
            <hr/>
            {links}
        </Col>
    )
}


export default Column