const formLayout = {
    reservation: {
        personal_details: {
            first_name: "",
            last_name: "",
            email: "",
            phone_number: "",
            street_address: "",
            city: "",
            move_in_date: "",
            postal_code: "",
            province: "",
            promotion_select: 0,
            note: "",
        },
        drivers_license: {
            number: "",
            date_of_birth: "",
            expiry: "",
            province: "",
        }
    },
    additional_contacts: {
        additional_contact: {
            last_name: "",
            first_name: "",
            email: "",
            phone_number: "",
            relationship: "",
        },
        lein_holders: {
            first_name: "",
            last_name: "",
            phone_number: "",
            city: "",
            province: "",
            postal_code: "",
        }
    },
    payment: {
        card: {
            name: "",
            number: "",
            expiry: "",
            postal: "",
        },
        billing: {
            first_name: "",
            last_name: "",
            country: "",
            email: "",
            street_address: "",
            city: "",
            phone_number: "",
            postal_code: "",
            province: "",
        }
    },
    terms_and_conditions: {
        signature: "",
        trace:{
        },
    },
}

export default formLayout