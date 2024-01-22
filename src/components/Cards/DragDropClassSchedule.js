import { useState, useEffect } from "react";
import { Card } from "@nextui-org/card";

import { DroppableClassScheduleCard } from "@/components/Cards";

const DragDropClassSchedule = ({ semester, classes, disableDrag = false }) => {
  const [showAHSTimes, setShowAHSTimes] = useState(true);

  useEffect(() => {
    // Toggle showing AHS/STEAM times every 5 seconds
    const interval = setInterval(() => {
      setShowAHSTimes((prevShowAHSTimes) => !prevShowAHSTimes);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

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
        <DroppableClassScheduleCard
          droppableId={`droppable-schedule-1-${semester.toLowerCase()}`}
          course={classes["1"]}
          period={1}
          showAHSTimes={showAHSTimes}
          isDropDisabled={disableDrag}
          className="col-span-2 row-span-2"
        />

        {/* 2nd Period */}
        <DroppableClassScheduleCard
          droppableId={`droppable-schedule-2-${semester.toLowerCase()}`}
          course={classes["2"]}
          period={2}
          showAHSTimes={showAHSTimes}
          isDropDisabled={disableDrag}
          className="col-span-1 row-span-2"
        />

        {/* 3rd Period */}
        <DroppableClassScheduleCard
          droppableId={`droppable-schedule-3-${semester.toLowerCase()}`}
          course={classes["3"]}
          period={3}
          showAHSTimes={showAHSTimes}
          isDropDisabled={disableDrag}
          className="col-span-1 row-span-2"
        />

        {/* 4th Period */}
        <DroppableClassScheduleCard
          droppableId={`droppable-schedule-4-${semester.toLowerCase()}`}
          course={classes["4"]}
          period={4}
          showAHSTimes={showAHSTimes}
          isDropDisabled={disableDrag}
          className="col-span-1 row-span-2"
        />

        {/* 5th Period */}
        <DroppableClassScheduleCard
          droppableId={`droppable-schedule-5-${semester.toLowerCase()}`}
          course={classes["5"]}
          period={5}
          showAHSTimes={showAHSTimes}
          isDropDisabled={disableDrag}
          className="col-span-1 row-span-2"
        />

        {/* 6th Period */}
        <DroppableClassScheduleCard
          droppableId={`droppable-schedule-6-${semester.toLowerCase()}`}
          course={classes["6"]}
          period={6}
          showAHSTimes={showAHSTimes}
          isDropDisabled={disableDrag}
          className="col-span-1 row-span-2"
        />

        {/* 7th Period */}
        <DroppableClassScheduleCard
          droppableId={`droppable-schedule-7-${semester.toLowerCase()}`}
          course={classes["7"]}
          period={7}
          showAHSTimes={showAHSTimes}
          isDropDisabled={disableDrag}
          className="col-span-1 row-span-2"
        />

        {/* 8th Period */}
        <DroppableClassScheduleCard
          droppableId={`droppable-schedule-8-${semester.toLowerCase()}`}
          course={classes["8"]}
          period={8}
          showAHSTimes={showAHSTimes}
          isDropDisabled={disableDrag}
          className="col-span-2 row-span-2"
        />
      </div>
    </>
  );
};

export default DragDropClassSchedule;

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
      studentSelected: PropTypes.shape({
        [PropTypes.number]: PropTypes.string,
      }).isRequired,
      studentMax: PropTypes.shape({
        [PropTypes.number]: PropTypes.string,
      }).isRequired,
    })
  ).isRequired,
  disableDrag: PropTypes.bool,
};
