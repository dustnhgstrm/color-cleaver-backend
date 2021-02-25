/******************
 * YOUR CODE HERE *
 ******************/

// describe('isValidSecondary', () => {
//   it('returns whether the given color is a valid primary color', () => {
//     const validSecondary1 = 'orange';
//     const validSecondary2 = 'purple';
//     const validSecondary3 = 'green';
//     const invalidSecondary1 = 'red';
//     const invalidSecondary2 = 'black';
//     const invalidSecondary3 = 'white';
//     expect(isValidSecondary(validSecondary1)).toBe(true);
//     expect(isValidSecondary(validSecondary2)).toBe(true);
//     expect(isValidSecondary(validSecondary3)).toBe(true);
//     expect(isValidSecondary(invalidSecondary1)).toBe(false);
//     expect(isValidSecondary(invalidSecondary2)).toBe(false);
//     expect(isValidSecondary(invalidSecondary3)).toBe(false);
//   })
// })

function isValidSecondary(color) {
  if (color === "green" || color === "purple" || color === "orange") {
    return true;
  } else return false;
}

// Our setup code here. Don't touch!
if (typeof isValidSecondary === "undefined") {
  isValidSecondary = undefined;
}

module.exports = { isValidSecondary };
