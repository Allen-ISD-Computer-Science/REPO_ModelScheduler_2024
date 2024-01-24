import { Card } from "@nextui-org/card";
import { Droppable, Draggable } from "@hello-pangea/dnd";

import ClassCard from "@/components/Cards/ClassCard";

export default function DroppableClassCardList({ droppableId, classes, ...props }) {
  return (
    <>
      <Droppable droppableId={droppableId}>
        {(provided) => (
          <Card ref={provided.innerRef} {...props} {...provided.droppableProps}>
            {classes.length === 0 ? (
              <div className="flex flex-col h-full justify-center items-center p-8">
                <p className="text-2xl text-center font-bold text-neutral-200 animate-fade-down animate-ease-in-out">
                  No classes added
                </p>
                <p className="text-md text-center text-neutral-400 animate-fade-up animate-delay-200">
                  Go back and add some classes ya dingus
                </p>
              </div>
            ) : (
              classes.map((classObj, index) => (
                <Draggable key={classObj.id} draggableId={`draggable-class-${classObj.id}-available`} index={index}>
                  {(provided) => (
                    <div
                      ref={provided.innerRef}
                      key={classObj.id}
                      className="flex"
                      {...provided.draggableProps}
                      {...provided.dragHandleProps}
                    >
                      <ClassCard
                        key={classObj.id}
                        compact
                        courseName={classObj.courseName}
                        courseCode={classObj.courseCode}
                        periods={classObj.periods}
                        location={classObj.location}
                        totalSeats={Object.values(classObj.studentMax).reduce((sum, num) => sum + num, 0)}
                        numStudents={Object.values(classObj.studentSelected).reduce((sum, num) => sum + num, 0)}
                        className="grow mx-2 mt-2 overflow-visible animate-fade animate-duration-200"
                      />
                    </div>
                  )}
                </Draggable>
              ))
            )}
          </Card>
        )}
      </Droppable>
    </>
  );
}

import PropTypes from "prop-types";

DroppableClassCardList.propTypes = {
  droppableId: PropTypes.string.isRequired,
  classes: PropTypes.arrayOf(PropTypes.object).isRequired,
};
