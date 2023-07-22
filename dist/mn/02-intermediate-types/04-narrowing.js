function example1(x) {
    if (typeof x === "string") {
        x.toLowerCase();
    }
    else if (typeof x === "number") {
        x.toFixed();
    }
    else if (x === undefined) {
        console.log("no value");
    }
    else {
        x;
    }
}
function example2(strs) {
    if (strs && typeof strs === "object") {
        strs.concat([]);
    }
    else if (typeof strs === "string") {
        strs.toLowerCase();
    }
}
function example3(x) {
    if (x instanceof Date) {
        x.getMonth();
    }
    else {
        x.concat([]);
    }
}
function move(animal) {
    if ("swim" in animal) {
        return animal.swim();
    }
    return animal.fly();
}
export {};
//# sourceMappingURL=04-narrowing.js.map