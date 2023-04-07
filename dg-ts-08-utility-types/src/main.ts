// Utility types
// -- Partials
interface Assignment {
  studentId: string,
  title: string,
  grade: number,
  verified?: boolean,
}

const update_assignment = (assign: Assignment, propsToUpdate: Partial<Assignment>): Assignment => {
  return {
    ...assign,
    ...propsToUpdate
  };
}

const assign_1: Assignment = {
  studentId: "compsci123",
  title: "Final Project",
  grade: 0,
};

console.log(update_assignment(assign_1, {grade: 95}));

const assign_graded: Assignment = update_assignment(assign_1, {grade: 95});

// -- required & readonly
const record_assignment = (assign: Required<Assignment>): Assignment => {
  // send to database
  return assign;
};

const assign_verified: Readonly<Assignment> = {...assign_graded, verified: true};

record_assignment({...assign_graded, verified: true});

// record utility
const hex_color_map: Record<string, string> = {
  red: "FF0000",
  green: "00FF00",
  blue: "0000FF"
};

type Students = "Sara" | "Kelly";
type LetterGrades = "A" | "B" | "C" | "D" | "U";

const final_grades: Record<Students, LetterGrades> = {
  "Sara": "B",
  "Kelly": "U"
};

interface Grades {
  assign_1: number,
  assign_2: number,
}

const grade_data: Record<Students, Grades> = {
  Sara: {assign_1: 85, assign_2: 93},
  Kelly: {assign_1: 76, assign_2: 15},
};

// Pick and Omit
type AssignResult = Pick<Assignment, "studentId" | "grade">;

const score: AssignResult = {
  studentId: "k123",
  grade: 85,
};

type AssignPreview = Omit<Assignment, "grade" | "verified">;

const preview: AssignPreview = {
  studentId: "k123",
  title: "Final Project",
};

// Exclude and Extract (with string literals)
type AdjustGrade = Exclude<LetterGrades, "U">;
type HighGrade = Extract<LetterGrades, "A" | "B">;

// Nonnullable
type AllPossibleGrades = "Dave" | "John" | null | undefined;

type NamesOnly = NonNullable<AllPossibleGrades>;

// Return type
/*type NewAssign = {
  title: string,
  points: number
};*/

const create_new_assign = (title: string, points: number)  => {
  return {title, points};
};

type NewAssign = ReturnType<typeof create_new_assign>;

const ts_assign: NewAssign = create_new_assign("Utility Types", 100);
console.log(ts_assign);

// Parameters
type AssignParams = Parameters<typeof create_new_assign>;

const assign_args: AssignParams = ["Generics", 100];
const ts_assign2: NewAssign = create_new_assign(...assign_args);
console.log(ts_assign2);

// Awaited (introduced newly into TS)
interface User {
  id: number,
  name: string,
  username: string,
  email: string,
}

const fetch_users = async (): Promise<User[]> => {
  const data = await fetch("https://jsonplaceholder.typicode.com/users")
    .then(res => {
      return res.json();
    })
    .catch(err => {
      if (err instanceof Error) console.log(err.message);
    });

  return data;
};

type FetchUsersReturnType = Awaited<ReturnType<typeof fetch_users>>;

fetch_users().then(users => console.log(users));

