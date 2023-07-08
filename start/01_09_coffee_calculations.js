// Coffee function:
function coffeeDate(arr) {
  let coffeeSum = arr.reduce(
    (totalCoffee, numCoffee) => (totalCoffee += numCoffee)
  );
  return `You will have to pay: $ ${coffeeSum * 1.25}`;
}
console.log(coffeeDate([5, 7, 3, 8, 1]));
