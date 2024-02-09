import { useState } from "react";

import ReviewNavbar from "@/components/Navbars/ReviewNavbar";
import ReviewLayout from "@/components/Layout/ReviewLayout";
import ClassSchedule from "@/components/Cards/ClassSchedule";

import Semesters from "@/constants/Semesters";

export default function Review() {
  const [scheduledClasses] = useState(() => {
    return (
      JSON.parse(localStorage.getItem("scheduledClasses")) || {
        [Semesters.S1]: [],
        [Semesters.S2]: [],
      }
    );
  });

  return (
    <>
      <ReviewNavbar />

      <ReviewLayout>
        {/* Left side (Spring Semester) */}
        <div className="h-5/6 w-full">
          <ClassSchedule semester="Spring" classes={scheduledClasses[Semesters.S1]} />
        </div>

        {/* Right side (Fall Semester) */}
        <div className="h-5/6 w-full">
          <ClassSchedule semester="Fall" classes={scheduledClasses[Semesters.S2]} />
        </div>
      </ReviewLayout>
    </>
  );
}
