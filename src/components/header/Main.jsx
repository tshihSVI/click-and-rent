import React from "react";
import {useLocation} from "react-router-dom";
import styled from "styled-components";

import brands from "~/src/static/header/brands";
import DocumentContext from "~/src/context/Document";
import BrandLogo from "../common/BrandLogo";
import StepsBar from "./StepsBar";

const HeaderBanner = styled.header`
    width:100%;
    padding:20px;
    .logo {
        height:75px;
    }
`;

const getCurrentStep = (current_path) => {
    switch(current_path) {
        case "/":
            return 1
        case "/reservation":
            return 2
        case "/signed":
            return 3
        default:
            return 3
    }
}

const Header = () => {
    const {brand_id} = React.useContext(DocumentContext);
    const brandInfo = brand_id > 0 && brand_id < 5 ? brands[parseInt(brand_id) -1] : brands[0];
    let current_path = useLocation().pathname;
    return (
        <React.Fragment>
            <HeaderBanner className="container">
                <BrandLogo url={brandInfo.url} logo={brandInfo.logo} name={brandInfo.name} />
            </HeaderBanner>
            <StepsBar current_step={getCurrentStep(current_path)}></StepsBar>
        </React.Fragment>
    );
}

export default Header