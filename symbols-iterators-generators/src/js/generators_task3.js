export default function canIterate(obj) {
    if(obj === null || typeof obj === 'undefined') {
        return false;

    }
    return typeof obj[Symbol.iterator] === 'function';

}