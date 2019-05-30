const game = require('./game.js') 

test('test setup working', () => {
  expect(true).toBeTruthy()
})

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
  const frame = [7, 3]
  const frame2 = [1, 0]
  const expected = 11
  const actual = game.scoreSpare(frame, frame2)
  expect(actual).toBe(expected)
})

test('scores a single strike frame', () => {
  const frame = [10, 0]
  const frame2 = [1, 8]
  const expected = 19
  const actual = game.scoreStrike(frame, frame2)
  expect(actual).toBe(expected)
})

test('scores a double strike frame', () => {
  const frame = [10, 0]
  const frame2 = [10, 0]
  const frame3 = [1, 8]
  const expected = 21
  const actual = game.scoreDoubleStrike(frame, frame2, frame3)
  expect(actual).toBe(expected)
})

test('scores a terrible game', () => {
  const frames = [[0, 0],[0, 0],[0, 0],[0, 0],[0, 0],[0, 0],[0, 0],[0, 0],[0, 0],[0, 0],]
  const expected = 0
  const actual = game.scoreTerribleGame(frames)
  expect(actual).toBe(expected)
})

// test('scores a great game', () => {
//   const frames = [[10, 0],[10, 0],[10, 0],[10, 0],[10, 0],[10, 0],[10, 0],[10, 0],[10, 0],[10, 10, 10],]
//   const expected = 300
//   const actual = game.scoreGreatGame(frames)
//   expect(actual).toBe(expected)
// })

