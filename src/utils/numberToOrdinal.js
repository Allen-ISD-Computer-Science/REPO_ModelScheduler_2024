/**
 * Convert number to ordinal number (1 -> 1st, 2 -> 2nd, 3 -> 3rd, etc.)
 * 
 * @param {Number} number 
 * @returns {String} ordinal number
 */
export default function numberToOrdinal(number) {
  if (typeof number !== 'number' || isNaN(number)) {
    return 'Please provide a valid number';
  }

  const suffixes = ['th', 'st', 'nd', 'rd'];
  const lastTwoDigits = number % 100;

  if (lastTwoDigits >= 11 && lastTwoDigits <= 13) {
    return number + suffixes[0];
  }

  const lastDigit = number % 10;
  const suffix = suffixes[lastDigit] || suffixes[0];

  return number + suffix;
}