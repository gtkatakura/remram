import { expect } from 'chai';
import _ from '../../src';

const { flow, upperCase } = _;

describe('flow', () => {
  const exclamify = value => `${value}!!!`;
  const variadic = (...args) => args;
  const concatLetterA = array => array.concat(['a']);

  describe('when two unary functions (upperCase, exclamify) is passed', () => {
    const composed = flow(upperCase, exclamify);

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
    const composed = flow(variadic, exclamify);

    it('should passed all args to first function', () => {
      expect(composed(1, 2, 3)).to.eql('1,2,3!!!');
    });
  });

  describe('when more then two functions is passed', () => {
    const composed = flow(variadic, concatLetterA, exclamify, upperCase);

    it('should return the value passed by all functions', () => {
      expect(composed(1, 2)).to.eql('1,2,A!!!');
    });
  });
});
