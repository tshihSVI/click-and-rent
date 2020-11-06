import React from 'react';
import { Page, Text, View, Document, StyleSheet } from '@react-pdf/renderer';

// Create Document Component
const Contract = ({data,reference_id}) => {
  return (
    <Document>
      <Page size="A4">
        <Text>Contract Number {reference_id}</Text>
        <Text>{JSON.stringify(data)}</Text>
      </Page>
    </Document>
  );
}


export default Contract