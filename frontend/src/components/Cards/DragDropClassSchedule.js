import { Card } from "@nextui-org/card";

import DroppableClassScheduleCard from "@/components/Cards/DroppableClassScheduleCard";

export default function DragDropClassSchedule({ semester, classes, unavailablePeriods, conflictPeriods }) {
  const getColorFromClassAvailability = (period) => {
    if (!unavailablePeriods[semester] && !conflictPeriods[semester]) return;
    else if (unavailablePeriods[semester]?.includes(period)) return "bg-zinc-950/10";
    else if (conflictPeriods[semester]?.includes(period)) return "bg-red-500/10";
  };

  const disableDragByPeriod = (period) => {
    if (!unavailablePeriods[semester] && !conflictPeriods[semester]) return false;
    else if (unavailablePeriods[semester]?.includes(period)) return true;
    else if (conflictPeriods[semester]?.includes(period)) return true;
    else return false;
  };

  return (
    <>
      <div className="h-full grid grid-cols-2 grid-rows-12 gap-2">
        {/* Semester Header */}
        <Card className="col-span-2 row-span-1 border-2 border-neutral-600 bg-default-200/30 text-center font-bold justify-center">
          {semester} Semester
        </Card>

        {/* A/B Day Header */}
        <Card className="col-span-1 row-span-1 bg-red-500 text-center font-bold justify-center">A Day</Card>
        <Card className="col-span-1 row-span-1 bg-blue-600 text-center font-bold justify-center">B Day</Card>

        {/* 1st Period */}
        <DroppableClassScheduleCard
          droppableId={`droppable-schedule-1-${semester.toLowerCase()}`}
          semester={semester}
          course={classes["1"]}
          period={1}
          disableDrag={disableDragByPeriod(1)}
          className={`bg-default-300/25 col-span-2 row-span-2 ${getColorFromClassAvailability(1) || ""}`}
        />

        {/* 2nd Period */}
        <DroppableClassScheduleCard
          droppableId={`droppable-schedule-2-${semester.toLowerCase()}`}
          semester={semester}
          course={classes["2"]}
          period={2}
          disableDrag={disableDragByPeriod(2)}
          className={`bg-default-300/25 col-span-1 row-span-2 ${getColorFromClassAvailability(2) || ""}`}
        />

        {/* 5th Period */}
        <DroppableClassScheduleCard
          droppableId={`droppable-schedule-5-${semester.toLowerCase()}`}
          semester={semester}
          course={classes["5"]}
          period={5}
          disableDrag={disableDragByPeriod(5)}
          className={`bg-default-300/25 col-span-1 row-span-2 ${getColorFromClassAvailability(5) || ""}`}
        />

        {/* 3rd Period */}
        <DroppableClassScheduleCard
          droppableId={`droppable-schedule-3-${semester.toLowerCase()}`}
          semester={semester}
          course={classes["3"]}
          period={3}
          disableDrag={disableDragByPeriod(3)}
          className={`bg-default-300/25 col-span-1 row-span-2 ${getColorFromClassAvailability(3) || ""}`}
        />

        {/* 6th Period */}
        <DroppableClassScheduleCard
          droppableId={`droppable-schedule-6-${semester.toLowerCase()}`}
          semester={semester}
          course={classes["6"]}
          period={6}
          disableDrag={disableDragByPeriod(6)}
          className={`bg-default-300/25 col-span-1 row-span-2 ${getColorFromClassAvailability(6) || ""}`}
        />

        {/* 4th Period */}
        <DroppableClassScheduleCard
          droppableId={`droppable-schedule-4-${semester.toLowerCase()}`}
          semester={semester}
          course={classes["4"]}
          period={4}
          disableDrag={disableDragByPeriod(4)}
          className={`bg-default-300/25 col-span-1 row-span-2 ${getColorFromClassAvailability(4) || ""}`}
        />

        {/* 7th Period */}
        <DroppableClassScheduleCard
          droppableId={`droppable-schedule-7-${semester.toLowerCase()}`}
          semester={semester}
          course={classes["7"]}
          period={7}
          disableDrag={disableDragByPeriod(7)}
          className={`bg-default-300/25 col-span-1 row-span-2 ${getColorFromClassAvailability(7) || ""}`}
        />

        {/* 8th Period */}
        <DroppableClassScheduleCard
          droppableId={`droppable-schedule-8-${semester.toLowerCase()}`}
          semester={semester}
          course={classes["8"]}
          period={8}
          disableDrag={disableDragByPeriod(8)}
          className={`bg-default-300/25 col-span-2 row-span-2 ${getColorFromClassAvailability(8) || ""}`}
        />
      </div>
    </>
  );
}

import PropTypes from "prop-types";

DragDropClassSchedule.propTypes = {
  semester: PropTypes.string.isRequired,
  classes: PropTypes.objectOf(
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
  unavailablePeriods: PropTypes.shape({
    [PropTypes.string]: PropTypes.arrayOf(PropTypes.number),
  }).isRequired,
  conflictPeriods: PropTypes.shape({
    [PropTypes.string]: PropTypes.arrayOf(PropTypes.number),
  }).isRequired,
  disableDrag: PropTypes.bool,
};
