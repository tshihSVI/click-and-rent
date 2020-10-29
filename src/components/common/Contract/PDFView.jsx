import React from "react"
import {PDFViewer,StyleSheet} from '@react-pdf/renderer'
import Contract from "./Main"
import DocumentContext from "~/src/context/Document"

const style = StyleSheet.create({
    height:"100%",
});

const PDFView = () =>{
    const {data,reference_id} = React.useContext(DocumentContext)

    return (
        <PDFViewer style={style} width="100%" height="200%">
            <Contract data={data} reference_id={reference_id}/>
        </PDFViewer>
    )
}

export default PDFView