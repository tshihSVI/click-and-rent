import React from "react"
import styled from "styled-components"


const CopyrightStyle = styled.h6`
    background-color: red;
    text-align: center;
`;

const Copyright = () => (
    <CopyrightStyle>
        © 2020 Access Storage. All Rights Reserved. | Privacy Policy | Accessibility
    </CopyrightStyle>
)

export default Copyright