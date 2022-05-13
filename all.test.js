// const maskify = require('./mine')
// const chai = require("chai")
// const assert = chai.assert;

// describe("maskify", function(){
//   it("should work for some examples", function(){
//     assert.strictEqual(maskify('4556364607935616'), '############5616');
//     assert.strictEqual(maskify('1'), '1');
//     assert.strictEqual(maskify('11111'), '#1111');
//   });
// });

const mine = require('./mine')
const fav = require('./favSolution')
const maskifys = [
  { devName: 'Pvag', maskify: mine },
  { devName: 'andorey', maskify: fav }
]
const chai = require("chai")
const assert = chai.assert;

describe("maskify", function(){
  maskifys.forEach(solution => {
    const devName = solution.devName
    const maskify = solution.maskify

    it(`should work for some examples with ${devName}'s solution`, function(){
      assert.strictEqual(maskify('4556364607935616'), '############5616');
      assert.strictEqual(maskify('1'), '1');
      assert.strictEqual(maskify('11111'), '#1111');
    });
  })
})