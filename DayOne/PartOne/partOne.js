function solve(input) {
  let counter = 0;

  for (let i = 1; i < input.length; i++)
  {
      if (input[i-1] < input[i])
      {
          counter++;
      }
  }

  return counter;
}

module.exports = solve;