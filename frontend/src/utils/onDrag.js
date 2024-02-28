import checkClassConflicts from "@/utils/checkClassConflicts";
import checkUnavailablePeriods from "@/utils/checkUnavailablePeriods";
import Semesters from "@/constants/Semesters";
import AllPeriods from "@/constants/AllPeriods";

/**
 *
 * @param {Number} classId
 * @param {Object<String, Object>} schedule
 * @returns
 */
function getSameClassesInSemester(classId, schedule) {
  return Object.keys(schedule).filter((period) => schedule[period].id == classId);
}

/**
 *
 * @param {Object} result - Result object from react-beautiful-dnd
 * @param {Array<Object>} classes - The list of classes
 * @param {Array<Object>} springSemesterSelectedClasses - The spring semester selected classes
 * @param {Array<Object>} fallSemesterSelectedClasses - The fall semester selected classes
 * @param {Function} setUnavailablePeriods - Setter for the list of unavailable periods
 * @param {Function} setConflictPeriods - Setter for the list of conflicts
 */
export function onDragStart(
  result,
  classes,
  springSemesterSelectedClasses,
  fallSemesterSelectedClasses,
  setUnavailablePeriods,
  setConflictPeriods
) {
  const classId = Number(result.draggableId.split("-")[2]);
  const classObj = classes.find((class_) => class_.id == classId);

  if (classObj.term == Semesters.SPRING) {
    setUnavailablePeriods({
      [Semesters.S1]: checkUnavailablePeriods(classObj, springSemesterSelectedClasses),
      [Semesters.S2]: AllPeriods,
    });

    setConflictPeriods({
      [Semesters.S1]: checkClassConflicts(classObj, springSemesterSelectedClasses),
      [Semesters.S2]: checkClassConflicts(classObj, fallSemesterSelectedClasses),
    });
  } else if (classObj.term == Semesters.FALL) {
    setUnavailablePeriods({
      [Semesters.S1]: AllPeriods,
      [Semesters.S2]: checkUnavailablePeriods(classObj, fallSemesterSelectedClasses),
    });

    setConflictPeriods({
      [Semesters.S1]: AllPeriods,
      [Semesters.S2]: checkClassConflicts(classObj, fallSemesterSelectedClasses),
    });
  } else if (classObj.term == Semesters.FULL_YEAR) {
    setUnavailablePeriods({
      [Semesters.S1]: checkUnavailablePeriods(classObj, springSemesterSelectedClasses),
      [Semesters.S2]: checkUnavailablePeriods(classObj, fallSemesterSelectedClasses),
    });

    setConflictPeriods({
      [Semesters.S1]: checkClassConflicts(classObj, springSemesterSelectedClasses),
      [Semesters.S2]: checkClassConflicts(classObj, fallSemesterSelectedClasses),
    });
  }
}

/**
 * @param {Object} result - Result object from react-beautiful-dnd
 * @param {Array<Object>} classes - The list of classes
 * @param {Function} setAddedClasses - Setter for the list of classes that are available to be added to the schedule
 * @param {Function} setSpringSemesterSelectedClasses - Setter for the spring semester selected classes
 * @param {Function} setFallSemesterSelectedClasses - Setter for the fall semester selected classes
 * @param {Function} setUnavailablePeriods - Setter for the list of unavailable periods
 * @param {Function} setConflictPeriods - Setter for the list of conflicts
 * @returns
 */
