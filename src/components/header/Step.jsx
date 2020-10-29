import React from "react";
import styled from "styled-components";

const StepDiv = styled.div`
    width:100%;
    font-size:0.85rem;
`;
const Bar = styled.div`
    margin:5px 0 15px 0;
    height:10px;
    width:auto;
    &.default {
        background-color: #707070; 
    }
    &.current {
        background-image: linear-gradient(to left, #707070, #E2002D);
    }
    &.completed {
        background-color:#E2002D; 
    }
`;

const Step = ({stepNo, content, status}) => {
    return ( 
        <StepDiv>
            <span><b>Step {stepNo}</b> {content}</span>
            <Bar className={status}></Bar>
        </StepDiv>
    )
}

export default Step
