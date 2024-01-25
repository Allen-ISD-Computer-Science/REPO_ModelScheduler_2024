import AllPeriods from "@/constants/AllPeriods";

/**
 * Checks which periods a class is unavailable for
 *
 * @param {Object} classToCheck - The class to check for availability
 * @param {Object<String, Object>} schedule - The current user schedule
 * @returns {Array<Number>} An array of periods that the class is unavailable for
 */
export default function checkUnavailablePeriods(classToCheck, schedule) {
  const unavailablePeriods = [];

  AllPeriods.forEach((period) => {
    // If the class does not have the period in its periods array, then it is unavailable
    if (!classToCheck.periods.includes(period)) {
      unavailablePeriods.push(period);
    }
  });

  // If period is taken by another class, then it is unavailable
  Object.values(schedule).forEach((class_) => {
    // Check for each period in the scheduled classes
    class_.periods.forEach((period) => {
      // If the class has the period in its periods array, then it is unavailable
      if (classToCheck.periods.includes(period)) {
        unavailablePeriods.push(period);
      }
    });
  });

  return [...new Set(unavailablePeriods)]; // Remove duplicates
}
