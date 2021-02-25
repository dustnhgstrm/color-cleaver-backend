/******************
 * YOUR CODE HERE *
 ******************/

// describe('colorCombinator', () => {
//   it(`returns the combination of the two given colors`, () => {
//     expect(colorCombinator('red', 'yellow')).toBe('orange')
//     expect(colorCombinator('yellow', 'red')).toBe('orange')
//     expect(colorCombinator('red', 'blue')).toBe('purple')
//     expect(colorCombinator('blue', 'red')).toBe('purple')
//     expect(colorCombinator('yellow', 'blue')).toBe('green')
//     expect(colorCombinator('blue', 'yellow')).toBe('green')
//   })
// })

function colorCombinator(color1, color2) {
  if (
    (color1 === "red" && color2 === "yellow") ||
    (color1 === "yellow" && color2 === "red")
  ) {
    return "orange";
  } else if (
    (color1 === "red" && color2 === "blue") ||
    (color1 === "blue" && color2 === "red")
  ) {
    return "purple";
  } else if (
    (color1 === "yellow" && color2 === "blue") ||
    (color1 === "blue" && color2 === "yellow")
  ) {
    return "green";
  }
  // } else console.log('You must input two primary colors');
  // Our setup code here. Don't touch!
  if (typeof colorCombinator === "undefined") {
    colorCombinator = undefined;
  }
}

module.exports = { colorCombinator };
