"use strict";
// -- type aliasing is not supported in interfaces --
// literal types
// let name: "Anuj";
let username;
username = "Amy";
/*------------------ Function -------------------*/
const add = (a, b) => {
    return a + b;
};
const log_msg = (msg) => {
    console.log(msg);
};
console.log("Hello!");
console.log(add(2, 3));
const multiply = function (param1, param2) {
    return param1 * param2;
};
log_msg(multiply(2, 2));
const subtract = function (param1, param2) {
    return param1 - param2;
};
log_msg(subtract(10, 1));
// optional params
const add_all = (a, b, c) => {
    // type narrowing
    if (typeof c !== "undefined")
        return a + b + c;
    return a + b;
};
const sum_all = (a, b, c = 2) => {
    return a + b + c;
};
log_msg(add_all(2, 3, 2));
log_msg(add_all(2, 3));
log_msg(sum_all(2, 3));
// rest params
const total = (a, ...nums) => {
    return a + nums.reduce((prev, curr) => prev + curr);
};
log_msg(total(1, 2));
// never type
// usually for functions that output some error or infinite loop
const create_err = (err_msg) => {
    throw new Error(err_msg);
};
const is_number = (val) => {
    return typeof val === "number"
        ? true
        : false;
};
const num_or_str = (val) => {
    if (typeof val === "string")
        return "string";
    if (is_number(val))
        return "number";
    return create_err("This should never happen");
};
