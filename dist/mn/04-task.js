"use strict";
const user123 = {
    login: "Ihor",
    email: "ihor@mail.com",
    password: "123",
    isOnline: false,
    lastVisited: new Date(2023, 7, 10),
};
const admin1 = {
    login: "MaxAdmin",
    email: "ihor@mail.com",
    password: "123",
    isOnline: false,
    lastVisited: new Date(2023, 7, 10),
    role: "admin",
};
function login(user) {
    if (user.login && user.password) {
        console.log("Greetings,", user.login.toUpperCase(), "!");
    }
    else {
        console.log("Some error!");
    }
}
login(user123);
login(admin1);
//# sourceMappingURL=04-task.js.map