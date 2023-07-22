function add(a, b) {
    return a + b;
}
add(1, 1);
function asyncSum(a, b, cb) {
    const result = a + b;
    if (cb) {
        return cb(result);
    }
    return Promise.resolve(result);
}
asyncSum(1, 2);
export {};
//# sourceMappingURL=08-overloads.js.map