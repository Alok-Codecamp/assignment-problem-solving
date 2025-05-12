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

// removeFemale(people);
// end problem 1

// start proble 2

const books = [
  {
    title: "The Catcher in the Rye",
    author: "J.D. Salinger",
    year: 1951,
  },
  {
    title: "To Kill a Mockingbird",
    author: "Harper Lee",
    year: 1960,
  },
  {
    title: "1984",
    author: "George Orwell",
    year: 1949,
  },
  {
    title: "Pride and Prejudice",
    author: "Jane Austen",
    year: 1813,
  },
];

const getBooksTitle = (arr) => {
  const bookTitle = arr.map((item) => item.title);
  return bookTitle;
};
// console.log(getBooksTitle(books));

// proble 2 end

// start problem 3

const squareNumber = (num) => {
  return num * num;
};

const doubleNumber = (num) => {
  return num * 2;
};

const addToFive = (num) => {
  return num + 5;
};

const squreDoubleAddFive = (num) => {
  const squere = squareNumber(num);
  const double = doubleNumber(squere);
  const addFive = addToFive(double);
  return addFive;
};

// console.log(squreDoubleAddFive(2));

// problem 3 end

// problem 4 start

const cars = [
  {
    make: "Toyota",
    model: "Corolla",
    year: 2020,
  },
  {
    make: "Honda",
    model: "Civic",
    year: 2019,
  },
  {
    make: "Ford",
    model: "Mustang",
    year: 2022,
  },
  {
    make: "Tesla",
    model: "Model 3",
    year: 2023,
  },
  {
    make: "Bmw",
    model: "Model 6",
    year: 2011,
  },
];

const sortArrayAscending = (arr) => {
  const sortedArray = arr.sort((item1, item2) => item1.year - item2.year);
  return sortedArray;
};

// console.log(sortArrayAscending(cars));

// problem 4 end

// problem 5 start

const randomNumbers = [2, 12, 7, 18, 9, 22, 13, 30, 17, 8];

const sumEvenNumber = (arr) => {
  const sum = arr.reduce(
    (acc, currentValue) => (currentValue % 2 === 0 ? acc + currentValue : acc),
    0
  );
  return sum;
};

console.log(sumEvenNumber(randomNumbers));
// problem 5 end

// problem 6 start
