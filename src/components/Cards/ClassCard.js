import { Card, CardBody } from "@nextui-org/card";
import { Chip } from "@nextui-org/chip";

import numberToOrdinal from "@/utils/numberToOrdinal";
import ClassLocationChipColors from "@/constants/ClassLocationChipColors";

export default function ClassCard({ courseName, courseCode, periods, location, compact = false, ...props }) {
  return (
    <>
      <Card disableRipple {...props}>
        <CardBody>
          <p className="text-2xl font-bold mb-1">{courseName}</p>

          <p className="absolute top-2 right-2 text-sm font-bold text-neutral-500">{courseCode}</p>

          <div className="flex items-center flex-wrap">
            {/* Location */}
            {!compact && (
              <Chip color={ClassLocationChipColors[location]} radius="sm" variant="bordered" className="mr-2 mb-2">
                {location}
              </Chip>
            )}

            {/* Periods */}
            {!compact &&
              periods.map((period, index) => (
                <Chip key={index} color="default" radius="sm" variant="bordered" className="mr-2 mb-2">
                  {numberToOrdinal(period)}
                </Chip>
              ))}
          </div>
        </CardBody>
      </Card>
    </>
  );
}

import PropTypes from "prop-types";

ClassCard.propTypes = {
  courseName: PropTypes.string.isRequired,
  courseCode: PropTypes.string.isRequired,
  periods: PropTypes.arrayOf(PropTypes.number).isRequired,
  location: PropTypes.string.isRequired,
  compact: PropTypes.bool,
};
