"use strict";
let str_arr = ["one", "hey", "Anuj"];
let guitars = ["Tele", "Les Paul", "Casino"];
let mixed_data = ["EVH", 1984, true];
let test = [];
let bands = [
    "Slipknot",
    "Slayer"
];
bands.push("Thin Lizzy");
// tuple
let my_tuple = ["Dave", 42, true];
// objects
let example_object = {
    prop1: "Dave",
    prop2: true,
};
let ritchie = {
    name: "Ritchie Blackmore",
    albums: [
        "Rising",
        "Right between the eyes"
    ]
};
let jimi = {
    name: "Jimi Hendrix",
    active: false,
    albums: [
        "Blues",
        "Are you experienced?"
    ]
};
const greet_guitarist = (guitarist) => {
    var _a;
    if (guitarist.name) {
        return `Hello ${(_a = guitarist.name) === null || _a === void 0 ? void 0 : _a.toUpperCase()}!`;
    }
    return "Hello!";
};
console.log(greet_guitarist(jimi));
