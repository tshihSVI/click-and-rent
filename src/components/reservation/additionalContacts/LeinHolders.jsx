import React from "react";
import styled from "styled-components";
import FormField from "~/src/components/common/FormField"

const LeinHoldersStyle = styled.div`
    display: grid;
    grid-template-columns: repeat(3,1fr) 3fr;
    grid-template-rows: auto;
    grid-template-areas:
        "name name name address_1"
        ". . . address_2";

    & .name {grid-area:name};
    & .address_1 {grid-area:address_1};
    & .address_2 {grid-area:address_2};
`;

const LeinHolders = ({onChange,data}) => {
    const formData = data? data["lein_holders"]:{};
    const handleChange = event => {
      const {value,name} = event.target;
      onChange("lein_holders",{...formData,[name]:value})
    };

    return (
        <LeinHoldersStyle>
            <FormField className="name"         label="Name"           onChange={handleChange} type="text" formData={formData} name="first_name" />
            <FormField className="address_1"    label="Address Line 1" onChange={handleChange} type="text" formData={formData} name="last_name" />
            <FormField className="address_2"    label="Address Line 2" onChange={handleChange} type="text" formData={formData} name="phone_number" />
            <FormField label="City"           onChange={handleChange} type="text" formData={formData} name="city" />
            <FormField label="Province"       onChange={handleChange} type="text" formData={formData} name="province" />
            <FormField label="Postal Code"    onChange={handleChange} type="text" formData={formData} name="postal_code" />
        </LeinHoldersStyle>
    )
}

export default LeinHolders