type One = string;
type Two = string | number;
type Three = "hello";

// convert to more or less specific
let a: One = "hello";
let b = a as Two; // less specific
let c = a as Three; // more specific

let d = <One>"world";
let e = <string | number>"world";

const add_or_concat = (a: number, b: number, c: "add" | "concat"): number | string => {
  if (c === "add") return a + b;

  return "" + a + b;
};

let my_val: string = add_or_concat(2, 2, "concat") as string;
let nextVal: number = add_or_concat(2, 2, "concat") as number; // WARNING - TS does not identify the bug here


// DOM Selection Types
const img = document.querySelector("img")!; // non null assertion
const my_img = document.getElementById("img")as HTMLImageElement;
const next_img = <HTMLImageElement>document.getElementById("img"); // This way will not work in TSX files for react

img.src;
my_img.src;

