"use strict";
// convert to more or less specific
let a = "hello";
let b = a; // less specific
let c = a; // more specific
let d = "world";
let e = "world";
const add_or_concat = (a, b, c) => {
    if (c === "add")
        return a + b;
    return "" + a + b;
};
let my_val = add_or_concat(2, 2, "concat");
let nextVal = add_or_concat(2, 2, "concat"); // WARNING - TS does not identify the bug here
// DOM Selection Types
const img = document.querySelector("img"); // non null assertion
const my_img = document.getElementById("img");
const next_img = document.getElementById("img"); // This way will not work in TSX files for react
img.src;
my_img.src;
