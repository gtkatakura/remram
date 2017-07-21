import { expect } from 'chai';
import _ from '../../src';

const { compose, upperCase } = _;

describe('compose', () => {
  const exclamify = value => `${value}!!!`;
  const variadic = (...args) => args;
  const concatLetterA = array => array.concat(['a']);

  describe('when two unary functions (upperCase, exclamify) is passed', () => {
    const composed = compose(exclamify, upperCase);

    it('should return a function', () => {
      expect(composed).to.be.a('function');
    });

    describe("and when is called with 'sparta'", () => {
      it("should return 'SPARTA!!!'", () => {
        expect(composed('sparta')).to.eql('SPARTA!!!');
      });
    });
  });

  describe('when first function is variadic', () => {
    const composed = compose(exclamify, variadic);

    it('should passed all args to first function', () => {
      expect(composed(1, 2, 3)).to.eql('1,2,3!!!');
    });
  });

  describe('when more then two functions is passed', () => {
    const composed = compose(upperCase, exclamify, concatLetterA, variadic);

    it('should return the value passed by all functions', () => {
      expect(composed(1, 2)).to.eql('1,2,A!!!');
    });
  });
});
