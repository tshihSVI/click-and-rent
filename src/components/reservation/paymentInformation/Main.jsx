import React from "react";
import BillingDetails from "./BillingDetails";
import CardInformation from "./CardInformation";

const Main = ({onChange,data}) => {
    const formData = data? data["payment"]:{};
    const handleChange = (key,value) => {
        onChange("payment",{...formData,[key]:value})
    };


    return (
        <React.Fragment>
            <CardInformation onChange={handleChange} data={formData}/>
            <hr/>
            <BillingDetails onChange={handleChange} data={formData}/>
        </React.Fragment>
    )
}

export default Main