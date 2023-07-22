export function prop(key, obj) {
    return obj[key];
}
const obj1 = { a: 1, b: 2, c: 3 };
prop("a", obj1);
prop(0, [1, 2, 3]);
prop(0, "str");
prop("toFixed", 0);
//# sourceMappingURL=05-constraints-keyof.js.map