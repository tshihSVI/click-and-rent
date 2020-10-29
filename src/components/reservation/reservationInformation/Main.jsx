import React from "react";
import DriversLicense from "./DriversLicense"
import PersonalDetails from "./PersonalDetails";

const Main = ({onChange,data}) => {
    const formData = data? data["reservation"]:{};
    const handleChange = (key,value) => {
        onChange("reservation",{...formData,[key]:value})
    };

    return (
        <React.Fragment>
            <PersonalDetails onChange={handleChange} data={formData}/>
            <hr></hr>
            <DriversLicense onChange={handleChange} data={formData}/>
        </React.Fragment>
    )
}

export default Main