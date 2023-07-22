function gradeDeveloper(dev, newLevel) {
    dev.level = newLevel;
}
const dev1 = {
    login: "ihor",
    skills: ["react", "node", "redux"],
    level: "junior",
};
gradeDeveloper(dev1, "middle");
console.log(dev1);
export {};
//# sourceMappingURL=08-union-task.js.map