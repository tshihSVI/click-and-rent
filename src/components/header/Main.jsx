import React, {useState} from "react";
import styled from "styled-components";
import StepsBar from "./StepsBar";

const HeaderBanner = styled.div`
    width:100%;
    height:10vw;
    background-color:aqua;
    padding:4em;
`;

const Header = () => {
    const [value, setValue] = useState(2);
    return (
        <React.Fragment>
            <HeaderBanner>This is a header</HeaderBanner>
            <StepsBar current={value} onChange={setValue}></StepsBar>
        </React.Fragment>
    );
}

export default Header