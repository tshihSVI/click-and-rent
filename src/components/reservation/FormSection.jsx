import React from "react";
import Accordion from "react-bootstrap/Accordion"
import { useAccordionToggle } from 'react-bootstrap/AccordionToggle';

import Card from "react-bootstrap/Card"
import styled from "styled-components";

const NextButton = styled.button`
    background-color:#E2002D;
    color:white;
`;

const FormSection = ({section_index, section_title,section_info,children,is_last_section = false}) => {
    const [active, setActive] = React.useState(true)
    const onNextSection = useAccordionToggle(String(parseInt(section_index)+1))

    const toggleActive = () => {
        setActive(!active)
    }

    return (
        <Card>
            <Accordion.Toggle as={Card.Header} variant="link" eventKey={section_index}>
                <span>
                    <h2>{section_title}</h2>
                </span>
            </Accordion.Toggle>   
            <Accordion.Collapse eventKey={section_index}>
                <Card.Body>
                    {children}
                    {!is_last_section && <NextButton type="button" onClick={onNextSection}>Next Section</NextButton>}
                </Card.Body>
            </Accordion.Collapse>
        </Card>
    )
}

export default FormSection