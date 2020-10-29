import React from "react";
import styled from "styled-components";
import AgreementBlock from "./AgreementBlock";

import contractTerms from "~/src/static/contract/terms"

const Main = ({onChange,data}) => {
    const formData = data["terms_and_conditions"]? data["terms_and_conditions"]:{};
    const handleChange = event => {
        const {value,name} = event.target;
        onChange("terms_and_conditions",{...formData,[name]:value})
    };

    let contractTermComponents = contractTerms.map(({title,content}) =>
        <AgreementBlock title={title} content={content} key={title}/>)

    return (
        <React.Fragment>
            {contractTermComponents}
            <div> 
                I 
                <input type="text" onChange={handleChange} name="signature" />
                agree to the Rental Agreement
            </div>
            <input type="submit" value="Submit" />
        </React.Fragment>
    )
}


export default Main