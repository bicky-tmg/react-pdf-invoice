import { StyleSheet } from "@react-pdf/renderer";

export default StyleSheet.create({
  page: {
    flexDirection: "row",
    backgroundColor: "#E4E4E4",
  },
  section: {
    margin: 10,
    padding: 10,
    flexGrow: 1,
  },
  invoiceRow: {
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap",
    width: "100%",
  },
  invoiceColumn: {
    flex: "33.33%",
  },
  textAlignRight: {
    textAlign: "right",
  },
  fontWeightBold: {
    fontWeight: "bold",
  },
  textUppercase: {
    textTransform: "uppercase",
  },
  headingPrimary: {
    fontSize: "2rem",
    margin: 0,
  },
  marginBottom: {
    marginBottom: "10px",
  },
});
