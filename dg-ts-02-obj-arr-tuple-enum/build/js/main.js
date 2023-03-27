"use strict";
let string_arr = ['one', 'hey', 'Dave'];
let guitars = ['Strat', 'Les Paul', 5150];
let mixed_data = ['EVH', 1984, true];
string_arr[0] = "John";
string_arr.push("hey");
guitars[0] = 1984;
guitars.unshift("Jim");
let test = [];
let bands = [];
bands.push("Van Halen");
// Tuple
let my_tuple = ["Anuj", 37, true];
// Objects
let my_obj;
my_obj = [];
console.log(typeof my_obj);
my_obj = bands;
my_obj = {};
const example_obj = {
    prop1: "Chandrakala",
    prop2: true
};
example_obj.prop1 = "John";
;
let marty = {
    name: "Marty",
    albums: ["Dragon's Kiss", "Scenes", "True Obsession"]
};
let dimebag = {
    name: "Dimebag",
    active: false,
    albums: [
        "Far Beyond Driven",
        "Vulgar Display of Power",
        "Cowboys From Hell"
    ]
};
const greetGuitarist = (guitarist) => {
    // type narrowing
    if (guitarist.name)
        return `Hello ${guitarist.name.toUpperCase()}!`;
    return "Hello!";
};
console.log(greetGuitarist(dimebag));
