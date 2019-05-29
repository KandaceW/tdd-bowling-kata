const game = require('../game')

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
  const frame = [9, 1]
  const frameTwo = [2, 4]
  const expected = 12
  const actual = game.scoreSpare(frame, frameTwo)
  expect(actual).toBe(expected)
})

test('scores a single strike frame', () => {
  const frame = [10, 0]
  const frameTwo = [5, 3]
  const expected = 18
  const actual = game.scoreStrike(frame, frameTwo)
  expect(actual).toBe(expected)
})

test('scores a double strike frame', () => {
  const frameOne = [10, 0]
  const frameTwo = [10, 0]
  const frameThree = [3, 4]
  const expected = 23
  const actual = game.scoreDoubleStrike (frameOne, frameTwo, frameThree)
  expect(actual).toBe(expected)
})

test('scores a game', () => {
  let frames = [
    [3, 5],
    [3, 3],
    [4, 5],
    [9, 0],
    [1, 3],
    [3, 5],
    [7, 2],
    [4, 4],
    [0, 4],
    [3, 6],
  ]
  const expected = 74
  const actual = game.scoreGame(frames)
  expect(actual).toBe(expected)
})