import { useState, useEffect } from "react";
import { DragDropContext } from "@hello-pangea/dnd";

import SchedulerLayout from "@/components/Layout/SchedulerLayout";
import { DragDropClassCardList, DragDropClassSchedule } from "@/components/Cards";
import { onDragStart, onDragEnd } from "@/utils/onDrag";

import Semesters from "@/constants/Semesters";

export default function Scheduler() {
  const [addedClasses, setAddedClasses] = useState(() => {
    return JSON.parse(localStorage.getItem("addedClasses")) || {};
  });
  const [springSemesterSelectedClasses, setSpringSemesterSelectedClasses] = useState(
    localStorage.getItem("scheduledClasses") ? JSON.parse(localStorage.getItem("scheduledClasses"))[Semesters.S1] : {}
  );
  const [fallSemesterSelectedClasses, setFallSemesterSelectedClasses] = useState(
    localStorage.getItem("scheduledClasses") ? JSON.parse(localStorage.getItem("scheduledClasses"))[Semesters.S2] : {}
  );
  const [unavailablePeriods, setUnavailablePeriods] = useState({});
  const [conflictPeriods, setConflictPeriods] = useState({});

  // Update addedClasses to remove scheduled classes on render
  useEffect(() => {
    // If there are "Spring" and "Fall" keys
    if (Object.keys(addedClasses).length > 0) {
      // Array of scheduled class IDs
      const scheduledClassIDs = Object.values(springSemesterSelectedClasses)
        .concat(Object.values(fallSemesterSelectedClasses))
        .map((classObj) => classObj.id);

      // Filter out scheduled classes from added classes
      setAddedClasses(addedClasses.filter((classObj) => !scheduledClassIDs.includes(classObj.id)));
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []); // We only want to run this once on render

  // Update scheduledClasses when springSemesterSelectedClasses or fallSemesterSelectedClasses changes
  useEffect(() => {
    localStorage.setItem(
      "scheduledClasses",
      JSON.stringify({ [Semesters.S1]: springSemesterSelectedClasses, [Semesters.S2]: fallSemesterSelectedClasses })
    );
  }, [springSemesterSelectedClasses, fallSemesterSelectedClasses]);

  return (
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
          />
        </div>
      </SchedulerLayout>
    </DragDropContext>
  );
}
