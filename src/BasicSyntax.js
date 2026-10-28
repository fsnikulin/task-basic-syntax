const ROMAN_VALUES = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000,
};

export function romanToInteger(str) {
    let result = 0;
    for (let i = 0; i < str.length; i++) {
        const current = ROMAN_VALUES[str[i]];
        const next = ROMAN_VALUES[str[i + 1]];
        if (next !== undefined && current < next) {
            result -= current;
        } else {
            result += current;
        }
    }
    return result;
}
