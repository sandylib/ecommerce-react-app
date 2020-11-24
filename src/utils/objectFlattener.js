import flatten from 'flat'
import changeCaseObject from 'change-case-object';


const _objetToCamelKey = (flatObject) => {
    const newObject = {};
    for (let i = 0; i < Object.keys(flatObject).length; i++) {
      let newKey = Object.keys(flatObject)[i];
      const oldKey = Object.keys(flatObject)[i];
  
      newKey = changeCaseObject.camelCase(newKey);
      newObject[newKey] = flatObject[oldKey];
    }
    return newObject;

}

const _checkValueType = (value) => typeof value;
const _toLowerHyphenFormat = data => {
    return data
      ? data
          .toString()
          .toLowerCase()
          .replace(/-+/g, ' ')
          .replace(/\s+/g, '-')
          .replace(/_/g, '-')
      : '';
  };

const _nestedObjectFlattener = (flattenObject, targetObject, value) => {
    const target = targetObject;
    const flattenObjectkey = Object.keys(flattenObject);

    for (let i = 0; i < flattenObjectkey.length; i++) { 
        const flattenObjectKey = `${value}-${flattenObjectkey[i]}`;
        const flattenValueType = _checkValueType(flattenObject[flattenObjectkey[i]]);
        switch (flattenValueType) {
            case 'boolean':
            case 'number':
              target[flattenObjectKey] = flattenObject[flattenObjectkey[i]];
              break;
            case 'string': {
              // Empty value set to null
              if (flattenObject[flattenObjectkey[i]] === '') {
                target[flattenObjectKey] = null;
                break;
              }
              target[flattenObjectKey] = _toLowerHyphenFormat(flattenObject[flattenObjectkey[i]]);
              break;
            }
            case 'object':
            default:
            // Empty value set to null
              target[flattenObjectKey] = null;
              break;
          }
        }

    }



const _flattenObjectHandler = (sourceObject, targeObject) => {

    const source = sourceObject;
    const target = targeObject;

    Object.keys(source).forEach(value => {
        switch(_checkValueType(source[value])) {
            case 'object': {
                if(source[value] === null) {
                    target[value] = null;
                    break;
                }
                const flattenObject = _objetToCamelKey(flatten(source[value]))
                _nestedObjectFlattener(flattenObject, target, value);
                break;
            }
            case 'string': {
                 // Set null when object is empty
                if (source[value] === null) {
                    target[value] = null;
                    break;
                }
                target[value] = _toLowerHyphenFormat(source[value]);

                break;
            }
            case 'boolean':
            case 'number': {
                target[value] = source[value];
                break;
            }
            default:
                target[value] = null;
                break;
        }
    })

    return target;

}


export const reducerToDataLayerHandler = (object) => {
    let flatObject = {};
    const reducerObject = {...object};

    flatObject = _flattenObjectHandler(reducerObject, flatObject);

    return _objetToCamelKey(flatObject);

}