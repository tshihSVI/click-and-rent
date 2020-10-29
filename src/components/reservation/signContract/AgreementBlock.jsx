import React from "react";
import styled from "styled-components";

const AgreementBlock = ({title,content}) => (
    <React.Fragment>
        <h1>{title}</h1>
        <p>{content}</p>
        <hr/>
    </React.Fragment>
)

export default AgreementBlock