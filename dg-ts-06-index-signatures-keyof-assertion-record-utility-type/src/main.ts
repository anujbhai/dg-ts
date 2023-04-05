// Index Signatures
interface TransactionObj {
  readonly [index: string]: number
  Pizza: number,
  Books: number,
  Job: number,
}

const todays_transactions: TransactionObj = {
  Pizza: -10,
  Books: -5,
  Job: 50
};

console.log(todays_transactions.Pizza);
console.log(todays_transactions["Pizza"]);

let prop: string = "Pizza";

console.log(todays_transactions[prop]);

const todays_net = (transactions: TransactionObj): number => {
  let total = 0;

  for (const transaction in transactions) {
    total += transactions[transaction];
  }

  return total;
};

console.log(todays_net(todays_transactions));

interface Student {
  // [key: string]: string | number | number[] | undefined,
  name: string,
  GPA: number,
  classes?: number[],
}

const student: Student = {
  name: "Doug",
  GPA: 3.5,
  classes: [100, 200]
};
// console.log(student.test); // pitfall: TS doesn't know which key will be available in future

for (let key in student) {
  console.log(`${key}: ${student[key as keyof Student]}`); // 'keyof' provides a union type of all values in interface object (Student)
}

Object.keys(student).map(key => {
  console.log(student[key as keyof typeof student]);
});

const log_student_key = (student: Student, key: keyof Student): void => {
  console.log(`Student ${key}: ${student[key]}`);
};

log_student_key(student, "name");

/* interface Incomes {
  [key: string]: number,
} */

type Streams = "salary" | "bonus" | "sidehustle";

type Incomes = Record<Streams, number>;

const monthly_incomes: Incomes = {
  salary: 500,
  bonus: 100,
  sidehustle: 250,
};

for (const revenue in monthly_incomes) {
  console.log(monthly_incomes[revenue as keyof Incomes]); // asserting keyof type
}

