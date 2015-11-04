/* ORIGINAL FIZZBUZZ SOLUTION */

for (var i=1; i <= 20; i++)
{
    if (i % 15 == 0)
        console.log("FizzBuzz");
    else if (i % 3 == 0)
        console.log("Fizz");
    else if (i % 5 == 0)
        console.log("Buzz");
    else
        console.log(i);
}

/* REFACTORED SOLUTION */

function fizzBuzzIt (n) {
  var result = [];
  if (typeof n !== 'number') {
    return 'Input must be an integer.';
  }
  for (var i = 1; i <= n; i++) {
    var output = '';
    if (i % 3 === 0) output += 'Fizz';
    if (i % 5 === 0) output += 'Buzz';
    result.push(output || i);
  }
  return result;
}