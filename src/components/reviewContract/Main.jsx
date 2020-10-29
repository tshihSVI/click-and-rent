import React from "react";
import styled from "styled-components"

import DocumentContext from "~/src/context/Document"
import getCompletedContract from "~/src/REST/getCompletedContract"
import DownloadLink from "../common/Contract/DownloadLink";
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

const Main = () => {
    const {setData,reference_id,setReference_id} = React.useContext(DocumentContext)

    const fetchContract = (e) => {
        e.preventDefault();
        getCompletedContract(reference_id).then(data => setData(data))
    }

    return (
        <SignedContractStyle>
            <form onSubmit={fetchContract}>
                Please enter your reference_id
                <input onChange={({target}) => {setReference_id(target.value)}} type="text" name="id"/>
                <button>Retrieve</button>
            </form>
            <hr/>
            <div>
                <PDFView/>
            </div>
        </SignedContractStyle>
    )
}

export default Main