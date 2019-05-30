const game = require('../game') // this is the line to add

test ('test setup working', () => {
  expect (true).toBeTruthy()
})

test ('scores a gutterball frame', () => {

const frame = [0, 0]
const expected = 0
const actual = game.gutterFrame(frame)
expect(actual).toBe(expected)
})

test('scores a normal frame', () => {
  const frame = [2, 3]
  const expected = 5
  const actual = game.normalFrame(frame)
  expect(actual).toBe(expected)
})

test ('scores a single strike frame', () => {
})

test('scores a double strike frame', () => {
  const frame = [10, 0] 
  const nextFrame = [10, 0]
  const thirdFrame = [6, 0]
  const expected = 26
  const actual = game.doubleStrikeFrame(frame, nextFrame, thirdFrame)
  expect(actual).toBe(expected)
})




//module.exports = {

  //game: game,
  //scoreFrame: scoreFrame
//}

//function scoreFrame (frame){
//}