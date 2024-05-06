/**
 * The function `convertToEmoji` takes a country code as input and returns the corresponding flag
 * emoji.
 * @returns The `convertToEmoji` function takes a country code as input, converts it to uppercase, maps
 * each character to its corresponding emoji code point, and then returns the emoji representation of
 * the country code.
 */
export function convertToEmoji(countryCode) {
  const codePoints = countryCode
    .toUpperCase()
    .split("")
    .map((char) => 127397 + char.charCodeAt());
  return String.fromCodePoint(...codePoints);
}
