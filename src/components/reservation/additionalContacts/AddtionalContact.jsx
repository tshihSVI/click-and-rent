import React from "react";
import styled from "styled-components";
import FormField from "~/src/components/common/FormField"

const AddtionalContactStyle = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr 2fr;
    grid-template-rows: auto;
`;

const AddtionalContact = ({onChange,data}) => {
    const formData = data? data["additional_contact"]:{};
    const handleChange = event => {
      const {value,name} = event.target;
      onChange("additional_contact",{...formData,[name]:value})
    };

    return (
        <AddtionalContactStyle>
            <FormField label="First Name*"  onChange={handleChange} type="text" formData={formData} name="first_name" />
            <FormField label="Last Name*"   onChange={handleChange} type="text" formData={formData} name="last_name" />
            <FormField label="Relationship to You*" onChange={handleChange} type="text" formData={formData} name="relationship" />
            <FormField label="Phone Number*"onChange={handleChange} type="text" formData={formData} name="phone_number" />
            <FormField label="Email*"       onChange={handleChange} type="text" formData={formData} name="email" />
        </AddtionalContactStyle>
    )
}

export default AddtionalContact