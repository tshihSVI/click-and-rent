import React from "react";
import styled from "styled-components"

import DocumentContext from "~/src/context/Document"
import PDFView from "../common/Contract/PDFView";

const SignedContractStyle = styled.div`
    padding: 5em;
    * {
        display:block;
    }
    & div{
        height:100vh;
    }
`;

const SignedContract = () => {
    const {reference_id} = React.useContext(DocumentContext)
    return (
        <SignedContractStyle>
            <h1>Thank you, your reference ID is: {reference_id}</h1>
            <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et</p>
            <button>Take me to my store!</button>
            <hr/>
            <div>
                <PDFView/>
            </div>
        </SignedContractStyle>
    )
}

export default SignedContract