import React from "react";
import styled from "styled-components";
import steps from "~/src/static/contract/steps"
import Step from "./Step";

const StepsBarWrapper = styled.div`
    padding: 15px 0;
    border-bottom:1px solid #707070;
`;

const StepsBarStyle= styled.div`
    display: grid;
    grid-template-columns: repeat(3,1fr);
    grid-gap: 15px;
`;

const StepsBar = ({current,onChange}) => {
    const getStatus = (stepNo) => {
        current = parseInt(current)
        stepNo = parseInt(stepNo)
        if (current > stepNo) {return "completed"} else
        if (current == stepNo) {return "current"} else
        if (current < stepNo) {return "default"}
    }

    function handleChange(newValue) {
        onChange(newValue)
    }

    const stepItems = steps.map(({stepNo,content})=>
    (
        <Step key={stepNo} stepNo={stepNo} content={content} status={getStatus(stepNo)}/>
    ));

    return (
        <StepsBarWrapper>
            <StepsBarStyle className="container">
                {stepItems}
            </StepsBarStyle>
        </StepsBarWrapper>
    )
}

export default StepsBar
