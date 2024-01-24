import { useState, useContext } from "react";
import { DragDropContext } from "@hello-pangea/dnd";

import { SchedulerLayout } from "@/components/Layout";
import { DragDropClassCardList, DragDropClassSchedule } from "@/components/Cards";
import { onDragStart, onDragEnd } from "@/utils/onDrag";

import SelectedClassesContext from "@/context/selectedClasses";
import exampleTestClasses from "@/temp_data.json";

export default function Scheduler() {
  const { selectedClasses } = useContext(SelectedClassesContext);
  const [addedClasses, setAddedClasses] = useState(
    exampleTestClasses.filter((class_) => selectedClasses.includes(class_.id))
  );
  const [springSemesterSelectedClasses, setSpringSemesterSelectedClasses] = useState({});
  const [fallSemesterSelectedClasses, setFallSemesterSelectedClasses] = useState({});
  const [unavailablePeriods, setUnavailablePeriods] = useState({});
  const [conflictPeriods, setConflictPeriods] = useState({});

  return (
    <>
      <DragDropContext
        onDragStart={(result) =>
          onDragStart(
            result,
            springSemesterSelectedClasses,
            fallSemesterSelectedClasses,
            setUnavailablePeriods,
            setConflictPeriods
          )
        }
        onDragEnd={(result) =>
          onDragEnd(
            result,
            setAddedClasses,
            setSpringSemesterSelectedClasses,
            setFallSemesterSelectedClasses,
            setUnavailablePeriods,
            setConflictPeriods
          )
        }
      >
        <SchedulerLayout>
          {/* Left side (Spring Semester) */}
          <div className="flex flex-col h-5/6 md:h-11/12 md:w-1/3">
            <DragDropClassSchedule
              semester="Spring"
              classes={springSemesterSelectedClasses}
              unavailablePeriods={unavailablePeriods}
              conflictPeriods={conflictPeriods}
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
              unavailablePeriods={unavailablePeriods}
              conflictPeriods={conflictPeriods}
              className="h-full bg-background/50 bg-default-100 overflow-y-auto"
            />
          </div>
        </SchedulerLayout>
      </DragDropContext>
    </>
  );
}
