// PRIVATE OBJECT:
// USE OF Symbol TO CREATE PRIVATE VARIABLES
// @ without private
const username = Symbol("username");
const password = Symbol("password");
const objectOne = {
  username: "Faizan Ahmad",
  password: "Faizy",
  age: 21,
};

console.log(objectOne.username);
console.log(objectOne.password);

// @ with private through symbols
const userName = Symbol("username");
const passWord = Symbol("password");
const ObjectOne = {
  [username]: "Faizan Ahmad",
  [password]: "Faizy",
  age: 21,
};

console.log(ObjectOne.username);
console.log(ObjectOne.password);
