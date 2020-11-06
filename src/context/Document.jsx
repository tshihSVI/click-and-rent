import React from "react"

const DocumentContext = React.createContext({
    data: {},
    setData: () => {},
    reference_id: undefined,
    setReference_id: () => {},
    brand_id: undefined,
    setBrand_id: () => {},
});

export default DocumentContext