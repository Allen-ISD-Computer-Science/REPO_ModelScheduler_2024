import { Card } from "@nextui-org/card";
import { VList } from "virtua";

import { ClassCard } from "@/components/Cards";

/**
 * Renders a card component that displays a list of classes.
 *
 * @component
 * @param {Object} props - The component props.
 * @param {Array} props.classes - The array of class objects to be displayed.
 * @param {String} props.classSelected - The ID of the selected class.
 * @param {String|null} props.emptyMsg - The message to be displayed when the class list is empty.
 * @param {Function} props.onClassSelected - The callback function to be called when a class is selected.
 * @returns {JSX.Element} The component JSX element.
 */
const ClassCardList = ({ classes, classSelected, emptyMsg, onClassSelected, ...props }) => {
  return (
    <>
      <Card {...props}>
        {emptyMsg ? (
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
                  courseName={classObj.courseName}
                  courseCode={classObj.courseCode}
                  periods={classObj.periods}
                  location={classObj.location}
                  totalSeats={Object.values(classObj.studentMax).reduce((sum, num) => sum + num, 0)}
                  numStudents={Object.values(classObj.studentSelected).reduce(
                    (sum, num) => sum + num,
                    0
                  )}
                  className={`grow mx-2 mt-2 border-2 overflow-visible animate-fade animate-duration-200 hover:border-gray-500 hover:transition hover:duration-300 ${
                    classSelected === classObj.id ? "border-stone-400" : "border-transparent"
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
};

export default ClassCardList;

import PropTypes from "prop-types";

ClassCardList.propTypes = {
  classes: PropTypes.arrayOf(PropTypes.object).isRequired,
  classSelected: PropTypes.number,
  emptyMsg: PropTypes.bool,
  onClassSelected: PropTypes.func.isRequired,
};
