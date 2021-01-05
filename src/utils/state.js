export const createActionCreator = (type, fn) => {
    const actionCreator = (...args) => {
      if (typeof fn === 'function') {
        return {
          ...fn(...args),
          type,
        }
      }
      return {
        type,
      };
    };
    actionCreator.toString = () => type;
    actionCreator.type = type;
    return actionCreator;
  };