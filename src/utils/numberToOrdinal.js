/**
 * Convert number to ordinal number (1 -> 1st, 2 -> 2nd, 3 -> 3rd, etc.)
 *
 * @param {Number} number
 * @param {Boolean} useWordFormat - Whether to return the word format instead of the number (default: false)
 * @returns {String} ordinal number
 */
export default function numberToOrdinal(number, useWordFormat = false) {
  if (typeof number !== "number" || isNaN(number)) {
    return "Please provide a valid number";
  }

  const suffixes = ["th", "st", "nd", "rd"];
  const lastTwoDigits = number % 100;

  if (lastTwoDigits >= 11 && lastTwoDigits <= 13) {
    return useWordFormat ? numberToWord(number) : number + suffixes[0];
  }

  const lastDigit = number % 10;
  const suffix = suffixes[lastDigit] || suffixes[0];

  return useWordFormat ? numberToWord(number) : number + suffix;
}

function numberToWord(number) {
  const words = [
    "zeroth",
    "first",
    "second",
    "third",
    "fourth",
    "fifth",
    "sixth",
    "seventh",
    "eighth",
    "ninth",
    "tenth",
    "eleventh",
    "twelfth",
    "thirteenth",
    "fourteenth",
    "fifteenth",
    "sixteenth",
    "seventeenth",
    "eighteenth",
    "nineteenth",
  ];
  const tens = [
    "",
    "",
    "twentieth",
    "thirtieth",
    "fortieth",
    "fiftieth",
    "sixtieth",
    "seventieth",
    "eightieth",
    "ninetieth",
  ];
  const units = ["", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine"];

  if (number < 20) {
    return words[number];
  }

  const digit1 = Math.floor(number / 10);
  const digit2 = number % 10;

  return tens[digit1] + "-" + units[digit2];
}
