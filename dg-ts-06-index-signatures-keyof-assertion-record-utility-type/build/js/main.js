"use strict";
const todays_transactions = {
    Pizza: -10,
    Books: -5,
    Job: 50
};
console.log(todays_transactions.Pizza);
console.log(todays_transactions["Pizza"]);
let prop = "Pizza";
console.log(todays_transactions[prop]);
const todays_net = (transactions) => {
    let total = 0;
    for (const transaction in transactions) {
        total += transactions[transaction];
    }
    return total;
};
console.log(todays_net(todays_transactions));
const student = {
    name: "Doug",
    GPA: 3.5,
    classes: [100, 200]
};
// console.log(student.test); // pitfall: TS doesn't know which key will be available in future
for (let key in student) {
    console.log(`${key}: ${student[key]}`); // 'keyof' provides a union type of all values in interface object (Student)
}
Object.keys(student).map(key => {
    console.log(student[key]);
});
const log_student_key = (student, key) => {
    console.log(`Student ${key}: ${student[key]}`);
};
log_student_key(student, "name");
const monthly_incomes = {
    salary: 500,
    bonus: 100,
    sidehustle: 250,
};
for (const revenue in monthly_incomes) {
    console.log(monthly_incomes[revenue]); // asserting keyof type
}
