import React from "react";
import { useHistory } from "react-router";
import Accordion from "react-bootstrap/Accordion"
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
        <form onSubmit={handleSubmit} className="container">
            <h1>Rent Online</h1>
            <Accordion defaultActiveKey="0">
                <FormSection section_index="0"
                    section_title="Reservation Information" 
                    section_info="Reserve your unit today with just a few peices of information.">
                    <ReservationInformation onChange={handleChange} data={formData}/>
                </FormSection>
                <FormSection section_index="1"
                    section_title="Additional Contacts"
                    section_info="Let us know who to contact in case we can't reach you">
                    <AdditionalContacts onChange={handleChange} data={formData}/>
                </FormSection>
                <FormSection section_title="Payment Information" section_index="2">
                    <PaymentInformation onChange={handleChange} data={formData}/>
                </FormSection>
                <FormSection section_index="3"
                    section_title="Complete Your Move-In"
                    is_last_section={true}>
                    <SignContract onChange={handleChange} data={formData.terms_and_conditions}/>
                </FormSection>
            </Accordion>
        </form>
    )
}

export default ReservationForm