import { Fragment } from "react";
import { Image, Text, View, Page, Document, StyleSheet, Font } from "@react-pdf/renderer"; // TODO: Lazy load this

Font.register({
  family: "ChakraPetch",
  src: "/fonts/ChakraPetch-Bold.ttf",
});

export default function SchedulePDF({ classes }) {
  const styles = StyleSheet.create({
    page: {
      flexDirection: "column",
      alignItems: "center",
      marginTop: 50,
    },
    titleContainer: {
      flexDirection: "row",
      justifyContent: "center",
      alignItems: "center",
    },
    image: {
      width: 56,
    },
    title: {
      fontSize: 24,
      fontWeight: "bold",
      fontFamily: "ChakraPetch",
      textAlign: "center",
      marginLeft: 10,
    },
    theader: {
      marginTop: 20,
      fontSize: 10,
      fontStyle: "bold",
      paddingTop: 4,
      paddingLeft: 7,
      flex: 1,
      height: 20,
      backgroundColor: "#DEDEDE",
      borderColor: "#808080",
      borderBottomWidth: 2,
    },
    tbody: {
      fontSize: 9,
      paddingTop: 4,
      paddingLeft: 7,
      flex: 1,
      borderColor: "#C0C0C0",
      borderBottomWidth: 1,
    },
  });

  const Title = () => (
    <View style={styles.titleContainer}>
      <Image style={styles.image} src="/Logo.webp" />
      <Text style={styles.title}>Model Scheduler</Text>
    </View>
  );

  const TableHead = () => (
    <View style={{ width: "80%", flexDirection: "row", justifySelf: "center", marginTop: 10 }}>
      <View style={[styles.theader, { flex: 2 }]}>
        <Text>Class Code</Text>
      </View>
      <View style={[styles.theader, { flex: 3 }]}>
        <Text>Class Name</Text>
      </View>
      <View style={[styles.theader, { flex: 1 }]}>
        <Text>Period</Text>
      </View>
      <View style={[styles.theader, { flex: 1 }]}>
        <Text>Term</Text>
      </View>
    </View>
  );

  const TableBody = () =>
    classes.map((course) => (
      <Fragment key={course.id}>
        <View style={{ width: "80%", flexDirection: "row", justifySelf: "center" }}>
          <View style={[styles.tbody, { flex: 2 }]}>
            <Text>{course.courseCode}</Text>
          </View>
          <View style={[styles.tbody, { flex: 3 }]}>
            <Text>{course.courseName}</Text>
          </View>
          <View style={[styles.tbody, { flex: 1 }]}>
            <Text>{course.periods}</Text>
          </View>
          <View style={[styles.tbody, { flex: 1 }]}>
            <Text>{course.term}</Text>
          </View>
        </View>
      </Fragment>
    ));

  return (
    <Document>
      <Page size="A4" style={styles.page}>
        <Title title="Model Scheduler" />
        <TableHead />
        <TableBody />
      </Page>
    </Document>
  );
}

import PropTypes from "prop-types";

SchedulePDF.propTypes = {
  classes: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      courseCode: PropTypes.string,
      courseName: PropTypes.string,
      periods: PropTypes.arrayOf(PropTypes.number),
      term: PropTypes.string,
    })
  ).isRequired,
};
