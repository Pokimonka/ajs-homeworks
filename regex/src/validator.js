export default class Validator {
  
  validateUsername(username) {
    let notThreeNum = /\d{3,}/;
    let notFirstOrLastNum = /(^[\d_-])|([\d_-]$)/;
    let allWithoutThis = /[^a-z0-9_-]/i
    return !notThreeNum.test(username) && !notFirstOrLastNum.test(username) && !allWithoutThis.test(username);
  }

}