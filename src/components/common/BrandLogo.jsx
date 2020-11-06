import React from "react";
import styled from "styled-components";

const BrandLogo = ({url, logo, name}) => {

    return (
        <a href={url} target="_blank" ><img src={logo} alt={name} className="logo" /></a>
    );
    
}

export default BrandLogo