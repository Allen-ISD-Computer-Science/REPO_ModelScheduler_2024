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
              <div className="flex h-full flex-col items-center justify-center p-8">
                <p className="animate-fade-down text-center text-2xl font-bold text-neutral-200 animate-ease-in-out">
                  No classes available
                </p>
                <p className="text-md animate-fade-up text-center text-neutral-400 animate-delay-200">
                  Drag and drop classes here
                </p>
              </div>
            ) : (
              classes.map((classObj, index) => (
                <Draggable key={classObj.id} draggableId={`draggable-class-${classObj.id}-available`} index={index}>
                  {(provided) => (
                    <div
                      ref={provided.innerRef}
                      key={classObj.id}
                      {...provided.draggableProps}
                      {...provided.dragHandleProps}
                    >
                      <ClassCard
                        key={classObj.id}
                        compact
                        courseName={classObj.courseName}
                        courseCode={classObj.courseCode}
                        periods={classObj.periods}
                        term={classObj.term}
                        location={classObj.location}
                        className="mx-2 mt-2 grow animate-fade overflow-visible bg-default-200/25 animate-duration-200"
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
