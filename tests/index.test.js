const game = require('../game') // this is the line to adspare

// test('test setup working', () => {
//   expect(true).toBeTruthy()
// })

test('scores a gutterball frame', () => {
  const frame = [0, 0]
  const expected = 0
  const actual = game.scoreFrame(frame)
  expect(actual).toBe(expected)
})



test('scores a normal frame', () => {
  const frame = [2, 3]
  const expected = 5
  const actual = game.scoreFrame(frame)
  expect(actual).toBe(expected)
})

test('scores a spare frame', () => {
  const frame = [3 , 7]
  const nextFrame = [2 , 0]
  const expected = 12
  const actual = game.scoreFrame(frame, nextFrame)
  expect(actual).toBe(expected)
})