
import {
  
    isFalseOption,
    isTrueOption,
    resolveOr
  } from './generalHelpers';


describe('UNIT/UTILS - isTrueOption', () => {
    const testBed = [
      {input: 'yes', output: true},
      {input: ' yes ', output: true},
      {input: 'YES', output: true},
      {input: 'true', output: true},
      {input: 'TRUE', output: true},
      {input: 'TRue', output: true},
      {input: true, output: true},
      {input: 'no', output: false},
      {input: 'NO', output: false},
      {input: 'anything', output: false},
      {input: 'false', output: false},
      {input: 'FALSE', output: false},
      {input: '', output: false},
      {input: false, output: false},
      {input: null, output: false},
      {input: undefined, output: false}
    ];
    testBed.forEach(test => {
      it(`${test.input} should resolve to ${test.output}`, () => {
        expect(isTrueOption(test.input)).toEqual(test.output);
      });
    });
  });

  describe.skip('UNIT/UTILS - isFalseOption', () => {
    const testBed = [
      {input: 'yes', output: false},
      {input: ' yes ', output: false},
      {input: 'YES', output: false},
      {input: 'true', output: false},
      {input: 'TRUE', output: false},
      {input: 'TRue', output: false},
      {input: true, output: false},
      {input: 'no', output: true},
      {input: 'NO', output: true},
      {input: 'anything', output: false},
      {input: 'false', output: true},
      {input: 'FALSE', output: true},
      {input: '', output: false},
      {input: false, output: true},
      {input: null, output: false},
      {input: undefined, output: false}
    ];
    testBed.forEach(test => {
      it(`${test.input} should resolve to ${test.output}`, () => {
        expect(isFalseOption(test.input)).toEqual(test.output);
      });
    });
  });


  describe('UNIT/UTILS - resolveOr', () => {
    const testBed = [
      {obj: {firstName: 'TEST'}, output: 'TEST'},
      {obj: {firstName: 'test test'}, output: 'test test'},
      {obj: {first_name: 'TEST'}, output: 'TEST'},
      {obj: {nested: {lastname: 'TEST'}}, output: 'TEST'},
      {obj: {foo: 'TEST'}, output: null},
      {obj: {bar: 'TEST'}, output: null},
      {obj: {first_name: null}, output: null},
      {obj: {first_name: undefined}, output: null}
    ];
    describe('should return the correct value when a firstName and lastName are passed in', () => {
      testBed.forEach(test => {
        it(`${test.obj} ${test.output}`, () => {
          expect(resolveOr(null, 'first_name', 'firstName', 'nested.lastname')(test.obj)).toEqual(test.output);
        });
      });
    });
  });