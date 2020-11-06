import React from "react";
import styled from "styled-components";
import Button from "react-bootstrap/Button"

import Section from "./Section"

import alert from "~/src/lib/alert"

const ButtonContainer = styled.p`
    text-align:right;
`;

const Checkmark = styled.span`
    border-radius:50%;
    background-color:lightgreen;
    padding:.5em;
    margin:.5em;
    vertical-align: middle;
    font-weight:900;
`;

const AgreementBlockStyle = styled.div`
    border-radius:.5em;
    padding: .5em;
    max-height:60vh;
    overflow-y:scroll;
    background-color:whitesmoke;

    &::-webkit-scrollbar {-webkit-appearance: none;}
    &::-webkit-scrollbar-thumb {
        border-radius: .5em;
        background-color: rgba(0, 0, 0, .5);
    }
`;

const AgreementBlock = ({title,sections,onChange,data}) => {
    const formData = data? data:{};
    const isSigned = formData != undefined && formData[title.replace(/\s/g, '')]? true:false;
    const getBreadCrumbs = ({clientX,clientY,pageX,pageY,screenX,screenY,timeStamp,view}) => (
        {clientX,clientY,pageX,pageY,screenX,screenY,timeStamp,appVersion:view.clientInformation.appVersion}
    )

    const recordClick = event => {
        data = getBreadCrumbs(event)
        alert({
            title:"Success!",
            message:`You have agreed to the terms of: ${title}`,
            type:"success",
        })
        onChange("trace",{...formData,[title.replace(/\s/g, '')]:data})
    };

    const Sections = sections.map((
        {label,content},index) => <Section key={index} label={label} content={content}/>
    )

    return (
        <React.Fragment>
            <AgreementBlockStyle>
                <h3>{title}</h3>
                {Sections}
                <ButtonContainer>
                    { isSigned && <Checkmark>&#10003;</Checkmark>}
                    <Button type="button" onClick={recordClick} disabled={isSigned}>
                        I agree
                    </Button>
                </ButtonContainer>
            </AgreementBlockStyle>
            <hr/>
        </React.Fragment>
    )
}

export default AgreementBlock