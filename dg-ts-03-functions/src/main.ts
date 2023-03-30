// Type aliases
type stringOrNumber = string | number;
type stringOrNumberArray = (string | number)[];

// annotating types for objects with type aliasing
type Guitarist = {
  name?: string,
  active?: boolean,
  albums: stringOrNumberArray
};

type UserId = stringOrNumber;

// -- type aliasing is not supported in interfaces --

// literal types
// let name: "Anuj";

let username: "Dave" | "John" | "Amy";

username = "Amy";

/*------------------ Function -------------------*/
const add = (a: number, b: number): number => {
  return a + b;
};

const log_msg = (msg: any): void => {
  console.log(msg);
};
console.log("Hello!");
console.log(add(2, 3));

// create a function type alias for the above example
type math_fn = (a: number, b: number) => number;

const multiply: math_fn = function (param1, param2) {
  return param1 * param2;
};

log_msg(multiply(2, 2));

// function interface
interface math_fn2 {
  (a: number, b: number): number
}

const subtract: math_fn2 = function (param1, param2) {
  return param1 - param2;
};

log_msg(subtract(10, 1));

// optional params
const add_all = (a: number, b: number, c?: number): number => {
  // type narrowing
  if (typeof c !== "undefined") return a + b + c;

  return a + b;
};

const sum_all = (a: number, b: number, c: number = 2): number => {
  return a + b + c;
};

log_msg(add_all(2, 3, 2));
log_msg(add_all(2, 3));
log_msg(sum_all(2, 3));

// rest params
const total = (a: number, ...nums: number[]): number => {
  return a + nums.reduce((prev, curr) => prev + curr);
};
log_msg(total(1, 2));

// never type
// usually for functions that output some error or infinite loop
const create_err = (err_msg: string) => {
  throw new Error(err_msg);
};

const is_number = (val: any): boolean => {
  return typeof val === "number"
    ? true
    : false;
};
const num_or_str = (val: stringOrNumber): string => {
  if (typeof val === "string") return "string";
  if (is_number(val)) return "number";

  return create_err("This should never happen");
};


