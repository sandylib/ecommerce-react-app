import CONSTANTS from '../constants/applicationConstants'
import GeneralValidation from './generalValidation';

describe('UNIT/VALIDATION - generalValidation', () => {

  describe('validateAlphaNumericWithSpaces', () => {
    const testBed = [
      {input: 'some valid string', output: null},
      {input: 'MORE valid strings 998762', output: null},
      {input: '      ', output: null},
      {input: 'some invalid chars $%^', output: CONSTANTS.VALIDATION.INVALID},
      {input: 'more invalid (*&^% chars', output: CONSTANTS.VALIDATION.INVALID}
    ];

    testBed.forEach(test => {
      it(`should return ${test.output} for ${test.input}`, () => {
        expect(GeneralValidation.validateAlphaNumericWithSpaces(test.input)).toEqual(test.output);
      });
    });
  });

  describe('containsSpecialChars', () => {
    const testBed = [
      {input: 'some valid string', output: null},
      {input: 'MORE valid strings 998762', output: CONSTANTS.VALIDATION.INVALID},
      {input: '      ', output: null},
      {input: 'some invalid chars $%^', output: CONSTANTS.VALIDATION.INVALID},
      {input: 'more invalid (*&^% chars', output: CONSTANTS.VALIDATION.INVALID}
    ];

    testBed.forEach(test => {
      it(`should return ${test.output} for ${test.input}`, () => {
        expect(GeneralValidation.containsSpecialChars(test.input)).toEqual(test.output);
      });
    });
  });


  describe('containsNonAlphaChars', () => {
    const testBed = [
      {input: 'some valid string', output: CONSTANTS.VALIDATION.INVALID},
      {input: 'MORE valid strings 998762', output: CONSTANTS.VALIDATION.INVALID},
      {input: '      ', output: CONSTANTS.VALIDATION.INVALID},
      {input: 'some invalid chars $%^', output: CONSTANTS.VALIDATION.INVALID},
      {input: 'more invalid (*&^% chars', output: CONSTANTS.VALIDATION.INVALID},
      {input: 'nospacesnonumbers', output: null}
    ];

    testBed.forEach(test => {
      it(`should return ${test.output} for ${test.input}`, () => {
        expect(GeneralValidation.containsNonAlphaChars(test.input)).toEqual(test.output);
      });
    });
  });




});
