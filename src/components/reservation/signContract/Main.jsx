import React from "react";
import AgreementBlock from "./AgreementBlock";

import contractTerms from "~/src/static/contract/terms"

const Main = ({onChange,data}) => {
    const formData = data? data:{};

    const handleChange = (key,value) => {
        onChange("terms_and_conditions",{...formData,[key]:value})
    };

    let contractTermComponents = contractTerms.map(({title,sections}) =>(
        <AgreementBlock
            key={title}
            title={title}
            sections={sections}
            onChange={handleChange}
            data={formData.trace}/>
    ))

    return (
        <React.Fragment>
            {contractTermComponents}
            <div> 
                I 
                <input  type="text" 
                        onChange={({target:{name,value}})=>{handleChange(name,value)}} 
                        name="signature" />
                agree to the Rental Agreement
            </div>
            <input type="submit" value="Submit" />
        </React.Fragment>
    )
}


export default Main