import React from "react";
import styled from "styled-components";
import BrandLogo from "../../common/BrandLogo";
import ContactInformation from "./ContactInformation"
import Links from "./Links/Main";
import DocumentContext from '~/src/context/Document';
import brands from "~/src/static/header/brands";

const FooterBanner = styled.footer`
    width:100%;
    background: linear-gradient(45deg, #032663, #031332);
    padding:4em;
    margin-top:25px;
    display: grid;
    grid-template-columns: 70% 30%;
    grid-template-rows: 1fr 1fr;
    .logo {
        height:70px;
    }
    color:white;
`;

const Main = () => {

    const {brand_id} = React.useContext(DocumentContext);
    const brandInfo = brand_id > 0 && brand_id < 5 ? brands[parseInt(brand_id) -1] : brands[0];
    return (
        <FooterBanner>
            <BrandLogo url={brandInfo.url} logo={brandInfo.logoFooter} name={brandInfo.name} />
            <ContactInformation/>
            <Links/>
            <h1>Social Media</h1>
        </FooterBanner>
    )

}

export default Main