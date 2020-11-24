import {reducerToDataLayerHandler} from './objectFlattener';

const test = {
    description: 'Accident - No details known',
    input: {
      FirstChild : {
        property1: '',
        grandChild : {
          property1 : '123',
          property2: ['array1', 'array2'],
          property3: null
        }
      }
    },
    output: {
      'firstChildGrandChildProperty1': '123',
      'firstChildGrandChildProperty2_0': 'array1',
      'firstChildGrandChildProperty2_1': 'array2',
      'firstChildGrandChildProperty3': null,
      'firstChildProperty1': null
    }
  };



describe.only('Testing Object Flattening', () => {
  it('Flat the nested Object into a flatten object.', () => {
      expect(reducerToDataLayerHandler(test.input)).toEqual(test.output);
  });
});