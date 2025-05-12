// Problem 1

const people = [
  { name: "Alice", age: 25, gender: "female" },
  { name: "Bob", age: 30, gender: "male" },
  { name: "Charlie", age: 22, gender: "male" },
  { name: "Diana", age: 28, gender: "female" },
  { name: "Evan", age: 35, gender: "male" },
];

const removeFemale = (arr) => {
  const remaining = arr.filter((item) => item.gender !== "female");
  const allNames = remaining.map((item) => item.name);
  console.log(allNames);
};

removeFemale(people);
