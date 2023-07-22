function isFish(pet) {
    return pet.swim !== undefined;
}
export function move(animal) {
    if (isFish(animal)) {
        return animal.swim();
    }
    return animal.fly();
}
//# sourceMappingURL=05-type-guards.js.map