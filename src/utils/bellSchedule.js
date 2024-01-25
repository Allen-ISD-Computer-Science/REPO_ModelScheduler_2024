import BellSchedule from "@/constants/BellScheduleTimes";
import numberToOrdinal from "./numberToOrdinal";

/**
 * Returns the bell schedule for a given period and location.
 *
 * @param {Number} period - The period number.
 * @param {String} location - The location of the bell schedule.
 * @returns {String} The bell schedule for the given period and location. EX: "9:45 - 10:30"
 */
export default function bellSchedule(period, location) {
  // Generate the key based on the period and location
  const key = `${numberToOrdinal(period, true)}Period${location.toUpperCase()}`;

  // Retrieve the bell schedule based on the key
  const schedule = BellSchedule[key];

  // Return the bell schedule if found, otherwise return null
  return schedule ? `${schedule[0]} - ${schedule[1]}` : null;
}
