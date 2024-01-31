import { Card } from "@nextui-org/card";
import { VList } from "virtua";

import ClassCard from "@/components/Cards/ClassCard";

export default function ClassCardList({ classes, classSelected, onClassSelected, ...props }) {
  return (
    <>
      <Card {...props}>
        {classes.length === 0 ? (
          <div className="flex flex-col h-full justify-center items-center p-8">
            <p className="text-2xl text-center font-bold text-neutral-200 animate-fade-down animate-ease-in-out">
              No classes added
            </p>
            <p className="text-md text-center text-neutral-400 animate-fade-up animate-delay-200">
              Click on a class and then the &quot;Add class&quot; button to add it.
            </p>
          </div>
        ) : (
          <VList style={{ height: "80vh" }}>
            {classes.map((classObj, index) => (
              <div key={classObj.id} className="flex">
                <ClassCard
                  key={classObj.id}
                  isPressable
                  courseName={classObj.courseName}
                  courseCode={classObj.courseCode}
                  periods={classObj.periods}
                  term={classObj.term}
                  location={classObj.location}
                  className={`grow mx-2 mt-2 border-2 border-transparent overflow-visible animate-fade animate-duration-200 hover:border-gray-500 hover:transition hover:duration-300 ${
                    classSelected === classObj.id && "border-stone-400"
                  } ${index === classes.length - 1 && "mb-2"}`}
                  onPress={() => onClassSelected(classObj.id)}
                />
              </div>
            ))}
          </VList>
        )}
      </Card>
    </>
  );
}

import PropTypes from "prop-types";

ClassCardList.propTypes = {
  classes: PropTypes.arrayOf(PropTypes.object).isRequired,
  classSelected: PropTypes.number,
  onClassSelected: PropTypes.func.isRequired,
};
