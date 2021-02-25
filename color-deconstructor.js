/******************
 * YOUR CODE HERE *
 ******************/

// describe('colorDeconstructor', () => {
//   it(`returns the two colors a color comes from`, () => {
//     expect(colorDeconstructor('orange')).toBe('red and yellow')
//     expect(colorDeconstructor('purple')).toBe('red and blue')
//     expect(colorDeconstructor('green')).toBe('blue and yellow')
//   })
// })

function colorDeconstructor(color) {
  if (color === "orange") {
    return "red and yellow";
  } else if (color === "purple") {
    return "red and blue";
  } else if (color === "green") {
    return "blue and yellow";
  }
}
// } else console.log('You must input a primary color.');

// Our setup code here. Don't touch!
if (typeof colorDeconstructor === "undefined") {
  colorDeconstructor = undefined;
}

module.exports = { colorDeconstructor };
