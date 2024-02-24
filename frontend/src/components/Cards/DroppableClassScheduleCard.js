import { Card } from "@nextui-org/card";
import { Chip } from "@nextui-org/chip";
import { Droppable, Draggable } from "@hello-pangea/dnd";
import { Icon } from "@iconify/react";

import bellSchedule from "@/utils/bellSchedule";
import numberToOrdinal from "@/utils/numberToOrdinal";
import ClassLocationChipColors from "@/constants/ClassLocationChipColors";
import ClassLocationChipIcons from "@/constants/ClassLocationChipIcons";

export default function DroppableClassScheduleCard({ droppableId, semester, course, period, disableDrag, ...props }) {
  return (
    <>
      <Droppable droppableId={droppableId} isDropDisabled={disableDrag}>
        {(provided, snapshot) => (
          <Card
            ref={provided.innerRef}
            {...props}
            {...provided.droppableProps}
            style={{
              border: snapshot.isDraggingOver && !disableDrag ? "2px dashed #0284c7" : "2px dashed transparent",
              transition: "all 0.2s ease-in-out",
            }}
          >
            {course ? (
              <Draggable draggableId={`draggable-class-${course.id}-scheduled-${semester}-${period}`} index={period}>
                {(provided) => (
                  <div
                    ref={provided.innerRef}
                    className="h-full bg-default-50/20 rounded-lg"
                    {...provided.draggableProps}
                    {...provided.dragHandleProps}
                  >
                    {/* Course Details */}
                    <div className="flex flex-col h-full items-center justify-center">
                      <p className="text-center font-bold mb-1">{course.courseName}</p>
                      <div className="flex flex-row items-center justify-center">
                        <Chip
                          size="md"
                          radius="sm"
                          color={ClassLocationChipColors[course.location]}
                          startContent={<Icon icon={ClassLocationChipIcons[course.location]} className="ml-2" />}
                          variant="bordered"
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
  }),
  period: PropTypes.number.isRequired,
  disableDrag: PropTypes.bool,
};
