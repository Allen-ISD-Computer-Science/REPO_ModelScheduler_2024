import { useState, useEffect } from "react";
import { DragDropContext } from "@hello-pangea/dnd";

import SchedulerLayout from "@/components/Layout/SchedulerLayout";
import { DefaultNavbar } from "@/components/Navbars";
import { DragDropClassCardList, DragDropClassSchedule } from "@/components/Cards";
import { onDragStart, onDragEnd } from "@/utils/onDrag";

import Semesters from "@/constants/Semesters";

export default function Scheduler() {
  const [addedClasses, setAddedClasses] = useState(() => {
    return JSON.parse(localStorage.getItem("addedClasses")) || [];
  });
  const [springSemesterScheduledClasses, setSpringSemesterScheduledClasses] = useState(
    localStorage.getItem("scheduledClasses") ? JSON.parse(localStorage.getItem("scheduledClasses"))[Semesters.S1] : {}
  );
  const [fallSemesterScheduledClasses, setFallSemesterScheduledClasses] = useState(
    localStorage.getItem("scheduledClasses") ? JSON.parse(localStorage.getItem("scheduledClasses"))[Semesters.S2] : {}
  );
  const [unavailablePeriods, setUnavailablePeriods] = useState({});
  const [conflictPeriods, setConflictPeriods] = useState({});

  // Update addedClasses to remove scheduled classes on render
  useEffect(() => {
    // If there are "Spring" and "Fall" keys
    if (Object.keys(addedClasses).length > 0) {
      // Array of scheduled class IDs
      const scheduledClassIDs = Object.values(springSemesterScheduledClasses)
        .concat(Object.values(fallSemesterScheduledClasses))
        .map((classObj) => classObj.id);

      // Filter out scheduled classes from added classes
      setAddedClasses(addedClasses.filter((classObj) => !scheduledClassIDs.includes(classObj.id)));
    }

    const addedClassesIDs = addedClasses.map((classObj) => classObj.id);
    const scheduledClassesIDs = [
      ...new Set(
        Object.values(springSemesterScheduledClasses)
          .concat(Object.values(fallSemesterScheduledClasses))
          .map((classObj) => classObj.id)
      ),
    ];

    // If all elements in scheduledClassesIDs are not in addedClassesIDs
    if (!scheduledClassesIDs.every((classID) => addedClassesIDs.includes(classID))) {
      // Remove the offending class/classes from scheduledClasses
      const updatedSpringSemesterScheduledClasses = Object.fromEntries(
        Object.entries(springSemesterScheduledClasses).filter(([, classObj]) => addedClassesIDs.includes(classObj.id))
      );

      const updatedFallSemesterScheduledClasses = Object.fromEntries(
        Object.entries(fallSemesterScheduledClasses).filter(([, classObj]) => addedClassesIDs.includes(classObj.id))
      );

      // Update scheduledClasses
      setSpringSemesterScheduledClasses(updatedSpringSemesterScheduledClasses);
      setFallSemesterScheduledClasses(updatedFallSemesterScheduledClasses);
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []); // We only want to run this once on render

  // Update scheduledClasses when springSemesterScheduledClasses or fallSemesterScheduledClasses changes
  useEffect(() => {
    localStorage.setItem(
      "scheduledClasses",
      JSON.stringify({ [Semesters.S1]: springSemesterScheduledClasses, [Semesters.S2]: fallSemesterScheduledClasses })
    );
  }, [springSemesterScheduledClasses, fallSemesterScheduledClasses]);

  return (
    <>
    <DefaultNavbar />
    <DragDropContext
      onDragStart={(result) =>
        onDragStart(
          result,
          springSemesterScheduledClasses,
          fallSemesterScheduledClasses,
          setUnavailablePeriods,
          setConflictPeriods
        )
      }
      onDragEnd={(result) =>
        onDragEnd(
          result,
          setAddedClasses,
          setSpringSemesterScheduledClasses,
          setFallSemesterScheduledClasses,
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
            classes={springSemesterScheduledClasses}
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
            className="h-full bg-default-100/50 overflow-y-auto"
          />
        </div>

        {/* Right side (Fall Semester) */}
        <div className="flex flex-col h-5/6 md:h-11/12 md:w-1/3">
          <DragDropClassSchedule
            semester="Fall"
            classes={fallSemesterScheduledClasses}
            unavailablePeriods={unavailablePeriods}
            conflictPeriods={conflictPeriods}
          />
        </div>
      </SchedulerLayout>
    </DragDropContext>
    </>
  );
}
