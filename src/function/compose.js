const base = (f, g) => (...args) => f(g(...args));
const compose = (...funcs) => funcs.reduce(base);

/**
 * Composes the functions right-to-left.
 * @param {...Function} funcs The functions to compose.
 * @return {Function} The composed (right-to-left) function.
 * @example
 *
 * const inc = value => value + 1
 * const double = value => value * 2
 * const incAndDouble = compose(double, inc)
 *
 * incAndDouble(1)
 * // => 4
 */
export default compose;
