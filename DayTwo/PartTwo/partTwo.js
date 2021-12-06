function solve(input) {
  let horizontalPos = 0;
  let depth = 0;
  let aim = 0;

  for (let i = 0; i < input.length; i++) {
    const [direction, amountStr] = input[i].split(" ");
    const amount = parseInt(amountStr);

    switch (direction) {
      case "forward":
        horizontalPos += amount;
        depth += amount * aim;
        break;
      case "down":
        aim += amount;
        break;
      case "up":
        aim -= amount;
        break;
      default:
        break;
    }
  }

  return horizontalPos * depth;
}

module.exports = solve;