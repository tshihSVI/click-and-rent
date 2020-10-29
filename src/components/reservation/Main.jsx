import React from "react";
import { useHistory } from "react-router";

import FormSection from "./FormSection"
import ReservationInformation from "./reservationInformation/Main"
import AdditionalContacts from "./additionalContacts/Main"
import PaymentInformation from "./paymentInformation/Main"
import SignContract from "./signContract/Main"

import DocumentContext from '~/src/context/Document'
import postCompletedContract from '~/src/REST/postCompletedContract'

const ReservationForm = () => {
    const {data:formData, setData:setFormData, setReference_id} = React.useContext(DocumentContext)

    const history = useHistory();
    const handleSubmit = (e) => {
        e.preventDefault();
        postCompletedContract(formData).then(id => {
            if (id != undefined){
                setReference_id(id)
                history.push("/signed")
            }
        })
    }

    const handleChange = (key,value) => {
        setFormData({...formData,[key]:value})
    }

    return (
        <form onSubmit={handleSubmit}>
            <h1>Rent Online</h1>
            <FormSection
                section_title="Reservation Information" 
                section_info="Reserve your unit today with just a few peices of information.">
                <ReservationInformation onChange={handleChange} data={formData}/>
            </FormSection>
            <FormSection
                section_title="Additional Contacts"
                section_info="Let us know who to contact in case we can't reach you">
                <AdditionalContacts onChange={handleChange} data={formData}/>
            </FormSection>
            <FormSection section_title="Payment Information">
                <PaymentInformation onChange={handleChange} data={formData}/>
            </FormSection>
            <FormSection
                section_title="Complete Your Move-In">
                <SignContract onChange={handleChange} data={formData}/>
            </FormSection>
        </form>
    )
}

export default ReservationForm