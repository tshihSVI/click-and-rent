import React from "react";
import styled from "styled-components";
import FormField from "~/src/components/common/FormField"

const BillingDetailsStyle = styled.div`
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

const BillingDetails = ({onChange,data}) => {
    const formData = data? data["billing"]:{};
    const handleChange = event => {
      const {value,name} = event.target;
      onChange("billing",{...formData,[name]:value})
    };

    return (
        <BillingDetailsStyle>
            <FormField label="First Name*"      onChange={handleChange} type="text" formData={formData} name="first_name" />
            <FormField label="Last Name*"       onChange={handleChange} type="text" formData={formData} name="last_name" />
            <FormField label="Country*"         onChange={handleChange} type="text" formData={formData} name="country" />
            <FormField label="Email*"           onChange={handleChange} type="text" formData={formData} name="email" />
            <FormField label="Street Address*"  onChange={handleChange} type="text" formData={formData} name="street_address" />
            <FormField label="City*"            onChange={handleChange} type="text" formData={formData} name="city" />
            <DoubleField>
                <FormField label="Province*"    onChange={handleChange} type="text" formData={formData} name="province" />
                <FormField label="Postal Code*" onChange={handleChange} type="text" formData={formData} name="postal_code"/>
            </DoubleField>
            <FormField label="Phone Number*"    onChange={handleChange} type="text" formData={formData} name="phone_number" />
        </BillingDetailsStyle>
    )
}

export default BillingDetails