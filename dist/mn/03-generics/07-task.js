export function createMap(list) {
    return function (cb) {
        const result = [];
        for (let el of list) {
            result.push(cb(el));
        }
        return result;
    };
}
const mapNums = createMap([1, 2, 3]);
const result = mapNums((num) => num + 2);
//# sourceMappingURL=07-task.js.map