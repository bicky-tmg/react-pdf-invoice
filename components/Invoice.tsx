import { Document, Page } from "@react-pdf/renderer";
import styles from "../styles";
import InvoiceHead from "./InvoiceHead";

const Invoice = () => {
  return (
    <Document>
      <Page size="A4" style={styles.page}>
        <InvoiceHead />
      </Page>
    </Document>
  );
};

export default Invoice;
