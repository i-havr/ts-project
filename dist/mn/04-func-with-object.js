"use strict";
function printPoint(point) {
    console.log(`Coordinates of the point is x: ${point.x} and y: ${point.y}`);
}
const obj1 = {
    x: "1",
    y: "2",
};
const obj2 = {
    x: "444",
    y: "555",
    z: "999",
};
printPoint(obj1);
printPoint(obj2);
function printName(user) {
    console.log("Hello", user.firstName.toUpperCase());
    if (user.lastName) {
        console.log("Nice to meet you Mr.", user.lastName.toUpperCase());
    }
}
printName({ firstName: "Ihor" });
printName({ firstName: "Ihor", lastName: "Havrylov" });
//# sourceMappingURL=04-func-with-object.js.map