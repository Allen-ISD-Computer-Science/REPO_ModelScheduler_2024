import checkClassConflicts from "@/utils/checkClassConflicts";
import exampleTestClasses from "@/temp_data.json";
import Semesters from "@/constants/Semesters";

/**
 *
 * @param {Object} result - Result object from react-beautiful-dnd
 * @param {Array<Object>} springSemesterSelectedClasses - The spring semester selected classes
 * @param {Array<Object>} fallSemesterSelectedClasses - The fall semester selected classes
 * @param {Function} setConflictPeriods - Setter for the list of conflicts
 */
export function onDragStart(result, springSemesterSelectedClasses, fallSemesterSelectedClasses, setConflictPeriods) {
  const period = Number(result.draggableId.split("-")[2]);
  const classObj = exampleTestClasses.find((class_) => class_.id == result.draggableId.split("-")[2]);

  console.log("onDragStart");
  console.log(classObj);
  console.log(springSemesterSelectedClasses);
  console.log(fallSemesterSelectedClasses);
  console.time("checkClassConflicts");
  console.log(checkClassConflicts(classObj, springSemesterSelectedClasses));
  console.timeEnd("checkClassConflicts");
}

/**
 * @param {Object} result - Result object from react-beautiful-dnd
 * @param {Function} setAddedClasses - Setter for the list of classes that are available to be added to the schedule
 * @param {Function} setSpringSemesterSelectedClasses - Setter for the spring semester selected classes
 * @param {Function} setFallSemesterSelectedClasses - Setter for the fall semester selected classes
 * @returns
 */
export function onDragEnd(result, setAddedClasses, setSpringSemesterSelectedClasses, setFallSemesterSelectedClasses) {
  const { source, destination } = result;
  const classId = result.draggableId.split("-")[2];
  const sourcePeriod = Number(source.droppableId.split("-")[2]);
  const destinationPeriod = Number(destination.droppableId.split("-")[2]);
  const classObj = exampleTestClasses.find((class_) => class_.id == classId);

  // If the user drops the class at the same position dropped, do nothing
  if (destination.droppableId === source.droppableId) return;

  // If the user drops the class in a semester schedule
  if (destination.droppableId.includes("schedule")) {
    // If the dropped class is from the a schedule card, remove the class from the schedule card
    if (source.droppableId.includes("schedule")) {
      const setClasses = source.droppableId.includes("spring")
        ? setSpringSemesterSelectedClasses
        : setFallSemesterSelectedClasses;
      setClasses((prev) => {
        const newSelectedClasses = { ...prev };
        delete newSelectedClasses[sourcePeriod];
        return newSelectedClasses;
      });
    }

    // Add the class to the semester schedule
    const setClasses = destination.droppableId.includes("spring")
      ? setSpringSemesterSelectedClasses
      : setFallSemesterSelectedClasses;
    setClasses((prev) => {
      const newSelectedClasses = { ...prev };
      newSelectedClasses[destinationPeriod] = { ...classObj, periods: [destinationPeriod] };

      // Remove the class from the list of classes available
      setAddedClasses((prev) => {
        const newAddedClasses = prev.filter((class_) => class_.id != classId);
        return newAddedClasses;
      });

      return newSelectedClasses;
    });
  }
  // If the user drops the class in the class list
  else if (destination.droppableId.includes("class-list")) {
    // Delete the class from the semester schedule & add the class back to the list of classes available
    const setClasses = source.droppableId.includes("spring")
      ? setSpringSemesterSelectedClasses
      : setFallSemesterSelectedClasses;
    setClasses((prev) => {
      const newSelectedClasses = { ...prev };
      delete newSelectedClasses[sourcePeriod];

      setAddedClasses((prev) => {
        const newAddedClasses = [...prev, classObj];
        return newAddedClasses;
      });

      return newSelectedClasses;
    });
  }
}
