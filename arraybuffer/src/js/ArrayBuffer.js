

export default class ArrayBufferConverter {
    constructor() {
        this.buffer;

    }
    load(buffer) {
        if (!(buffer instanceof ArrayBuffer)) {
            throw new Error('Буфер должен быть ArrayBuffer')
        }
        this.buffer = buffer;
    }

    toString() {
        if (!this.buffer) {
            throw new Error('Буфер пуст нечего конвертировать');
        }
        const bufferView = new Uint16Array(this.buffer);
        return Array.from(bufferView).map(view => String.fromCharCode(view)).join('');
    }
}