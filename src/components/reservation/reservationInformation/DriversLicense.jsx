import React from "react";
import styled from "styled-components";
import FormField from "~/src/components/common/FormField"

const LicenseForm = styled.div`
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: auto;
`;

const DriversLicense = ({onChange,data}) => {
    const formData = data? data["drivers_license"]:{};
    const handleChange = event => {
      const {value,name} = event.target;
      onChange("drivers_license",{...formData,[name]:value})
    };

    return (
        <LicenseForm>
            <FormField label="Driver's License Number:" type="text" onChange={handleChange} formData={formData} name="number" />
            <FormField label="Date of Birth:"           type="date" onChange={handleChange} formData={formData} name="date_of_birth" />
            <FormField label="Experiation Date:"        type="date" onChange={handleChange} formData={formData} name="expiry" />
            <FormField label="Province:"                type="text" onChange={handleChange} formData={formData} name="province" />
        </LicenseForm>
    )
}

export default DriversLicense