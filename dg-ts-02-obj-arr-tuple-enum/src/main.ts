let str_arr: string[] = ["one", "hey", "Anuj"];
let guitars: string[] = ["Tele", "Les Paul", "Casino"];
let mixed_data: (string | number | boolean)[] = ["EVH", 1984, true];
let test: any[] = [];
let bands: string[] = [
  "Slipknot",
  "Slayer"
];
bands.push("Thin Lizzy");

// tuple
let my_tuple: [string, number, boolean] = ["Dave", 42, true];

// objects
let example_object = {
  prop1: "Dave",
  prop2: true,
};

// annotating types for objects
interface Guitarist {
  name?: string,
  active?: boolean,
  albums: (string | number)[]
}

let ritchie: Guitarist = {
  name: "Ritchie Blackmore",
  albums: [
    "Rising",
    "Right between the eyes"
  ]
};

let jimi: Guitarist = {
  name: "Jimi Hendrix",
  active: false,
  albums: [
    "Blues",
    "Are you experienced?"
  ]
};

const greet_guitarist = (guitarist: Guitarist) => {
  if (guitarist.name) {
    return `Hello ${guitarist.name?.toUpperCase()}!`;
  }

  return "Hello!";
};
console.log(greet_guitarist(jimi));

