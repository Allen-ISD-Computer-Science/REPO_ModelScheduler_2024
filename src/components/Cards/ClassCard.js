import { Card, CardBody } from "@nextui-org/card";
import { Chip } from "@nextui-org/chip";

import numberToOrdinal from "@/utils/numberToOrdinal";
import ClassLocationChipColors from "@/constants/ClassLocationChipColors";
import { FireSVGRating } from "@/components/Images";

const ClassCard = ({
  courseName,
  courseCode,
  periods,
  location,
  totalSeats,
  numStudents,
  compact = false,
  ...props
}) => {
  const percentFull = Number((numStudents / totalSeats).toFixed(2));

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

          {/* Rating on how competitive a class is */}
          <div className="flex flex-row justify-start">
            <FireSVGRating percentage={percentFull} className="flex p-0.5 bg-stone-700/50 rounded" />
          </div>
        </CardBody>
      </Card>
    </>
  );
};

export default ClassCard;

import PropTypes from "prop-types";

ClassCard.propTypes = {
  courseName: PropTypes.string.isRequired,
  courseCode: PropTypes.string.isRequired,
  periods: PropTypes.arrayOf(PropTypes.number).isRequired,
  location: PropTypes.string.isRequired,
  totalSeats: PropTypes.number.isRequired,
  numStudents: PropTypes.number.isRequired,
  compact: PropTypes.bool,
};
