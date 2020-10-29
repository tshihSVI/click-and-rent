import React from "react";
import styled from "styled-components";
import FormField from "~/src/components/common/FormField"

const CardInformationStyle = styled.div`
    display: grid;
    grid-template-columns: 1fr
    grid-template-rows: auto;
`;

const CardInformation = ({onChange,data}) => {
    const formData = data? data["card"]:{};
    const handleChange = event => {
      const {value,name} = event.target;
      onChange("card",{...formData,[name]:value})
    };

    return (
        <CardInformationStyle>
            <FormField label="Name on Card" onChange={handleChange} type="text" formData={formData} name="name" />
            <FormField label="Card Number"  onChange={handleChange} type="text" formData={formData} name="number" />
            <FormField label="Expiry Date"  onChange={handleChange} type="text" formData={formData} name="expiry" />
            <FormField label="Postal Code"  onChange={handleChange} type="text" formData={formData} name="postal" />
        </CardInformationStyle>
    )
}

export default CardInformation