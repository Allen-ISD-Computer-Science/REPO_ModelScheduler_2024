import { Card, CardBody } from "@nextui-org/card";
import { Chip } from "@nextui-org/chip";

import numberToOrdinal from "@/utils/numberToOrdinal";
import ClassLocationChipColors from "@/constants/ClassLocationChipColors";
import { FireSVGRating } from "@/components/Images";

/**
 * Renders a card component that displays a class.
 *
 * @component
 * @param {Object} props - The component props.
 * @param {String} props.courseName - The name of the course.
 * @param {String} props.courseCode - The code of the course.
 * @param {Array<number>} props.periods - The periods of the class.
 * @param {String} props.location - The location of the class.
 * @param {Number} props.totalSeats - The total number of seats in the class.
 * @param {Number} props.numStudents - The number of students in the class.
 * @returns {JSX.Element} The rendered class card component.
 */
const ClassCard = ({
  courseName,
  courseCode,
  periods,
  location,
  totalSeats,
  numStudents,
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
            <Chip
              color={ClassLocationChipColors[location]}
              radius="sm"
              variant="bordered"
              className="mr-2 mb-2"
            >
              {location}
            </Chip>

            {/* Periods */}
            {periods.map((period, index) => (
              <Chip
                key={index}
                color="default"
                radius="sm"
                variant="bordered"
                className="mr-2 mb-2"
              >
                {numberToOrdinal(period)}
              </Chip>
            ))}
          </div>

          {/* Rating on how competitive a class is */}
          <div className="flex flex-row justify-start">
            <FireSVGRating
              percentage={percentFull}
              className="flex p-0.5 bg-stone-700/50 rounded"
            />
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
};
