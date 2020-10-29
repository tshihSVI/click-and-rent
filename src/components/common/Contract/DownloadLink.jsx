import React from "react"
import {PDFDownloadLink} from '@react-pdf/renderer';

import Contract from "./Main"
import DocumentContext from "~/src/context/Document"

const DownloadLink = () =>{
    const {data,reference_id} = React.useContext(DocumentContext)

    var Document = <Contract data={data} reference_id={reference_id}/>
    return (
        <PDFDownloadLink
            document={Document}
            fileName="example.pdf">
            Download Contract
        </PDFDownloadLink>
    )
}

export default DownloadLink