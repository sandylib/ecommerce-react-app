import { createActionCreator } from './state';

describe('createAction', () => {
  it('should return an action creator function with a type', () => {
    const actionCreator = createActionCreator('MY_TEST_TYPE', () => {
      return { abc: 123 };
    });
    expect(actionCreator()).toEqual({
      type: 'MY_TEST_TYPE',
      abc: 123,
    });
  });

  it('should support arguments to the action creator', () => {
    const actionCreator = createActionCreator('ANOTHER_TEST_TYPE', (value) => {
      return { value };
    });
    expect(actionCreator('hi')).toEqual({
      type: 'ANOTHER_TEST_TYPE',
      value: 'hi',
    });
  });

  it('should support simple actions with only a type', () => {
    const actionCreator = createActionCreator('SOME_TYPE');
    expect(actionCreator()).toEqual({ type: 'SOME_TYPE' });
  });

  it('should assign the type to a type property of the function', () => {
    const actionCreator = createActionCreator('YO');
    expect(actionCreator.type).toEqual('YO');
  });

  it('should return the type from the toString method', () => {
    const actionCreator = createActionCreator('YO');
    expect(actionCreator.toString()).toEqual('YO');
  });
});
