import { Card } from "@nextui-org/card";
import { DragDropContext, Droppable, Draggable } from "@hello-pangea/dnd";

import { ClassCard } from "@/components/Cards";

/**
 * Renders a card component that displays a list of classes.
 *
 * @component
 * @param {Object} props - The component props.
 * @param {Array} props.classes - The array of class objects to be displayed.
 * @returns {JSX.Element} The component JSX element.
 */
const DragDropClassCardList = ({ classes, onDragStart, ...props }) => {
  return (
    <>
      <DragDropContext onDragStart={onDragStart}>
        <Droppable droppableId="droppable-class-list">
          {(droppableProvided) => (
            <Card ref={droppableProvided.innerRef} {...props}>
              {classes.map((classObj, index) => (
                <Draggable key={classObj.id} draggableId={`draggable-class-${classObj.id}`} index={index}>
                  {(draggableProvided) => (
                    <div
                      key={classObj.id}
                      className="flex"
                      ref={draggableProvided.innerRef}
                      {...draggableProvided.draggableProps}
                      {...draggableProvided.dragHandleProps}
                    >
                      <ClassCard
                        key={classObj.id}
                        courseName={classObj.courseName}
                        courseCode={classObj.courseCode}
                        periods={classObj.periods}
                        location={classObj.location}
                        totalSeats={Object.values(classObj.studentMax).reduce(
                          (sum, num) => sum + num,
                          0
                        )}
                        numStudents={Object.values(classObj.studentSelected).reduce(
                          (sum, num) => sum + num,
                          0
                        )}
                        className={`grow mx-2 mt-2 overflow-visible animate-fade animate-duration-200 ${index === classes.length - 1 && "mb-2"
                          }`}
                      />
                    </div>
                  )}
                </Draggable>
              ))}
            </Card>
          )}
        </Droppable>
      </DragDropContext>
    </>
  );
};

export default DragDropClassCardList;

import PropTypes from "prop-types";

DragDropClassCardList.propTypes = {
  classes: PropTypes.arrayOf(PropTypes.object).isRequired,
};
