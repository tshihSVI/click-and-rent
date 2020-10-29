import React from "react";
import AddtionalContact from "./AddtionalContact"
import LeinHolders from "./LeinHolders";

const Main = ({onChange,data}) => {
    const formData = data? data["additional_contacts"]:{};
    const handleChange = (key,value) => {
        onChange("additional_contacts",{...formData,[key]:value})
    };


    return (
        <React.Fragment>
            <AddtionalContact onChange={handleChange} data={formData}/>
            <hr/>
            <LeinHolders onChange={handleChange} data={formData}/>
        </React.Fragment>
    )
}

export default Main