export function onDragEnd(
  result,
  classes,
  setAddedClasses,
  setSpringSemesterSelectedClasses,
  setFallSemesterSelectedClasses,
  setUnavailablePeriods,
  setConflictPeriods
) {
  const { source, destination } = result;
  const classId = result.draggableId.split("-")[2];
  const destinationPeriod = destination ? Number(destination.droppableId.split("-")[2]) : null;
  const classObj = classes.find((class_) => class_.id == classId);

  // Reset the list of unavailable periods and conflicts
  setUnavailablePeriods({});
  setConflictPeriods({});

  // If the user drops the class at the same position dropped, do nothing
  if (destination?.droppableId === source?.droppableId || !destination) return;

  // If the user drops the class in a semester schedule
  if (destination.droppableId.includes("schedule")) {
    // If the dropped class is from the a schedule card, remove the class from the schedule card
    if (source.droppableId.includes("schedule")) {
      const setClasses = source.droppableId.includes("spring")
        ? setSpringSemesterSelectedClasses
        : setFallSemesterSelectedClasses;
      setClasses((prev) => {
        const newSelectedClasses = { ...prev };

        // Return all periods with the same class id & remove them
        const allPeriodsWithClass = getSameClassesInSemester(classId, newSelectedClasses);
        allPeriodsWithClass.forEach((period) => delete newSelectedClasses[period]);

        return newSelectedClasses;
      });

      // If the class is a full year class, remove the class from the opposite semester schedule
      const setOppositeSemesterClasses = !source.droppableId.includes("spring")
        ? setSpringSemesterSelectedClasses
        : setFallSemesterSelectedClasses;
      if (classObj.term == Semesters.FULL_YEAR) {
        setOppositeSemesterClasses((prev) => {
          const newSelectedClasses = { ...prev };

          // Return all periods with the same class id & remove them
          const allPeriodsWithClass = getSameClassesInSemester(classId, newSelectedClasses);
          allPeriodsWithClass.forEach((period) => delete newSelectedClasses[period]);

          return newSelectedClasses;
        });
      }
    }

    // Add the class to the semester schedule
    const setClasses = destination.droppableId.includes("spring")
      ? setSpringSemesterSelectedClasses
      : setFallSemesterSelectedClasses;
    setClasses((prev) => {
      // Add the class to the list of classes in the semester schedule
      const newSelectedClasses = { ...prev };
      newSelectedClasses[destinationPeriod] = { ...classObj, periods: [destinationPeriod] };

      // Remove the class from the list of classes available
      setAddedClasses((prev) => {
        const newAddedClasses = prev.filter((class_) => class_.id != classId);
        return newAddedClasses;
      });

      // If the class is a full year class, add the class to the opposite semester schedule
      const setOppositeSemesterClasses = !destination.droppableId.includes("spring")
        ? setSpringSemesterSelectedClasses
        : setFallSemesterSelectedClasses;
      if (classObj.term == Semesters.FULL_YEAR) {
        setOppositeSemesterClasses((prev) => {
          const newSelectedClasses = { ...prev };
          newSelectedClasses[destinationPeriod] = { ...classObj, periods: [destinationPeriod] };

          // Add the class double blocked period to the opposite semester schedule
          if (classObj.doubleBlockPeriod) {
            const doubleBlockPeriod = classObj.doubleBlockPeriod;
            newSelectedClasses[doubleBlockPeriod] = { ...classObj, periods: [doubleBlockPeriod] };
          }

          return newSelectedClasses;
        });
      }

      // Add the class double blocked period to the semester schedule
      if (classObj.doubleBlockPeriod) {
        const doubleBlockPeriod = classObj.doubleBlockPeriod;
        newSelectedClasses[doubleBlockPeriod] = { ...classObj, periods: [doubleBlockPeriod] };
      }

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

      // Return all periods with the same class id & remove them
      const allPeriodsWithClass = Object.keys(newSelectedClasses).filter(
        (period) => newSelectedClasses[period].id == classId
      );
      allPeriodsWithClass.forEach((period) => delete newSelectedClasses[period]);

      setAddedClasses((prev) => {
        // Add the class back to the list of classes available
        const newAddedClasses = [...prev, classObj];
        return newAddedClasses;
      });

      // If the class is a full year class, delete the class from the opposite semester schedule
      const setOppositeSemesterClasses = !source.droppableId.includes("spring")
        ? setSpringSemesterSelectedClasses
        : setFallSemesterSelectedClasses;
      if (classObj.term == Semesters.FULL_YEAR) {
        setOppositeSemesterClasses((prev) => {
          const newSelectedClasses = { ...prev };

          // Remove all periods with the same class id
          allPeriodsWithClass.forEach((period) => delete newSelectedClasses[period]);

          return newSelectedClasses;
        });
      }

      return newSelectedClasses;
    });
  }
}
