/******************
 * YOUR CODE HERE *
 ******************/

// describe('isValidPrimary', () => {
//   it('returns whether the given color is a valid primary color', () => {
//     const validPrimary1 = 'red';
//     const validPrimary2 = 'yellow';
//     const validPrimary3 = 'blue';
//     const invalidPrimary1 = 'orange';
//     const invalidPrimary2 = 'blorgon';
//     const invalidPrimary3 = 'ted';
//     expect(isValidPrimary(validPrimary1)).toBe(true);
//     expect(isValidPrimary(validPrimary2)).toBe(true);
//     expect(isValidPrimary(validPrimary3)).toBe(true);
//     expect(isValidPrimary(invalidPrimary1)).toBe(false);
//     expect(isValidPrimary(invalidPrimary2)).toBe(false);
//     expect(isValidPrimary(invalidPrimary3)).toBe(false);
//   })
// })

function isValidPrimary(color) {
  if (color === "red" || color === "yellow" || color === "blue") {
    return true;
  } else return false;
}

// Our setup code here. Don't touch!
if (typeof isValidPrimary === "undefined") {
  isValidPrimary = undefined;
}

module.exports = { isValidPrimary };
