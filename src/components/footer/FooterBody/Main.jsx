import React from "react";
import styled from "styled-components";
import BrandLogo from "../../common/BrandLogo";
import ContactInformation from "./ContactInformation"
import Links from "./Links/Main";

const FooterBanner = styled.div`
    width:100%;
    background-color:aqua;
    padding:4em;

    display: grid;
    grid-template-columns: 70% 30%;
    grid-template-rows: 1fr 1fr;
`;

const Main = () => (
    <FooterBanner>
        <BrandLogo/>
        <ContactInformation/>
        <Links/>
        <h1>Social Media</h1>
    </FooterBanner>
)

export default Main