// IMPORTANT FOR INTERVIEWS
// String Permutation | Recursion
// function numPermutations(letters) {
//   let total;
//   for (let i = 1; i <= letters.length; i++) {
//     if (total === undefined) {
//       total = i;
//       continue;
//     }
//     total = i;
//   }
//   return total;
//   // The code after this point is missing
// }
// console.log(numPermutations("hello"));
// _________________________________________________
// Other method for Permutation
function numPermutations(letters) {
  if (letters.length === 1) {
    return 1;
  }
  return letters.length * numPermutations(letters.slice(1));
}
