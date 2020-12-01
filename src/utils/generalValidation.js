import CONSTANTS from '../constants/applicationConstants';

export default class GeneralValidation {
  static validateAlphaNumericWithSpaces = text => {
    const allowableChars = /^([a-zA-Z0-9 ])+$/;
    if (!allowableChars.test(text)) return CONSTANTS.VALIDATION.INVALID;
    return null;
  };

  static containsSpecialChars = (text) => {
    const normalChars = /^([a-zA-Z '-])+$/;
    if (!normalChars.test(text)) return CONSTANTS.VALIDATION.INVALID;
    return null;
  };
  
  static containsNonAlphaChars = (text) => {
    const normalChars = /^([a-zA-Z])+$/;
    if (!normalChars.test(text)) return CONSTANTS.VALIDATION.INVALID;
    return null;
  };
}
