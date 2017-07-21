const base = (f, g) => (...args) => g(f(...args));
const flow = (...funcs) => funcs.reduce(base);

/**
 * Composes the functions left-to-right.
 * @param {...Function} funcs The functions to compose.
 * @return {Function} The composed (left-to-right) function.
 * @example
 *
 * const inc = value => value + 1
 * const double = value => value * 2
 * const incAndDouble = flow(inc, double)
 *
 * incAndDouble(1)
 * // => 4
 */
export default flow;
