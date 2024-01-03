/**
 * Returns a two-fer phrase with the given name.
 *
 * @param {string} name - The name to include in the phrase.
 * @returns {string} - The two-fer phrase.
 */
export function twoFer(name: string = "you"): string {
  return `One for ${name}, one for me.`;
}
