import Locations from "@/constants/Locations";
import Departments from "@/constants/Departments";

/**
 * Checks if a class conflicts with any other classes in the schedule
 *
 * @param {Object} classToCheck - The class to check for conflicts
 * @param {Object<String, Object>} schedule - The schedule to check for conflicts
 * @returns {Array<Number>} - An array of periods that conflict with the class
 */
export default function checkClassConflicts(classToCheck, schedule) {
  const conflicts = [];
  const blockPeriods = [2, 4, 5, 7];

  // Check for privilege period conflicts
  if (classToCheck.department === Departments.PRIVILEGE) {
    const doesScheduleHave1stPrivilege = Object.values(schedule).some(
      (classInSchedule) => classInSchedule.periods.includes(1) && classInSchedule.department === Departments.PRIVILEGE
    );
    const doesScheduleHave8thPrivilege = Object.values(schedule).some(
      (classInSchedule) => classInSchedule.periods.includes(8) && classInSchedule.department === Departments.PRIVILEGE
    );
    const doesScheduleHaveBlockPeriodPrivilege = Object.values(schedule).some(
      (classInSchedule) =>
        blockPeriods.some((blockPeriod) => classInSchedule.periods.includes(blockPeriod)) &&
        classInSchedule.department === Departments.PRIVILEGE
    );

    // Check for 1st and 8th and block privilege period conflicts
    if (classToCheck.periods.includes(1) && doesScheduleHave8thPrivilege && doesScheduleHaveBlockPeriodPrivilege) {
      conflicts.push(1);
    } else if (
      classToCheck.periods.includes(8) &&
      doesScheduleHave1stPrivilege &&
      doesScheduleHaveBlockPeriodPrivilege
    ) {
      conflicts.push(8);
    } else if (
      blockPeriods.some((blockPeriod) => classToCheck.periods.includes(blockPeriod)) &&
      doesScheduleHave1stPrivilege &&
      doesScheduleHave8thPrivilege
    ) {
      conflicts.push(...blockPeriods);
    }

    const doesScheduleHave2ndPrivilege = Object.values(schedule).some(
      (classInSchedule) => classInSchedule.periods.includes(2) && classInSchedule.department === Departments.PRIVILEGE
    );
    const doesScheduleHave4thPrivilege = Object.values(schedule).some(
      (classInSchedule) => classInSchedule.periods.includes(4) && classInSchedule.department === Departments.PRIVILEGE
    );
    const doesScheduleHave5thPrivilege = Object.values(schedule).some(
      (classInSchedule) => classInSchedule.periods.includes(5) && classInSchedule.department === Departments.PRIVILEGE
    );
    const doesScheduleHave7thPrivilege = Object.values(schedule).some(
      (classInSchedule) => classInSchedule.periods.includes(7) && classInSchedule.department === Departments.PRIVILEGE
    );

    // Check for two block period conflicts
    if (classToCheck.periods.includes(2) && doesScheduleHave4thPrivilege) {
      conflicts.push(2);
    } else if (classToCheck.periods.includes(4) && doesScheduleHave2ndPrivilege) {
      conflicts.push(4);
    } else if (classToCheck.periods.includes(5) && doesScheduleHave7thPrivilege) {
      conflicts.push(5);
    } else if (classToCheck.periods.includes(7) && doesScheduleHave5thPrivilege) {
      conflicts.push(7);
    }
  }

  /**
   * Check for AHS, STEAM, LFC, and CTC class time conflicts
   *
   * List of time conflicts:
   * 1 AHS - 2/5 STEAM/CTC
   * 1 LFC - 2/5 STEAM/CTC
   * 4/7 STEAM/CTC - 8 AHS
   * 4/7 STEAM/CTC - 8 LFC
   */
  const isClass1stPeriodAHS = classToCheck.periods.includes(1) && classToCheck.location === Locations.AHS;
  const isClass1stPeriodLFC = classToCheck.periods.includes(1) && classToCheck.location === Locations.LFC;
  const isClass2ndPeriodSTEAM_CTC =
    classToCheck.periods.includes(2) &&
    (classToCheck.location === Locations.STEAM || classToCheck.location === Locations.CTC);
  const isClass5thPeriodSTEAM_CTC =
    classToCheck.periods.includes(5) &&
    (classToCheck.location === Locations.STEAM || classToCheck.location === Locations.CTC);
  const isClass4thPeriodSTEAM_CTC =
    classToCheck.periods.includes(4) &&
    (classToCheck.location === Locations.STEAM || classToCheck.location === Locations.CTC);
  const isClass7thPeriodSTEAM_CTC =
    classToCheck.periods.includes(7) &&
    (classToCheck.location === Locations.STEAM || classToCheck.location === Locations.CTC);
  const isClass8thPeriodAHS = classToCheck.periods.includes(8) && classToCheck.location === Locations.AHS;
  const isClass8thPeriodLFC = classToCheck.periods.includes(8) && classToCheck.location === Locations.LFC;
  const isScheduleIn1stPeriodAHS = Object.values(schedule).some(
    (classInSchedule) => classInSchedule.periods.includes(1) && classInSchedule.location === Locations.AHS
  );
  const isScheduleIn1stPeriodLFC = Object.values(schedule).some(
    (classInSchedule) => classInSchedule.periods.includes(1) && classInSchedule.location === Locations.LFC
  );
  const isScheduleIn2ndPeriodSTEAM_CTC = Object.values(schedule).some(
    (classInSchedule) =>
      classInSchedule.periods.includes(2) &&
      (classInSchedule.location === Locations.STEAM || classInSchedule.location === Locations.CTC)
  );
  const isScheduleIn5thPeriodSTEAM_CTC = Object.values(schedule).some(
    (classInSchedule) =>
      classInSchedule.periods.includes(5) &&
      (classInSchedule.location === Locations.STEAM || classInSchedule.location === Locations.CTC)
  );
  const isScheduleIn4thPeriodSTEAM_CTC = Object.values(schedule).some(
    (classInSchedule) =>
      classInSchedule.periods.includes(4) &&
      (classInSchedule.location === Locations.STEAM || classInSchedule.location === Locations.CTC)
  );
  const isScheduleIn7thPeriodSTEAM_CTC = Object.values(schedule).some(
    (classInSchedule) =>
      classInSchedule.periods.includes(7) &&
      (classInSchedule.location === Locations.STEAM || classInSchedule.location === Locations.CTC)
  );
  const isScheduleIn8thPeriodAHS = Object.values(schedule).some(
    (classInSchedule) => classInSchedule.periods.includes(8) && classInSchedule.location === Locations.AHS
  );
  const isScheduleIn8thPeriodLFC = Object.values(schedule).some(
    (classInSchedule) => classInSchedule.periods.includes(8) && classInSchedule.location === Locations.LFC
  );

  // Check for AHS, STEAM, LFC, and CTC class time conflicts
  if (isClass1stPeriodAHS && (isScheduleIn2ndPeriodSTEAM_CTC || isScheduleIn5thPeriodSTEAM_CTC)) {
    conflicts.push(1);
  } else if (isClass1stPeriodLFC && (isScheduleIn2ndPeriodSTEAM_CTC || isScheduleIn5thPeriodSTEAM_CTC)) {
    conflicts.push(1);
  } else if (isClass4thPeriodSTEAM_CTC && (isScheduleIn8thPeriodAHS || isScheduleIn8thPeriodLFC)) {
    conflicts.push(4);
  } else if (isClass7thPeriodSTEAM_CTC && (isScheduleIn8thPeriodAHS || isScheduleIn8thPeriodLFC)) {
    conflicts.push(7);
  } else if (isScheduleIn1stPeriodAHS && (isClass2ndPeriodSTEAM_CTC || isClass5thPeriodSTEAM_CTC)) {
    isClass2ndPeriodSTEAM_CTC ? conflicts.push(2) : conflicts.push(5);
  } else if (isScheduleIn1stPeriodLFC && (isClass2ndPeriodSTEAM_CTC || isClass5thPeriodSTEAM_CTC)) {
    isClass2ndPeriodSTEAM_CTC ? conflicts.push(2) : conflicts.push(5);
  } else if (isScheduleIn4thPeriodSTEAM_CTC && (isClass8thPeriodAHS || isClass8thPeriodLFC)) {
    conflicts.push(8);
  } else if (isScheduleIn7thPeriodSTEAM_CTC && (isClass8thPeriodAHS || isClass8thPeriodLFC)) {
    conflicts.push(8);
  }

  return [...new Set(conflicts)]; // Remove duplicates
}
