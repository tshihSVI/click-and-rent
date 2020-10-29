import React from "react";
import styled from "styled-components";
import FormField from "~/src/components/common/FormField"

const LeinHoldersStyle = styled.div`
    display: grid;
    grid-template-columns: 1fr
    grid-template-rows: auto;
`;

const LeinHolders = ({onChange,data}) => {
    const formData = data? data["lein_holders"]:{};
    const handleChange = event => {
      const {value,name} = event.target;
      onChange("lein_holders",{...formData,[name]:value})
    };

    return (
        <LeinHoldersStyle>
            <FormField label="Name"           onChange={handleChange} type="text" formData={formData} name="first_name" />
            <FormField label="Address Line 1" onChange={handleChange} type="text" formData={formData} name="last_name" />
            <FormField label="Address Line 2" onChange={handleChange} type="text" formData={formData} name="phone_number" />
            <FormField label="City"           onChange={handleChange} type="text" formData={formData} name="city" />
            <FormField label="Province"       onChange={handleChange} type="text" formData={formData} name="province" />
            <FormField label="Postal Code"    onChange={handleChange} type="text" formData={formData} name="postal_code" />
        </LeinHoldersStyle>
    )
}

export default LeinHolders