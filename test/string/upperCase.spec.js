import { expect } from 'chai';
import _ from '../../src';

const { upperCase } = _;

describe('upperCase', () => {
  describe('when is a text in lower case', () => {
    it('should return the text in upper case', () => {
      expect(upperCase('test')).to.eql('TEST');
    });
  });

  describe('when is a text in upper case', () => {
    it('should return itself', () => {
      expect(upperCase('TEST')).to.eql('TEST');
    });
  });

  describe('when is a text with two cases', () => {
    it('should return the text in upper case', () => {
      expect(upperCase('TeSt')).to.eql('TEST');
    });
  });
});
