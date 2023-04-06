"use strict";
const str_echo = (arg) => arg;
console.log("str_echo: ", str_echo("humein pato hai!"));
console.log("str_echo: ", str_echo(123));
console.log("str_echo: ", str_echo(true));
// checking object
const is_obj = (arg) => {
    return (typeof arg === "object" && !Array.isArray(arg) && arg !== null);
};
console.log(is_obj(true));
console.log(is_obj("John"));
console.log(is_obj([1, 2, 3]));
console.log(is_obj({ name: "Anuj" }));
console.log(is_obj(null));
const is_true = (arg) => {
    if (Array.isArray(arg) && !arg.length) {
        return { arg, is: false };
    }
    if (is_obj(arg) && !Object.keys(arg).length) {
        return { arg, is: false };
    }
    return { arg, is: !!arg };
};
console.log(is_true(false));
console.log(is_true(0));
console.log(is_true(true));
console.log(is_true(1));
console.log(is_true("Dave"));
console.log(is_true(""));
console.log(is_true(null));
console.log(is_true(undefined));
console.log(is_true({}));
console.log(is_true({ name: "Anuj" }));
console.log(is_true([]));
console.log(is_true([1, 2, 3]));
console.log(is_true(NaN));
console.log(is_true(-0));
const check_bool_val = (arg) => {
    if (Array.isArray(arg) && !arg.length) {
        return { value: arg, is: false };
    }
    if (is_obj(arg) && !Object.keys(arg).length) {
        return { value: arg, is: false };
    }
    return { value: arg, is: !!arg };
};
