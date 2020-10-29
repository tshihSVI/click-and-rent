import React from "react";
import styled from "styled-components";
import FormField from "~/src/components/common/FormField"

const PersonalDetailsForm = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: auto;
    gap: 5px;
    grid-template-areas:
        ". ."
        ". ."
        ". .";
`;

const DoubleField = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
`;

const PersonalDetails = ({onChange,data}) => {
    const formData = data? data["personal_details"]:{};
    const handleChange = event => {
      const {value,name} = event.target;
      onChange("personal_details",{...formData,[name]:value})
    };

    return (
        <PersonalDetailsForm>
            <FormField label="First Name*"  onChange={handleChange} type="text" formData={formData} name="first_name"/>
            <FormField label="Last Name*" onChange={handleChange} type="text" formData={formData} name="last_name"/>
            <FormField label="Phone Number*" onChange={handleChange} type="text" formData={formData} name="phone_number" />
            <FormField label="Email*" onChange={handleChange} type="text" formData={formData} name="email" />
            <FormField label="Street Address*" onChange={handleChange} type="text" formData={formData} name="street_address" />
            <FormField label="City*" onChange={handleChange} type="text" formData={formData} name="city" />
            <DoubleField>
                <FormField label="Province*" onChange={handleChange} type="text" formData={formData} name="province" />
                <FormField label="Postal Code*" onChange={handleChange} type="text" formData={formData} name="postal_code" />
            </DoubleField>
            <FormField label="Preferred Move-In Date*" onChange={handleChange} type="text" formData={formData} name="move_in_date" />
            <FormField label="
                Select Optional Promotion:">
                <select onChange={handleChange} value={formData?formData.promotion_select:"0"} name="promotion_select">
                    <option value="0" default>None</option>
                    <option value="1">Free 4 Weeks + 20% Student Special!</option>
                </select>
            </FormField>
            <FormField label="Add a Comment or Special Request:" onChange={handleChange} type="text" formData={formData} name="note" />
        </PersonalDetailsForm>
    )
}

export default PersonalDetails