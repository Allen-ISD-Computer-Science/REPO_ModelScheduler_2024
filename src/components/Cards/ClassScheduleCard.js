import { Card } from "@nextui-org/card";
import { Chip } from "@nextui-org/chip";

import numberToOrdinal from "@/utils/numberToOrdinal";
import bellSchedule from "@/utils/bellSchedule";
import ClassLocationChipColors from "@/constants/ClassLocationChipColors";

export default function ClassScheduleCard({ course, period, ...props }) {
  return (
    <>
      <Card {...props}>
        <div className="flex flex-col h-full rounded-lg">
          {/* Course Details */}
          {course ? (
            <div className="flex flex-col items-center justify-center h-full">
              <p className="text-center font-bold">{course.courseName}</p>
              <div className="flex flex-row items-center justify-center">
                <Chip size="sm" color={ClassLocationChipColors[course.location]} variant="flat" className="mr-1">
                  {course.location}
                </Chip>
                • {bellSchedule(period, course.location)}
              </div>
            </div>
          ) : (
            <div className="flex flex-col items-center justify-center h-full">
              <p className="text-center font-bold">{numberToOrdinal(period)} Period</p>
            </div>
          )}
        </div>
      </Card>
    </>
  );
}

import PropTypes from "prop-types";

ClassScheduleCard.propTypes = {
  course: PropTypes.shape({
    id: PropTypes.number.isRequired,
    courseName: PropTypes.string.isRequired,
    courseCode: PropTypes.string.isRequired,
    term: PropTypes.string.isRequired,
    department: PropTypes.string.isRequired,
    periods: PropTypes.arrayOf(PropTypes.number).isRequired,
    doubleBlockPeriod: PropTypes.number,
    location: PropTypes.string.isRequired,
  }),
  period: PropTypes.number.isRequired,
};
