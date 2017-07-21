/**
 * Flattens `array` a single level deep.
 *
 * @param {Array} array The array to flatten.
 * @returns {Array} Returns the new flattened array.
 * @example
 *
 * flatten([1, [2, [3]]])
 * // => [1, 2, [3]]
 */
const flatten = array => [].concat(...array);

export default flatten;
