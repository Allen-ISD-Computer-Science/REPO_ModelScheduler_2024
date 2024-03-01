import { Button } from "@nextui-org/button";
import { PDFDownloadLink } from "@react-pdf/renderer";
import { Icon } from "@iconify/react";

import SchedulePDF from "@/components/Printables/SchedulePDF";

export default function PDFDownloadButton({ classes }) {
  return (
    <PDFDownloadLink document={<SchedulePDF classes={classes} />} fileName="schedule.pdf">
      {({ loading }) => (
        <Button
          variant="light"
          isLoading={loading}
          startContent={!loading && <Icon icon="ph:download-simple-bold" fontSize="1.25rem" />}
        >
          Download
        </Button>
      )}
    </PDFDownloadLink>
  );
}

import PropTypes from "prop-types";

PDFDownloadButton.propTypes = {
  classes: PropTypes.array.isRequired,
};
