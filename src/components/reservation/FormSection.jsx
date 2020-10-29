import React from "react";
import Card from "react-bootstrap/Card"
import styled from "styled-components";

const FormSection = ({section_title,section_info,children}) => {
    const [active, setActive] = React.useState(false)

    const toggleActive = () => {
        setActive(!active)
    }

    return (
        <Card>
            <Card.Header>
                <span>
                    <h1>{section_title}</h1>
                    <h6>{section_info}</h6>
                </span>
                <button type="button" onClick={toggleActive}>
                    {active? "^" : "⌄"}
                </button>
            </Card.Header>
            <Card.Body>
                {active && children}
            </Card.Body>
        </Card>
    )
}

export default FormSection