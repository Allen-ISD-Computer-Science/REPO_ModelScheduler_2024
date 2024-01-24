import { Card } from "@nextui-org/card";
import { Chip } from "@nextui-org/chip";
import { Droppable, Draggable } from "@hello-pangea/dnd";

import bellSchedule from "@/utils/bellSchedule";
import numberToOrdinal from "@/utils/numberToOrdinal";
import ClassLocationChipColors from "@/constants/ClassLocationChipColors";

export default function DroppableClassScheduleCard({
  droppableId,
  semester,
  course,
  period,
  showAHSTimes,
  disableDrag,
  ...props
}) {
  const getColorByPercentFull = (percentFull) => {
    if (percentFull < 0.5) {
      return "success";
    } else if (percentFull < 1.0) {
      return "warning";
    } else {
      return "danger";
    }
  };

  return (
    <>
      <Droppable droppableId={droppableId} isDropDisabled={disableDrag}>
        {(provided, snapshot) => (
          <Card
            ref={provided.innerRef}
            {...props}
            {...provided.droppableProps}
            style={{
              border: snapshot.isDraggingOver && !disableDrag ? "2px dashed #0284c7" : "none",
            }}
          >
            {course ? (
              <Draggable draggableId={`draggable-class-${course.id}-scheduled-${semester}-${period}`} index={period}>
                {(provided) => (
                  <div
                    ref={provided.innerRef}
                    className="flex flex-col h-full bg-neutral-900 rounded-lg"
                    {...provided.draggableProps}
                    {...provided.dragHandleProps}
                  >
                    {/* Top Right Chip */}
                    <Chip
                      size="sm"
                      color={getColorByPercentFull(course.studentSelected[period] / course.studentMax[period])}
                      variant="flat"
                      className="top-2 right-2 absolute"
                    >
                      {course.studentSelected[period]}/{course.studentMax[period]}
                    </Chip>

                    {/* Course Details */}
                    <div className="flex flex-col items-center justify-center h-full">
                      <p className="text-center font-bold mb-1">{course.courseName}</p>
                      <div className="flex flex-row items-center justify-center">
                        <Chip
                          size="sm"
                          color={ClassLocationChipColors[course.location]}
                          variant="flat"
                          className="mr-1"
                        >
                          {course.location}
                        </Chip>
                        • {bellSchedule(period, course.location)}
                      </div>
                    </div>
                  </div>
                )}
              </Draggable>
            ) : (
              <div className="flex flex-col justify-center h-full">
                <p className="text-center text-neutral-300/50 font-bold animate-fade">
                  {numberToOrdinal(period)} Period
                </p>
                <p className="text-center text-neutral-300/50 font-bold animate-fade">
                  {showAHSTimes
                    ? `AHS: ${bellSchedule(period, "AHS")}`
                    : `STEAM: ${bellSchedule(period, "STEAM") || "N/A"}`}
                </p>
              </div>
            )}
          </Card>
        )}
      </Droppable>
    </>
  );
}

import PropTypes from "prop-types";
DroppableClassScheduleCard.propTypes = {
  droppableId: PropTypes.string.isRequired,
  semester: PropTypes.string.isRequired,
  course: PropTypes.shape({
    id: PropTypes.number.isRequired,
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
  }),
  period: PropTypes.number.isRequired,
  showAHSTimes: PropTypes.bool,
  disableDrag: PropTypes.bool,
};
