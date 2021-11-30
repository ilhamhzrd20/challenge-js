// Expected Result = 55
// Direction : Return sum of array
const input = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

function result(input) {
  let total = 0
  for (var i in input) {
    total += input[i]
  }
  return total
}

console.log(result(input));