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