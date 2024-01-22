import { useState, useContext } from "react";
import { DragDropContext } from "@hello-pangea/dnd";

import { SchedulerLayout } from "@/components/Layout";
import { DragDropClassCardList, DragDropClassSchedule } from "@/components/Cards";
import { onDragStart, onDragEnd } from "@/utils/onDrag";

import SelectedClassesContext from "@/context/selectedClasses";
import exampleTestClasses from "@/temp_data.json";

const Scheduler = () => {
  const { selectedClasses } = useContext(SelectedClassesContext);
  const [addedClasses, setAddedClasses] = useState(
    exampleTestClasses.filter((class_) => selectedClasses.includes(class_.id))
  );
  const [springSemesterSelectedClasses, setSpringSemesterSelectedClasses] = useState({});
  const [fallSemesterSelectedClasses, setFallSemesterSelectedClasses] = useState({});
  const [conflictPeriods, setConflictPeriods] = useState({});
  /**
   * {
   *  "Spring": [1, 2, 4],
   *  "Fall": [1, 3, 5]
   * }
   */

  return (
    <>
      <DragDropContext
        onDragStart={(result) =>
          onDragStart(result, springSemesterSelectedClasses, fallSemesterSelectedClasses, setConflictPeriods)
        }
        onDragEnd={(result) =>
          onDragEnd(result, setAddedClasses, setSpringSemesterSelectedClasses, setFallSemesterSelectedClasses)
        }
      >
        <SchedulerLayout>
          {/* Left side (Spring Semester) */}
          <div className="flex flex-col h-5/6 md:h-11/12 md:w-1/3">
            <DragDropClassSchedule
              semester="Spring"
              classes={springSemesterSelectedClasses}
              setScheduledClasses={setSpringSemesterSelectedClasses}
              className="h-full bg-background/50 bg-default-100 overflow-y-auto"
            />
          </div>

          {/* Middle (List of classes) */}
          <div className="flex flex-col h-5/6 md:h-11/12 md:w-1/4">
            {/* List of classes */}
            <DragDropClassCardList
              droppableId="droppable-class-list"
              classes={addedClasses}
              className="h-full bg-background/50 bg-default-100 overflow-y-auto"
            />
          </div>

          {/* Right side (Fall Semester) */}
          <div className="flex flex-col h-5/6 md:h-11/12 md:w-1/3">
            <DragDropClassSchedule
              semester="Fall"
              classes={fallSemesterSelectedClasses}
              setScheduledClasses={setFallSemesterSelectedClasses}
              className="h-full bg-background/50 bg-default-100 overflow-y-auto"
            />
          </div>
        </SchedulerLayout>
      </DragDropContext>
    </>
  );
};

export default Scheduler;
