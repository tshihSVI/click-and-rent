import React from "react";
import styled from "styled-components";
import brands from "~/src/static/header/brands";
import BrandLogo from "../common/BrandLogo";

const OurBrandSection = styled.section`
    text-align: center;
    padding-bottom:20px;
    h2 {
        width: 100%;
        text-align: center;
        line-height: 0.1em;
        height: 40px;
        margin: 40px 0 0 0;
        font-size: 1.25em;
        font-weight: normal;
    }
    h2 span {
        border-left: 25px solid white;
        border-right: 25px solid white;
        background: white;
        padding: 0 10px;
        color: #666;
        text-transform: uppercase;
    }
    h2:before {
        display: block;
        height:1px;
        content: '';
        background: #666;
    }
    
`;
const Brands = styled.div`
    a {
        display: inline-block;
        height: 35px;
        margin: 15px;
    }
    .logo {
        max-height: 100%;
        filter: grayscale(100%);
        opacity: 0.4;
        transition: 0.3s linear all;
    }

    .logo:hover {
        opacity: 1;
        filter: grayscale(0%);
    }
    
`;
const OurBrands = () => {
    const Columns = brands.map(({url, logo, name}, index) =>(
        <BrandLogo key={index} url={url} logo={logo} name={name} />
    ))
    return (
        <OurBrandSection className="container">
            <h2><span>Our Brands</span></h2>
            <Brands>{Columns}</Brands>
        </OurBrandSection>
    )
}
   

export default OurBrands