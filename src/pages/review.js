import { useContext } from "react";

import ReviewLayout from "@/components/Layout/ReviewLayout";
import ClassSchedule from "@/components/Cards/ClassSchedule";

import ScheduledClassesContext from "@/context/scheduledClasses";
import Semesters from "@/constants/Semesters";

export default function Review() {
  const { scheduledClasses } = useContext(ScheduledClassesContext);

  return (
    <ReviewLayout>
      {/* Left side (Spring Semester) */}
      <div className="h-5/6 md:h-11/12 w-5/12">
        <ClassSchedule semester="Spring" classes={scheduledClasses[Semesters.S1]} />
      </div>

      {/* Right side (Fall Semester) */}
      <div className="h-5/6 md:h-11/12 w-5/12">
        <ClassSchedule semester="Fall" classes={scheduledClasses[Semesters.S2]} />
      </div>
    </ReviewLayout>
  );
}
