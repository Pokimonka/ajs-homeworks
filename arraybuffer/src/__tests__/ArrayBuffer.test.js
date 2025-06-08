import getBuffer from '../js/GetBuffer.js';
import ArrayBufferConverter from '../js/ArrayBuffer.js';

describe('ArrayBufferConverter', () => {
    test('load(). Верная загрузка', () => {
        const buffer = getBuffer();
        const convert = new ArrayBufferConverter();
        convert.load(buffer);
        expect(convert.buffer).toBe(buffer)
    });

    test('load(). Выбрашена ошибка при невалидном аргументе', () => {
        const convert = new ArrayBufferConverter();
        convert.load(getBuffer());
        const str = convert.toString();
        expect(str).toBe('{"data":{"user":{"id":1,"name":"Hitman","level":10}}}');
    });

    test('toString(). Верная конвертация в сторку', () => {
        const convert = new ArrayBufferConverter();
        expect(() => convert.load('not a buffer')).toThrow('Буфер должен быть ArrayBuffer');
    });

    test('toString(). Ошибка, если нет буфера', () => {
        const convert = new ArrayBufferConverter();
        expect(() => convert.toString()).toThrow('Буфер пуст нечего конвертировать');
    });
})