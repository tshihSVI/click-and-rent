import React from "react"

const DocumentContext = React.createContext({
    data: {},
    setData: () => {},
    reference_id: undefined,
    setReference_id: () => {},
});

export default DocumentContext