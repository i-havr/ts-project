function isAnInternetOrder(order) {
    return !!order && "email" in order;
}
function isATelephoneOrder(order) {
    return !!order && "callerNumber" in order;
}
function makeOrder(order) {
    if (isAnInternetOrder(order)) {
        console.log(order.email);
    }
    else if (isATelephoneOrder(order)) {
        console.log(order.callerNumber);
    }
}
export {};
//# sourceMappingURL=05-task.js.map