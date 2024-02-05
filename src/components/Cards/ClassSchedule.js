import { Card } from "@nextui-org/card";

import ClassScheduleCard from "@/components/Cards/ClassScheduleCard";

export default function ClassSchedule({ semester, classes }) {
  return (
    <>
      <div className="h-full grid grid-cols-2 grid-rows-12 gap-2">
        {/* Semester Header */}
        <Card className="col-span-2 row-span-1 border-2 border-neutral-400 text-center font-bold flex items-center justify-center">
          {semester} Semester
        </Card>

        {/* A/B Day Header */}
        <Card className="col-span-1 row-span-1 bg-red-500 text-center font-bold flex items-center justify-center">
          A Day
        </Card>
        <Card className="col-span-1 row-span-1 bg-blue-600 text-center font-bold flex items-center justify-center">
          B Day
        </Card>

        {/* 1st Period */}
        <ClassScheduleCard course={classes?.["1"]} period={1} className="col-span-2 row-span-2" />

        {/* 2nd Period */}
        <ClassScheduleCard course={classes?.["2"]} period={2} className="col-span-1 row-span-2" />

        {/* 5th Period */}
        <ClassScheduleCard course={classes?.["5"]} period={5} className="col-span-1 row-span-2" />

        {/* 3rd Period */}
        <ClassScheduleCard course={classes?.["3"]} period={3} className="col-span-1 row-span-2" />

        {/* 6th Period */}
        <ClassScheduleCard course={classes?.["6"]} period={6} className="col-span-1 row-span-2" />

        {/* 4th Period */}
        <ClassScheduleCard course={classes?.["4"]} period={4} className="col-span-1 row-span-2" />

        {/* 7th Period */}
        <ClassScheduleCard course={classes?.["7"]} period={7} className="col-span-1 row-span-2" />

        {/* 8th Period */}
        <ClassScheduleCard course={classes?.["8"]} period={8} className="col-span-2 row-span-2" />
      </div>
    </>
  );
}

import PropTypes from "prop-types";

ClassSchedule.propTypes = {
  semester: PropTypes.string.isRequired,
  classes: PropTypes.arrayOf(
    PropTypes.shape({
      courseName: PropTypes.string.isRequired,
      courseCode: PropTypes.string.isRequired,
      term: PropTypes.string.isRequired,
      department: PropTypes.string.isRequired,
      periods: PropTypes.arrayOf(PropTypes.number).isRequired,
      doubleBlockPeriod: PropTypes.number,
      location: PropTypes.string.isRequired,
    })
  ).isRequired,
};
