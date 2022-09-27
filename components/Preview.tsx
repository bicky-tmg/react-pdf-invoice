import { PDFDownloadLink, PDFViewer } from "@react-pdf/renderer";
import Invoice from "./Invoice";

const Preview = () => {
  return (
    <div style={{ flexGrow: 1 }}>
      <PDFViewer showToolbar={false} style={{ width: "100%", height: "95%" }}>
        <Invoice />
      </PDFViewer>
      <PDFDownloadLink document={<Invoice />} fileName="invoice.pdf">
        {({ loading }) => (loading ? "Loading document..." : "Download now!")}
      </PDFDownloadLink>
    </div>
  );
};

export default Preview;
