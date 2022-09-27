import { View, Image, Text } from "@react-pdf/renderer";
import styles from "../styles";

const InvoiceHead = () => {
  return (
    <View>
      <View style={styles.textAlignRight}>
        <Text style={{ ...styles.fontWeightBold, ...styles.textUppercase }}>
          Invoice
        </Text>
        <Text style={styles.textUppercase}>inv001</Text>
      </View>
      <View style={styles.invoiceRow}>
        <View style={styles.invoiceColumn}>
          <Image
            style={{
              width: "200px",
              height: "150px",
            }}
            src="./react-pdf.png"
          />
        </View>
        <View style={styles.invoiceColumn}>
          <Text style={styles.headingPrimary}>ABC Company Pvt. Ltd.</Text>
          <Text style={styles.fontWeightBold}>
            Business Number <Text>123456789 RT</Text>
          </Text>
          <Text>950 Main Street</Text>
          <Text>Worcester, MA</Text>
          <Text>01610</Text>
          <Text>9812345678</Text>
          <Text>ABCCompany@gmail.com</Text>
        </View>
        <View style={styles.invoiceColumn}>
          <View style={{ ...styles.marginBottom, ...styles.textAlignRight }}>
            <Text style={{ ...styles.fontWeightBold, ...styles.textUppercase }}>
              DATE
            </Text>
            <Text>Sep 27, 2022</Text>
          </View>
          <View style={{ ...styles.marginBottom, ...styles.textAlignRight }}>
            <Text style={{ ...styles.fontWeightBold, ...styles.textUppercase }}>
              Due
            </Text>
            <Text>On Receipt</Text>
          </View>
          <View style={{ ...styles.marginBottom, ...styles.textAlignRight }}>
            <Text style={{ ...styles.fontWeightBold, ...styles.textUppercase }}>
              Balance Due
            </Text>
            <Text>NPR Rs170.00</Text>
          </View>
        </View>
      </View>
    </View>
  );
};

export default InvoiceHead;
