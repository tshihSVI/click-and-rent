import React from "react"
import styled from "styled-components";

const FormFieldStyle = styled.label`
    display:block;
    padding:.5em;
    font-size: 1em;
    font-weight: bold;

    input {
        display:block;
        font-size:1em;
        width:100%;
        font-weight: normal;
    }
`;

const FormField = ({className,
                    label,
                    type,
                    onChange,
                    formData,
                    name,
                    custom,
                    children}) => {
    if (children != undefined){
        return (
            <FormFieldStyle>
                {label}
                {children}
            </FormFieldStyle>
        )
    }else{
        let initial_value = ""
        try{
            initial_value = formData[name];
        }catch(e){
            console.log(`Initial Value was not set, please add this field to contract/fields. Error is ${e}`)
        }

        return (
            <FormFieldStyle className={className}>
                {label}
                <input type={type} onChange={onChange} value={initial_value} name={name} {...custom}/>
            </FormFieldStyle>
        )
    }
}

export default FormField