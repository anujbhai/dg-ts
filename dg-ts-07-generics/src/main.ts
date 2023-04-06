const str_echo = <T>(arg: T): T => arg;

console.log("str_echo: ", str_echo("humein pato hai!"));
console.log("str_echo: ", str_echo(123));
console.log("str_echo: ", str_echo(true));

// checking object
const is_obj = <T>(arg: T): boolean => {
  return (typeof arg === "object" && !Array.isArray(arg) && arg !== null);
};

console.log(is_obj(true));
console.log(is_obj("John"));
console.log(is_obj([1, 2, 3]));
console.log(is_obj({name: "Anuj"}));
console.log(is_obj(null));

const is_true = <T>(arg: T): {arg: T, is: boolean} => {
  if (Array.isArray(arg) && !arg.length) {
    return {arg, is: false};
  }

  if (is_obj(arg) && !Object.keys(arg as keyof T).length) {
    return {arg, is: false};
  } 

  return {arg, is: !!arg};
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
console.log(is_true({name: "Anuj"}));
console.log(is_true([]));
console.log(is_true([1, 2, 3]));
console.log(is_true(NaN));
console.log(is_true(-0));

// type variable with interface
interface bool_check<T> {
  value: T,
  is: boolean,
}

const check_bool_val = <T>(arg: T): bool_check<T> => {
  if (Array.isArray(arg) && !arg.length) {
    return {value: arg, is: false};
  }

  if (is_obj(arg) && !Object.keys(arg as keyof T).length) {
    return {value: arg, is: false};
  } 

  return {value: arg, is: !!arg};
};

