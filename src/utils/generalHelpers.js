import _constant from 'lodash/constant';
import _stubTrue from 'lodash/stubTrue';
import _get      from 'lodash/get';
import _cond     from 'lodash/cond';


export function isTrueOption (option) {
    return option === true || ['yes', 'true'].includes(option ? option.toLowerCase().trim() : null);
  }


  export function isFalseOption (option) {
    return option === true || ['no', 'false'].includes(option ? option.toLowerCase().trim() : null);
  }

  export function resolveOr (otherwise, ...args) {
    return _cond(
      args
        .map(path => obj => _get(obj, path))
        .map(fn => [fn, fn])
        .concat([[_stubTrue, _constant(otherwise)]])
    );
  }