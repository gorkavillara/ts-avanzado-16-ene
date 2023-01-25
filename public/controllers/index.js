"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.factorial = void 0;
const factorial = (num) => {
    let fact = 1;
    for (let i = num; i > 1; i--) {
        fact *= i;
    }
    return fact;
};
exports.factorial = factorial;
