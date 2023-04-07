"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
const update_assignment = (assign, propsToUpdate) => {
    return Object.assign(Object.assign({}, assign), propsToUpdate);
};
const assign_1 = {
    studentId: "compsci123",
    title: "Final Project",
    grade: 0,
};
console.log(update_assignment(assign_1, { grade: 95 }));
const assign_graded = update_assignment(assign_1, { grade: 95 });
// -- required & readonly
const record_assignment = (assign) => {
    // send to database
    return assign;
};
const assign_verified = Object.assign(Object.assign({}, assign_graded), { verified: true });
record_assignment(Object.assign(Object.assign({}, assign_graded), { verified: true }));
// record utility
const hex_color_map = {
    red: "FF0000",
    green: "00FF00",
    blue: "0000FF"
};
const final_grades = {
    "Sara": "B",
    "Kelly": "U"
};
const grade_data = {
    Sara: { assign_1: 85, assign_2: 93 },
    Kelly: { assign_1: 76, assign_2: 15 },
};
const score = {
    studentId: "k123",
    grade: 85,
};
const preview = {
    studentId: "k123",
    title: "Final Project",
};
// Return type
/*type NewAssign = {
  title: string,
  points: number
};*/
const create_new_assign = (title, points) => {
    return { title, points };
};
const ts_assign = create_new_assign("Utility Types", 100);
console.log(ts_assign);
const assign_args = ["Generics", 100];
const ts_assign2 = create_new_assign(...assign_args);
console.log(ts_assign2);
const fetch_users = () => __awaiter(void 0, void 0, void 0, function* () {
    const data = yield fetch("https://jsonplaceholder.typicode.com/users")
        .then(res => {
        return res.json();
    })
        .catch(err => {
        if (err instanceof Error)
            console.log(err.message);
    });
    return data;
});
fetch_users().then(users => console.log(users));
