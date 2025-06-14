import canIterate from "../js/generators_task3";

const dataList = [
    [
        new Map(), true
    ],
    [
        new Set(), true
    ],
    [
        null, false
    ],
    [
        10, false
    ],
    [
        "Netology", true
    ],
]

test.each(dataList)('can iterable test', (obj, result) => {
    expect(canIterate(obj)).toBe(result); 
})