/**
 * Respond with the first character, given the line of the poem, at the front door.
 *
 * @param {string} line
 * @returns {string}
 */
export function frontDoorResponse(line) {
  return line.trimStart()[0];
}

/**
 * Capitalize the first letter for the front-door password.
 *
 * @param {string} word the letters you responded with before
 * @returns {string} the front door password
 */
export function frontDoorPassword(word) {
  return word[0].toUpperCase() + word.slice(1).toLowerCase();
}

/**
 * Respond with the last non-whitespace character, given the line of the poem, at the back door.
 *
 * @param {string} line
 * @returns {string}
 */
export function backDoorResponse(line) {
  return line.trimEnd().slice(-1);
}

/**
 * Format the password for the back door, adding politeness.
 *
 * @param {string} word the letters you responded with before
 * @returns {string} the back door password
 */
export function backDoorPassword(word) {
  return `${frontDoorPassword(word)}, please`;
}
