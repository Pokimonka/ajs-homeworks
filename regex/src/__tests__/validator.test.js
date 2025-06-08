import Validator from "../validator";

describe('test validator.js', () => {
  const validator = new Validator();

  test('valid. "Допустимы только латинские буквы, символы тире -, подчёркивания _ и цифры (0-9)"', () => {
    const data = 'afafafKHGJHHV8d67d3_-_-_-_---f'
    expect(validator.validateUsername(data)).toBeTruthy();
  });

  test('invalid. wrong symbol. "Допустимы только латинские буквы, символы тире -, подчёркивания _ и цифры (0-9)"', () => {
    const data = 'afafafKHG комбо-брэйкер!!! JHHV876763_-_-_-_---f'
    expect(validator.validateUsername(data)).toBeFalsy();
  });

  test('invalid. 3  digits. "Имя не должно содержать подряд более трёх цифр, а также начинаться и заканчиваться цифрами, символами подчёркивания или тире"', () => {
    const data = 'DW876763_-_-_-_---_'
    expect(validator.validateUsername(data)).toBeFalsy();
  });

  test('invalid. wrong symbol aside. "Имя не должно содержать подряд более трёх цифр, а также начинаться и заканчиваться цифрами, символами подчёркивания или тире"', () => {
    const data = '_afafafKHGJHHV_-_-_-_---4'
    expect(validator.validateUsername(data)).toBeFalsy();
  });

});