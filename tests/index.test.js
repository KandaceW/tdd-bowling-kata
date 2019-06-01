const game = require('../game')

test('test setup working', () => {
  expect(true).toBeTruthy()
})

test('scores a gutterball frame', () => {
  const frame = [0,0]
  const expected = 0
  const actual = game.scoreFrame(frame)
  expect(actual).toBe(expected)
})

test('scores a normal fram', () => {
  const frame = [2, 3]
  const expected = 5
  const actual = game.scoreFrame(frame)
  expect(actual).toBe(expected)
})

test('scores a spare frame', () => {
  const frame = [1, 9]
  const nextFrame = [4, 2]
  const expected = 14
  const actual = game.scoreSpare(frame, nextFrame)
  expect(actual).toBe(expected)
})

test('scores a single strike frame', () => {
  const frame = [10, 0]
  const nextFrame = [4, 3]
  const expected = 17
  const actual = game.scoreStrike(frame, nextFrame)
  expect(actual).toBe(expected)
})

test('scores a double strike frame', () => {
  const frame = [10, 0]
  const nextFrame = [10, 0]
  const thirdFrame = [1, 3]
  const expected = 21
  const actual = game.scoreStrike(frame, nextFrame, thirdFrame)
  expect(actual).toBe(expected)
})

test('scores a game', () => {
  const frame = [[10, 0], [3, 4], [6, 3], [8, 1], [5, 4], [10, 0], [10, 0], [1, 6], [7, 2], [4, 1]]
  const expected = 110
  const actual = game.scoreGame(frame)
  expect(actual).toBe(expected)
})

test('scores a spare in the 10th frame', () => {
  const frame = [[10, 0], [3, 4], [6, 3], [8, 1], [5, 4], [10, 0], [10, 0], [1, 6], [7, 2], [6, 4, 5]]
  const expected = 15
  const actual = game.sumLastFrame(frame)
  expect(actual).toBe(expected)
})