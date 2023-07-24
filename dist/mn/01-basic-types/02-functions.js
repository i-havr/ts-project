function sum(a, b) {
    return a + b;
}
function log(name, userId) {
    console.log("Hello", name, "with ID", userId || "anonym");
}
function crash() {
    throw new Error("crash");
}
export const average = (...nums) => {
    const sum = nums.reduce((current, total) => current + total, 0);
    return sum / nums.length;
};
//# sourceMappingURL=02-functions.js.map