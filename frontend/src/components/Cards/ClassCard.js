import { Card, CardBody } from "@nextui-org/card";
import { Chip } from "@nextui-org/chip";
import { Icon } from "@iconify/react";

import numberToOrdinal from "@/utils/numberToOrdinal";
import ClassLocationChipIcons from "@/constants/ClassLocationChipIcons";
import ClassLocationChipColors from "@/constants/ClassLocationChipColors";
import SemesterChipColors from "@/constants/SemesterChipColors";

export default function ClassCard({ courseName, courseCode, periods, term, location, compact = false, ...props }) {
  return (
    <>
      <Card disableRipple {...props}>
        <CardBody>
          <p className="mb-1 text-2xl font-bold">{courseName}</p>

          <p className="absolute right-1 top-1 text-sm font-bold text-neutral-500">{courseCode}</p>

          {!compact && (
            <div className="flex flex-wrap items-center">
              {/* Location */}
              <Chip
                size="md"
                radius="sm"
                variant="bordered"
                color={ClassLocationChipColors[location]}
                startContent={<Icon icon={ClassLocationChipIcons[location]} className="ml-2" />}
                className="mb-2 mr-2"
              >
                {location}
              </Chip>

              {/* Semesters */}
              <Chip
                radius="sm"
                variant="bordered"
                className="mb-2 mr-2"
                classNames={{
                  base: SemesterChipColors[term],
                }}
              >
                {term}
              </Chip>

              {/* Periods */}
              {periods.map((period, index) => (
                <Chip key={index} color="default" radius="sm" variant="bordered" className="mb-2 mr-2">
                  {numberToOrdinal(period)}
                </Chip>
              ))}
            </div>
          )}
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
  term: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  compact: PropTypes.bool,
};
